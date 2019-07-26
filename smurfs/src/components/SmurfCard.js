import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { editSmurf } from '../store/actions';

class SmurfCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      smurfInfo: {
        name: this.props.smurfInfo.name,
        age: this.props.smurfInfo.age,
        height: this.props.smurfInfo.height,
        id: this.props.smurfInfo.id
      }
    }
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      smurfInfo: {
        ...this.state.smurfInfo,
        [event.target.name]: event.target.value
      }
    })
  }

  handleEdit = () => {
    this.setState({
      ...this.state,
      isEditing: !this.state.isEditing
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    let containcm = this.state.smurfInfo.height.substr(-2);
    if( containcm !== 'cm') {
      let addCM = this.state.smurfInfo.height + 'cm';
      console.log('addCM',addCM);
      this.setState({
        ...this.state,
        smurfInfo: {
          ...this.state.smurfInfo,
          height: addCM
        }
      }, () => this.props.editSmurf(this.state.smurfInfo).then( res => res && this.handleEdit() ));
    } else {
      this.props.editSmurf(this.state.smurfInfo).then( res => res && this.handleEdit() );
    }
  }

  render() {
    return (
      <div className="smurf-card">
        <span onClick={this.handleEdit} className="edit">{this.state.isEditing ? 'cancel' : 'edit'}</span>
        {this.state.isEditing ? (
          <form onSubmit={this.handleSubmit}>
            <dl>
              <dt>Name:</dt>
              <dd><input type="text" onChange={this.handleChange} value={this.state.smurfInfo.name} name="name" placeholder="Smurf Name" /></dd>
              <dt>Age:</dt>
              <dd><input type="number" onChange={this.handleChange} value={this.state.smurfInfo.age} name="age" placeholder="Smurf Age" /></dd>
              <dt>Height:</dt>
              <dd><input type="text" onChange={this.handleChange} value={this.state.smurfInfo.height} name="height" placeholder="Smurf Height" /></dd>
            </dl>
            <button disabled={this.props.isEditing}>
            {this.props.isEditing ? (
              <Loader type="ThreeDots" color="#somecolor" height={20} width={20} />
            ) :
              'save'
            }
            </button>
          </form>
        ) : (
          <dl>
            <dt>Name:</dt>
            <dd>{this.props.smurfInfo.name}</dd>
            <dt>Age:</dt>
            <dd>{this.props.smurfInfo.age}</dd>
            <dt>Height:</dt>
            <dd>{this.props.smurfInfo.height}</dd>
          </dl>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  error: state.error,
  isEditing: state.isEditing
});
export default connect( mapStateToProps, { editSmurf } )(SmurfCard);