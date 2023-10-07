import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import VisitanteRepository from '../../visitantes/typeorm/repositories/VisitantesRepository';
import Acesso from '../typeorm/entities/Acesso';
import AcessosRepository from '../typeorm/repositories/AcessosRepository';
import UnidadesRepository from '../../unidades/typeorm/repositories/UnidadesRepository';
import CondominiosRepository from '../../condominios/typeorm/repositories/CondominiosRepository';
import cleanRg from '@shared/utils/CleanRg';

interface IRequest {
  rg: string;
  unidade_id: number;
  condominio_id: number;
}

class CreateAcessoService {
  public async execute({ rg, unidade_id, condominio_id }: IRequest): Promise<Acesso> {
    const acessosRepository = getCustomRepository(AcessosRepository);
    const condominiosRepository = getCustomRepository(CondominiosRepository);
    const unidadesRepository = getCustomRepository(UnidadesRepository);
    const visitantesRepository = getCustomRepository(VisitanteRepository);

    let newRg: string = cleanRg(rg);

    const condominio = await condominiosRepository.findById(condominio_id);
    if(!condominio){
        throw new AppError('Este condominio nao existe')
    }

    const unidadesInCondominio = await unidadesRepository.findAllByCondominio(condominio);
    const unidadesInCondominioIds = await unidadesInCondominio.map(unidade => unidade.id);
    if (!unidadesInCondominioIds.includes(unidade_id)){
        throw new AppError('Esta unidade nao existe neste condominio');
    }

    const unidade = await unidadesRepository.findById(unidade_id);

    const visitante = await visitantesRepository.findByRg(newRg);
    if (!visitante) {
      throw new AppError('Este visitante ainda nao esta cadastrado');
    }

    const acesso = acessosRepository.create({
        visitante,
        condominio,
        unidade,
    });

    await acessosRepository.save(acesso);

    return acesso;
  }
}

export default CreateAcessoService;