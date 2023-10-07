import { EntityRepository, Repository } from 'typeorm';
import Condominio from '../entities/Condominio';

@EntityRepository(Condominio)
class CondominiosRepository extends Repository<Condominio> {
    public async findById(id: number): Promise<Condominio | undefined> {
        const condominio = await this.findOne({
            where: {
                id,
            },
        });
    
        return condominio;
    }
}

export default CondominiosRepository;