'use strict';

var kafkaData = require('../models/kafkaData')

var kafka = require('kafka-node'),
    Producer = kafka.Producer,
    client = new kafka.Client("localhost:2181"),
    producer = new Producer(client);

/*
   It will be exposed in index.js which will be hook applied to /postMessage URI
*/

function sendMessageToKafka(topic , message, callback) {
	var data = kafkaData.kafka_data(topic, message)
	producer.send(data, callback)
}
exports.post_message = function(req, res) {
  var body = req.body
  if(body.topic && body.message ){
  	  sendMessageToKafka(body.topic, body.message, function(err, result) {
  	  	if(!err) {
  	  	     res.json({"success": "ok", "message": "ok"})	 	
  	  	}
  	  	else {
  	  	 	res.json({"success": "ok", "message": err})
  	  	}
  	  })
  }
  else
  {
  	   res.json({"success": "ok", "message": "topic/message missing"})
  }
};
