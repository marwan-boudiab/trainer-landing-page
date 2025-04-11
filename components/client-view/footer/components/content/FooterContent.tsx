import Socials from '@/components/client-view/socials/Socials';
import useAdminStore from '@/lib/store';

// const description =
//   'Welcome to Alex Calisthenics, where we believe in the power of bodyweight training to transform lives. Join us to learn, train, and achieve your fitness goals';

const FooterContent = () => {
  // console.log('FooterContent Rendered on client');
  const { allData: data } = useAdminStore(state => ({ allData: state.allData?.global }));

  if (!data) return null;
  return (
    <div className="flex flex-col gap-4">
      <h4 className="h4 text-center sm:mb-4">{data.name}</h4>
      <p className="text-center">{data.footerDescription}</p>
      <Socials displayContent={true} iconStyles={'social_icons'} />
    </div>
  );
};
export default FooterContent;
