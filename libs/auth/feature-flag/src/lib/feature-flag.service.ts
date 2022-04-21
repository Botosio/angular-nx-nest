import { from, map, Observable, switchMap, tap } from 'rxjs';
import { Injectable } from '@nestjs/common';
import { CreateFeatureFlagDTO, UpdateFeatureFlagDTO } from './feature-flag.interface';
import { FeatureFlagRepository } from './feature-flag.repository';
import { FeatureFlag } from './feature-flag.entity';
import { wrap } from '@mikro-orm/core';

@Injectable()
export class FeatureFlagApiService {
  constructor(private readonly repo: FeatureFlagRepository) {}

  create(createAdminFeatureFlag: CreateFeatureFlagDTO): Observable<FeatureFlag> {
    const task = this.repo.create(createAdminFeatureFlag);
    return from(this.repo.persistAndFlush(task)).pipe(
			map(() => task)
		);
  }

  findAll(): Observable<FeatureFlag[]> {
		return from(this.repo.findAll());
	}

	findOne(id: string): Observable<FeatureFlag | null> {
		return from(this.repo.findOne({ id: id }));
	}

	update(id: string, updateTaskDto: UpdateFeatureFlagDTO): Observable<FeatureFlag | null> {
		let myAdminFeatureFlag:FeatureFlag | null = null;
		return this.findOne(id).pipe(
			tap(item => {
				wrap(item).assign(updateTaskDto);
				myAdminFeatureFlag = item;
			}),
			switchMap(() => from(this.repo.flush())),
			map(() => myAdminFeatureFlag)
		)
	}

	remove(id: string): Observable<void | number> {
		return from(this.repo.nativeDelete({ id: id }));
	}
}
