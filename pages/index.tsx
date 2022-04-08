import Head from 'next/head';
import Sidebar from 'components/Sidebar';
import Feed from 'components/Feed';
import Views from 'components/Views';


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
