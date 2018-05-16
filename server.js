const grpc = require('grpc')

const proto = grpc.load(`${__dirname}/helloworld.proto`)
const server = new grpc.Server()
server.addService(proto.Greeter.service, {
  sayHello: (call, callback) => callback(null, {
    message: `Hello, ${call.request.name}`
  })
})
server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure())
server.start()
