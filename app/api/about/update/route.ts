import connectToDB from '@/database';
import About from '@/models/About';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function PUT(req: NextRequest) {
  try {
    await connectToDB();

    const extractData = await req.json();
    const { _id, icon, title, subtitle } = extractData;

    const updateData = await About.findOneAndUpdate({ _id: _id }, { icon, title, subtitle }, { new: true });

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
