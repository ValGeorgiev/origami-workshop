const authenticate = async (url, body, onSuccess, onFailure) => {
  try {
    const promise = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const authToken = promise.headers.get('Authorization')
    document.cookie = `x-auth-token=${authToken}`

    const response = await promise.json()

    if (response.username && authToken) {
      onSuccess({
        username: response.username,
        id: response._id
      })
    } else {
      onFailure()
    }
  } catch(e) {
    onFailure(e)
  }
}


export default authenticate