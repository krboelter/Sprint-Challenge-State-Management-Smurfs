import React, { useState, useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchSmurfs } from "./actions/fetchSmurfs";
import { postSmurf } from "./actions/postSmurf";
import SmurfList from "./SmurfList";
import NewSmurf from "./NewSmurf";

function App(props) {

  // const [newSmurf, setNewSmurf] = useState({name: "", age: 0, height: "", id: Date.now()})
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [height, setHeight] = useState("")
  const [id, setId] = useState(Date.now())

  useEffect(() => {
    props.fetchSmurfs()
  }, [])

  function handleChange(e) {
    setName(e.target.value)
    setAge(e.target.value)
    setHeight(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    props.postSmurf({name, age, height})
  }
  console.log(name, "NEW SMURF NAME")

  return (
    <div>
      <div>
        <h1>Create your own smurf!</h1>
        <br/>
        <NewSmurf nameValue={name} ageValue={age} heightValue={height} handleSubmit={handleSubmit} setName={setName} setAge={setAge} setHeight={setHeight} />
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
