/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
    Container,
    InfoBar,
    Header,
    Body,
    Content,
    Footer,
} from './components/commons';
import Board from './components/Board';

const App: () => Node = () => {
    return (
        <Container>
            <InfoBar />
            <Header />
            <Body>
                <Content>
                    <Board />
                </Content>
            </Body>
            <Footer />
        </Container>
    );
};

export default App;
