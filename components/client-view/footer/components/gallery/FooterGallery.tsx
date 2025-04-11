import { CldImage } from 'next-cloudinary';

const FooterGallery = ({ gallery }: GallerySectionProps) => {
  // console.log('FooterGallery Rendered on client');
  return (
    <div className="hidden lg:block">
      <h4 className="h4 mb-4 text-center">Gallery</h4>
      {/* gallery imgs */}
      <div className="flex flex-wrap justify-center gap-2">
        {gallery.map(item => (
          <div key={item._id} className="relative">
            {/* overlay */}
            <div className="absolute top-0 z-10 h-full w-full bg-black/20"></div>
            <CldImage src={item.img} width={200} height={100} className="rounded-xl border-2 object-cover" alt={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterGallery;
