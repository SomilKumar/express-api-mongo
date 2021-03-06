var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');


var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
        }, (e) => {
        res.status(400).send(e);
    });
});


app.listen(3000, ()=> {
    console.log('Started on port 3000');
});


module.exports = { app };



// var otherTodo = new Todo({
//     text: 'Play',
// });

// otherTodo.save().then(saveSuccess, saveError);


// var newUser = new User({
//     email: 'xyz@qer.com',
// });

// newUser.save().then(saveSuccess, saveError);



function saveSuccess(doc) {
    console.log(JSON.stringify(doc, undefined, 2));
    res
}

function saveError(e) {
    console.log('Unable to save todo', e)
}

