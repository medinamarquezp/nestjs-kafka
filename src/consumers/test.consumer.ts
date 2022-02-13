import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConsumerService } from 'src/kafka/services/consumer.service';

@Injectable()
export class TestConsumer implements OnModuleInit {
  private readonly logger = new Logger(TestConsumer.name);

  constructor(private readonly consumerService: ConsumerService) {}

  async onModuleInit() {
    this.consumerService.comsume(
      {
        topic: 'test',
      },
      {
        eachMessage: async ({ topic, partition, message }) => {
          this.logger.debug({
            topic: topic.toString(),
            partition: partition.toString(),
            message: message.value.toString(),
          });
        },
      },
    );
  }
}
