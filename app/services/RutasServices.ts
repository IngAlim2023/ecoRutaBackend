import Ruta from "#models/ruta";
import { DataRutas } from "../interfaces/rutas.js";

export default class RutasServices{
    async create(data:DataRutas){
        return await Ruta.create(data)
    }
    async read(){
        return await Ruta.all()
    }
    async readById(id:any){
        return await Ruta.findOrFail(id);
    }
    async update(data:DataRutas, id:any){
        const ruta = await Ruta.findOrFail(id);
        ruta.merge(data);

        return await ruta.save();
    }
    async delete(id:any){
        const ruta = await Ruta.findOrFail(id);
        return await ruta.delete();
    }
}