const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const postRouter = require('./routes/post')
const keys = require('./keys')

const port = process.env.PORT || 5000
const clientPath = path.join(__dirname, 'client')

mongoose.connect(keys.mongoURI)
	.then(() => console.log('MongoDB connected')) // In case connetion is OK
	.catch(err => console.error(err)) // In case something is wrong
	
const app = express()
app.use('/api/post', postRouter)
app.use(express.static(clientPath))

app.listen(port, () => {
	console.log(`Server has been started on port ${port}`)
})

