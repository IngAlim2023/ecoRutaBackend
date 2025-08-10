import Rol from "#models/rol";
import { DataRoles } from "../interfaces/roles.js";

export default class RolesServices{
    async create(data:DataRoles){
        return await Rol.create(data)
    }
    async readAll(){
        return await Rol.all();
    }
    async update(data:DataRoles,id:any){
        const rol = await Rol.findOrFail(id);
        rol.nombre = data.nombre;
        return rol.save();
    }
    async delete(id:any){
        const rol = await Rol.findOrFail(id);
        return rol.delete();
    }
}