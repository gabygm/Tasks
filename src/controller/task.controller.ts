import { Request, Response } from 'express';
import prisma from "../../prisma/ prisma"
import { Task } from "../models/task.model"
import { StatusCodes } from 'http-status-codes';

export const createTask = async(req: Request<Task>, res: Response)=>{
    const taskRequest = req.body

    const createTask = await prisma.task.create({
        data: taskRequest
    })
    return res.status(StatusCodes.CREATED).send(createTask)

}

export const getAllTasks = async(req: Request, res: Response)=>{
    const getAllTask = await prisma.task.findMany()
    return res.status(StatusCodes.OK).send(getAllTask)
}

export const deleteTaskById = async(req: Request, res: Response)=>{
    try{
        const id = req.params.id
        const deleteTask = await prisma.task.delete({
            where: {
                id: parseInt(id) 
            }
        })
        return res.status(StatusCodes.OK).send(deleteTask)
    }catch(e){
        return res.status(StatusCodes.NO_CONTENT).send()
    }
}

export const updateTaskWithLables = async(req: Request, res: Response)=>{
    const {id, labels} = req.body
    console.log("here",labels)
    const updateTask = await prisma.task.update({
        where: {
            id:  parseInt(id) ,
          },
          data: {
            labels: labels,
          },
    })
    return res.send(updateTask)
}

export const getTaskByLabel = async(req: Request, res: Response)=>{
    const label = req.params.label
    const getTaskbyLabel = prisma.task.findMany(
        { where: 
            { labels: { hasSome: label } } });    
    return res.send(getTaskbyLabel)
}