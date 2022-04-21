import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { FeatureFlagApiController } from './feature-flag.controller';
import { FeatureFlagApiService } from './feature-flag.service';
import { FeatureFlag } from './feature-flag.entity';

@Module({
  imports: [MikroOrmModule.forFeature([FeatureFlag])],
  controllers: [FeatureFlagApiController],
  providers: [FeatureFlagApiService],
  exports: [FeatureFlagApiService],
})
export class AuthAdminApiModule {}
