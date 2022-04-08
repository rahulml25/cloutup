import 'styles/global.css';
import Navbar from 'components/navbar';

const App = ({ Component, ...pageProps }) => (
  <>
    <Navbar />
    <Component {...pageProps} />
  </>
);

export default App;
