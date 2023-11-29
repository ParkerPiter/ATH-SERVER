const express = require("express")
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors({
    origin: ['https://spontaneous-salamander-a129ea.netlify.app', 'http://127.0.0.1:5173', 'http://localhost:5173/']
}));

app.get('/', (req,res)=>{
    res.send('Inicie perfectamente')
})

app.post('/chat', (req, res) =>{

    //Mensajes que se pueden cambiar:
    let responses = {
        '1': `Too many ATHs in your wallet? Throw them here! " Interactive Feature: Shows a wallet designated for burning tokens. ` ,
        '2': "Want to stay up to date on everything? Follow us on Twitter and Telegram for more updates and memes.",
        
        '3': "Show off your skills with those fat fingers. I hope you're better at this than holding, maybe you'll win something for once in your life.",
        '4': "Need your daily dose of humor? Check outour exclusive ATH memes, prepare yours and maybe you'll win a prize.",
        
        '5': `Buy or sell? Do you think it's a bad time? If in doubt, press ALT+I on the chart!!! ."`,
        '6': "What is love? What is happiness? What makes us human? The only thing you should care about is how to buy more ATH.",
    
        '7': "All the zeros you need are here, with a limited tokenomics of 1,000,000,000.069.069."
    }

    //Variable por donde ingresa la request al body
    let messageToSend = req.body.message;
    let response = responses[messageToSend];

    if (!response) {
        console.log('Respuesta default')
        res.send({message: 'Sigo trabajando para darte una respuesta a eso'})
    } else {
        console.log('respuesta enviada correctamente')
        res.send({ message: response });
    }

})

module.exports = app;