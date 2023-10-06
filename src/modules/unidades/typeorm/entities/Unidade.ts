import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    ManyToOne,
    JoinColumn,
    CreateDateColumn, 
    UpdateDateColumn 
} from 'typeorm';

import Condominio from '../../../../modules/condominios/typeorm/entities/Condominio';
  
  @Entity('unidades')
  class Unidade {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Condominio)
    @JoinColumn({ name: 'condominio_id' })
    condominio: Condominio;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
  }
  
  export default Unidade;