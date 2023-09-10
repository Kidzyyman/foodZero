import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import express from 'express'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import routes from './routes.js'

const app = express()
const port = process.env.PORT || 3000

dotenv.config()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.get('/', (req, res) => {
  const indexPath = join(__dirname, '../src/index.html')

  res.sendFile(indexPath)
})

app.use(express.static('src'))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/api/baseUrl', (req, res) => {
  res.send(process.env.BASE_URL)
})

app.get('/uploads/:filename', (req, res) => {
  const { filename } = req.params
  const filePath = join(__dirname, 'uploads', filename)

  res.sendFile(filePath)
})

app.use('/', routes)

app.listen(port, () => {
  console.log(`Server is running and start ${port} port`)
})
