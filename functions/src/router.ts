import { Application } from "express";
import { list } from "./controller/mantenimiento_controller";

export function routes(app:Application){
    app.get('/api/mantenimientos',list);
}