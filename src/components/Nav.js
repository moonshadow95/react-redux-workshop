import React from 'react';

const Nav = ({data, onClick}) => {
    return (
        <nav>
            <ol>
                {data.map(d =>
                    <li key={d.id}>
                        <button onClick={(id) => {
                            onClick(d.id)
                        }}>{d.title}</button>
                    </li>
                )}
            </ol>
        </nav>
    )
}

export default Nav;