import { EntityRepository, Repository } from 'typeorm';
import Acesso from '../entities/Acesso';

@EntityRepository(Acesso)
class AcessosRepository extends Repository<Acesso> {
    public async findById(id: string): Promise<Acesso | undefined> {
        const acesso = await this.findOne({
            where: {
                id,
            },
        });
    
        return acesso;
    }
}

export default AcessosRepository;