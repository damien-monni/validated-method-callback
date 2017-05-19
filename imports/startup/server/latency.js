// Simulate latency
// http://stackoverflow.com/a/32465293
(function () {
  // Set the delay you want
  const timeout = 3000
  // stream_server abstracts sockJS the DDP-Server talks to it.
  const streamServer = Meteor.server.stream_server
  // The connect event listener
  const standardConnect = streamServer.server._events.connection

  // Overwrite the default event-handler
  streamServer.server._events.connection = function (socket) {
    // Overwrite the writes to the socket
    const write = socket.write
    socket.write = function () {
      var self = this
      var args = arguments
      // Add a delay
      setTimeout(function () {
        // Call the normal write methods with the arguments passed to this call
        write.apply(self, args)
      }, timeout)
    }
    // Call the normal handler after overwritting the socket.write function
    standardConnect.apply(this, arguments)
  }
})()
