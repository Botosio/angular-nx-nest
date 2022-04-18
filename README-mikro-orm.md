# MIRKO ORM

## Install
We are using postgres
`npm i -s @mikro-orm/core @mikro-orm/postgresql  # for postgresql`


enable support for decorators

"experimentalDecorators": true,
"emitDecoratorMetadata": true,
"esModuleInterop": true,

For the nest app, need to import into the module. This code reflects using a service
Pay attention to the entitiesTS because we are using NX, all entities will live under Libs

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