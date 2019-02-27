const Hapi = require('hapi')
const Joi = require('joi')

const server = Hapi.server({
  port: 3100,
  host: 'localhost',
  routes: { cors: true },
})

server.route({
  method: 'GET',
  path: '/server-joi-example',
  handler(request, h) {
    return request.query
  },
  options: {
    validate: {
      query: Joi.object({
        status: Joi.array()
          .single()
          .items(Joi.string()),
      }).rename('status[]', 'status', { ignoreUndefined: true }),
    },
  },
})

const init = async () => {
  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
}

process.on('unhandledRejection', err => {
  console.log(err)
  process.exit(1)
})

init()
