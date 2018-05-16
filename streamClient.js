const grpc = require('grpc')

const proto = grpc.load(`${__dirname}/hellostream.proto`)
const client = new proto.MultiGreeter('0.0.0.0:50051', grpc.credentials.createInsecure())
const con = client.sayHello({
  name: 'World',
  num: 2
})
con.on('data', data => {
  console.log(data)
})
con.on('end', () => {
  console.log('end')
})
