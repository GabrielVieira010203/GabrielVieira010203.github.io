
import dotenv from 'dotenv';
dotenv.config();


import app from './index.js';


const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`✅ Servidor rodando em: http://localhost:${port}`);
});