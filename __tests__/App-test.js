/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../app/App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('App initial render', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
});
