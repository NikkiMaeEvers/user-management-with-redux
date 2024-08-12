'use client';

import { Provider } from 'react-redux';
import store from '../redux/store';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </Provider>
  );
};

export default RootLayout;
