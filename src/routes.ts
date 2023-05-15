import {Router} from "express"
import route from 'express';
import { createTask, getAllTasks, deleteTaskById, updateTaskWithLables, getTaskByLabel} from "./controller/task.controller";

export const routes =  Router()
routes.post("/", createTask)
routes.get("/", getAllTasks)
routes.delete("/:id", deleteTaskById)
routes.put("/labels", updateTaskWithLables)
routes.get("/label", getTaskByLabel)

