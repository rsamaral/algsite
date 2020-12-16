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


//configuracao FIREBASE
var firebaseConfig = {
    apiKey: "AIzaSyB3zm7gA-4nCEESMy_gKjJSPdUJgBbmmOc",
    authDomain: "algsite.firebaseapp.com",
    projectId: "algsite",
    storageBucket: "algsite.appspot.com",
    messagingSenderId: "425539378597",
    appId: "1:425539378597:web:66a6e2b7de37607d1b9c4c",
    measurementId: "G-09SSR67KL9"
};

firebase.initializeApp(firebaseConfig);

app.get('/', function(req, res) {
    const user = firebase.auth().currentUser

    res.render('index', {
        titulo: 'Site Algoritmos Fundamentais',
        currentUser: user
        
    });

});

app.get('/fibonacci', function(req, res) {
    const user = firebase.auth().currentUser
    res.render('fibonacci', {
        titulo: 'Fibonacci',
        resultado: '',
        currentUser: user
    });

});

app.post('/fibonacci', function(req, res) {
    var fib = req.body.quantFib;
    var resultado = fibonacci.fibonacci(fib);
    const user = firebase.auth().currentUser
    res.render('fibonacci', {
        titulo: 'Fibonacci',
        fib : fib,
        resultado: resultado,
        currentUser: user
    })
});

app.get('/mdc', function(req, res) {
    const user = firebase.auth().currentUser
    res.render('mdc', {
        titulo: 'MDC',
        resultado: '',
        currentUser: user
    });

});

app.post('/mdc', function(req, res) {
    const user = firebase.auth().currentUser
    var num1 = req.body.num1;
    var num2 = req.body.num2;
    var resultado = mdc.mdc(num1, num2);
    res.render('mdc', {
        titulo: 'MDC',
        num1: num1,
        num2: num2,
        resultado: resultado,
        currentUser: user
    })
});

app.get('/contador', function(req, res) {
    const user = firebase.auth().currentUser
    res.render('contador', {
        titulo: 'Contador',
        resultado: '',
        currentUser: user
    });
    
});
    
app.post('/contador', function(req, res) {
    const user = firebase.auth().currentUser
    var num = req.body.num;
    var resultado = contador.contador(num);
    res.render('contador', {
        titulo: 'Contador',
        num: num,
        resultado: resultado,
        currentUser: user
    })    
});

app.get('/numPrimo', function(req, res) {
    const user = firebase.auth().currentUser
    res.render('numPrimo', {
        titulo: 'Números Primos',
        resultado: '',
        currentUser: user
    });
    
});
    
app.post('/numPrimo', function(req, res) {
    const user = firebase.auth().currentUser
    var numP = req.body.numP;
    var resultado = numPrimo.numPrimo(numP);
    res.render('numPrimo', {
        titulo: 'Números Primos',
        resultado: resultado,
        currentUser: user
    })    
});

app.get('/somatorio', function(req, res) {
    const user = firebase.auth().currentUser
    res.render('somatorio', {
        titulo: 'Somatório',
        resultado: '',
        currentUser: user

    });
    
});
    
app.post('/somatorio', function(req, res) {
    const user = firebase.auth().currentUser
    var numSoma = req.body.numSoma;
    resultado = somatorio.somatorio(numSoma);

    res.render('somatorio', {
        titulo: 'Somatório',
        numSoma: numSoma,
        resultado: resultado,
        currentUser: user
    })  
});


app.get('/quicksort', function(req, res) {
    const user = firebase.auth().currentUser
    res.render('quicksort', {
        titulo: 'Quicksort',
        resultado: '',
        currentUser: user
    });
    
});
    
app.post('/quicksort', function(req, res) {
    const user = firebase.auth().currentUser
    let numArray = req.body.numArray;
    var arraydividido = numArray.split(',').map(Number)
    resultado = quicksort.quickSort(arraydividido)
    
    
    res.render('quicksort',{      
        titulo: 'Quicksort',
        numArray: numArray,
        resultado: resultado,
        currentUser: user
    })    
});

// pags do login e registro
app.get('/login', function(req, res) {
    res.render('login', {
    })
})  

app.post('/login', function(req, res) {
    const body = req.body
    const email = body.email
    const password = body.password

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            res.redirect('/')
        })
        
        .catch((error) => {
            var errorMessage = error.message

            res.render('login', {
                error: errorMessage
            })
        })
})

app.get('/cadastro', function(req, res) {
    res.render('cadastro', {
    })
})

app.post('/cadastro', function(req, res) {
    const body = req.body
    const email = body.email
    const password = body.password
    const name = body.name

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            const currentUser = firebase.auth().currentUser
            currentUser.updateProfile({
            displayName: name
        })
        .then(() => {
            console.log('Seu usuário foi definido com sucesso!')
        })
        .catch((error) => {
            console.log(error.message)
        })

        res.redirect('/')
        })

        .catch((error) => {
            var errorMessage = error.message

        res.render('cadastro', {
            error: errorMessage
        })
    })
})

app.get('/logout', async (req, res) => {
    await firebase.auth().signOut()
    res.redirect('/')
})


app.listen(PORT, function(){
    console.log("Express server is running on port " + PORT)
})

