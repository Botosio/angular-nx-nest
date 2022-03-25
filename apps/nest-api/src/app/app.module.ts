import { ApiTodoModule } from '@api/todo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import config from '../config/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [config] }),
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
    ApiTodoModule
  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule { }
