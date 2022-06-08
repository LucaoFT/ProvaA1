const { response } = require('express');
let express = require('express');
const { get } = require('express/lib/response');
let app = express();


app.get('/idade',function(req,res){
    //res.send('rota 1');
    let param1 = req.query.n1;
    let param2 = req.query.n2;
    let soma = parseInt(param2) + parseInt(param3);
    res.send(`Lucas tem : ${soma} anos`);
    
});
app.listen(3000,function(){
    console.log('iniciado na porta 3000');
});