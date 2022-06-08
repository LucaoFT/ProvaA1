/*6 - [1.5] Faça uma função Nodejs que receba como parâmetro na URL a hora(utilize um parânmetro para hora e outro para os minutos), calcule e mostre:
                  - A hora informada convertida em minutos;
                  - O total dos minutos, ou seja, os minutos digitados mais a conversão anterior;
                  - O total de minutos convertidos em segundos.*/

                  const { response } = require('express');
                  let express = require('express');
                  const { get } = require('express/lib/response');
                  let app = express();
                  
                  
                  app.get('/horas',function(req,res){
                      let param1 = req.query.n1;
                      let param2 = req.query.n2;
                      let minutos = parseInt(param1) * 60;
                      let totalDeMinutos = parseInt(param2) + parseInt(minutos);
                      let segundos = parseInt(totalDeMinutos) * 100;


                      res.send(`hora ${param1} : minutos ${param2}`);
                      res.send(`hora transformada em minutos ${minutos}`);
                      res.send(`total de minutos ${totalDeMinutos}`);
                      res.send(`total de minutos convertidos para segundos ${segundos}`);
                      
                  });
                  app.listen(3000,function(){
                      console.log('projeto iniciado na porta 3000');
                  });