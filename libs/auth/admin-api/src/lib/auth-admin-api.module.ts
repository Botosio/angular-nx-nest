import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AuthAdminApiController } from './auth-admin-api.controller';
import { AuthAdminApiService } from './auth-admin-api.service';
import { AdminFeatureFlag } from './auth-admin.entity';

@Module({
  imports: [MikroOrmModule.forFeature([AdminFeatureFlag])],
  controllers: [AuthAdminApiController],
  providers: [AuthAdminApiService],
  exports: [AuthAdminApiService],
})
export class AuthAdminApiModule {}
