import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Visitante from '../typeorm/entities/Visitante';
import VisitanteRepository from '../typeorm/repositories/VisitantesRepository';
import cleanRg from '@shared/utils/CleanRg';

interface IRequest {
  nome_completo: string;
  rg: string;
}

class CreateVisitanteService {
  public async execute({ nome_completo, rg }: IRequest): Promise<Visitante> {
    const visitantesRepository = getCustomRepository(VisitanteRepository);

    let newRg: string = cleanRg(rg);

    const visitanteExists = await visitantesRepository.findByRg(newRg);

    if (visitanteExists) {
      throw new AppError('Ja existe um visitante com o RG fornecido');
    }

    const visitante = visitantesRepository.create({ 
        nome_completo,
        rg: newRg
    });

    await visitantesRepository.save(visitante);

    return visitante;
  }
}

export default CreateVisitanteService;