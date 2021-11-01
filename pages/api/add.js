// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getData } from '../../lib/sheet'



export default function add(req, res) {
  /* add new Row data */ 
  const newRow = [
    req.body.name, 
    req.body.link, 
    req.body.category, 
]
  getData(newRow)
  res.statusCode = 200
  res.json({ 
    code: 200,
  })
}