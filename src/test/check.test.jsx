// src/test/check.test.jsx - CORRETTO
import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import '@testing-library/jest-dom';
import App from '../App.jsx';

test('renders Christmas title', () => {
  render(<App />);  // ✅ AGGIUNGI <App />
  expect(screen.getByText(/CHRISTMAS EDITION/i)).toBeInTheDocument();
});
