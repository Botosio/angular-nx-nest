import { Entity, EntityRepository } from "@mikro-orm/core";
import { FeatureFlag } from "./feature-flag.entity";


//@Repository(AdminFeatureFlag) // ! this has been removed in v5 of mikro-orm
@Entity({ customRepository: () => FeatureFlag })
export class FeatureFlagRepository extends EntityRepository<FeatureFlag> {
  // your custom methods... anything that the EntityRepository wouldn't have


}