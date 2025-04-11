import connectToDB from '@/database';
import Gallery from '@/models/Gallery';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function PUT(req: NextRequest) {
  try {
    await connectToDB();

    const extractData = await req.json();
    const { _id, title, img, description } = extractData;

    const updateData = await Gallery.findOneAndUpdate({ _id: _id }, { title, img, description }, { new: true });

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
