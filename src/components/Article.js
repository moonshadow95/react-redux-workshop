import React from 'react';

const Article = ({title, desc}) => (
    <article>
        <h2>{title}</h2>
        {desc}
    </article>
);

export default Article;