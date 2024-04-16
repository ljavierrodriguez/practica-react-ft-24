import { useEffect, useState } from 'react'
import './App.css'

const App = () => {

    const [todos, setTodos] = useState(null)

    useEffect(() => {

        getTodos()

    }, [])

    const getTodos = () => {
        fetch('http://localhost:3001/todos', {
            method: 'GET', // GET, POST, PUT, DELETE
            // body: JSON.stringify(data), // POST, PUT
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                console.log(response.status) // 200
                return response.json()
            })
            .then((responseJson) => {
                setTodos(responseJson)
            })
    }

    const addTodo = (task) => {
        fetch('http://localhost:3001/todos', {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                console.log(response.status) // 201
                //if(response.status === 201) getTodos()
                return response.json()
            })
            .then((responseJson) => {
                console.log(responseJson)
                setTodos((todos) => [...todos, responseJson])
            })

    }

    const deleteTodo = (id) => {
        fetch(`http://localhost:3001/todos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                console.log(response.status) // 200
                if (response.status === 200) getTodos()
            })
    }

    const handleInput = (e) => {
        const { value } = e.target
        if (e.key === 'Enter' && value !== '') {
            addTodo({ task: value })
            e.target.value = ''
        }
    }


    const handleDelete = id => {
        deleteTodo(id)
    }


    return (
        <div className='container'>
            <div className="w-100">
                <input type="text" className="w-50 mx-auto my-4 form-control" placeholder='Insert new Task' onKeyUp={handleInput} />
            </div>
            <div className="w-100 my-5">
                <div className="row">
                    {
                        !!todos &&
                        todos.length > 0 &&
                        todos.map((info) => {
                            return (
                                <p key={info.id} className='d-flex justify-content-between todo col-lg-12 col-md-4 col-sm-6 col-12'>
                                    <span>{info.task}</span>
                                    <span onClick={() => handleDelete(info.id)}>
                                        <i className='bi bi-trash'></i>
                                    </span>
                                </p>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default App