// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { connectDB } from '@/util/connetDB';
import { Message } from '@/model/message.modal';

export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();
    const { name, email, message } = body;

    // Create new message document
    const newMessage = new Message({
      name,
      email,
      message
    });

    // Save to database
    await newMessage.save();

    return NextResponse.json(
      { message: 'Message saved successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving message:', error);
    return NextResponse.json(
      { error: 'Failed to save message' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    

    const messages = await Message.find({})
      .sort({ createdAt: -1 })
      .select('-__v'); 
    
    return NextResponse.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    );
  }
}