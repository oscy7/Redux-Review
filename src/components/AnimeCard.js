import React from 'react';

export default function AnimeCard(props) {
    const {title, image_url, score, rated} = props.show
    return (
        <div>
            <h2>{title}</h2>
            <div>
                <img src={image_url} alt={title}/>
            </div>
            <p>Score: {score}</p>
            <p>Rated: {rated}</p>
        </div>
    )
}
