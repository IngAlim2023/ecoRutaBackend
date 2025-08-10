import UsuarioHasLogro from "#models/usuario_has_logro";
import { DataUsuarioHasLogro } from "../interfaces/usuarioHasLogro.js";

export default class UsuarioHasLogroServices{
    async create(data:DataUsuarioHasLogro){
        return await UsuarioHasLogro.create(data)
    }
    async read(id: any){
        return await UsuarioHasLogro.query().select().where('usuario_id', id);
    }
    async delete(id:any){
        const  logro = await UsuarioHasLogro.findOrFail(id);
        return await logro.delete();
    }    
}