const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.post('/api/generate', async (req, res) => {
    try {
        const response = await fetch('https://desktop.captions.ai/api/generate', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${req.headers.authorization}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body)
        });

        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server running on http://localhost:${PORT}`);
});
