import { useState } from "react";

export default function ToDoList() {
    const [inputValue, setInputValue] = useState("")
    const [nameTask, setNameTask] = useState("")
    const [tasks, setTasks] = useState([])

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setNameTask(inputValue)

        if (inputValue.trim() === "") return;

        setTasks([...tasks, inputValue])
        setInputValue("")
    }

    return (
        <>
            <div>
                <h1>Lista de Tarefas</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        <input type="text" onChange={handleChange}/>
                    </label>
                    <button type="submit">Enviar</button>
                </form>
                <p>{nameTask}</p>
            </div>
        </>
    )
}