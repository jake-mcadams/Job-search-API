import express, { NextFunction, Response, Request } from "express";
import * as  data from './data.json' assert {type: "json"};

const app = express();
// const PORT = process.env.PORT || 3000;
const PORT = 5500;


// app.get("/:id", (req:Request, res: Response, next: NextFunction)=>{
//     const company = req.params.id
//     res.sendFile(company, {root: 'C:/Users/jakem/Desktop/New Code/static-job-API/src/images/'})
// })  

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    // res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:3000");
    // res.setHeader("Access-Control-Allow-Origin", "http://10.0.0.149:3000");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
    next();
  });

app.get("/", (req:Request, res: Response, next: NextFunction)=>{

    // console.log(req.body.id)
    res.send(data["default"]);
    // res.json(data)
})

app.listen(PORT, ()=> console.log(`Server listening on port ${PORT}`))