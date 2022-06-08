/*7- [0.5] Faça uma função Nodejs que receba como parâmetro na URL um número inteiro n, calcule e mostre sua tabuada.*/
const { response } = require('express');
let express = require('express');
const { get } = require('express/lib/response');
let app = express();


app.get('/tabuada',function(req,res){
    let param1 = req.query.n1;
    for (let i=0; i<=10, i++){
       let tabuada = parseInt(param1) * parseInt(i);
        res.send(`${param1} x ${i} = ${tabuada}`)
    };

});
app.listen(3000,function(){
    console.log('iniciado na porta 3000');
});
