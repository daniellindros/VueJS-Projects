import { v4 as uuidv4 } from 'uuid';

export class Todo {
    constructor(text, completed = false) {
        this.id = uuidv4();
        this.text = text;
        this.completed = completed;
    }
}

export const filters = {
    ALL: 'all',
    COMPLETED: 'completed',
    INCOMPLETED: 'incompleted'
}
