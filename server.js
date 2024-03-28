import dotenv from 'dotenv';
dotenv.config();

import colors from 'colors';
import app from './app';

const port = process.env.PORT || 3000;
const host = process.env.HOSTNAME || 'localhost';
app.listen(port, host, () => {
    console.warn('API Rest inicializado'.yellow.bold);
    console.log(`Server ON - http://${host}:${port}`.green.bold);
});
