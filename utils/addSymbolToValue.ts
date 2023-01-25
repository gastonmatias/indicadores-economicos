export type unidadesDeMedida = 
| 'Pesos'
| 'Dólar'
| 'Porcentaje'
| string

export const addSymbolToValue = (unidad: unidadesDeMedida, valor:number) => {
    
    let simbolo
    
    switch (unidad) {
        case 'Pesos':
            simbolo = `CLP ${valor}`
            break;
        case 'Dólar':
            simbolo =`$ ${valor}`
            break;
        case 'Porcentaje':
            simbolo =`${valor} %`
            break;
    
        default:
            break;
    }

    return simbolo
}