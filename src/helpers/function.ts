import {CategoryIconType} from "../types/task";

const categoryIcon: CategoryIconType[] = [
    {
        name: 'Task',
        icon: 'tasks'
    },
    {
        name: 'Random Thought',
        icon: 'random'
    },
    {
        name: 'Idea',
        icon: 'lightbulb'
    },
    {
        name: 'Quote',
        icon: 'quote-right'
    }
];

export const ucFirst = (str: string) => {
    return str[0].toUpperCase() + str.slice(1);
}
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


