import React, { useState, useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchSmurfs } from "./actions/fetchSmurfs";
import { postSmurf } from "./actions/postSmurf";
import SmurfList from "./SmurfList";
import NewSmurf from "./NewSmurf";

function App(props) {

  useEffect(() => {
    props.fetchSmurfs()
  }, [])

  function handleSubmit(e, name, age, height) {
    e.preventDefault()
    props.postSmurf({name: name, age: age, height: height});

  }

  return (
    <div className="App">
      <div>
        <h1>Create your own smurf!</h1>
        <br/>
        <NewSmurf handleSubmit={handleSubmit} />
      </div>
      <SmurfList smurfs={props.smurfs} />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    smurfs: state.smurfs.smurfs
  }
}

const mapDispatchToProps = {
  fetchSmurfs,
  postSmurf
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
