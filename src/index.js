const express = require('express');

const app = express();

app.use(express.json())

app.get("/courses", (request, response) => {
  const query = request.query;
  console.log(query)
  return response.json(["Curso de NodeJS", "Curso de React", "Curso de Python"]);
});

app.post("/courses", (request, response) => {
  const body = request.body;
  console.log(body)
  return response.json([
    "Curso de NodeJS", "Curso de React", "Curso de Python", "Curso de Angular",
  ]);
});

app.put("/courses/:id", (request, response) => {
  const { id } = request.params;
  console.log(id);
  return response.json([
    "Curso de NodeJS", "Curso de ReactJS", "Curso de Python", "Curso de Angular",
  ]);
});

app.patch("/courses/:id", (request, response) => {
  return response.json([
    "Curso de NodeJS", "Curso de React Native", "Curso de Python", "Curso de Angular",
  ]);
});

app.delete("/courses/:id", (request, response) => {
  return response.json([
    "Curso de NodeJS", "Curso de React Native", "Curso de Python",
  ]);
});

app.listen(3333);