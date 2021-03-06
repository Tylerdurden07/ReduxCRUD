import React, {Component} from 'react';
import {Field,reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {CreatePost} from '../actions';

class PostNew extends Component{
  renderField(field){
    const {meta : {touched,error}}=field;
    const className=`form-group ${touched && error?'has-danger':''}`;
    return (
      <div className={className}>
      <label>{field.label}</label>
      <input className="form-control"
      type="text"
      {...field.input}
      />
      <div className="text-help">
      {touched?error:''}
      </div>
      </div>
    );

  }
  onSubmit(values){
    this.props.CreatePost(values,()=>{
      this.props.history.push('/');
    });
  }

  render(){
    const {handleSubmit}=this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
      <Field
      label="Title"
      name="title"
      component={this.renderField}
      />
      <Field
      label="Categories"
      name="categories"
      component={this.renderField}
      />
      <Field
      label="Post Content"
      name="content"
      component={this.renderField}

      />
      <button type="submit" className="btn btn-primary">Submit</button>
      <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values){
const errors={};
//if(values.title.length<3){
//  errors.title="Title must be atleast 3 characters";
//}
  if(!values.title){
    errors.title="Enter a title";
  }
  if(!values.categories){
    errors.categories="Enter some category";
  }
  if(!values.content){
    errors.content="enter some content";
  }
// if erros is empty
// form is fine
return errors;
}

export default reduxForm({
  validate,
  form:'PostsNewForm'
})(
  connect(null,{CreatePost})(PostNew)
);
