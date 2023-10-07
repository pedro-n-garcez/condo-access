import { Router } from 'express';
import AcessosController from '../controllers/AcessosController';
import { celebrate, Joi, Segments } from 'celebrate';

const acessosRouter = Router();
const acessosController = new AcessosController();

acessosRouter.post(
    '/entrada',
    celebrate({
        [Segments.BODY]: {
            rg: Joi.string().max(14).required(),
            unidade_id: Joi.number().required(),
            condominio_id: Joi.number().required()
        }
    }),
    acessosController.create,
);

acessosRouter.patch(
    '/:id/saida',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        }
    }),
    acessosController.registrarSaida,
);

export default acessosRouter;