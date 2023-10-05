import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Visitante from '../typeorm/entities/Visitante';
import VisitanteRepository from '../typeorm/repositories/VisitantesRepository';

class ListVisitanteService {
  public async execute(): Promise<Visitante[]> {
    const visitantesRepository = getCustomRepository(VisitanteRepository);

    const visitantes = visitantesRepository.find();

    return visitantes;
  }
}

export default ListVisitanteService;