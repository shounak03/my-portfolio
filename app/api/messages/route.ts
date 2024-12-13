// app/api/messages/route.ts
import { Message } from '@/model/message.modal';
import { connectDB } from '@/util/connetDB';
import { NextRequest, NextResponse } from 'next/server';


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
export async function PATCH(
  req: NextRequest,

) {
  try {
    await connectDB();
    const id = req.nextUrl.searchParams.get("id");
    console.log(id);
    
    const body = await req.json();
    console.log("body",body);
    

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

// export async function DELETE(request: Request) {
//   try {
//     const { searchParams } = new URL(request.url);
//     const id = searchParams.get('id');

//     if (!id) {
//       return NextResponse.json(
//         { error: 'Message ID is required' },
//         { status: 400 }
//       );
//     }

//     await connectDB();
    
//     const deletedMessage = await Message.findByIdAndDelete(id);
    
//     if (!deletedMessage) {
//       return NextResponse.json(
//         { error: 'Message not found' },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json(
//       { message: 'Message deleted successfully' },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error('Error deleting message:', error);
//     return NextResponse.json(
//       { error: 'Failed to delete message' },
//       { status: 500 }
//     );
//   }
// }


// // export async function HEAD() {
// //   try {
// //     await connectDB();
    
// //     const totalMessages = await Message.countDocuments();
// //     const unreadMessages = await Message.countDocuments({ isRead: false });
    
// //     return NextResponse.json({
// //       total: totalMessages,
// //       unread: unreadMessages
// //     });
// //   } catch (error) {
// //     console.error('Error fetching message stats:', error);
// //     return NextResponse.json(
// //       { error: 'Failed to fetch message statistics' },
// //       { status: 500 }
// //     );
// //   }
// }