import { Controller } from '@nestjs/common';
import { ApiTodoService } from './api-todo.service';

@Controller('api-todo')
export class ApiTodoController {
  constructor(private apiTodoService: ApiTodoService) {}
}
