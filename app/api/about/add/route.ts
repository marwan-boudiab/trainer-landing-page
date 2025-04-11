import connectToDB from '@/database';
import About from '@/models/About';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const extractData = await req.json();
    const saveData = await About.create(extractData);

    if (saveData) return NextResponse.json({ success: true, message: 'Data saved successfully' });
    else return NextResponse.json({ success: false, message: 'Something went wrong!' });
  } catch (e) {
    console.log(e);

    return NextResponse.json({
      success: false,
      message: 'Something went wrong!',
    });
  }
}
