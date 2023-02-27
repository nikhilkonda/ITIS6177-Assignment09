let express = require('express');
let app = express();
let port = 3000;

const axios= require('axios');
const cors = require('cors');
app.use(cors());

app.get('/say', (req,res) => {
    axios.get(`https://qgf5gf1fr1.execute-api.us-east-1.amazonaws.com/prod/myfucntion/?keyword=${req.query.keyword}`)
    .then(result => {
        res.status(200)
        res.send(result.data)
    })
    .catch(err => {
        res.status(400)
        res.send(err)
    })
})

app.listen(port, () => {
    console.log('Example app listening at http://localhost:'+ port);
});