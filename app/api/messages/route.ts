// app/api/messages/route.ts
import { Message } from '@/model/message.modal';
import { connectDB } from '@/util/connetDB';
import { NextResponse } from 'next/server';


export async function GET() {
  try {
    await connectDB();
    
    // Fetch all messages, sorted by newest first
    const messages = await Message.find({})
      .sort({ createdAt: -1 })
      .select('-__v'); // Exclude the version key
    
    return NextResponse.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    );
  }
}

// Optional: Add endpoint to handle deleting messages
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Message ID is required' },
        { status: 400 }
      );
    }

    await connectDB();
    
    const deletedMessage = await Message.findByIdAndDelete(id);
    
    if (!deletedMessage) {
      return NextResponse.json(
        { error: 'Message not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Message deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting message:', error);
    return NextResponse.json(
      { error: 'Failed to delete message' },
      { status: 500 }
    );
  }
}

// Optional: Add endpoint to get message statistics
export async function HEAD() {
  try {
    await connectDB();
    
    const totalMessages = await Message.countDocuments();
    const unreadMessages = await Message.countDocuments({ isRead: false });
    
    return NextResponse.json({
      total: totalMessages,
      unread: unreadMessages
    });
  } catch (error) {
    console.error('Error fetching message stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch message statistics' },
      { status: 500 }
    );
  }
}