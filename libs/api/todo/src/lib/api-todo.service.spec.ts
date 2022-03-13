import { Test } from '@nestjs/testing';
import { ApiTodoService } from './api-todo.service';

describe('ApiTodoService', () => {
  let service: ApiTodoService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiTodoService],
    }).compile();

    service = module.get(ApiTodoService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
