import React from 'react';

import renderer from 'react-test-renderer';
import Paid from '../src/screens/Paid';

test('renders correctly', () => {
  const tree = renderer.create(<Paid />).toJSON();
  expect(tree).toMatchSnapshot();
});
