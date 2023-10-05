import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn 
} from 'typeorm';
  
  @Entity('visitantes')
  class Visitante {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nome_completo: string;

    @Column()
    rg: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
  }
  
  export default Visitante;