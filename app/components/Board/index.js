import React from 'react';
import {
    ButtonCell,
    ColumnCell,
    GameBoard,
    HorizontalSeparator,
    ListItem,
    TextCell,
    styles,
} from './style';

// column indexes of a one-dimensional array
const firstColumn = [0, 3, 6];
const secondColumn = [1, 4, 7];
const thirdColumn = [2, 5, 8];

const CellTouchable = ({item, index}) => {
    return (
        <ColumnCell
            rightBorder={firstColumn.includes(index)}
            bothBorder={secondColumn.includes(index)}
            leftBorder={thirdColumn.includes(index)}
        >
            <ButtonCell onPress={() => console.log('ON PRESS! -> Item ', index)}>
                <TextCell>{item}</TextCell>
            </ButtonCell>
        </ColumnCell>
    );
};

const Board = () => (
    <GameBoard
        scrollEnabled={false}
        numColumns={3}
        data={Array(9).fill('')}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.fullHeight}
        CellRendererComponent={({children}) => (
            <ListItem>{children}</ListItem>
        )}
        columnWrapperStyle={styles.row}
        ItemSeparatorComponent={() => <HorizontalSeparator />}
        renderItem={({item, index}) => (
            <CellTouchable item={item} index={index} />
        )}
    />
);

export default Board;
