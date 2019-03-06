import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../action'
import history from '../History'
import { toastr } from 'react-redux-toastr';
import Header from './Header';
class Login extends React.Component {

    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className='error message'>
                    <div className="errormessage">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
        return (

            <div className='field'>
                <div>
                    <label>{label}</label>
                    <input {...input} />
                </div>
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.login(formValues,(res)=>{ 
            console.log(res,'login');
            if(res.status===200){
                toastr.success(`Welcome ${res.data.user_display_name}`,'Login Successfully');
                localStorage.setItem("Userid",res.data.user_id);
                localStorage.setItem("IsLogedIn",true);
                history.push('/Dashboard');
             }
             else{
                 toastr.error('Signup Failed'); 
             }
         });
    }

    render() {
        console.log(localStorage.getItem("IsLogedIn"),'Login');
        console.log(localStorage.getItem("Userid"));
        return (
            <div>
                <Header />
                <h2 style={{ textAlign: 'center' }}>Login</h2>
                <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="username" component={this.renderInput} label="Username" />
                    <Field name="password" component={this.renderInput} label="Password" />
                    <Link to='/Signup'><button className="ui button">Create Account</button></Link>
                    <button className="ui button primary " style={{alignContent:'right'}}>Login</button>

                </form>
            </div>
        );
    }
}

const validate = (formValues) => {
    const errors = {}
    if (!formValues.username) {
        errors.username = 'you must Enter UserName'
    }
    if (!formValues.password) {
        errors.password = 'you must Enter Password'
    }
    return errors;
}



 const wrapedform = reduxForm({
    form: 'LoginForm',
    validate
})(Login);

export default connect(null,{login})(wrapedform); 


