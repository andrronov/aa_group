import express from 'express'
import bodyParser from 'body-parser'
import router from './router.js'
import cors from 'cors';

const PORT = process.env.PORT || 3000

const app = express()
app.use(cors({
  origin: 'https://group-aa.ru',
  credentials: false
}));
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api', router)

app.use(express.static(process.cwd()+"/dist"))
app.listen(process.env["PORT"] || PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
