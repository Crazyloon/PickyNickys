import { Jumbotron } from 'reactstrap';
import PictureInfoCard from "./PictureInfoCard";

const Home = () => {
  return ( 
    <>
      <img src="images/brand_full.jpg" className="hero"/>
      <Jumbotron className="bg-secondary-dark">
        <h1>Welcome to Picky Nicky's Bakery</h1>
        <p className="lead">I'm very picky about selecting the best ingredients for all of my sweets, so I can provide happiness with every bite.</p>
        <hr className="my-2" />
        <p>I share all of my recipies so you can make the best of Picky Nicky's for your family.</p>
        <button className="button button-primary">Latest Recipies</button>
      </Jumbotron>
      <PictureInfoCard imgName="chocolate_chip_cookies.jpg" imgAlt="Extra Large Chocolate Chip Cookies" description={'My extra large chocolate chip cookies are a dream come true. These are the first item I ever baked, before I knew there were any "rules" about standard cookie sizes. They don\'t drive much of a profit, but provide a lot of happiness!'}/>
    </>
  );
}
 
export default Home;