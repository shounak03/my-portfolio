// app/api/messages/[id]/route.ts
import { NextResponse } from 'next/server';


import { connectDB } from '@/util/connetDB';
import { Message } from '@/model/message.modal';

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const { id } = params;
    const body = await request.json();

    const updatedMessage = await Message.findByIdAndUpdate(
      id,
      { isRead: body.isRead },
      { new: true }
    );

    if (!updatedMessage) {
      return NextResponse.json(
        { error: 'Message not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedMessage);
  } catch (error) {
    console.error('Error updating message:', error);
    return NextResponse.json(
      { error: 'Failed to update message' },
      { status: 500 }
    );
  }
}