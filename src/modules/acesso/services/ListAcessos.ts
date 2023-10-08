import { getCustomRepository } from 'typeorm';
import Acesso from '../typeorm/entities/Acesso';
import AcessoRepository from '../typeorm/repositories/AcessosRepository';

class ListAcessosService {
  public async execute(): Promise<Acesso[]> {
    const acessosRepository = getCustomRepository(AcessoRepository);

    const acessos = await acessosRepository
      .createQueryBuilder("acessos")
      .leftJoinAndSelect("acessos.visitante","visitantes")
      .leftJoinAndSelect("acessos.condominio","condominios")
      .leftJoinAndSelect("acessos.unidade","unidades")
      .getMany();

    return acessos;
  }
}

export default ListAcessosService;