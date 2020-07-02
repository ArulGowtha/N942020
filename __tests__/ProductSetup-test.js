import React from 'react';
import 'react-native';
import ProductSetup from '../src/screens/ProductSetup';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<ProductSetup />).toJSON();
  expect(tree).toMatchSnapshot();
});
