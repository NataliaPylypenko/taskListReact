import {CategoryIconType} from "../types/task";
import moment from "moment";
import {categoryIcon} from "../redux/db";


export const getRandomId = () => {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 6; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export const getCategoryIcon = (category: string): string => {
    const cat: CategoryIconType | undefined = categoryIcon.find(elem => elem.name === category)
    return cat ? cat.icon : ''

}

export const dateParser = (text:string):string[] => {
    const regexDate = new RegExp('\\d{0,2}\\/\\d{0,2}\\/\\d{4}', 'g');
    const results: string[] = [];

    Array.from(text.matchAll(regexDate)).map(item => {
        results.push(moment(item.shift(), 'DD/MM/YYYY').format('DD/MM/YYYY'))
    })

    return results;
}


