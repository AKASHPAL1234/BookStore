import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoute from './route/book.route.js';
import cors from 'cors';
import userRoute from './route/user.route.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


dotenv.config();
const PORT=process.env.PORT||4000;
const Mongourl=process.env.MongoDbUrl;

try{
  mongoose.connect(Mongourl);
  console.log("conect to mongidb");
 
}catch(e){
  console.log(e);

}

app.use("/book",bookRoute)
app.use("/user",userRoute)


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
