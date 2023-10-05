import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import VisitanteRepository from '../typeorm/repositories/VisitantesRepository';

interface IRequest {
    id: string;
}

class DeleteVisitanteService {
  public async execute({ id }: IRequest): Promise<void> {
    const visitantesRepository = getCustomRepository(VisitanteRepository);

    const visitante = await visitantesRepository.findOne(id);

    if (!visitante) {
      throw new AppError('Visitante nao encontrado');
    }

    await visitantesRepository.remove(visitante);
  }
}

export default DeleteVisitanteService;