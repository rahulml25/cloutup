import Head from 'next/head';
import Sidebar from 'components/Sidebar';
import Feed from 'components/Feed';
import Views from 'components/Views';


const Home = () => {
    return (
      <div class="flex">
    	<Sidebar/>
    	<Feed/>
    	<Views/>
      </div>
    );
}

export default Home;
