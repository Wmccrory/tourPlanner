//root file from which all life is given

//dependencies//
const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send({Hello: 'there'});
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Now listening on port ${PORT}`);
});