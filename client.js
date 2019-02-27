;(async function() {
  const query = { params: { status: ['online', 'busy'] } }
  const [queryResponse, joiResponse] = await Promise.all([
    axios.get('http://localhost:3000/server-query-setting', query),
    axios.get('http://localhost:3100/server-joi-example', query),
  ])

  document.getElementById('query-setting-example').innerHTML = JSON.stringify(
    queryResponse.data,
  )
  document.getElementById('joi-example').innerHTML = JSON.stringify(
    joiResponse.data,
  )
})()
