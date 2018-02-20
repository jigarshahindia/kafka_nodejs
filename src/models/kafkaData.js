'use strict';

exports.kafka_data = function(topic, message) {
	var data = {
	   topic: topic,
	   messages: message,
	   partition: 0 // default 0
	}
	return [data]
}