import visitantesRouter from '@modules/visitantes/routes/VisitantesRouter';
import acessosRouter from '@modules/acesso/routes/AcessosRouter';
import { Router } from 'express';

const routes = Router();

routes.use('/visitantes', visitantesRouter);
routes.use('/acessos', acessosRouter);

export default routes;