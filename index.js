const express = require('express');
const axios = require('axios'); // Import axios for making HTTP requests
const app = express();
const port = process.env.PORT || 3000;

// Endpoint to fetch a random joke from JokeAPI
app.get('/api/jokes/random', async (req, res) => {
    try {
        // Fetch a random joke from JokeAPI
        const response = await axios.get('https://v2.jokeapi.dev/joke/Any?type=single');
        
        if (response.data.type === 'single') {
            // Return the joke from the response
            res.json({ joke: response.data.joke });
        } else {
            // Handle two-part jokes
            res.json({ setup: response.data.setup, delivery: response.data.delivery });
        }
    } catch (error) {
        console.error('Error fetching joke:', error);
        res.status(500).json({ error: 'Failed to fetch joke' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
