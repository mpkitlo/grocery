import { Fade } from '@mui/material';
import CustomersReview from './CustomersReview/CustomersReview';
import Hero from './Hero/Hero';
import PopularCategories from './PopularCategories/PopularCategories';
import EnjoyOurFreshGroceryItems from './EnjoyOurFreshGroceryItems/EnjoyOurFreshGroceryItems';

const Home = () => {
  // Scrolling Bug Fixed
  window.scroll({ top: 0 });

  return (
    <Fade in={true}>
      <main className='min-h-screen space-y-5 mb-9'>
        <Hero />
        <PopularCategories />
        <EnjoyOurFreshGroceryItems />
        <CustomersReview />
      </main>
    </Fade>
  )
};

export default Home;