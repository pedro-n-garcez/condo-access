import 'reflect-metadata';
import 'express-async-errors';
import '@shared/typeorm';
import { errors } from 'celebrate';
import express, { NextFunction, Request, Response} from 'express';
import AppError from '@shared/errors/AppError';
import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes);
app.use(errors());

app.use(
    (
        error: Error, 
        req: Request, 
        res: Response, 
        next: NextFunction
    ) => {
        if(error instanceof AppError) {
            return res.status(error.statusCode).json({
                status: 'error',
                message: error.message,
            });
        }

        return res.status(500).json({
            status: 'error',
            message: 'Internal server errors',
        });
});

const port = 3000;

app.listen(3000, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});