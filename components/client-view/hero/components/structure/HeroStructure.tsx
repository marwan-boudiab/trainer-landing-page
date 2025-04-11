import { CldImage } from 'next-cloudinary';
import Motion from '@/components/client-view/motion/MotionComp';
import Socials from '@/components/client-view/socials/Socials';
import AnimatedButton from '@/components/client-view/ui/button/AnimatedButton';
import ScrollLink from '@/components/client-view/navigation/link/ScrollLink';

const HeroStructure = ({ subtitle, title, description, img }: HeroStructureProps) => {
  //   console.log('HeroStructure Rendered on client');
  return (
    <Motion as="section" delay={0.1} className="relative pt-[5rem] md:py-[10rem]" id="home">
      <div className="absolute left-0 top-0 -z-10 h-full w-full">
        {/* overlay */}
        <div className="absolute top-0 z-10 h-full w-full bg-black/40"></div>
        <CldImage
          src={img}
          alt="Hero image"
          sizes={`(max-width: 640px) 640px,(max-width: 768px) 768px, (max-width: 1024px) 1024px, (max-width: 1280px) 1280px, 1920px`}
          className="object-cover"
          fill
          crop="fill"
          gravity="auto"
          quality="auto"
          format="auto"
        />
      </div>
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-between xl:flex-row">
          {/* text */}
          <div className="z-30 text-center xl:text-left">
            <Motion as="h1" delay={0.2} className="h6 sm:h5 text-accent">
              {subtitle}
            </Motion>
            <Motion as="h1" delay={0.3} className="h1 xl:w-[52rem]">
              {title}
            </Motion>
            <Motion as="p" delay={0.4} className="my-5 w-full text-center text-[14px] text-white sm:text-[20px] xl:max-w-2xl xl:text-left">
              {description}
            </Motion>
            {/* btn and socials */}
            <Motion as="div" delay={0.5} className="flex flex-col items-center gap-8 xl:flex-row">
              <ScrollLink key={`hero_btn`} to={'prices'} smooth spy>
                <AnimatedButton text="Get Started" containerStyles="w-[196px] h-[62px]" />
              </ScrollLink>
              {/* socials */}
              <div className="mb-8 gap-4 xl:mb-0">
                <Socials displayContent={false} direction="row" iconStyles={'social_icons hover:text-primary'} />
              </div>
            </Motion>
          </div>
        </div>
      </div>
    </Motion>
  );
};

export default HeroStructure;
