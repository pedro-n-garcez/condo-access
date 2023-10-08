import { Request, Response } from 'express';
import VisitantesController from './VisitantesController';
import ListVisitanteService from '../services/ListVisitanteService';
import ShowVisitanteService from '../services/ShowVisitanteService';
import CreateVisitanteService from '../services/CreateVisitanteService';
import UpdateVisitanteService from '../services/UpdateVisitanteService';
import DeleteVisitanteService from '../services/DeleteVisitanteService';

jest.mock('../services/ListVisitanteService');
jest.mock('../services/ShowVisitanteService');
jest.mock('../services/CreateVisitanteService');
jest.mock('../services/UpdateVisitanteService');
jest.mock('../services/DeleteVisitanteService');

describe('VisitantesController', () => {
  let visitantesController: VisitantesController;
  let mockReq: Partial<Request>;
  let mockRes: Partial<Response>;
  let mockJson: jest.Mock;

  beforeEach(() => {
    visitantesController = new VisitantesController();
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
    it('should return a json response with visitantes', async () => {
      const mockVisitantes = [{ 
		id: "4b084ce6-a1c0-46fb-b233-f3621caee577",
		nome_completo: "Joao da Silva",
		rg: "112223334",
		created_at: "2023-10-07T15:39:29.849Z",
		updated_at: "2023-10-07T15:39:29.849Z"
      }];
      (ListVisitanteService.prototype.execute as jest.Mock).mockResolvedValueOnce(mockVisitantes);

      await visitantesController.index(mockReq as Request, mockRes as Response);

      expect(mockJson).toHaveBeenCalledWith(mockVisitantes);
    });
  });

  describe('show', () => {
    it('should return a json response with visitante', async () => {
      const mockVisitante = {
        id: "4b084ce6-a1c0-46fb-b233-f3621caee577", 
		nome_completo: "Joao da Silva",
		rg: "112223334",
		created_at: "2023-10-07T15:39:29.849Z",
		updated_at: "2023-10-07T15:39:29.849Z"
      };
      const mockParams = { id: '4b084ce6-a1c0-46fb-b233-f3621caee577' };
      (ShowVisitanteService.prototype.execute as jest.Mock).mockResolvedValueOnce(mockVisitante);
      mockReq.params = mockParams;

      await visitantesController.show(mockReq as Request, mockRes as Response);

      expect(mockJson).toHaveBeenCalledWith(mockVisitante);
    });
  });

  describe('create', () => {
    it('should return a json response with created visitante', async () => {
      const mockVisitante = { 
		nome_completo: "Joao da Silva",
		rg: "112223334",
        id: "4b084ce6-a1c0-46fb-b233-f3621caee577",
		created_at: "2023-10-07T15:39:29.849Z",
		updated_at: "2023-10-07T15:39:29.849Z"
      };
      const mockBody = { nome_completo: 'Joao da Silva', rg: '112223334' };
      (CreateVisitanteService.prototype.execute as jest.Mock).mockResolvedValueOnce(mockVisitante);
      mockReq.body = mockBody;

      await visitantesController.create(mockReq as Request, mockRes as Response);

      expect(mockJson).toHaveBeenCalledWith(mockVisitante);
    });
  });

  describe('update', () => {
    it('should return a json response with updated visitante', async () => {
      const mockVisitante = { 
		nome_completo: "Jose da Silva",
		rg: "112223334",
        id: "4b084ce6-a1c0-46fb-b233-f3621caee577",
		created_at: "2023-10-07T15:39:29.849Z",
		updated_at: "2023-10-07T15:39:29.849Z"
      };
      const mockParams = { id: '4b084ce6-a1c0-46fb-b233-f3621caee577' };
      const mockBody = { nome_completo: 'Jose da Silva', rg: '112223334' };
      (UpdateVisitanteService.prototype.execute as jest.Mock).mockResolvedValueOnce(mockVisitante);
      mockReq.params = mockParams;
      mockReq.body = mockBody;

      await visitantesController.update(mockReq as Request, mockRes as Response);

      expect(mockJson).toHaveBeenCalledWith(mockVisitante);
    });
  });

  describe('delete', () => {
    it('should return a json response with an empty array when a visitante is deleted', async () => {
      const mockParams = { id: '4b084ce6-a1c0-46fb-b233-f3621caee577' };
      (DeleteVisitanteService.prototype.execute as jest.Mock).mockResolvedValueOnce(undefined);
      mockReq.params = mockParams;

      await visitantesController.delete(mockReq as Request, mockRes as Response);

      expect(mockJson).toHaveBeenCalledWith([]);
    });
  });
});