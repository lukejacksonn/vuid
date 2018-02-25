import vuid from 'https://unpkg.com/vuid'
const test = vuid()
test.match(
  /[a-f0-9]{8}-?[a-f0-9]{4}-?4[a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}/i
)
  ? true
  : false
