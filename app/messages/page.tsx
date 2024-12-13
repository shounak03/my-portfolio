'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Message {
  _id: string;  // Changed from id: number to _id: string for MongoDB
  name: string;
  email: string;
  message: string;
  isRead: boolean;  // Changed from read to isRead to match our MongoDB model
  createdAt: string;
}

export default function MessagesSection() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/messages');
      if (!response.ok) throw new Error('Failed to fetch messages');
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAsRead = async (id: string) => {
    try {
      const response = await fetch(`/api/messages/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isRead: true }),
      });

      if (!response.ok) throw new Error('Failed to update message');

      setMessages(messages.map(msg => 
        msg._id === id ? { ...msg, isRead: true } : msg
      ));
    } catch (error) {
      console.error('Error updating message:', error);
    }
  };

  const unreadMessages = messages.filter(msg => !msg.isRead);
  const readMessages = messages.filter(msg => msg.isRead);

  if (loading) {
    return <div className="text-center py-16">Loading messages...</div>;
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">Messages</h2>
        <Tabs defaultValue="unread" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="unread">Unread ({unreadMessages.length})</TabsTrigger>
            <TabsTrigger value="read">Read ({readMessages.length})</TabsTrigger>
          </TabsList>
          <TabsContent value="unread">
            {unreadMessages.map(msg => (
              <MessageCard key={msg._id} message={msg} onMarkAsRead={handleMarkAsRead} />
            ))}
          </TabsContent>
          <TabsContent value="read">
            {readMessages.map(msg => (
              <MessageCard key={msg._id} message={msg} onMarkAsRead={handleMarkAsRead} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function MessageCard({ message, onMarkAsRead }: { message: Message; onMarkAsRead: (id: string) => void }) {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>{message.name}</span>
          {!message.isRead && (
            <Button onClick={() => onMarkAsRead(message._id)} variant="outline" size="sm">
              Mark as Read
            </Button>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-2">{message.email}</p>
        <p className="text-foreground">{message.message}</p>
        <p className="text-sm text-muted-foreground mt-2">
          {new Date(message.createdAt).toLocaleString()}
        </p>
      </CardContent>
    </Card>
  )
}