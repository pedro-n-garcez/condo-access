import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
} from 'typeorm';
  
  @Entity('condominios')
  class Condominio {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;
  }
  
  export default Condominio;