import { EntityRepository, Repository } from 'typeorm';
import Unidade from '../entities/Unidade';
import Condominio from '../../../condominios/typeorm/entities/Condominio';

@EntityRepository(Unidade)
class UnidadesRepository extends Repository<Unidade> {
    public async findAllByCondominio(condominio: Condominio): Promise<Unidade[]> {
        const unidades = await this.find({
            where: {
                condominio,
            },
        });
    
        return unidades;
    }

    public async findById(id: number): Promise<Unidade | undefined> {
        const unidade = await this.findOne({
            where: {
                id,
            },
        });
    
        return unidade;
    }
}

export default UnidadesRepository;