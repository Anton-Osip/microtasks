import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";
export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1 = v1();
    let todolistID2 = v1();
    let todolistID3 = v1();

    const [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: "active"},
        {id: todolistID3, title: 'What to xz', filter: "completed"},
    ])

    const [tasks, setTasks] = useState({
            [todolistID1]: [
                {id: v1(), title: "HTML&CSS", isDone: true},
                {id: v1(), title: "JS", isDone: true},
                {id: v1(), title: "ReactJS", isDone: false},
                {id: v1(), title: "Rest API", isDone: false},
                {id: v1(), title: "GraphQL", isDone: false},
            ],
            [todolistID2]: [
                {id: v1(), title: "HTML&CSS2", isDone: true},
                {id: v1(), title: "JS2", isDone: true},
                {id: v1(), title: "ReactJS2", isDone: false},
                {id: v1(), title: "Rest API2", isDone: false},
                {id: v1(), title: "GraphQL2", isDone: false},
            ],
            [todolistID3]: [
                {id: v1(), title: "HTML&CSS2", isDone: true},
                {id: v1(), title: "JS2", isDone: true},
                {id: v1(), title: "ReactJS2", isDone: false},
                {id: v1(), title: "Rest API2", isDone: false},
                {id: v1(), title: "GraphQL2", isDone: false},
            ]

        })
    ;

    function removeTask(id: string, taskListId: string) {
        // let task = tasks[taskListId]
        // tasks[taskListId] = task.filter(t => t.id !== id)
        // setTasks({...tasks});\

        setTasks({...tasks, [taskListId]: tasks[taskListId].filter(task => task.id !== id)})
    }

    function addTask(title: string, taskListId: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        setTasks({...tasks, [taskListId]: [newTask, ...tasks[taskListId]]});
    }

    function changeStatus(taskId: string, isDone: boolean, taskListId: string) {
        // let task = tasks[taskListId]
        // let findTask = task.find(t => t.id === taskId);
        // if (findTask) {
        //     findTask.isDone = isDone
        // }

        setTasks({
            ...tasks,
            [taskListId]: tasks[taskListId].map(task => task.id === taskId ? {...task, isDone: isDone} : task)
        })
    }


    function changeFilter(value: FilterValuesType, taskListId: string) {
        setTodolists(todolists.map(filtered => filtered.id === taskListId ? {...filtered, filter: value} : filtered))
    }

    const TodolistElements = todolists.map(list => {
        let tasksForTodolist = tasks[list.id];

        if (list.filter === "active") {
            tasksForTodolist = tasksForTodolist.filter(t => t.isDone === true);
        }
        if (list.filter === "completed") {
            tasksForTodolist = tasksForTodolist.filter(t => t.isDone === false);
        }

        return <Todolist
            key = {list.id}
            taskListId = {list.id}
            tasks = {tasksForTodolist}
            title = "What to learn"
            removeTask = {removeTask}
            changeFilter = {changeFilter}
            addTask = {addTask}
            changeTaskStatus = {changeStatus}
            filter = {list.filter}
        />
    })


    return (
        <div className = "App">
            {TodolistElements}

        </div>
    );
}

export default App;
