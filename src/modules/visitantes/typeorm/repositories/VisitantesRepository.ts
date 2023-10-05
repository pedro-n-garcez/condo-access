import { EntityRepository, Repository } from 'typeorm';
import Visitante from '../entities/Visitante';

@EntityRepository(Visitante)
class VisitantesRepository extends Repository<Visitante> {
    public async findById(id: string): Promise<Visitante | undefined> {
        const visitante = await this.findOne({
            where: {
                id,
            },
        });
    
        return visitante;
    }

    public async findByName(nome_completo: string): Promise<Visitante | undefined> {
        const visitante = await this.findOne({
            where: {
                nome_completo,
            },
        });

        return visitante;
    }

    public async findByRg(rg: string): Promise<Visitante | undefined> {
        const visitante = await this.findOne({
            where: {
                rg,
            },
        });

        return visitante;
    }
}

export default VisitantesRepository;