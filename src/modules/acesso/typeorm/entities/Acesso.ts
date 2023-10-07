import { 
    Entity, 
    PrimaryGeneratedColumn, 
    CreateDateColumn,
    Column,
    ManyToOne,
    JoinColumn,
    UpdateDateColumn
} from 'typeorm';

import Condominio from '../../../../modules/condominios/typeorm/entities/Condominio';
import Unidade from '../../../../modules/unidades/typeorm/entities/Unidade';
import Visitante from '../../../../modules/visitantes/typeorm/entities/Visitante';
  
  @Entity('acessos')
  class Acesso {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @ManyToOne(() => Visitante)
    @JoinColumn({ name: 'visitante_id' })
    visitante: Visitante;

    @ManyToOne(() => Condominio)
    @JoinColumn({ name: 'condominio_id' })
    condominio: Condominio;

    @ManyToOne(() => Unidade)
    @JoinColumn({ name: 'unidade_id' })
    unidade: Unidade;

    @Column()
    ja_saiu: boolean;

    @CreateDateColumn()
    data_entrada: Date;

    @UpdateDateColumn({ type: 'timestamptz', nullable: true })
    data_saida: Date;
  }
  
  export default Acesso;