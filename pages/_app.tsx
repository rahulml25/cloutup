import 'styles/global.css';
import Navbar 'components/navbar';

const App = ({ component, ...pageProps }) => (
  <>
    <Navbar />
    <Component {...pageProps} />
  </>
);

export default App;
