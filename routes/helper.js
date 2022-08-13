import { client } from "../index.js";
import { ObjectId } from "mongodb";

export async function updateMovieById(id, data) {
    return await client
        .db("guvi-db")
        .collection("movies")
        .updateOne({  _id: ObjectId(id) }, { $set: data });
}
export async function deleteMoviesById(id) {
    return await client
        .db("guvi-db")
        .collection("movies")
        .deleteOne({  _id: ObjectId(id) });
}
export async function CreateMovies(data) {
    return await client
        .db("guvi-db")
        .collection("movies")
        .insertMany(data);
}

export async function createUser(data) {
    return await client
        .db("guvi-db")
        .collection("users")
        .insertOne(data);
}

export async function getMovieById(id) {
    return await client
        .db("guvi-db")
        .collection("movies")
        .findOne({ _id: ObjectId(id) });
}
export async function getUserByName(username) {
    console.log("the id is",id);

    return await client
        .db("guvi-db")
        .collection("users")
        .findOne({ username:username });
}

export async function getAllMovies(request) {
    return await client
        .db("guvi-db")
        .collection("movies")
        .find(request.query)
        .toArray();
}
