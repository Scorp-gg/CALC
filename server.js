const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/calculate', (req, res) => {
    try {
        let result = eval(req.body.expression); // Evalúa la expresión (¡Usar con precaución!)
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: 'Expresión no válida' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
