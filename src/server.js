const express = require('express');
const app = express('');
const port = process.env.PORT || 3000;

const todos = [
    { id: 1, task: 'Go for shopping', isCompleted: true }
]

app.use(express.json());
app.use('/static', express.static('public'))

app.get('/todos', (req, res) => {
    res.json(todos);
})

app.get('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const filteredTodos = todos.filter(todo => todo.id === id)
    res.json(filteredTodos.length > 0 ? filteredTodos[0] : {});
})

app.post('/todos', (req, res) => {
    const {task, isCompleted} = req.body;

    const todoItem = {
        id: todos.length + 1,
        task,
        isCompleted
    }

    todos.push(todoItem);

    res.json(todoItem);
})

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}!!`)
})