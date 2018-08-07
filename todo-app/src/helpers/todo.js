import { v4 as uuidv4 } from 'uuid';

function Todo(text, completed) {
    this.id = uuidv4();
    this.text = text;
    this.completed = completed;
}

export default Todo;