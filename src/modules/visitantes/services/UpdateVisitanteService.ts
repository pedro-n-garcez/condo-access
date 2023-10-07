import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Visitante from '../typeorm/entities/Visitante';
import VisitanteRepository from '../typeorm/repositories/VisitantesRepository';
import cleanRg from '@shared/utils/CleanRg';

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

    let newRg: string = cleanRg(rg);

    const visitanteExists = await visitantesRepository.findByRg(newRg);

    if (visitanteExists && newRg != visitante.rg) {
      throw new AppError('Ja existe um visitante com o RG fornecido');
    }

    visitante.nome_completo = nome_completo;
    visitante.rg = newRg;

    await visitantesRepository.save(visitante);

    return visitante;
  }
}

export default UpdateVisitanteService;