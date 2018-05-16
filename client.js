const grpc = require('grpc')

const proto = grpc.load(`${__dirname}/helloworld.proto`)
const client = new proto.Greeter('0.0.0.0:50051', grpc.credentials.createInsecure())
client.sayHello({
  name: 'World'
}, (err, res) => {
  console.log(err, res)
})
