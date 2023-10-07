import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Acesso from '../typeorm/entities/Acesso';
import AcessosRepository from '../typeorm/repositories/AcessosRepository';

interface IRequest {
  id: string;
}

class RegistrarSaidaService {
  public async execute({ id }: IRequest): Promise<Acesso> {
    const acessosRepository = getCustomRepository(AcessosRepository);

    const acesso = await acessosRepository.findById(id);
    if (!acesso) {
      throw new AppError('Este acesso nao existe');
    }

    acesso.ja_saiu = true;

    await acessosRepository.save(acesso);

    return acesso;
  }
}

export default RegistrarSaidaService;