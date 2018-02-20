var args = process.argv.slice(2);

if(args.length != 1) {
   console.log("Need topic name as argument ")
   process.exit(1)
}

var topicName = args[0]

var kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.Client(),
    consumer = new Consumer(
        client,
        [
            { topic: topicName}
        ],
        {
            groupId: 'healofy-group',
            autoCommit: true
        }
    );

consumer.on('message', function (message) {
    console.log(message);
});
