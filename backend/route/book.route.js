import express from 'express';
import   { getbook, setBook }  from '../controller/book.controller.js';

const router=express.Router();

router.get("/",getbook);
router.post("/set",setBook);
export default router;