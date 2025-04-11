import connectToDB from '@/database';
import About from '@/models/About';
import Gallery from '@/models/Gallery';
import Global from '@/models/Global';
import Hero from '@/models/Hero';
import Plan from '@/models/Plan';
import Social from '@/models/Social';
import Testimonial from '@/models/Testimonial';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    await connectToDB();

    const globalData = await Global.findOne({});
    const socialData = await Social.find({});
    const heroData = await Hero.findOne({});
    const aboutData = await About.find({});
    const galleryData = await Gallery.find({});
    const planData = await Plan.find({});
    const testimonialData = await Testimonial.find({});

    const allData = { global: globalData, social: socialData, hero: heroData, about: aboutData, gallery: galleryData, plan: planData, testimonial: testimonialData };

    // Check if all collections are fetched properly
    if (globalData && socialData && heroData && aboutData && galleryData && planData && testimonialData) return NextResponse.json({ success: true, data: allData });
    else return NextResponse.json({ success: false, message: 'Something went wrong!' });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ success: false, message: 'Something went wrong!' });
  }
}
