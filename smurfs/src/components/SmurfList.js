import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfList } from '../store/actions';

import Loader from 'react-loader-spinner';

import SmurfCard from './SmurfCard';

class SmurfList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      default: ''
    }
  }

  componentDidMount() {
    this.props.getSmurfList();
  }

  render() {
    if(this.props.isFetching) {
      return (
        <div className="loading">
          <Loader type="Bars" color="#somecolor" height={80} width={80} />
        </div>
      )
    }
    return (
      <main>
        {this.props.smurfList ? (
          this.props.smurfList.map( (smurf, i) => {
            return <SmurfCard smurfInfo={smurf} key={i} />
          })
        ) : (
          <div className="loading">
            <Loader type="Bars" color="#somecolor" height={80} width={80} />
          </div>
        )}
      </main>
    )
  }
}

const mapStateToProps = state => ({
  error: state.error,
  isFetching: state.isFetching,
  smurfList: state.smurfList
})
export default connect( mapStateToProps, { getSmurfList } )(SmurfList);