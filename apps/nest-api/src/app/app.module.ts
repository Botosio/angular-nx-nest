import { ApiTodoModule } from '@api/todo';
import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ApiTodoModule,
    MikroOrmModule.forRoot({
      entities: ['dist/**/*.entity.{ts,js}'],
      entitiesTs: ['src/**/*.entity.{ts,js}'],
      dbName: 'todos-db',
      type: 'postgresql',
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
