import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';


export default function ProjectsCarousel() {
    const items = [
        {
            name: 'Aya Bouchiha',
            description: 'Full Stack Web Developer',
        },
        {
            name: 'John Doe',
            description: 'Author',
        },
        {
            name: 'Pitsu Coma',
            description: 'Math Student',
        },
    ];

    return (
        <Carousel animation='slide' >
            {items.map((item, i) => (
                <Item key={i} {...item} />
            ))}
           
        </Carousel>
    );
}

const Item = ({name, description}) => {
    return (
        <><Paper>
            <h2>{name}</h2>
            <p>{description}</p>
            <Button>more info...</Button>
        </Paper></>
    );
};