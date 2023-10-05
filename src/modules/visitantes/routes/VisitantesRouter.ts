import { Router } from 'express';
import VisitantesController from '../controllers/VisitantesController';
import { celebrate, Joi, Segments } from 'celebrate';

const visitantesRouter = Router();
const visitantesController = new VisitantesController();

visitantesRouter.get('/', visitantesController.index);

visitantesRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            nome_completo: Joi.string().required(),
            rg: Joi.string().max(14).required(),
        }
    }),
    visitantesController.create
);

visitantesRouter.get(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        }
    }),
    visitantesController.show,
);

visitantesRouter.put(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        }
    }),
    celebrate({
        [Segments.BODY]: {
            nome_completo: Joi.string().required(),
            rg: Joi.string().max(14).required(),
        }
    }),
    visitantesController.update,
);

visitantesRouter.delete(
    '/:id', 
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        }
    }),
    visitantesController.delete,
);

export default visitantesRouter;