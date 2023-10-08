import { Request, Response } from "express";
import CreateAcessoService from "../services/CreateAcesso";
import RegistrarSaidaService from "../services/RegisterSaida";
import ListAcessosService from "../services/ListAcessos";

class AcessosController {
    public async index(req: Request, res: Response): Promise<Response> {
        const listAcessos = new ListAcessosService();
    
        const acessos = await listAcessos.execute();
    
        return res.json(acessos);
    }

    public async create(req: Request, res: Response): Promise<Response> {
        const { rg, unidade_id, condominio_id } = req.body;
        const createAcesso = new CreateAcessoService();
        const acesso = await createAcesso.execute({ rg, unidade_id, condominio_id });

        return res.json(acesso);
    }

    public async registrarSaida(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
    
        const registrarSaidaService = new RegistrarSaidaService();
        const acesso = await registrarSaidaService.execute({ id });
    
        return res.json(acesso);
    }
}

export default AcessosController;