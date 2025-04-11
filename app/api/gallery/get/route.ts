import connectToDB from '@/database';
import Gallery from '@/models/Gallery';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    await connectToDB();
    const extractData = await Gallery.find({});

    if (extractData) {
      return NextResponse.json({ success: true, data: extractData });
    } else {
      return NextResponse.json({ success: false, message: 'Something went wrong!' });
    }
  } catch (e) {
    console.log(e);

    return NextResponse.json({ success: false, message: 'Something went wrong!' });
  }
}
