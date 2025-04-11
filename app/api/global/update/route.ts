import connectToDB from '@/database';
import Global from '@/models/Global';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function PUT(req: NextRequest) {
  try {
    await connectToDB();

    const extractData = await req.json();
    const { _id, name, aboutSubtitle, footerDescription, plansImg } = extractData;
    const updateData = await Global.findOneAndUpdate({ _id: _id }, { name, aboutSubtitle, footerDescription, plansImg }, { new: true });

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
