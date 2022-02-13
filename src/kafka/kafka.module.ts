import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProducerService } from './services/producer.service';

@Module({
  providers: [ProducerService],
  imports: [ConfigModule],
  exports: [ProducerService],
})
export class KafkaModule {}
