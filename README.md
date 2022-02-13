# NestJS framework & KafkaJS
Base integration of KafkaJS in NestJS framework.

In order to run Kafka locally I will be using Kafdrop with Docker. Kafdrop is a web UI for viewing Kafka topics and browsing consumer groups. The tool displays information such as brokers, topics, partitions, consumers, and lets you view messages.

### Installing Docker and Kafdrop
- Install Docker [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)
- Navigate to Kafdrop project repository [https://github.com/obsidiandynamics/kafdrop](https://github.com/obsidiandynamics/kafdrop)
- Clone the project repository in your local machine: ```git clone git@github.com:obsidiandynamics/kafdrop.git```
- Once the repo has been downloaded, move to the folder: ```cd kafdrop/docker-compose/kafka-kafdrop```
- Runs docker copose: ```docker-compose up -d```
- If you want to debug or to see all related Kafka stuff, open in your prefered browser: http://localhost:9000/

### Configuring Kafka in NestJS
- Copy the example.env file in the root folder of the project and rename it like .env ```cp example.env .env```.
- Open .env file, uncomment KAFKA_BROKER_URL line and put the URL of your Kafka broker (if you are using base configuration of Kafdrop, **localhost:9092**)

### Start NestJS dev envirotment
```npm run start:dev```