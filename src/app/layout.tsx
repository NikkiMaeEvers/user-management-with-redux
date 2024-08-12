// src/app/layout.tsx
import '../styles/globals.css';
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
