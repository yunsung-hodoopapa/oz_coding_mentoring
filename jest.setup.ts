import '@testing-library/jest-dom';
import React, { ReactElement } from 'react';

// Mock next/router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: {},
      asPath: '',
      push: jest.fn(),
      replace: jest.fn(),
    };
  },
}));

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: function Image(props: any): ReactElement {
    return React.createElement('img', props);
  },
}));
