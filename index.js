const express = require('express');
const exphbs  = require('express-handlebars');
const pizzaFunction= require('./pizza');
const pizza = pizzaFunction();

const app = express();
const PORT =  process.env.PORT || 3017;

// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable the static folder...
app.use(express.static('public'));

// add more middleware to allow for templating support

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
	res.render('index', {
		total: pizza.getTotal(),
		small: pizza.getSmall(),
		medium: pizza.getMedium(),
		large: pizza.getLarge(),
		qtySmall : pizza.amountOfSmall(),
		qtyMed: pizza.amountOfMedium(),
		qtyLarge: pizza.amountOfLarge()
	});
});

app.get('/order',function(req, res){

	res.render('order',{
		orders : pizza.getOrderId(),
	});

	// res.render('index',	{total: pizza.clearCart().total,
	// 	small: pizza.clearCart().small,
	// 	medium: pizza.clearCart().med,
	// 	large: pizza.clearCart().large,
	// 	qtySmall : pizza.clearCart().howManySmall,
	// 	qtyMed: pizza.clearCart().howManyMed,
	// 	qtyLarge: pizza.clearCart().howManyLarge,
	// });
	pizza.getOrderId();
	pizza.clearScreen();
	pizza.getClearScreen();

	// const clear = pizza.getClearScreen();

	// clear.forEach(function (element) {
	// 	clear[0].amount = 0; 
    // });
	
console.log('orders   :'+ JSON.stringify(pizza.getOrderId()));
console.log('value of amount   :'+ JSON.stringify(pizza.getClearScreen()));
});

// app.post('/reset', function(req, res){
// pizza.getOrderId();
// console.log('orders   :'+ JSON.stringify(pizza.getOrderId()));

// 	pizza.clearScreen();
// 	console.log('clear   :'+ pizza.clearScreen());

// 	// res.redirect('/order');
// });

app.post('/pizzaTypes', function(req, res){
	console.log('pizzatype:  ' + req.body.pizzaSize);
	
	pizza.add(req.body.pizzaSize);
	pizza.order()

	res.redirect('/');
});

// start  the server and start listening for HTTP request on the PORT number specified...
app.listen(PORT, function() {
	console.log(`App started on port 3017`)
});

