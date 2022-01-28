import React from 'react';

const Create = ({onSubmit}) => (
    <form onSubmit={
        (e) => {
            e.preventDefault()
            onSubmit(e.target.title.value, e.target.desc.value)
        }
    }>
        <p>
            <input type="text" name='title' placeholder='Title'/>
        </p>
        <p><textarea name="desc" cols="30" rows="10"></textarea></p>
        <input type="submit" value='Submit'/>
    </form>
);

export default Create;