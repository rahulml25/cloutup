import Head from 'next/head';
import Sidebar from 'components/sidebar';
import Feed from 'components/feed';
import Views from 'components/views';


const Home = () => {
    return (
      <>
        <Head>
          <title>Facebook</title>
        </Head>

        <main className="flex h-screen bg-gray-100 overflow-hidden">
    	  <Sidebar/>
    	  <Feed/>
    	  <Views/>
        </main>
      </>
    );
}

export default Home;
