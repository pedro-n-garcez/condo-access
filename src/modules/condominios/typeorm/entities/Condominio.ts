import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn 
} from 'typeorm';
  
  @Entity('condominios')
  class Condominio {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
  }
  
  export default Condominio;