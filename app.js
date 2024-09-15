const express = require('express');
const app = express();

// Example API route
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from API' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
