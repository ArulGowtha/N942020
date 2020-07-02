import React from 'react';

import renderer from 'react-test-renderer';
import Drop from '../src/screens/Drop';

import ProductSetup from '../src/screens/ProductSetup';
import Popup from '../src/screens/Popup';

import Paid from '../src/screens/Paid';

jest.mock('react-native-image-picker', () => 'ImagePicker');

test('renders correctly', () => {
  const tree = renderer.create(<Drop />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly', () => {
  const tree = renderer.create(<ProductSetup />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly', () => {
  const tree = renderer.create(<Popup />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly', () => {
  const tree = renderer.create(<Paid />).toJSON();
  expect(tree).toMatchSnapshot();
});
