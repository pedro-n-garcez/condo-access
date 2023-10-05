import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Visitante from '../typeorm/entities/Visitante';
import VisitanteRepository from '../typeorm/repositories/VisitantesRepository';

interface IRequest {
  id: string;
}

class ShowVisitanteService {
  public async execute({ id }: IRequest): Promise<Visitante | undefined> {
    const visitantesRepository = getCustomRepository(VisitanteRepository);

    const visitante = visitantesRepository.findOne(id);

    if(!visitante){
      throw new AppError('Visitante nao encontrado');
    }

    return visitante;
  }
}

export default ShowVisitanteService;