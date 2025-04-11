import connectToDB from '@/database';
import Admin from '@/models/Admin';
import { compare, hash } from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const { name, password } = await req.json();

    const checkAdmin = await Admin.findOne({ name });

    if (!checkAdmin) return NextResponse.json({ success: false, message: 'Admin name is not present' });

    const hashPassword = await hash(checkAdmin.password, 12);
    const checkPassword = await compare(password, hashPassword);

    if (!checkPassword) return NextResponse.json({ success: false, message: 'Wrong password' });

    return NextResponse.json({ success: true, message: 'Login successfull' });
  } catch (e) {
    return NextResponse.json({ success: false, message: 'Something went wrong!' });
  }
}
