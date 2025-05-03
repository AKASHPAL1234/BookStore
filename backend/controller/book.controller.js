import { model } from 'mongoose';
import Book from '../model/book.model.js';


 export  const getbook=async(req,res)=>{
    try{
        const book=await Book.find();
        res.status(200).json(book)

    }catch(e){
        console.log(e);
        res.status(500).json(e);

    }

};

export const setBook = async (req,res) => {

    try{
        const {name,title,price,category,image} = req.body;

        const user = new Book(
            {name,title,price,category,image}
        )
        await user.save();
        console.log("Posted successfully");
        res.status(200).json("Posted successfully");
    } catch(err) {
        console.log(err.message);
        res.status(400).send({error:err.message});
    }
}

