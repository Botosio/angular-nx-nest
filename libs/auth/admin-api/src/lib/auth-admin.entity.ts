import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { randomUUID } from "crypto";

@Entity()
export class AdminFeatureFlag {

    @PrimaryKey({ columnType: 'uuid' })
    id: string = randomUUID();

    @Property()
    title: string;

    @Property() // Not sure if I need this one, { onCreate: () => new Date()}
    createdOn = new Date();

    @Property({ onUpdate: () => new Date()})
    updatedOn = new Date();

    @Property({ onCreate: () => false})
    active: boolean;

    constructor(title: string, active: boolean) {
        this.title = title;
        this.active = active;
    }
}