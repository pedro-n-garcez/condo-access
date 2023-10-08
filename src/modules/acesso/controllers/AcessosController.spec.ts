import { Request, Response } from "express";
import AcessosController from './AcessosController';
import CreateAcessoService from '../services/CreateAcesso';
import RegistrarSaidaService from '../services/RegisterSaida';
import ListAcessosService from '../services/ListAcessos';

jest.mock('../services/CreateAcesso');
jest.mock('../services/RegisterSaida');
jest.mock('../services/ListAcessos');

describe('AcessosController', () => {
  let acessosController: AcessosController;
  let mockReq: Partial<Request>;
  let mockRes: Partial<Response>;
  let mockJson: jest.Mock;

  beforeEach(() => {
    acessosController = new AcessosController();
    mockJson = jest.fn();
    mockReq = {};
    mockRes = {
      json: mockJson,
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('index', () => {
    it('should return a json response with acessos', async () => {
      const mockAcessos = [{ 
        id: "47cfd7e9-31c9-4eab-9a15-2381e459e9fc",
        ja_saiu: false,
        data_entrada: "2023-10-07T16:16:56.835Z",
        data_saida: "2023-10-07T16:29:44.353Z",
        visitante: {
            id: "247e8ff1-3ce8-4042-9a00-87203a062e20",
            nome_completo: "Jose da Silva",
            rg: "223334445",
            created_at: "2023-10-07T15:40:07.923Z",
            updated_at: "2023-10-07T15:40:07.923Z"
        },
        condominio: {
            id: 1,
            name: "condo"
        },
        unidade: {
            id: 1,
            name: "A1"
        }
      }];
      (ListAcessosService.prototype.execute as jest.Mock).mockResolvedValueOnce(mockAcessos);

      await acessosController.index(mockReq as Request, mockRes as Response);

      expect(mockJson).toHaveBeenCalledWith(mockAcessos);
    });
  });

  describe('create', () => {
    it('should return a json response with the created acesso', async () => {
      const mockBody = { rg: '223334445', unidade_id: '2', condominio_id: '1' };
      const mockAcesso = { 
        id: "47cfd7e9-31c9-4eab-9a15-2381e459e9fc",
        ja_saiu: false,
        data_entrada: "2023-10-07T16:16:56.835Z",
        data_saida: null,
        visitante: {
            id: "247e8ff1-3ce8-4042-9a00-87203a062e20",
            nome_completo: "Jose da Silva",
            rg: "223334445",
            created_at: "2023-10-07T15:40:07.923Z",
            updated_at: "2023-10-07T15:40:07.923Z"
        },
        condominio: {
            id: 1,
            name: "condo"
        },
        unidade: {
            id: 2,
            name: "A2"
        }
      };
      (CreateAcessoService.prototype.execute as jest.Mock).mockResolvedValueOnce(mockAcesso);
      mockReq.body = mockBody;

      await acessosController.create(mockReq as Request, mockRes as Response);

      expect(mockJson).toHaveBeenCalledWith(mockAcesso);
    });
  });

  describe('registrarSaida', () => {
    it('should return a json response with the registered saida acesso', async () => {
      const mockParams = { id: '47cfd7e9-31c9-4eab-9a15-2381e459e9fc' };
      const mockAcesso = { 
        id: "47cfd7e9-31c9-4eab-9a15-2381e459e9fc",
        ja_saiu: true,
        data_entrada: "2023-10-07T16:16:56.835Z",
        data_saida: "2023-10-07T16:29:44.353Z",
        visitante: {
            id: "247e8ff1-3ce8-4042-9a00-87203a062e20",
            nome_completo: "Jose da Silva",
            rg: "223334445",
            created_at: "2023-10-07T15:40:07.923Z",
            updated_at: "2023-10-07T15:40:07.923Z"
        },
        condominio: {
            id: 1,
            name: "condo"
        },
        unidade: {
            id: 2,
            name: "A2"
        }
      };
      (RegistrarSaidaService.prototype.execute as jest.Mock).mockResolvedValueOnce(mockAcesso);
      mockReq.params = mockParams;

      await acessosController.registrarSaida(mockReq as Request, mockRes as Response);

      expect(mockJson).toHaveBeenCalledWith(mockAcesso);
    });
  });
});