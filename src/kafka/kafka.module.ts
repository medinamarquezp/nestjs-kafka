import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConsumerService } from './services/consumer.service';
import { ProducerService } from './services/producer.service';

@Module({
  providers: [ProducerService, ConsumerService],
  imports: [ConfigModule],
  exports: [ProducerService, ConsumerService],
})
export class KafkaModule {}
