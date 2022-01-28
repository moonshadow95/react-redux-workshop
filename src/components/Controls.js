import React from 'react';

const Controls = ({onClick}) => (
    <ul>
        <li><a href="create" onClick={(e)=>{
            e.preventDefault()
            onClick('CREATE')}}>Create</a></li>
        <li><a href="update" onClick={(e)=>{
            e.preventDefault()
            onClick('UPDATE')}}>Update</a></li>
        <li><input type='button' value='Delete' onClick={()=>{onClick('DELETE')}}/></li>
    </ul>
);

export default Controls;