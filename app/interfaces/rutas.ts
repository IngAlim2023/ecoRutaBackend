export type RutasTransporteEnum = 'bicicleta' | 'caminata' | 'transporte_publico'

export interface DataRutas {
  id_ruta?: number
  origen_latitud: number
  origen_longitud: number
  destino_latitud: number
  destino_longitud: number
  transporte: RutasTransporteEnum
  fecha_created_at: Date
}
