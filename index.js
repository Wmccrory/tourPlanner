//root file from which all life is given

//dependencies//
const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send({Hello: 'there'});
})

app.listen(5000);