import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthAdminApiService } from './auth-admin-api.service';
import { AdminFeatureFlag } from './auth-admin.entity';
import { CreateAdminFeatureFlagDTO, UpdateAdminFeatureFlagDTO } from './auth-admin.interface';

@Controller('feature-flag')
export class AuthAdminApiController {
  constructor(private authAdminApiService: AuthAdminApiService) {}

  @Post()
	create(@Body() createTaskDto: CreateAdminFeatureFlagDTO): Observable<AdminFeatureFlag> {
		return this.authAdminApiService.create(createTaskDto);
	}

	@Get()
	findAll(): Observable<AdminFeatureFlag[]> {
		return this.authAdminApiService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string): Observable<AdminFeatureFlag | null> {
		return this.authAdminApiService.findOne(id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateTaskDto: UpdateAdminFeatureFlagDTO): Observable<AdminFeatureFlag | null> {
		return this.authAdminApiService.update(id, updateTaskDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string): Observable<void | number> {
		return this.authAdminApiService.remove(id);
	}
}
