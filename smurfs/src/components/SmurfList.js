import React from "react";

export default function SmurfList(props) {
    return (
        <>
            {props.smurfs.map(smurf => (
                <div key={smurf.id}>
                    <h2>{smurf.name}</h2>
                    <p>{smurf.age}</p>
                    <p>{smurf.height}</p>
                </div>
            ))}
        </>
    )
}