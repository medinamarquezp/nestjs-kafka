import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaModule } from './kafka/kafka.module';

@Module({
  imports: [ConfigModule.forRoot(), KafkaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
