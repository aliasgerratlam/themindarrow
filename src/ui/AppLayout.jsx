import Header from './Header';
import Footer from './Footer-2';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
