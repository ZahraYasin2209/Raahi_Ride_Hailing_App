import { useState } from 'react';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
  { sender: "Driver", message: "Hi!", timestamp: "2025-01-18T10:00:00Z" },
  { sender: "You", message: "Hello, in how much time you'll reach?", timestamp: "2025-01-18T10:05:00Z" },
  { sender: "Driver", message: "Around 10 minutes.", timestamp: "2025-01-18T10:06:00Z" },
  { sender: "You", message: "Okay, I'm waiting outside the PU-Gate#2.", timestamp: "2025-01-18T10:07:00Z" },
  { sender: "Driver", message: "Perfect, I’ll be there shortly!", timestamp: "2025-01-18T10:08:00Z" },
]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([
        ...messages,
        { sender: 'You', message, timestamp: new Date().toISOString() },
      ]);
      setMessage('');
    }
  };

  // Helper function to format date and trim seconds
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);

    // Format the date as 'MM/DD/YYYY'
    const formattedDate = date.toLocaleDateString();

    // Format the time as 'h:mm AM/PM'
    const options = { hour: '2-digit', minute: '2-digit', hour12: true };
    const formattedTime = date.toLocaleTimeString([], options);

    return { formattedDate, formattedTime };
  };

  // Group messages by day
  const groupMessagesByDay = () => {
    return messages.reduce((groups, msg) => {
      const { formattedDate } = formatDate(msg.timestamp);

      if (!groups[formattedDate]) {
        groups[formattedDate] = [];
      }

      groups[formattedDate].push(msg);
      return groups;
    }, {});
  };

  const groupedMessages = groupMessagesByDay();

  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-1 flex-col md:flex-row">
       {/* Sidebar */}
        <div className="w-full lg:w-1/4 bg-teal-900 text-white p-4 flex flex-col">
            <h1 className='text-3xl font-bold p-4 hidden lg:block'>Messages</h1>
            <div className="flex items-center space-x-2">
                <div className="w-12 h-12 rounded-full bg-gray-300" />
                <div>
                {/* Display user name and status */}
                <h2 className="text-lg font-bold">{/* User's name */}Driver</h2>
                <p className="text-sm">Online</p>
                </div>
            </div>
            </div>

        {/* Chat Window */}
        <div className="flex-1 flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {Object.keys(groupedMessages).map((date, idx) => (
              <div key={idx}>
                <div className="text-center text-gray-500 my-2">{date}</div>

                {groupedMessages[date].map((msg, index) => (
                  <div key={index} className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'} space-x-4`}>
                    {/* Message */}
                    <div className={`p-3 my-2 rounded-lg max-w-[70%] ${msg.sender === 'You' ? 'bg-teal-900 text-white' : 'bg-gray-200 text-black'}`}>
                      <span>{msg.message}</span>
                      <small className="block text-xs mt-1">{formatDate(msg.timestamp).formattedTime}</small>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="flex p-4 bg-white dark:bg-dark-gray">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none dark:text-white dark:bg-soft-black"
            />
            <button
              onClick={handleSendMessage}
              className="bg-teal-900 text-white px-4 py-3 rounded-r-lg"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;

