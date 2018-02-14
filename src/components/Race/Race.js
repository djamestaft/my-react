import React from 'react';
import classes from './Race.css';
import { Jockey } from '../Jockey';
import jsonData from '../../team.json';

export const Race = (props) => {
    
    if (props.gameStarted) { 
        let random = () => Math.floor(Math.random() * jsonData.length);
        
        let arrayJockeys = [
            { url: jsonData[random()].avatar_url, color: "#E57373" },
            { url: jsonData[random()].avatar_url, color: "#F06292" },
            { url: jsonData[random()].avatar_url, color: "#64B5F6" },
            { url: jsonData[random()].avatar_url, color: "#FFB74D" }
        ];

        return (
            <div>
                { 
                arrayJockeys.map(person => {
                    return (
                        <Jockey avatar={ person.url } color={ person.color }/>
                    );
                })
                }
            </div>
        );

    } else {
        return (
            <h1>Start the race by clicking the "Start Race" button!</h1>
        );
    }
}