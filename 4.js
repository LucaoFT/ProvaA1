/*4 - [0.5] Faça uma função Nodejs que receba como parâmetro na URL um número inteiro n e mostre todos os impares, de 1 até n.*/

const { response } = require('express');
let express = require('express');
const { get } = require('express/lib/response');
let app = express();


app.get('/impar',function(req,res){
    let param1 = req.query.n1;
    let impar;
    for(let i =0; i<= param1; i++){
        impar = param1 % 2 ==1;

    res.send(`${i}`);
    };
    
});
app.listen(3000,function(){
    console.log('iniciado na porta 3000');
});

