export type PerfilesNivelEnum = 'bajo' | 'medio' | 'alto'

export interface DataPerfil{
    id_perfil?:number,
    nombre?: string,
    apellido?: string,
    nickname?:string,
    nivel?:PerfilesNivelEnum,
    ultima_vez?: Date,
    usuario_id?: number,
}