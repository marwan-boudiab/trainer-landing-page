import connectToDB from '@/database';
import Testimonial from '@/models/Testimonial';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function PUT(req: NextRequest) {
  try {
    await connectToDB();

    const extractData = await req.json();
    const { _id, img, name, message } = extractData;

    const updateData = await Testimonial.findOneAndUpdate({ _id: _id }, { img, name, message }, { new: true });

    if (updateData) {
      return NextResponse.json({ success: true, message: 'updated successfully' });
    } else {
      return NextResponse.json({ success: false, message: 'Something went wrong!' });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({ success: false, message: 'Something went wrong!' });
  }
}
