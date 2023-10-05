import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Visitante from '../typeorm/entities/Visitante';
import VisitanteRepository from '../typeorm/repositories/VisitantesRepository';

interface IRequest {
  nome_completo: string;
  rg: string;
}

class CreateVisitanteService {
  public async execute({ nome_completo, rg }: IRequest): Promise<Visitante> {
    const visitantesRepository = getCustomRepository(VisitanteRepository);

    let cleanRg: string = rg;
    if(rg.includes('-') || rg.includes('.')){
        cleanRg = rg.replace(/[.-]/g, '');
    }

    const visitanteExists = await visitantesRepository.findByRg(cleanRg);

    if (visitanteExists) {
      throw new AppError('Ja existe um visitante com o RG fornecido');
    }

    const visitante = visitantesRepository.create({ 
        nome_completo,
        rg: cleanRg
    });

    await visitantesRepository.save(visitante);

    return visitante;
  }
}

export default CreateVisitanteService;