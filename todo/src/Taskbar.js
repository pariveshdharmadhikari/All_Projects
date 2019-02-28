import React from 'react'
import './Taskbar.css';
import { connect } from 'react-redux';
import { TodoAdd, TodoDelete, TodoEdit } from './action'

class Taskbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputterm: '',
            render: false,
            allTasks: [],
            editState: false,
            id: ''
        }
    }

    //this method takes input from input tag and set it to the state 'inputterm'.
    //this method will call from the onChange() of input tag. 
    setTerm = (event) => {
    
        this.setState({
            inputterm: event.target.value,
        });
    }

    //this method invokes when user add the task
    //this method call ActionCreator 'TodoAdd' and pass inputterm state in it.
    submitTerm = (event) => {
        event.preventDefault();
        if (this.state.inputterm !== '' && this.state.editState === false) {
            this.props.TodoAdd(this.state.inputterm);
            this.setState({ inputterm: '' });
        }
    }

    //this method invokes when user clicks on the delete icon of perticular task.
    //this method call ActionCreator 'TodoDelete' and pass id of selected task in it.
    removetask = (id) => {
        this.props.TodoDelete(id)
    }

    //this method invokes when user hit the edit icon of perticular task.
    //set some state to perform editing in selected task.
    edittask = (id) => {
        this.setState({
            inputterm: this.props.tasks[id],
            editState: true,
            id: id
        });
    }

    //this method invokes when user hit the save button for saving the updated task.
    //this method call ActionCreator 'TodoEdit' and pass 'id' of selected task and the updated 'inputterm' in it.
    submiteditterm = () => {
        this.props.TodoEdit(this.state.id, this.state.inputterm);
        this.setState({
            inputterm: '',
            editState: false
        });
    }

    //this method render the list of tasks.
    //this method is calling from the render() method.
    taskList = () => {
        {
            const data = this.props.tasks.map((task, id) => {
                return (
                    <div className="taskitem" key={id}>

                        <div className="maintask">
                            {task}
                            <i onClick={() => this.removetask(id)} className="eraser icon ierase large"></i>
                            <i onClick={() => this.edittask(id)} className="edit icon ierase large"></i>
                        </div>
                    </div>
                );
            });
            return <div>{data}</div>
        }
    }

    //main render method to display JSX.
    render() {
        return (
            <div className='taskbar'>
                <form onSubmit={this.submitTerm}>
                    <h4>Add Task</h4>
                    <input value={this.state.inputterm} onChange={this.setTerm} ></input>
                    {this.state.editState && <button classname="ui button primary" type="submit" onClick={this.submiteditterm}>save</button>}
                </form>
                <div>
                    {this.taskList()}
                </div>
            </div>
        );
    };
}

//It provide state in our component as a props.
const mapStateToProps = (state) => {
    return { tasks: state.tasks }
}

// connect method connects the ActionCreator and mapStateToProps to our
// Class Component 'Taskbar'.
export default connect(mapStateToProps, { TodoAdd, TodoDelete, TodoEdit })(Taskbar);
