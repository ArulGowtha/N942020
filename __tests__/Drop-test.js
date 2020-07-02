import React from 'react';

import renderer from 'react-test-renderer';
import Drop from '../src/screens/Drop';

jest.mock('react-native-image-picker', () => 'ImagePicker');

test('renders correctly', () => {
  const tree = renderer.create(<Drop />).toJSON();
  expect(tree).toMatchSnapshot();
});
