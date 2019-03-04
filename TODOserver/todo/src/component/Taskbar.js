import React from 'react'
import '../css/Taskbar.css';
import { connect } from 'react-redux';
import { TodoAdd, fetchTasks, deleteTasks, editTask } from '../action'
import { toastr } from 'react-redux-toastr';

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

    componentDidMount() {
        this.props.fetchTasks();
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
        const { inputterm, editState, id } = this.state;
        if (this.state.editState) {
            event.preventDefault();
            if (inputterm !== '') {
                this.props.editTask(id, { task: inputterm });
                toastr.info(inputterm, 'Edited Successfull');
                this.setState({ inputterm: '', editState: false });
            }
        }
        else {
            event.preventDefault();
            if (inputterm !== '' && editState === false) {
                this.props.TodoAdd(inputterm);
                toastr.success(inputterm, 'Added Successfull');
                this.setState({ inputterm: '' });

            }

        }

    }


    // this method invokes when user clicks on the delete icon of perticular task.
    // this method call ActionCreator 'TodoDelete' and pass id of selected task in it.
    removetask = (task, id) => {
        const answer = window.confirm(`Are you sure To delete "${task}" ?`);
        if (answer) {
            this.props.deleteTasks(id);
            toastr.error(task, 'Deleted Successfull');
        }
    }

    //this method invokes when user hit the edit icon of perticular task.
    //set some state to perform editing in selected task.
    edittask = (task, id) => {
        this.setState({
            inputterm: task,
            editState: true,
            id: id
        });
    }


    //this method render the list of tasks.
    //this method is calling from the render() method.
    taskList = () => {
        if (this.props.tasks) {
            const data = this.props.tasks.map((task, index) => {
                return (
                    <div className="taskitem" key={index}>

                        <div className="maintask">
                            {task.task}

                            <i onClick={() => this.removetask(task.task, task.id)} className="eraser icon ierase large"></i>
                            <i onClick={() => this.edittask(task.task, task.id)} className="edit icon ierase large"></i>
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
                    <input value={this.state.inputterm} onChange={this.setTerm} maxLength="80" required='required'></input>
                    
                    {!this.state.editState && <button className="ui button primary" type="submit" >ADD</button>}
                    {this.state.editState && <button className="ui button primary" type="submit" >SAVE</button>}
                    {this.state.inputterm.length>=75 && <span id='errorspan'>size should not more than 80 characters. Remaining  ({80-this.state.inputterm.length})</span>}
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
    return { tasks: state.tasks.task }
}

// connect method connects the ActionCreator and mapStateToProps to our
// Class Component 'Taskbar'.
export default connect(mapStateToProps, { TodoAdd, fetchTasks, deleteTasks, editTask })(Taskbar);
