import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { FeatureFlagApiService } from './feature-flag.service';
import { FeatureFlag } from './feature-flag.entity';
import { CreateFeatureFlagDTO, UpdateFeatureFlagDTO } from './feature-flag.interface';

@Controller('feature-flag')
export class FeatureFlagApiController {
  constructor(private featureFlagApiService: FeatureFlagApiService) {}

  @Post()
	create(@Body() createTaskDto: CreateFeatureFlagDTO): Observable<FeatureFlag> {
		return this.featureFlagApiService.create(createTaskDto);
	}

	@Get()
	findAll(): Observable<FeatureFlag[]> {
		return this.featureFlagApiService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string): Observable<FeatureFlag | null> {
		return this.featureFlagApiService.findOne(id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateTaskDto: UpdateFeatureFlagDTO): Observable<FeatureFlag | null> {
		return this.featureFlagApiService.update(id, updateTaskDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string): Observable<void | number> {
		return this.featureFlagApiService.remove(id);
	}
}
