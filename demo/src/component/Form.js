import React from 'react'
import { Field, reduxForm } from 'redux-form';
import '../css/Form.css'

class Form extends React.Component {
    
    renderError({error,touched}){
        if( touched&&error){
            return(
                <div className='error message'>
                <div className="errormessage">{error}</div>
                </div>
            );
        }
    }

    renderInput=({ input,label,meta})=> {
        return (
            
            <div className='field'>
                <label>{label}</label>
                <input {...input} />
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit=(formValues)=>{
    //    const _this=this;
    //     this.props.users.map((el,i)=>{
    //         _this.state.usernamelist.push(el.Username);
    //         return 0;
    //      }); 
         
    //      if(this.state.usernamelist.indexOf(formValues.Username)!==-1){ 
    //         alert('Username Already Exist');
    //         this.state.usernamelist.splice(-1,1);
    //     }
        
         this.props.onSubmit(formValues);
    
    }

    render() { 
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="firstname" component={this.renderInput} label="First Name" />
                <Field name="lastname" component={this.renderInput} label="Last Name" />
                <Field name="email" component={this.renderInput} label="E-mail" />
                <Field name="username" component={this.renderInput} label="UserName" />
                <Field name="password" component={this.renderInput} label="Password" />
                <Field name="ConfirmPassword" component={this.renderInput} label="ConfirmPassword" />
                <button className="ui button primary">Submit</button>
                
            </form>
        );
    }
}

const validate =(formValues)=>{
    const errors={}
    if(!formValues.firstname){
        errors.firstname='you must Enter Title'
    }
    if(!formValues.lastname){
        errors.lastname='you must Enter Description'
    }
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)){
        errors.email='Enter Valid Email'
    }
    if(!/[^a-zA-Z0-9 ]/i.test(formValues.username)){
        errors.username='Only Alfanumeric value will aceepted'
    }
    if(!formValues.password){
        errors.password='you must Enter Password'
    }
    if(!formValues.ConfirmPassword){
        errors.ConfirmPassword='Please Re-Enter Password';
    }else if (formValues.ConfirmPassword !== formValues.password) {
        errors.ConfirmPassword = 'Password mismatched' ;
      }

    return errors;
}

const wrapedform = reduxForm({
    form: 'Form',
    validate
})(Form);


export default wrapedform;
