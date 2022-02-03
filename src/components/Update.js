import React, {useState} from 'react';

const Update = ({id, title, desc, onSubmit}) => {
    const [value, setValue] = useState({id:id, title:title, desc:desc})
    const onChange = (e) => {
        setValue( {...value, [e.target.name]: e.target.value})
    }
    return (
        <form onSubmit={
            (e) => {
                e.preventDefault()
                onSubmit(Number(e.target.id.value), e.target.title.value, e.target.desc.value)
            }
        }>
            <input type="hidden" name="id" value={id}/>
            <p>
                <input type="text" name='title' placeholder='Title' value={value.title} onChange={onChange}/>
            </p>
            <p><textarea name="desc" cols="30" rows="10" value={value.desc} onChange={onChange}></textarea></p>
            <input type="submit" value='Submit'/>
        </form>
    );
}

export default Update;