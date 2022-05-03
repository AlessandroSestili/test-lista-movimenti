export interface Movimenti {
    compagnia: string | number
    numeroPolizza: string | number
    dataOperazione: string | number | Date
    duprec: string | number
    importoRata: string | number
    dataIncasso: string | number | Date
    tipoOperazione: string | number
    descOperazione: string | number
    segno: string | number
    flagWeb: null | any //TODO: Definire tipo
    letteraAssociata: null | any //TODO: Definire tipo
    iniziativa: null | any //TODO: Definire tipo
    tipo: string | number
}
