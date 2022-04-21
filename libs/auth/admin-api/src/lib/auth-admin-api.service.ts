import { from, map, Observable, switchMap, tap } from 'rxjs';
import { Injectable } from '@nestjs/common';
import { CreateAdminFeatureFlagDTO, UpdateAdminFeatureFlagDTO } from './auth-admin.interface';
import { AdminFeatureFlagRepository } from './auth-admin.repository';
import { AdminFeatureFlag } from './auth-admin.entity';
import { wrap } from '@mikro-orm/core';

@Injectable()
export class AuthAdminApiService {
  constructor(private readonly repo: AdminFeatureFlagRepository) {}

  create(createAdminFeatureFlag: CreateAdminFeatureFlagDTO): Observable<AdminFeatureFlag> {
    const task = this.repo.create(createAdminFeatureFlag);
    return from(this.repo.persistAndFlush(task)).pipe(
			map(() => task)
		);
  }

  findAll(): Observable<AdminFeatureFlag[]> {
		return from(this.repo.findAll());
	}

	findOne(id: string): Observable<AdminFeatureFlag | null> {
		return from(this.repo.findOne({ id: id }));
	}

	update(id: string, updateTaskDto: UpdateAdminFeatureFlagDTO): Observable<AdminFeatureFlag | null> {
		let myAdminFeatureFlag:AdminFeatureFlag | null = null;
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
