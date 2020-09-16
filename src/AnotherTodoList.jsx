import React from 'react';

export class AnotherTodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todos: ['hello','sample']
        }
    }

    onAddButtonClick = () =>{
        console.log('Add button clicked');
        let todo = document.getElementById("todo").value;
        this.setState({
            todos: [...this.state.todos,todo]
        },() => {
            console.log(todo +' added to state/todos');
            document.getElementById("todo").value="";
        })
    }

    render(){
        return(
            <div>
                <input type="text" id="todo"/>
                <input type="button" id="add" value="Add Todo" onClick={this.onAddButtonClick}/>
                <ul>
                    {
                        this.state.todos.map(item=><li>{item}</li>)
                    }
                </ul>
            </div>
        )
    }
}