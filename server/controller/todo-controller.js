import { response } from "express";
import Todo from "../model/Todo.js";

export const addTodo = async(req,res)=>{
    try{
    const newTodo = await Todo.create({
        data: req.body.data,
        createdAt: Date.now()
    })

    await newTodo.save();
    response.status(200).json(newTodo);
    }catch(error){
        return response.status(500).json(error.message);
    }
}
