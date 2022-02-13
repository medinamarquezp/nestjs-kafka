import { Injectable } from '@nestjs/common';
import { ProducerService } from './kafka/services/producer.service';

@Injectable()
export class AppService {
  constructor(private readonly producerService: ProducerService) {}

  async produceTestMessage(): Promise<void> {
    await this.producerService.produce({
      topic: 'test',
      messages: [
        {
          value: 'Test message',
        },
      ],
    });
  }
}
