import fetch from 'node-fetch'

const verifyAuth = (req, res, next) => {
  const token = req.cookies['x-auth-token'] || ''

  fetch('http://localhost:9999/api/user/verify', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  }).then(promise => {
    return promise.json()
  }).then(response => {
    req.user = response.user
    next()
  }).catch(err => {
    console.log(err)
    next()
  })
}

export default verifyAuth