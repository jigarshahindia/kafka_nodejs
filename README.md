# kafka_nodejs

# This application is simple node js application for producer/consumer probleam

Steps to Install
1) git clone https://github.com/jigarshahindia/kafka_nodejs.git
2) Install Docker
3) docker run -p 2181:2181 -p 9092:9092 --env ADVERTISED_HOST=localhost --env ADVERTISED_PORT=9092 spotify/kafka

The above will run kafka/zookeeper on local machine

Producer
1) run npm install
2) node src/index.js
3) post the producer topic message using API
  Postman Collection link:- https://www.getpostman.com/collections/bb5e2382d174e6a66372
  
 Consumer:
 
1) run node src/consumer.js <TOPIC_NAME>

Authorization on API call is added.


For more details or query 
contact:- jigarshahindia@gmail.com
