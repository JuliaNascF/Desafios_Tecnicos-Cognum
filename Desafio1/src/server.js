const express = require('express');
const app = express();
const PORT = 3000;

// Rota de saudação
app.get('/hello', (req, res) => {
    res.json({ message: 'Hello, Cognum!' });
});

// Tratamento de erro do servidor
app.use((err, req, res, next) => {
    console.error('Erro ao processar a requisição:', err.stack);
    res.status(500).json({
        status: "error",
        message: "Internal server error"
    });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});