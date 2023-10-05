import { Request, Response } from "express";
import ListVisitanteService from "../services/ListVisitanteService";
import ShowVisitanteService from "../services/ShowVisitanteService";
import CreateVisitanteService from "../services/CreateVisitanteService";
import UpdateVisitanteService from "../services/UpdateVisitanteService";
import DeleteVisitanteService from "../services/DeleteVisitanteService";

class VisitantesController {
    public async index(req: Request, res: Response): Promise<Response> {
        const listaVisitantes = new ListVisitanteService();
        const visitantes = await listaVisitantes.execute();

        return res.json(visitantes);
    }

    public async show(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const showVisitante = new ShowVisitanteService();
        const visitante = await showVisitante.execute({ id });

        return res.json(visitante);
    }

    public async create(req: Request, res: Response): Promise<Response> {
        const { nome_completo, rg } = req.body;
        const createVisitante = new CreateVisitanteService();
        const visitante = await createVisitante.execute({ nome_completo, rg });

        return res.json(visitante);
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { nome_completo, rg } = req.body;
        
        const updateVisitante = new UpdateVisitanteService();
        const visitante = await updateVisitante.execute({ 
            id, 
            nome_completo, 
            rg 
        });

        return res.json(visitante);
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const deleteVisitante = new DeleteVisitanteService();
        await deleteVisitante.execute({ id });

        return res.json([]);
    }
}

export default VisitantesController;