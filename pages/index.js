import Link from 'next/link';

const Home = props => (
    <div>
      <h1>Hey!</h1>
      <Link href="/sell">
        <a>Sell!</a>
      </Link>
    </div>
);
  
export default Home;
