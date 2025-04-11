import connectToDB from '@/database';
import Plan from '@/models/Plan';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function PUT(req: NextRequest) {
  try {
    await connectToDB();

    const extractData = await req.json();
    const { _id, title, price, benefits } = extractData;

    const updateData = await Plan.findOneAndUpdate({ _id: _id }, { title, price, benefits }, { new: true });

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
