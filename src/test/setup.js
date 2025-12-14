// src/test/setup.js
import '@testing-library/jest-dom'

// Configurazioni globali opzionali per Vitest
global.ResizeObserver = class ResizeObserver {
  constructor(callback) {
    this.callback = callback;
    this.observers = [];
  }
  observe() {}
  unobserve() {}
  disconnect() {}
};

// Mock per IntersectionObserver (per animazioni)
global.IntersectionObserver = class IntersectionObserver {
  constructor(callback) {
    this.callback = callback;
    this.observers = [];
  }
  observe() { this.callback([{ isIntersecting: true }], this); }
  unobserve() {}
  disconnect() {}
};
