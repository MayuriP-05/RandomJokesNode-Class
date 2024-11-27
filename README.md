# Random Jokes API

This project is a simple Node.js API that provides random jokes. The API fetches jokes from a third-party service and serves them in a structured format. This project is built using **Express.js** and **Axios** to handle HTTP requests.

## Project Overview

This Node.js application allows users to fetch random jokes via an API endpoint. The jokes are fetched from [JokeAPI](https://v2.jokeapi.dev/) and served in JSON format. The API supports single-part jokes and multi-part jokes (setup and delivery).

## Installation Instructions

Follow the steps below to clone and run the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/MayuriP-05/random-jokes-api.git

2. ### Navigate into the project directory:
bash
Copy code
cd random-jokes-api

3. ### Install dependencies:
This project uses Node.js and npm. Run the following command to install required dependencies:
bash
Copy code
npm install

## Running the Project
### Once the dependencies are installed, you can start the server using the following command:
bash
Copy code
node index.js


## API Endpoints
GET /api/jokes/random
This endpoint fetches a random joke from the JokeAPI and returns it in JSON format.

### Response (Single-Part Joke)
json
Copy code
{
    "joke": "Why don't skeletons fight each other? They don't have the guts."
}
### Response (Two-Part Joke)
json
Copy code
{
    "setup": "Why don't skeletons fight each other?",
    "delivery": "They don't have the guts."
}
## Testing the API
You can test the API using Postman or any other tool for making HTTP requests.

Open Postman (or your preferred API testing tool).
Make a GET request to http://localhost:3000/api/jokes/random.
You should receive a JSON response with a random joke.

##Challenges
While working on this project, I encountered the following challenges:
Handling different joke formats: JokeAPI returns jokes in different formats (single-part or two-part). I had to ensure that the API correctly handled both types.
API integration: Integrating a third-party API (JokeAPI) to fetch random jokes required handling asynchronous requests using Axios.
## License
This project is licensed under the MIT License - see the LICENSE file for details.
