import connectToDB from '@/database';
import Testimonial from '@/models/Testimonial';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function DELETE(req: NextRequest) {
  try {
    await connectToDB();
    const { _id } = await req.json();

    if (!_id) {
      return NextResponse.json({ success: false, message: 'ID is required' });
    }

    const deleteResult = await Testimonial.findByIdAndDelete(_id);

    if (deleteResult) {
      return NextResponse.json({ success: true, message: 'Data deleted successfully' });
    } else {
      return NextResponse.json({ success: false, message: 'No record found with the given ID' });
    }
  } catch (e) {
    console.log(e);

    return NextResponse.json({ success: false, message: 'Something went wrong!' });
  }
}
