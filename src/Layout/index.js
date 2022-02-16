//Layout
import Header from './Header';
import Footer from './Footer';

const index = ({ activePage, children }) => {
  return (
    <div>
      <Header activePage={activePage} />
      {children}
      <Footer />
    </div>
  );
};

export default index;
