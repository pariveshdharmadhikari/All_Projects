import React from 'react'
import './Taskbar.css';
import { connect } from 'react-redux';
import { TodoAdd, fetchTasks, deleteTasks, editTask } from './action'

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

    componentDidMount(){
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
        if(this.state.editState){
            
        event.preventDefault();
        if (this.state.inputterm !== ''){
        this.props.editTask(this.state.id, {task:this.state.inputterm});
        
        this.setState({ inputterm: '', editState: false });
        }
        }
        else{
        event.preventDefault();
        if (this.state.inputterm !== '' && this.state.editState === false) {
            this.props.TodoAdd(this.state.inputterm);
            
            this.setState({ inputterm: '' });
        }
        }
    }

   // this method invokes when user clicks on the delete icon of perticular task.
   // this method call ActionCreator 'TodoDelete' and pass id of selected task in it.
    removetask = (task,id) => {
        const answer = window.confirm(`Are you sure To delete "${task}" ?`);
        console.log(answer,'answer');
        if(answer)
        this.props.deleteTasks(id);
    }

    //this method invokes when user hit the edit icon of perticular task.
    //set some state to perform editing in selected task.
    edittask = (task,id) => {
        this.setState({
            inputterm:task,
            editState: true,
            id: id
        });
    }

    //this method invokes when user hit the save button for saving the updated task.
    //this method call ActionCreator 'TodoEdit' and pass 'id' of selected task and the updated 'inputterm' in it.
    // submiteditterm = () => {
    //     this.props.TodoEdit(this.state.id, this.state.inputterm);
    //     this.setState({
    //         inputterm: '',
    //         editState: false
    //     });
    // }

    //this method render the list of tasks.
    //this method is calling from the render() method.
    taskList = () => {
        
            if(this.props.tasks){
            const data = this.props.tasks.map((task, index) => {
                return (
                    <div className="taskitem" key={index}>

                        <div className="maintask">
                            {task.task}

                            <i onClick={() => this.removetask(task.task,task.id)} className="eraser icon ierase large"></i>
                            <i onClick={() => this.edittask(task.task,task.id)} className="edit icon ierase large"></i>
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
                    <input value={this.state.inputterm} onChange={this.setTerm} required='required'></input>
                    {!this.state.editState && <button className="ui button primary" type="submit" >ADD</button>}
                    {this.state.editState && <button className="ui button primary" type="submit" >SAVE</button>}
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
    return { tasks: state.tasks.task}
}

// connect method connects the ActionCreator and mapStateToProps to our
// Class Component 'Taskbar'.
export default connect(mapStateToProps, { TodoAdd , fetchTasks , deleteTasks , editTask })(Taskbar);
