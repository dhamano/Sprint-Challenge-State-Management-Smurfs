import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
// import { withFormik, Form, Field } from 'formik';
// import * as Yup from 'yup';

import { addSmurfToList } from '../store/actions';

class AddSmurf extends Component {
  // const isAdding = useSelector( state => state.isAdding );
  state = {
    name: '',
    age: null,
    height: null
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    let containcm = this.state.height.substr(-2);
    if( containcm !== 'cm') {
      let addCM = this.state.height + 'cm';
      this.setState({
        ...this.state,
        height: addCM
      }, () => this.props.addSmurfToList(this.state).then( res => res && this.props.history.push("/")));
    } else {
      this.props.addSmurfToList(this.state).then( res => res && this.props.history.push("/") );
    }
  }

  clearForm = () => {
    this.setState({
      name: '',
      age: null,
      height: null
    })
  }

  render() {
    return (
      <div>
        {/* <MyForm /> */}
        <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} value={this.state.name} name="name" placeholder="Smurf Name" />
        <input type="number" onChange={this.handleChange} value={this.state.age} name="age" placeholder="Smurf Age" />
        <input type="text" onChange={this.handleChange} value={this.state.height} name="height" placeholder="Smurf Height" />
        { this.props.error && <p>{this.props.error}</p>}
        <button type="submit" disabled={this.props.isAdding}>
          {this.props.isAdding ? (
            <Loader type="ThreeDots" color="#somecolor" height={20} width={20} />
          ) :
            'Add Smurf'
          }
        </button>
        </form>
      </div>
    )
  }
}
/*
const MyForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} onBlur={handleBlur} value={values.name} name="name" placeholder="Smurf Name" />
        { touched.name && errors.name && <p>{errors.name}</p> }
      <input type="text" onChange={handleChange} onBlur={handleBlur} value={values.age} name="age" placeholder="Smurf Age" />
      <div className="error">
        { touched.age && errors.age && <p>{errors.age}</p> }
      </div>
      <input type="text" onChange={handleChange} onBlur={handleBlur}value={values.height} name="height" placeholder="Smurf Height" />
      <div className="error">
        { touched.height && errors.height && <p>{errors.height}</p> }
      </div>
      <button type="submit" disabled={this.props.isAdding}>
        {this.props.isAdding ? (
          <Loader type="ThreeDots" color="#somecolor" height={20} width={20} />
        ) :
          'Add Smurf'
        }
      </button>
    </form>
  )
}

const MyFormik = withFormik({
  mapPropsToValues({ name, age, height }) {
    return {
      name:   name || "",
      age:    age || "",
      height: height || ""
    }
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(2, "Name must be longer than 2 characters")
      .max(15, "Name cannot be longer then 15 characters")
      .required("Name is required"),
    age: Yup.number()
      .integer()
      .positive()
      .required("Age is required"),
    height: Yup.number()
      .integer()
      .positive()
      .required("Height is required")
  }),
  handleSubmit( smurfInfo, formikBag ) {
    console.log('handlesubmit')
    addSmurfToList( smurfInfo, formikBag );
  }
})(MyForm);
//*/
const mapStateToProps = state => ({
  error: state.error,
  isAdding: state.isAdding
})
export default connect( mapStateToProps, { addSmurfToList } )(AddSmurf);