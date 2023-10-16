import React from 'react';
import axiosInstance, {baseURL} from '../src/services/axiosConfig';
import {render} from '@testing-library/react-native';
import {ItemProperty} from '../src/component/characterDetail';

test('API POST request with correct credentials returns status code 200', async () => {
  const response = await axiosInstance.get(baseURL);
  expect(response.status).toBe(200);
});

const mockLabel = 'Status';
const mockValue = 'Alive';

describe('ItemProperty Component', () => {
  it('should render with label and value', () => {
    const {getByText} = render(
      <ItemProperty label={mockLabel} value={mockValue} />,
    );

    const labelElement = getByText(`${mockLabel}:`);
    const valueElement = getByText(mockValue);

    expect(labelElement).toBeDefined();
    expect(valueElement).toBeDefined();
  });
});
