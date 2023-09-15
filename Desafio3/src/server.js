const express = require('express');
const app = express();
const routes = require("../src/routes/employee.routes");
const PORT = 3000;

app.use(express.json());
app.use(routes);

app.use((err, req, res, next) => {
    console.error('Erro ao processar a requisição:', err.stack);
    res.status(500).json({
        status: "error",
        message: "Internal server error"
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});