const greet = require('./src/greet');

greet.emit('clap');
greet.emit('greet', 'people');
greet.emit('shout', 'LETS GO BLAZERS')
greet.emit('call', 'Jair Aviles', (name) => {
    console.log(`Hello, my name is ${name}. Nice to meet you.`)
})
