var express = require('express');
var path = require('path')
var bodyParser = require('body-parser');
var fibonacci = require('./fibonacci');
var mdc = require('./mdc');
var contador = require('./contador');
var numPrimo = require('./numPrimo');
var somatorio = require('./somatorio');

var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', function(req, res) {
    res.render('index', {
        titulo: 'Site Algoritmos Fundamentais'
    });

});

app.get('/fibonacci', function(req, res) {
    res.render('fibonacci', {
        titulo: 'Fibonacci'
    });

});

app.post('/fibonacci', function(req, res) {
    var fib = req.body.quantFib;
    var resultado = fibonacci.fibonacci(fib);
    res.render('resultado-fib', {
        titulo: 'Resultado',
        fib : fib,
        resultado: resultado
    })
});

app.get('/mdc', function(req, res) {
    res.render('mdc', {
        titulo: 'MDC'
    });

});

app.post('/mdc', function(req, res) {
    var num1 = req.body.num1;
    var num2 = req.body.num2;
    var resultado = mdc.mdc(num1, num2);
    res.render('resultado-mdc', {
        titulo: 'Resultado',
        num1: num1,
        num2: num2,
        resultado: resultado
    })
});

app.get('/contador', function(req, res) {
    res.render('contador', {
        titulo: 'Contador'
    });
    
});
    
app.post('/contador', function(req, res) {
    var num = req.body.num;
    var resultado = contador.contador(num);
    res.render('resultado-contador', {
        titulo: 'Resultado',
        num: num,
        resultado: resultado
    })    
});

app.get('/numPrimo', function(req, res) {
    res.render('numPrimo', {
        titulo: 'Números Primos'
    });
    
});
    
app.post('/numPrimo', function(req, res) {
    var numP = req.body.numP;
    var resultado = numPrimo.numPrimo(numP);
    res.render('resultado-numPrimo', {
        titulo: 'Resultado',
        resultado: resultado
    })    
});

app.get('/somatorio', function(req, res) {
    res.render('somatorio', {
        titulo: 'Somatório'
    });
    
});
    
app.post('/somatorio', function(req, res) {
    var numSoma = req.body.numSoma;
    var resultado = somatorio.somatorio(numSoma);
    res.render('resultado-somatorio', {
        titulo: 'Resultado',
        numSoma: numSoma,
        resultado: resultado
    })    
});

var port = 3000;
app.listen(port, function() {
    console.log(`App de Exemplo escutando na porta http://localhost:${port}`);
})