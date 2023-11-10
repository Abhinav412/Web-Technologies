var events = require('events');
var em = new events.EventEmitter();
em.on('Event',function(){
    console.log("Event Triggered");
});
em.emit('Event');