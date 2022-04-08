import Head from 'next/head';
import Sidebar from 'components/Sidebar';
import Feed from 'components/Feed';
import Views from 'components/Views';


const Home = () => {
    return (
      <div className="flex">
        <Head>
          <title>Facebook</title>
        </Head>
    	<Sidebar/>
    	<Feed/>
    	<Views/>
      </div>
    );
}

export default Home;
