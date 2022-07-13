
//movies
import express from "express";
import { getAllMovies, 
    getMovieById, 
    CreateMovies,
     deleteMoviesById,
      updateMovieById } from "./helper.js";
const router=express.Router();

router.get("/",  async function (request, response) {
    //db.movies.find({})
  
    if(request.query.rating){
      request.query.rating = + request.query.rating;
    }
    console.log(request.query);
  
    //cursor- pagination
    const movies = await getAllMovies(request);
    // console.log("Movies : " + movies);
      response.send(movies)
    });
  
    router.get("/:id", async function (request, response) {
     
      const {id} = request.params;
      console.log(request.params,id);
  
      //db.movies.findOne({id:101})
  
      // const movie = movies.find((mv) => mv.id===id);
  
      const movie = await getMovieById(id);
  
      console.log(movie);
      movie ? response.send(movie) : response.status(404).send({msg: "Movie not foiund"});
    });
  
    //middleware (inbuilts) 
  
    router.post("/", express.json(), async function (request, response) {
  
      const data = request.body;
      console.log(data);
  
      //db.movies.insertMnay
  
      const result= await CreateMovies(data);
      response.send(result);
    });
  
    router.delete("/:id", async function (request, response) {
     
      const {id} = request.params;
      console.log(request.params,id);
  
      const movie= await deleteMoviesById(id);
  
      console.log(movie);
  
      movie ? response.send(movie) : response.status(404)
      .send({msg : "Movie not found"})
    });
  
    router.put("/:id", async function (request, response) {
     
      const {id} = request.params;
      console.log(request.params,id);
      const data = request.body;
  
      //db.movies.UpdateOne({id: "101"} {$set : data})
  
      // const movie = movies.find((mv) => mv.id===id);
  
      const result= await updateMovieById(id, data);
      
      response.send(result);
    });

    export const moviesRouter=router;


