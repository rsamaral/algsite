const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const fibonacci = require('./fibonacci');
const mdc = require('./mdc');
const contador = require('./contador');
const numPrimo = require('./numPrimo');
const somatorio = require('./somatorio');
const quicksort = require('./quicksort');
const firebase = require('firebase');

const PORT = process.env.PORT || 5000;

var app = express();


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, '/views'));

app.get('/', function(req, res) {
    res.render('index', {
        titulo: 'Site Algoritmos Fundamentais'
    });

});

app.get('/fibonacci', function(req, res) {
    
    res.render('fibonacci', {
        titulo: 'Fibonacci',
        resultado: ''
    });

});

app.post('/fibonacci', function(req, res) {
    var fib = req.body.quantFib;
    var resultado = fibonacci.fibonacci(fib);
    res.render('fibonacci', {
        titulo: 'Fibonacci',
        fib : fib,
        resultado: resultado
    })
});

app.get('/mdc', function(req, res) {
    res.render('mdc', {
        titulo: 'MDC',
        resultado: ''
    });

});

app.post('/mdc', function(req, res) {
    var num1 = req.body.num1;
    var num2 = req.body.num2;
    var resultado = mdc.mdc(num1, num2);
    res.render('mdc', {
        titulo: 'MDC',
        num1: num1,
        num2: num2,
        resultado: resultado
    })
});

app.get('/contador', function(req, res) {
    res.render('contador', {
        titulo: 'Contador',
        resultado: ''
    });
    
});
    
app.post('/contador', function(req, res) {
    var num = req.body.num;
    var resultado = contador.contador(num);
    res.render('contador', {
        titulo: 'Contador',
        num: num,
        resultado: resultado
    })    
});

app.get('/numPrimo', function(req, res) {
    res.render('numPrimo', {
        titulo: 'Números Primos',
        resultado: ''
    });
    
});
    
app.post('/numPrimo', function(req, res) {
    var numP = req.body.numP;
    var resultado = numPrimo.numPrimo(numP);
    res.render('numPrimo', {
        titulo: 'Números Primos',
        resultado: resultado
    })    
});

app.get('/somatorio', function(req, res) {
    res.render('somatorio', {
        titulo: 'Somatório',
        resultado: ''
    });
    
});
    
app.post('/somatorio', function(req, res) {
    var numSoma = req.body.numSoma;
    resultado = somatorio.somatorio(numSoma);

    res.render('somatorio', {
        titulo: 'Somatório',
        numSoma: numSoma,
        resultado: resultado
    })  
});


app.get('/quicksort', function(req, res) {
    res.render('quicksort', {
        titulo: 'Quicksort',
        resultado: ''
    });
    
});
    
app.post('/quicksort', function(req, res) {
    let numArray = req.body.numArray;
    var arraydividido = numArray.split(',').map(Number)
    resultado = quicksort.quickSort(arraydividido)
    
    
    res.render('quicksort',{      
        titulo: 'Quicksort',
        numArray: numArray,
        resultado: resultado
    })    
});


app.listen(PORT, function(){
    console.log("Express server is running on port " + PORT)
})