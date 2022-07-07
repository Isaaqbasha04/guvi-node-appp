const express = require('express')
const app = express()

const port = 4000;

const movies=[
    
];

app.get("/", function (request, response) {
  response.send("Hello WOrld")
});

app.get("/movies", function (request, response) {
    response.send(movies)
  });

  app.get("/movies/:id", function (request, response) {
   
    const {id} = request.params;
    console.log(request.params,id);
    const movie = movies.find((mv) => mv.id===id);
    console.log(movie);
    movie ? response.send(movie) : response.send({msg: "Movie not foiund"});
  });

app.listen(PORT, ()=>console.log(`App started in ${PORT}`));
