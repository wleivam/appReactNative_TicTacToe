import 'react-native';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from '../app/App';

/*
 *  Touchable cells positions by number
 *  0|1|2
 *  3|4|5
 *  6|7|8
*/

/*
 *  First row win
 *  o|o|o
 *  x|x| 
 *  x| |
*/

test('First row win', () => {
    const { getByTestId } = render(<App />);
    
    const orderedMoves = [3,0,4,1,6,2];
    orderedMoves.forEach(movePosition => fireEvent.press(getByTestId(`cell-touchable-0${movePosition}`)));

    expect(getByTestId('game-status')).toHaveTextContent('Winner: O');
});

/*
 *  Second row win
 *   | | 
 *  x|x|x
 *  o|o|
*/

test('Second row win', () => {
    const { getByTestId } = render(<App />);
    
    const orderedMoves = [3,6,4,7,5];
    orderedMoves.forEach(movePosition => fireEvent.press(getByTestId(`cell-touchable-0${movePosition}`)));

    expect(getByTestId('game-status')).toHaveTextContent('Winner: X');
});

/*
 *  Third row win
 *  x|x| 
 *   |x| 
 *  o|o|o
*/

test('Third row win', () => {
    const { getByTestId } = render(<App />);
    
    const orderedMoves = [0,6,1,7,4,8];
    orderedMoves.forEach(movePosition => fireEvent.press(getByTestId(`cell-touchable-0${movePosition}`)));

    expect(getByTestId('game-status')).toHaveTextContent('Winner: O');
});

/*
 *  First column win
 *  x|o|
 *  x|o|
 *  x| |
*/

test('First column win', () => {
    const { getByTestId } = render(<App />);
    
    const orderedMoves = [0,1,3,4,6];
    orderedMoves.forEach(movePosition => fireEvent.press(getByTestId(`cell-touchable-0${movePosition}`)));

    expect(getByTestId('game-status')).toHaveTextContent('Winner: X');
});

/*
 *  Second column win
 *  x|o|x
 *  x|o|
 *   |o|
*/

test('Second column win', () => {
    const { getByTestId } = render(<App />);
    
    const orderedMoves = [0,1,3,4,2,7];
    orderedMoves.forEach(movePosition => fireEvent.press(getByTestId(`cell-touchable-0${movePosition}`)));

    expect(getByTestId('game-status')).toHaveTextContent('Winner: O');
});

/*
 *  Third column win
 *   |o|x
 *   |o|x
 *   | |x
*/

test('Third column win', () => {
    const { getByTestId } = render(<App />);
    
    const orderedMoves = [2,1,5,4,8];
    orderedMoves.forEach(movePosition => fireEvent.press(getByTestId(`cell-touchable-0${movePosition}`)));

    expect(getByTestId('game-status')).toHaveTextContent('Winner: X');
});

/*
 *  First diagonal win
 *  x|x|o
 *  x|o|
 *  o| |
*/

test('First diagonal win', () => {
    const { getByTestId } = render(<App />);
    
    const orderedMoves = [0,4,3,6,1,2];
    orderedMoves.forEach(movePosition => fireEvent.press(getByTestId(`cell-touchable-0${movePosition}`)));

    expect(getByTestId('game-status')).toHaveTextContent('Winner: O');
});

/*
 *  Second diagonal win
 *  x|o|
 *   |x|
 *   |o|x
*/

test('Second diagonal win', () => {
    const { getByTestId } = render(<App />);
    
    const orderedMoves = [0,1,4,7,8];
    orderedMoves.forEach(movePosition => fireEvent.press(getByTestId(`cell-touchable-0${movePosition}`)));

    expect(getByTestId('game-status')).toHaveTextContent('Winner: X');
});

/*
 *  Draw
 *  o|x|o
 *  o|x|x
 *  x|o|x
*/

test('Draw', () => {
    const { getByTestId } = render(<App />);
    
    const orderedMoves = [4,0,6,2,1,7,5,3,8];
    orderedMoves.forEach(movePosition => fireEvent.press(getByTestId(`cell-touchable-0${movePosition}`)));

    expect(getByTestId('game-status')).toHaveTextContent('Draw!');
});

/*
 *  Draw
 *  o|x|x
 *  x|o|o
 *  o|x|x
*/

test('Reset button', () => {
    const { getByTestId } = render(<App />);
    
    const orderedMoves = [2,4,1,0,8,5,3,6,7];
    orderedMoves.forEach(movePosition => fireEvent.press(getByTestId(`cell-touchable-0${movePosition}`)));

    fireEvent.press(getByTestId('reset-button'));

    expect(getByTestId('game-status')).toHaveTextContent('Next Player: X');
});
