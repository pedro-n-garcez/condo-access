import visitantesRouter from '@modules/visitantes/routes/VisitantesRouter';
import { Router } from 'express';

const routes = Router();

routes.use('/visitantes', visitantesRouter);

export default routes;