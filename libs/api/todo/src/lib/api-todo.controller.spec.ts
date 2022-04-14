import { Test } from '@nestjs/testing';
import { ApiTodoController } from './api-todo.controller';
import { ApiTodoService } from './api-todo.service';

describe('ApiTodoController', () => {
  let controller: ApiTodoController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiTodoService],
      controllers: [ApiTodoController],
    }).compile();

    controller = module.get(ApiTodoController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
