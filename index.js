const app = require("./src/app")
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
    origin: ['https://spontaneous-salamander-a129ea.netlify.app', 'http://127.0.0.1:5173']
  }));


app.listen(port, ()=> console.log(`El servidor esta funcionando y escucha en el puerto ${port}` ))