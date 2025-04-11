'use client';
import useAdminStore from '@/lib/store';
import HeroStructure from './components/structure/HeroStructure';

const Hero = () => {
  const { allData } = useAdminStore(state => ({ allData: state.allData.hero! }));
  return <HeroStructure subtitle={allData.subtitle} title={allData.title} description={allData.description} img={allData.img} />;
};

export default Hero;

// const heroData: HeroType = {
//   _id: 'hero1',
//   title: 'Unlock Your Strength and Agility with Personalized Coaching',
//   subtitle: 'Master Calisthenics with [Trainer Name]',
//   description: `As a dedicated calisthenics trainer, I specialize in transforming lives through bodyweight training. With my guidance, you'll build strength, flexibility, and resilience, tailored to your unique fitness goals.`,
//   img: '/assets/img/hero/planche.jpeg',
// };