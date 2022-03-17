// 'Import' the Express module instead of http
const express = require("express");
// Initialize the Express application
const app = express();
const PORT = process.env.PORT || 4040; // we use || to provide a default value

const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};
app.use(express.json());
app.use(logging);

// Handle the request with HTTP GET method from http://localhost:4040/status
app.get("/status", (request, response) => {
  // Create the headers for response by default 200
  // Create the response body
  // End and return the response
  response.send(JSON.stringify({ message: "Service healthy" }));
});

// app.route("/users/:id").get((request, response) => {
//   // express adds a "params" Object to requests
//   const id = request.params.id;
//   // handle GET request for post with an id of "id"
//   response.send(JSON.stringify({ user_id: id }));
// });

app.get("/", (request, response) => {
  response
    .status(418)
    .json({ message: "No Resource Found Here, Please see instructions" });
});

app.post("/", (request, response) => {
  const body = request.body;
  body.date = Date.now();
  response.json(body);
});

// Tell the Express app to start listening
// Let the humans know I am running and listening on 4040
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
