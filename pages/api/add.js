// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { crud } from '../../lib/data'



export default function add(req, res) {
  /* add new Row data */ 
  const newRow = { 
    Name: req.body.name, 
    Link: req.body.link, 
    Category: req.body.category, 
  }
  result = crud('add',newRow)
  res.statusCode = 200
  res.json({ 
    code: 200,
    result:result,
  })
}