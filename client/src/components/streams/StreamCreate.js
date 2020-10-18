import React from 'react';
import {Field, reduxForm} from 'redux-form'

class StreamCreate extends React.Component {
  renderError = ({error, touched}) => {
    return error && touched ? <div className = 'ui error message'><div className = 'header'>{error}</div></div> : null
  }

  // renderInput = (formProps) => {
  //   return <input onChange = {formProps.input.onChange} value = {formProps.input.value} />
  // }
  renderInput = ({input, label, meta}) => {
    return (
      <div className = 'field'>
      <label>{label}</label>
        <input type="text" {...input} autoComplete = 'off' />
        {this.renderError(meta)}
      </div>
      
    ) 
  }

  onSubmit(formValues){
    console.log(formValues)
  }

  render() {
  return (
    <form className = 'ui form error' onSubmit = {this.props.handleSubmit(this.onSubmit)}>
      <Field name = 'title' component = {this.renderInput} label = 'Enter Title' />
      <Field name = 'description' component = {this.renderInput} label = 'Enter Description' />
      <button className = 'ui button primary'>Submit</button>
    </form>
    )
  }
};

const validate = (formValues) => {
  const errors = {}

  if(!formValues.title) errors.title = 'You need to enter a title'
  if(!formValues.description) errors.description = 'You need to enter a description'

  return errors
}

export default reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);
