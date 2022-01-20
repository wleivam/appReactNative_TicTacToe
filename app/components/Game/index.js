import React from 'react';
import {
    Container,
    Indicators,
    ResetButton,
    ButtonText,
} from './style';
import { players, constants } from '../../utils';

const Game = ({
    player,
    reset,
    moves,
    status,
}) => {
    return (
        <Container>
            <Indicators>{constants[status] + (status !== 'draw' ? players[player] : '')}</Indicators>
            <ResetButton
                onPress={reset}
                hidden={moves === 0}
            >
                <ButtonText>{constants.resetButton}</ButtonText>
            </ResetButton>
        </Container>
    );
};

export default Game;
