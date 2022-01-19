import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const ButtonCell = styled.TouchableOpacity`
    width: 85%;
    height: 85%;
    background-color: #DDD;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
`;

const ColumnCell = styled.View`
    display: flex;
    flex: 1 0 0;
    justify-content: center;
    align-items: center;
    ${props => (props.leftBorder || props.bothBorder) && `
        border-left-width: 2px;
        border-left-style: solid;
        border-left-color: #000;
    `};
    ${props => (props.rightBorder || props.bothBorder) && `
        border-right-width: 2px;
        border-right-style: solid;
        border-right-color: #000;
    `};    
`;

const GameBoard = styled.FlatList``;

const HorizontalSeparator = styled.View`
    border: 2px solid #000;
`;

const ListItem = styled.View`
    display: flex;
    flex: 1;
`;

const TextCell = styled.Text`
    font-size: 20px;
    font-weight: 900;
`;

const styles = StyleSheet.create({
    fullHeight: {
        height: '100%',
    },
    row: {
        flex: 1,
    },
});

export {
    ButtonCell,
    ColumnCell,
    GameBoard,
    HorizontalSeparator,
    ListItem,
    TextCell,
    styles,
};