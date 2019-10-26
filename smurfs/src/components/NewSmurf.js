import React from 'react';

export default function NewSmurf(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <label>
                Name: 
                <input 
                    type="text"
                    name="name"
                    value={props.nameValue}
                    onChange={e => props.setName(e.target.value)}
                />
            </label>
            <label>
                Age: 
                <input 
                    type="number"
                    name="age"
                    value={props.ageValue}
                    onChange={e => props.setAge(e.target.value)}
                />
            </label>
            <label>
                Height (example: 3cm):
                <input 
                    type="text"
                    name="height"
                    value={props.heightValue}
                    onChange={e => props.setHeight(e.target.value)}
                />
            </label>
            <button>Submit</button>
        </form>
    )
}