import  express  from 'express'
import mongoose from 'mongoose'
import Route from './routes/route.js'
import cors from 'cors'
import bodyParser from 'body-parser'


const app = express()
const port = 5000

mongoose.connect('mongodb://127.0.0.1:27017/WatsApp').then(()=>{
    console.log("Db conncected")
}).catch(()=>{
    console.log("Mongo Error",)
})
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
app.use('/',Route)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})