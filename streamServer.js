const grpc = require('grpc')

const proto = grpc.load(`${__dirname}/hellostream.proto`)
const server = new grpc.Server()
server.addService(proto.MultiGreeter.service, {
  sayHello: stream => {
    for (let i = 0; i < stream.request.num; i++) {
      stream.write({
        message: 'hello'
      })
    }
    stream.end()
  }
})
server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure())
server.start()
