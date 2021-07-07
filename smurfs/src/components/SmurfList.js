import React from "react";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    mainContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    container: {
        border: '2px solid red',
        borderRadius: '10px',
        margin: '10px',
        padding: '10px',
        textAlign: 'left',
        width: '20%'
    }
})

export default function SmurfList(props) {
    const classes = useStyles();

    return (
        <div className={classes.mainContainer}>
            {props.smurfs.map(smurf => (
                <div className={classes.container} key={smurf.id}>
                    <h2>{smurf.name}</h2>
                    <p>{smurf.age}</p>
                    <p>{smurf.height}</p>
                </div>
            ))}
        </div>
    )
}