/*2 - [0.5] Faça uma função Nodejs que receba como parâmetro na URL um número inteiro e apresente seu Fatorial.*/
const { response } = require('express');
let express = require('express');
const { get } = require('express/lib/response');
let app = express();


app.get('/fatorial',function(req,res){
    //res.send('rota 1');
    let param1 = req.query.n1;
    let fatorial = param1
    for(let i = 1; i < n1; i++)
        fatorial *= i;
   
    res.send(`fatorial do número é: ${fatorial}`);
    
});
app.listen(3000,function(){
    console.log('iniciado na porta 3000');
});


/*var fatorial = 5;
var resultado = fatorial;
for (var i = 1; i < fatorial; i++) {
    resultado *= i;
}
console.log(resultado);*/