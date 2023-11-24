const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/chat', (req, res) =>{

    //Mensajes que se pueden cambiar:
    let responses = {
        '1': `ATH Token es el corazón de nuestra comunidad, un proyecto comunitario donde todos pueden aportar ideas para innovar. Con un suministro de 1,000,000,000 tokens, buscamos hacer historia en la blockchain. ¿Quieres saber más sobre cómo funciona o cómo puedes adquirirlos?. Escriba a1 para obtener esa información ` ,
        'a1': "ATH Token utiliza la tecnología blockchain para ofrecer una plataforma segura y descentralizada. Nuestro token es el pase para participar en decisiones comunitarias y beneficiarte de la economía digital que estamos construyendo. ¿Te gustaría detalles sobre la seguridad o la hoja de ruta del proyecto?",
        
        '2': "Obtener ATH Tokens es un proceso sencillo y accesible. Puedes adquirirlos a través de nuestra plataforma en DEXTools, donde también encontrarás guías detalladas para fondear tu wallet y realizar tu compra. ¿Necesitas ayuda para comenzar?. Escriba a2 para obtener esa información",
        'a2': "Para comenzar, necesitarás una wallet compatible como MetaMask. Una vez configurada, puedes ir a DEXTools, buscar el par ATH/ETH y realizar tu compra. ¿Quieres una guía detallada para configurar tu wallet o cómo comprar en DEXTools?",
        
        '3': "El proyecto ATH es una odisea hacia el éxito colectivo. Somos una comunidad impulsada por la participación activa de nuestros miembros. Puedes contribuir con ideas, participar en decisiones y unirte a nuestras redes sociales para estar al día. ¿Te interesa ser parte activa de nuestra comunidad o prefieres seguirnos en redes sociales para más información?. Escriba a3 para obtener esa información",
        'a3': "Para involucrarte activamente, puedes unirte a nuestro grupo de Telegram y seguirnos en Twitter [@ATH_Token]. Allí podrás aportar tus ideas y votar en decisiones importantes. Si prefieres estar informado, nuestras redes sociales son el mejor lugar para recibir actualizaciones y noticias. ¿Te interesa unirte al grupo de Telegram o seguirnos en Twitter?",
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

app.listen(3000, ()=> console.log('El servidor esta funcionando y escucha en el puerto 3000'))