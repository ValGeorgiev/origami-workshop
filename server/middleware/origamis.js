import fetch from 'node-fetch'

const getOrigamis = async (req, res, next) => {
  const promise = await fetch(`http://localhost:9999/api/origami`)
  const origamis = await promise.json()
  req.origamis = origamis
  
  next()
}

export default getOrigamis