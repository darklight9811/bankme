// Packages
import { Module } from '@nestjs/common';

// Current
import { AppService } from './app/app.service';
import { AppController } from './app/app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}