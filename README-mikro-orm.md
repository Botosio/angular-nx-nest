# MIRKO ORM

It comes with a great type-safety system and an auto-flush mode. MikroORM works on the principle of unit of work and identity map pattern. This allows MikroORM to optimize data-fetching and prevent unnecessary round trips to the database.

Some of the key features of MikroORM include implicit transactions, identity mapping, automatic refresh of loaded entities and so on. With MikroORM, you get a fully-featured ORM for almost all the major database options.
## Install
We are using postgres
`npm i -s @mikro-orm/core @mikro-orm/postgresql @mikro-orm/migrations @mikro-orm/nestjs  # for postgresql`


Looks at mikro-orm.config.ts for connections to DB


enable support for decorators

> "experimentalDecorators": true,
>
> "emitDecoratorMetadata": true,
>
> "esModuleInterop": true,

For the nest app, need to import into the module. This code reflects using a service
Pay attention to the entitiesTS because we are using NX, all entities will live under Libs

<code>
MikroOrmModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => ({
    entities: ['dist/**/*.entity.js'],
    entitiesTs: ['libs/**/*.entity.ts'],
    type: 'postgresql',
    host: configService.get('database.host'),
    port: configService.get('database.port'),
    dbName: configService.get('database.name'),
    user: configService.get('database.user'),
    password: configService.get('database.password')
  })
}),
</code>

******
## Building new lib for controllers/DB
example command:

`npx nx generate @nrwl/nest:library --name=admin-api --directory=auth --buildable --controller --importPath=@auth/admin-api --service --strict --tags='admin api' --no-interactive`

### Entities

Steps:
- Create your entity
- Create your repository with the same name of your entity
- Update/create your service with your repository `private readonly repo: EntityNameRepository`
  - You don't need to use `@InjectRepository`, this is more of the nestjs way of doing it
- Now go to your module and add `imports: [MikroOrmModule.forFeature([MyEntityName])]`
- Update your service to include create, findAll, findOne, update, remove
- Now go into your controller and add all the endpoints to point to your new service


### repositories

Design pattern here: https://mikro-orm.io/docs/repositories

#### Nestjs repositories
https://docs.nestjs.com/recipes/mikroorm#using-custom-repositories

You can bypass the @InjectRepository() if you create a repository file that mimics the entityName.
In other words, as long as we name the repository same was as the entity is called, appending Repository suffix, the repository will be registered automatically in the Nest DI container.

> Be Careful, in v5 of mikro-orm the @Repository() decorator has been removed in v5, use @Entity({ customRepository: () => MyRepository }) instead.


******
## Migrations
<p>Ok so we now have an entity with a controller and service but we now need to do code first DB</p>

> npx mikro-orm migration:create   # Create new migration with current schema diff
>
> npx mikro-orm migration:up       # Migrate up to the latest version
>
> npx mikro-orm migration:down     # Migrate one step down
>
> npx mikro-orm migration:list     # List all executed migrations
>
> npx mikro-orm migration:pending  # List all pending migrations
>
> npx mikro-orm migration:fresh    # Drop the database and migrate up to the latest version





# Future
Walkthrough with graphQL
https://www.youtube.com/watch?v=494UUYCja10