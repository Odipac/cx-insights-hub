
import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gray-900 text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-colors z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl h-[600px] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Contact Center Assistant</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-1">
              <iframe
                src="https://copilotstudio.microsoft.com/environments/Default-6ca34ae1-466f-44bc-a7aa-0ac5a78c61b1/bots/cr3a3_odipac/canvas?__version__=2&enableFileAttachment=true"
                className="w-full h-full border-0"
                title="Contact Center Assistant"
                allow="microphone"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
