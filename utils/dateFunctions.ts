import {format, formatDistanceToNow} from 'date-fns'
import {es} from 'date-fns/locale'

// export const getFormatDistanceToNow = (date: number) => {
export const getFormatDistanceToNow = (date: Date) => {
    const fromNow = formatDistanceToNow( date, { locale: es , addSuffix: true} ) // locale: es , para ESPAÑOL

    return  `Última Actualización:  ${fromNow}`
}

export const getFormatDate = (date: Date) => {
    
    const parsedDate = format(date,'dd MMMM yyyy H:mm',{locale: es}) 

    return `Última Actualización:  ${parsedDate} hrs`

}

export const getFormatDateForCard = (date: Date) => {
    
    const parsedDate = format(date,'dd/MM/yyyy',{locale: es}) 

    return `${parsedDate}`

}