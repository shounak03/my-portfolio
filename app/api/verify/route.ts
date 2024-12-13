
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    const correctPassword = process.env.ADMIN_PASSWORD;

    if (password === correctPassword) {
      const expirationDate = new Date();
      expirationDate.setHours(expirationDate.getHours() + 48);

      return NextResponse.json(
        { success: true },
        { 
          status: 200,
          headers: {
            'Set-Cookie': `authenticated=true; path=/; HttpOnly; SameSite=Strict; Expires=${expirationDate.toUTCString()}`
          }
        }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Incorrect password' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}