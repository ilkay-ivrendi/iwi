import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { iwiApiModule } from '@ivrenditech/iwi-api';

@Module({
  imports: [iwiApiModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
