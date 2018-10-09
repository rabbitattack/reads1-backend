const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000
const bodyParser = require("body-parser")

app.listen(port, () => {
    console.log(`listeneing on port ${port}`)
}
)
app.use(bodyParser.json())
app.use(cors())
app.get('/', (req, res, next) => {

})


