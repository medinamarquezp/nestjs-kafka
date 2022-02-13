import {
  Injectable,
  OnApplicationShutdown,
  OnModuleInit,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Kafka, Producer, ProducerRecord } from 'kafkajs';

@Injectable()
export class ProducerService implements OnModuleInit, OnApplicationShutdown {
  constructor(private readonly configService: ConfigService) {}

  private readonly kafka = new Kafka({
    brokers: [this.configService.get<string>('KAFKA_BROKER_URL')],
  });

  private readonly producer: Producer = this.kafka.producer();

  async produce(record: ProducerRecord) {
    this.producer.send(record);
  }

  async onModuleInit() {
    await this.producer.connect();
  }

  async onApplicationShutdown() {
    await this.producer.disconnect();
  }
}
