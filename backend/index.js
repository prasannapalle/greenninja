const express = require('express');
const app = express();
app.use(express.json());
// app.use(cors({ origin: 'http://127.0.0.1:8081'}));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin','http://52.53.156.138:8081' );
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});
//post Request Handler
app.post('/api', (req, res)=> {
 
    var name = req.body.name;
    console.log('name is '+name);
    const result = {
    status: "success",
    nameInBackend: name
    };
    res.status(200).send(result);
});
 
 
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening on port ${port}..`));