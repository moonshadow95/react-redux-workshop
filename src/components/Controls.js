import React from 'react';

const Controls = ({selected_id, onClick}) => (
    <ul>
        <li><a href="create" onClick={(e) => {
            e.preventDefault()
            onClick('CREATE')
        }}>Create</a></li>
        {selected_id && <>
            <li><a href="update" onClick={(e) => {
                e.preventDefault()
                onClick('UPDATE')
            }}>Update</a></li>
            <li><input type='button' value='Delete' onClick={() => {
                onClick('DELETE_PROCESS')
            }}/></li>
        </>
        }
    </ul>
);

export default Controls;