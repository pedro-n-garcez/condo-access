import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    ManyToOne,
    JoinColumn,
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
  }
  
  export default Unidade;