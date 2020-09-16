import React from 'react';

export class MySimpleTodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todos: ["todo-1","todo-2"]
        };
    }

    onButtonClick = () => {
        let item = document.getElementById("todo").value;
        this.setState({
            todos: [...this.state.todos,item]
        },()=>{document.getElementById("todo").value=""})
    }

    render(){
        return(
            <div>
                <input type="text" id="todo" name="todo"/>
                <input type="button" id="submt" name="submit" value="add" onClick={this.onButtonClick}/>
                <ul>
                    {
                        this.state.todos.map(item => <li>{item}</li>)
                    }
                </ul>
            </div>
        )
    }
}