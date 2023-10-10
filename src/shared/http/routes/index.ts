import visitantesRouter from '@modules/visitantes/routes/VisitantesRouter';
import acessosRouter from '@modules/acesso/routes/AcessosRouter';
import swaggerUi from 'swagger-ui-express';
import docs from '../../docs/swagger.json';

import { Router } from 'express';

const routes = Router();

routes.use('/visitantes', visitantesRouter);
routes.use('/acessos', acessosRouter);
routes.use('/docs', swaggerUi.serve, swaggerUi.setup(docs));

export default routes;