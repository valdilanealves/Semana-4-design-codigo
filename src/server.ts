import express from 'express';
import bodyParser from 'body-parser';
import clienteRoutes from '../routes/clienteRoutes.ts';
import gerenteRoutes from '../routes/gerenteRoutes.ts';

const app = express();

app.use(bodyParser.json());
app.use('/clientes', clienteRoutes);
app.use('/gerentes', gerenteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});