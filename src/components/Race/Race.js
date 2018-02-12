import React, {Component} from 'react';
// import classes from './Race.css';
import { Jockey } from '../Jockey';

export const Race = () => {

    return (
    <div className='Racers'>
        <Jockey
            avatar="https://avatars1.githubusercontent.com/u/3757315?v=4"
            color="red">
        </Jockey>

        <Jockey
            avatar="https://avatars1.githubusercontent.com/u/3757315?v=4"
            color="green">
        </Jockey>

        <Jockey
            avatar="https://avatars1.githubusercontent.com/u/3757315?v=4"
            color="blue">
        </Jockey>

        <Jockey
            avatar="https://avatars1.githubusercontent.com/u/3757315?v=4"
            color="yellow">
        </Jockey>
    </div>
    );
}