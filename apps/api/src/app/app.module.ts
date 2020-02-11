import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { iwiApiModule } from '@ivrenditech/iwi-api';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    iwiApiModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
