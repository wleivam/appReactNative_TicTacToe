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
import {
    firstColumn,
    secondColumn,
    thirdColumn,
    finishedStates,
} from '../../utils';

const CellTouchable = ({
    item,
    index,
    play,
    status,
}) => (
    <ColumnCell
        rightBorder={firstColumn.includes(index)}
        bothBorder={secondColumn.includes(index)}
        leftBorder={thirdColumn.includes(index)}
    >
        <ButtonCell
            onPress={() => play(index)}
            disabled={item.length || finishedStates.includes(status)}
        >
            <TextCell>{item}</TextCell>
        </ButtonCell>
    </ColumnCell>
);

const Board = ({
    data,
    play,
    status,
}) => (
    <GameBoard
        scrollEnabled={false}
        numColumns={3}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.fullHeight}
        CellRendererComponent={({children}) => (
            <ListItem>{children}</ListItem>
        )}
        columnWrapperStyle={styles.row}
        ItemSeparatorComponent={() => <HorizontalSeparator />}
        renderItem={({item, index}) => (
            <CellTouchable
                item={item}
                index={index}
                play={play}
                status={status}
            />
        )}
    />
);

export default Board;
