import dotenv from 'dotenv'
import express from 'express'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const app = express()
const port = process.env.PORT || 3000

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.get('/', (req, res) => {
	const indexPath = join(__dirname, '../src/index.html')

	res.sendFile(indexPath)
})

app.use(express.static('src'))

app.get('/api/baseUrl', (req, res) => {
	res.send(process.env.BASE_URL)
})

app.get('/uploads/:filename', (req, res) => {
	const filename = req.params.filename
	const filePath = join(__dirname, 'uploads', filename)

	res.sendFile(filePath)
})

app.listen(port, () => {
	console.log(`Server is running and start ${port} port`)
})
