import React from "react";
import { connect } from "react-redux";

const Title = props => {
  return (
    <div>
      Title
      {props.name}
      {props.role}
    </div>
  )
}

const mapsStateToProps = state => {
  return {
    name: state.name,
    role: state.role
  }
}

export default connect(mapsStateToProps)(Title)
