const Hapi = require('hapi')
const Joi = require('joi')
const Qs = require('qs')

const server = Hapi.server({
  port: 3000,
  host: 'localhost',
  routes: { cors: true },
  query: {
    parser: query => Qs.parse(query),
  },
})

server.route({
  method: 'GET',
  path: '/server-query-setting',
  handler(request, h) {
    return request.query
  },
  options: {
    validate: {
      query: {
        status: Joi.array(),
      },
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
