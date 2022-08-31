export function project (title='My First Project') {
    const allTodos = [];

    const addTodo = todo => {
        allTodos.push(todo);
    }
    const getTodo = () => {
        return allTodos;
    }

    const removeTodo = value => {
        let count = 0;
        for (let todo of allTodos) {
            if (todo.index == value) {
                break;
            } else {
                count++;
            }
        }
        allTodos.splice(count, 1);
    }

    const numTodos = () => {
        return allTodos.length;
    }

    return {title, addTodo, getTodo, removeTodo, numTodos};
}

export function todo (taskName, dueDate, priority, description, index) {
    return {taskName, 
            dueDate, 
            priority, 
            description,
            index
    };
}