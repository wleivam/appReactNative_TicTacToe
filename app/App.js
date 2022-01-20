/**
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import type {Node} from 'react';
import {
    Container,
    InfoBar,
    Header,
    Body,
    Content,
    Footer,
} from './components/commons';
import Game from './components/Game';
import Board from './components/Board';
import { players, keyPositions } from './utils';

const App: () => Node = () => {
    const [moves, setMoves] = useState(0);
    const [data, setData] = useState(Array(9).fill(''));
    const [player, setPlayer] = useState(0);
    const [status, setStatus] = useState('playing');

    // Function for make a move in the game
    const play = (position) => {
        setData(newData => {
            newData.splice(position, 1, players[player]);
            return [...newData];
        });
        setMoves(newMoves => {
            newMoves += 1;
            return newMoves;
        });
    };

    // Function for reset the game
    const reset = () => {
        if ( moves > 0) {
            setData(Array(9).fill(''));
            setStatus('playing');
            setPlayer(0);
            setMoves(0);
        }
    };

    // Hook for validate the game state
    useEffect(() => {
        if ( moves > 0 ) {
            let playing = true;
            if ( moves >= 5 ) {
                keyPositions.forEach(positions => {
                    const winner = [...new Set(positions.map(index => data[index]))];
                    if ( winner.length === 1 && winner[0] !== '' ) {
                        setStatus('winner');
                        playing = false;
                        return;
                    }
                });
            }
            if ( moves === 9 && playing ) {
                setStatus('draw');
                playing = false;
            }
            if (playing) setPlayer(player ? 0 : 1);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [moves]);

    return (
        <Container>
            <InfoBar />
            <Header />
            <Body>
                <Content>
                    <Game
                        player={player}
                        reset={reset}
                        moves={moves}
                        status={status}
                    />
                    <Board
                        data={data}
                        play={play}
                        status={status}
                    />
                </Content>
            </Body>
            <Footer />
        </Container>
    );
};

export default App;
