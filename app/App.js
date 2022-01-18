/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
} from 'react-native';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '10%',
  },
  body: {
    width: '100%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '80%',
    height: '60%',
  },
  fullHeight: {
    height: '100%',
  },
  listItem: {
    flex: 1,
  },
  row: {
    flex: 1,
  },
  horizontalSeparator: {
    borderColor: 'black',
    borderWidth: 2,
    borderStyle: 'solid',
  },
  column: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderRight: {
    borderRightColor: 'black',
    borderRightWidth: 2,
    borderStyle: 'solid',
  },
  borderLeft: {
    borderLeftColor: 'black',
    borderLeftWidth: 2,
    borderStyle: 'solid',
  },
  cellTouchable: {
    width: '85%',
    height: '85%',
    backgroundColor: '#DDD',
    borderRadius: 20,
  },
  footer: {
    width: '100%',
    height: '10%',
  },
});

const HorizontalSeparator = () => <View style={styles.horizontalSeparator} />;

// column indexes of a one-dimensional array
const firstColumn = [0, 3, 6];
const secondColumn = [1, 4, 7];

const CellTouchable = ({item, index}) => {
  const style = [styles.column].concat(
    firstColumn.includes(index)
      ? styles.borderRight
      : secondColumn.includes(index)
      ? [styles.borderLeft, styles.borderRight]
      : styles.borderLeft,
  );
  return (
    <View style={style}>
      <TouchableOpacity
        style={styles.cellTouchable}
        onPress={() => console.log('ON PRESS! -> Item ', index)}>
        <Text>{item}</Text>
      </TouchableOpacity>
    </View>
  );
};

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <StatusBar hidden />
      <View style={styles.header} />
      <View style={styles.body}>
        <View style={styles.content}>
          <FlatList
            scrollEnabled={false}
            numColumns={3}
            data={Array(9).fill('')}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.fullHeight}
            CellRendererComponent={({children}) => (
              <View style={styles.listItem}>{children}</View>
            )}
            columnWrapperStyle={styles.row}
            ItemSeparatorComponent={() => <HorizontalSeparator />}
            renderItem={({item, index}) => (
              <CellTouchable item={item} index={index} />
            )}
          />
        </View>
      </View>
      <View style={styles.footer} />
    </SafeAreaView>
  );
};

export default App;
