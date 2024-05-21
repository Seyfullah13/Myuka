import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

describe('Barcode search bar', () => {
  it('accepts only numbers', () => {
    render(<App />);
    const barcodeInput = screen.getByLabelText('Code-barres');

    // Simulate typing a non-number value
    fireEvent.change(barcodeInput, { target: { value: 'ABC123' } });
    // Expect the input value to be empty because non-numeric characters are removed
    expect(barcodeInput.value).toBe('');

    // Simulate typing a number value
    fireEvent.change(barcodeInput, { target: { value: '123456' } });
    // Expect the input value to be the entered number
    expect(barcodeInput.value).toBe('123456');
  });
});
