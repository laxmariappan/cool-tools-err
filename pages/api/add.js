// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { addToolData } from '../../lib/data'



export default (req, res) => {
  /* add new Row data */ 
  const newRow = { 
    Name: req.body.name, 
    Link: req.body.link, 
    Category: req.body.category, 
  }
  addToolData(newRow)
  res.statusCode = 200
  res.json({ 
    code: 200,
    data: {
      message: 'Hello'
     }
  })
}