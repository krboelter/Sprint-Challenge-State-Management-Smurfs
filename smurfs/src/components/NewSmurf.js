import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
   mainContainer: {
       display: 'flex',
       flexDirection: 'column',
       width: '30%',
       margin: '0 auto'
   },
   submitButton: {
       width: '125px',
       height: '50px',
       backgroundColor: 'red',
       border: '2px solid black',
       borderRadius: '8px',
       color: 'white',
       margin: '20px auto'
   },
   label: {
       textAlign: 'left'
   },
   input: {
       width: '300px',
       margin: '10px 0'
   }
})

export default function NewSmurf(props) {
    const classes = useStyles();

    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [height, setHeight] = useState("")

    function handleName(e) {
        setName(e.target.value)
    }

    function handleAge(e) {
        setAge(e.target.value)
    }

    function handleHeight(e) {
        setHeight(e.target.value)
    }

    return (
        <form className={classes.mainContainer} onSubmit={e => {
            props.handleSubmit(e, name, age, height)
            setName("")
            setAge(0)
            setHeight("")
            }}>
            <label className={classes.label}>
                Name: 
            </label>
                <input 
                    className={classes.input}
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleName}
                />
            <label className={classes.label}>
                Age: 
            </label>
                <input 
                    className={classes.input}
                    type="number"
                    name="age"
                    value={age}
                    onChange={handleAge}
                />
            <label className={classes.label}>
                Height (example: 3cm):
            </label>
                <input 
                    className={classes.input}
                    type="text"
                    name="height"
                    value={height}
                    onChange={handleHeight}
                />
            <button className={classes.submitButton} >Submit</button>
        </form>
    )
}

