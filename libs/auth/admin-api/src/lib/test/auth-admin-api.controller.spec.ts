import { Test } from '@nestjs/testing';
import { AuthAdminApiController } from '../auth-admin-api.controller';
import { AuthAdminApiService } from '../auth-admin-api.service';

describe('AuthAdminApiController', () => {
  let controller: AuthAdminApiController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [AuthAdminApiService],
      controllers: [AuthAdminApiController],
    }).compile();

    controller = module.get(AuthAdminApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
