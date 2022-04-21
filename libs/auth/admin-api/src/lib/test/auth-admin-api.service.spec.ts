import { Test } from '@nestjs/testing';
import { AuthAdminApiService } from '../auth-admin-api.service';

describe('AuthAdminApiService', () => {
  let service: AuthAdminApiService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [AuthAdminApiService],
    }).compile();

    service = module.get(AuthAdminApiService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
