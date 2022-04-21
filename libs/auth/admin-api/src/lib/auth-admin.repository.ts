import { Entity, EntityRepository } from "@mikro-orm/core";
import { AdminFeatureFlag } from "./auth-admin.entity";


//@Repository(AdminFeatureFlag) // ! this has been removed in v5 of mikro-orm
@Entity({ customRepository: () => AdminFeatureFlag })
export class AdminFeatureFlagRepository extends EntityRepository<AdminFeatureFlag> {
  // your custom methods... anything that the EntityRepository wouldn't have


}