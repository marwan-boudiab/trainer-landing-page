import { create } from 'zustand';
import { addData, getData, updateData, deleteData, getAllData } from '@/services';

const tabs = ['global', 'about', 'gallery', 'plan', 'testimonial', 'social', 'hero'];

interface AdminState {
  currentSelectedTab: keyof AllData;
  heroViewFormData: Partial<HeroType>;
  aboutViewFormData: Partial<FeatureType>;
  galleryViewFormData: Partial<GalleryType>;
  planViewFormData: planType;
  testimonialViewFormData: TestimonialType;
  socialViewFormData: Partial<SocialType>;
  globalViewFormData: Partial<GlobalType>;
  allData: AllData;
  update: boolean;
  authUser: boolean;
  // loading: boolean;
  setCurrentSelectedTab: (tab: keyof AllData) => void;
  setFormData: (tab: keyof AllData, data: any) => void;
  extractCurrentSelectedTabData: () => Promise<void>;
  extractAllData: () => Promise<void>;
  handleSaveData: () => Promise<void>;
  resetFormDatas: () => void;
  setUpdate: (update: boolean) => void;
  setAuthUser: (auth: boolean) => void;
  deleteDataById: (id: string) => Promise<void>;
  updateData: (formData: any) => void;
  // setLoading: (loading: boolean) => void;
}

export interface AllData {
  global?: GlobalType;
  hero?: HeroType;
  about?: FeatureType[];
  gallery?: GalleryType[];
  plan?: planType[];
  testimonial?: TestimonialType[];
  social?: SocialType[];
}

const initialHeroFormData: Partial<HeroType> = { title: '', subtitle: '', description: '', img: '' };
const initialAboutFormData: Partial<FeatureType> = { icon: '', title: '', subtitle: '' };
const initialGalleryFormData: Partial<GalleryType> = { title: '', img: '', description: '' };
const initialPlanFormData: planType = { title: '', price: '', benefits: [] };
const initialTestimonialFormData: TestimonialType = { img: '', name: '', message: '' };
const initialSocialFormData: Partial<SocialType> = { icon: '', text: '', href: '' };
const initialGlobalFormData: GlobalType = { name: '', aboutSubtitle: '', footerDescription: '', plansImg: '' };

const useAdminStore = create<AdminState>((set, get) => ({
  currentSelectedTab: 'hero',
  heroViewFormData: initialHeroFormData,
  aboutViewFormData: initialAboutFormData,
  galleryViewFormData: initialGalleryFormData,
  planViewFormData: initialPlanFormData,
  testimonialViewFormData: initialTestimonialFormData,
  socialViewFormData: initialSocialFormData,
  globalViewFormData: initialGlobalFormData,
  allData: {},
  update: false,
  authUser: false,
  // loading: false,
  // setLoading: (loading: boolean) => set({ loading }),
  setCurrentSelectedTab: (tab: keyof AllData) => set({ currentSelectedTab: tab }),
  setFormData: (tab: keyof AllData, data: Partial<FeatureType> | Partial<GalleryType> | planType | TestimonialType) => set(state => ({ ...state, [`${tab}ViewFormData`]: data })),
  setUpdate: (update: boolean) => set({ update }),
  setAuthUser: (authUser: boolean) => set({ authUser }),
  extractCurrentSelectedTabData: async () => {
    const { currentSelectedTab, setFormData, setUpdate } = get();
    const response = await getData(currentSelectedTab);

    if ((currentSelectedTab === 'hero' || currentSelectedTab === 'global') && response && response && response.data) {
      setUpdate(true);
      setFormData(currentSelectedTab, response.data);
    }

    if (response?.success) {
      set(state => ({
        ...state,
        allData: {
          ...state.allData,
          [state.currentSelectedTab]: response.data,
        },
      }));
    }
    // console.log(get().allData);
  },

  // extractAllData: async () => {
  //   const { setLoading } = get();
  //   setLoading(true);
  //   // const { setFormData } = get();
  //   for (const tab of tabs) {
  //     try {
  //       const response = await getData(tab);
  //       if (response?.success && response.data) {
  //         set(state => ({
  //           ...state,
  //           allData: {
  //             ...state.allData,
  //             [tab]: response.data,
  //           },
  //         }));
  //       }
  //     } catch (error) {
  //       console.error(`Error fetching data for tab ${tab}:`, error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   // console.log(get().allData);
  // },
  extractAllData: async () => {
    // const { setLoading } = get();
    // setLoading(true);

    try {
      const data = await getAllData();

      if (data) {
        tabs.forEach(tab => {
          if (data[tab]) {
            set(state => ({
              ...state,
              allData: {
                ...state.allData,
                [tab]: data[tab],
              },
            }));
          }
        });
      } else {
        console.error('Failed to fetch all data');
      }
    } catch (error) {
      console.error('Error fetching all data:', error);
    } finally {
      // setLoading(false);
    }
  },

  handleSaveData: async () => {
    const { currentSelectedTab, heroViewFormData, aboutViewFormData, galleryViewFormData, planViewFormData, testimonialViewFormData, socialViewFormData, globalViewFormData, update, extractCurrentSelectedTabData, resetFormDatas } = get();

    const dataMap: Record<string, any> = {
      global: globalViewFormData,
      hero: heroViewFormData,
      about: aboutViewFormData,
      gallery: galleryViewFormData,
      plan: planViewFormData,
      testimonial: testimonialViewFormData,
      social: socialViewFormData,
    };

    const response = update ? await updateData(currentSelectedTab, dataMap[currentSelectedTab]) : await addData(currentSelectedTab, dataMap[currentSelectedTab]);

    if (response.success) {
      resetFormDatas();
      extractCurrentSelectedTabData();
    }
  },

  resetFormDatas: () => {
    set({
      // globalViewFormData: initialGlobalFormData,
      // heroViewFormData: initialHeroFormData,
      aboutViewFormData: initialAboutFormData,
      galleryViewFormData: initialGalleryFormData,
      planViewFormData: initialPlanFormData,
      testimonialViewFormData: initialTestimonialFormData,
      socialViewFormData: initialSocialFormData,
    }),
      set({ update: false });
  },
  deleteDataById: async (id: string) => {
    const { currentSelectedTab, resetFormDatas, extractCurrentSelectedTabData } = get();

    const response = await deleteData(currentSelectedTab, id);
    if (response?.success) {
      resetFormDatas();
      extractCurrentSelectedTabData();
    }
  },
  // updateData: (formData: any) => {
  //   const { currentSelectedTab } = get();

  //   switch (currentSelectedTab) {
  //     case 'global':
  //       set({ globalViewFormData: formData, update: true });
  //       break;
  //     case 'hero':
  //       set({ heroViewFormData: formData, update: true });
  //       break;
  //     case 'about':
  //       set({ aboutViewFormData: formData, update: true });
  //       break;
  //     case 'gallery':
  //       set({ galleryViewFormData: formData, update: true });
  //       break;
  //     case 'plan':
  //       set({ planViewFormData: formData, update: true });
  //       break;
  //     case 'testimonial':
  //       set({ testimonialViewFormData: formData, update: true });
  //       break;
  //     case 'social':
  //       set({ socialViewFormData: formData, update: true });
  //       break;
  //     default:
  //       break;
  //   }
  // },
  updateData: (formData: any) => {
    const { currentSelectedTab } = get();
    const key = `${currentSelectedTab}ViewFormData`;

    set(state => ({
      ...state,
      [key]: formData,
      update: true,
    }));
  },
}));

export default useAdminStore;
