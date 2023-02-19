import { useState } from "react";

function App() {
    // we need a variable thats going to keep track of a list of tasks and a good data structure that can do that is an array, we also want to be able to dynamically change it and for that reason we use a usestate()
    const [todoList, setTodoList] = useState([]); // todoList is the name of the variable and the setTodoList is a function that will be used to change the value of the variable and we need to set a initial value which is an empty array []
    const [newTask, setNewTask] = useState("");

    const handleChange = (event) => {
        setNewTask(event.target.value)
    }; 
    // we're looking for a way to add a task to the list, we do this by using the spread operator. we name a function, name a const inside the funtion and use square brackets to add to list.
    const addTask = () => {
        // cus tasks w the same name get deleted we need to make them unique by making it inside an object instead of an array and giving it an id. we do this by making a object which will have an id and a taskName. task name is gonna equal newTask. id is going to be todolist . length -1 meaning we go back to the previous ids number and then add +1
        const task = {
            // use a ternary operator to say if the length is 0 add 1 if else above
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id +1,
            taskName: newTask,
        };

        const newTodoList = [...todoList, newTask]
        // then we set the todolist to the newtodolist
        setTodoList(newTodoList) // after this we need to display the list inside our ui. to do this we need to grab the todolist and map through. why map?. because when you have a list and you want to display each element in that list as a ui element u use map. you say the name of the list . map and then grab each element in that array as an argument to a function and then return something which is a h1 tag displaying our task in this case
        // setTodoList([...todoList, newtask])

    };

    // now we need to build a delete task function. we add the button in the list div as you only want to display it with a task. so instead of only returning a h1 we can also return a button
    // we use the todolist again to filter through each item in the list and sat that if theres a task equal to the taskname then return false meaning we dont want to keep it else true. then set todolist to equal to newtodolist
    // a way to make this shorter is by saying if return if task does not equal (!==) the taskname
    /* const deleteTask = (taskName) => {
        const newTodoList = todoList.filter((task => {
            return task !== taskName
        }))
        setTodoList(newTodoList)
    } */

    const deleteTask = (id) => {
        setTodoList(todoList.filter((task) => task.id !== id));
    }

    return(
        <div className="App">
            <div className="addTask">
                <input onChange={handleChange} />
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className="list">
                {todoList.map((task) => {
                return <div>
                    <h1>{task.taskName}</h1>
                    <button onClick={() => deleteTask(task.id)}>X</button>
                    </div>
                })}
            </div>
            
        </div>
    )
}

export default App
