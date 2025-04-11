"use client"

import Link from 'next/link';

import { usePathname } from 'next/navigation';

import useAdminStore from '@/lib/store';

import { Instagram, Phone, MapPin, Facebook, Verified, Trash, Pencil } from 'lucide-react';

// const socialsData: SocialType[] = [
//   { _id: 'social-1', icon: 'MapPin', text: 'Mount Nation Governorate, Nation', href: null },
//   { _id: 'social-2', icon: 'Phone', text: '(961) 00 000 000', href: '961 00 000 000' },
//   { _id: 'social-3', icon: 'Instagram', text: 'trainer.calisthenics', href: 'https://www.instagram.com/trainer.calisthenics' },
// ];

const iconMapping: IconMapping = { MapPin, Phone, Instagram, Facebook };

const Socials = ({ iconStyles, displayContent = true, direction = 'column' }: SocialsProps) => {
  const pathname = usePathname();
  const { currentSelectedTab } = useAdminStore(state => ({ currentSelectedTab: state.currentSelectedTab }));
  const { deleteDataById } = useAdminStore(state => ({ deleteDataById: state.deleteDataById }));
  const { updateData } = useAdminStore(state => ({ updateData: state.updateData }));
  const handleDeleteSocial = async (id: string) => await deleteDataById(id);
  const handleUpdateSocial = (data: Partial<FeatureType>) => updateData(data);
  const { allData: socials } = useAdminStore(state => ({ allData: state.allData.social }));

  if (!socials) return null;

  const filteredSocialsData = displayContent ? socials : socials.filter(item => item.href !== null);

  return (
    <ul className={`flex ${direction === 'row' ? 'flex-row' : 'flex-col'} justify-center gap-2 sm:gap-6`}>
      {filteredSocialsData?.map(item => {
        const IconComponent = iconMapping[item.icon];

        return (
          <li key={item._id} className="flex items-center justify-center gap-4">
            {item.href ? (
              <Link className="flex items-center justify-center gap-4 hover:cursor-pointer" href={item.icon === 'Phone' ? `tel:+${item.href.trim()}` : item.href} target="_blank" rel="noopener noreferrer">
                <span className={iconStyles}>{IconComponent ? <IconComponent /> : <Verified />}</span>
                {displayContent && <span className="sm:text-md text-sm">{item.text}</span>}
              </Link>
            ) : (
              <>
                <span className={iconStyles}>{IconComponent ? <IconComponent /> : <Verified />}</span>
                {displayContent && <span className="sm:text-md text-sm">{item.text}</span>}
              </>
            )}
            {pathname === '/admin' && currentSelectedTab === 'social' && (
              <>
                <Trash className="size-8 cursor-pointer text-white hover:cursor-pointer hover:text-accent" onClick={() => handleDeleteSocial(item._id!)} />
                <Pencil className="size-8 cursor-pointer text-white hover:cursor-pointer hover:text-accent" onClick={() => handleUpdateSocial(item)} />
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
