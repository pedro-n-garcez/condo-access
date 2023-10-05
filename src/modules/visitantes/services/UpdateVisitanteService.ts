import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Visitante from '../typeorm/entities/Visitante';
import VisitanteRepository from '../typeorm/repositories/VisitantesRepository';

interface IRequest {
  id: string;
  nome_completo: string;
  rg: string;
}

class UpdateVisitanteService {
  public async execute({ id, nome_completo, rg }: IRequest): Promise<Visitante> {
    const visitantesRepository = getCustomRepository(VisitanteRepository);

    const visitante = await visitantesRepository.findOne(id);
    if(!visitante){
      throw new AppError('Visitante nao encontrado');
    }

    let cleanRg: string = rg;
    if(rg.includes('-') || rg.includes('.')){
        cleanRg = rg.replace(/[.-]/g, '');
    }

    const visitanteExists = await visitantesRepository.findByRg(cleanRg);

    if (visitanteExists && cleanRg != visitante.rg) {
      throw new AppError('Ja existe um visitante com o RG fornecido');
    }

    visitante.nome_completo = nome_completo;
    visitante.rg = cleanRg;

    await visitantesRepository.save(visitante);

    return visitante;
  }
}

export default UpdateVisitanteService;