import React from 'react';

import renderer from 'react-test-renderer';
import Popup from '../src/screens/Popup';

test('renders correctly', () => {
  const tree = renderer.create(<Popup />).toJSON();
  expect(tree).toMatchSnapshot();
});
