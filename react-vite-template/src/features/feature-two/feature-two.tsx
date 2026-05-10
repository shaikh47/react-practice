import { useState } from "react";
import { FeatureTwoChildA } from "./components/feature-two-child-a";
import { FeatureTwoChildB } from "./components/feature-two-child-b";

export const FeatureTwo = () => {
  const [message, setMessage] = useState("Hello from Parent!");
  const [childAMessage, setChildAMessage] = useState("");
  const [childBMessage, setChildBMessage] = useState("");

  const handleChildAMessage = (msg: string) => {
    setChildAMessage(msg);
  };

  const handleChildBMessage = (msg: string) => {
    setChildBMessage(msg);
  };

  const handleUpdateMessage = (newMessage: string) => {
    setMessage(newMessage);
  };

  return (
    <div className="p-6 border border-gray-300 rounded">
      <h1 className="text-2xl font-bold mb-6">
        Component Communication Example
      </h1>

      <div className="mb-6 p-4 bg-gray-100 rounded">
        <h2 className="text-lg font-semibold mb-2">Parent State</h2>
        <p className="mb-3">Message: {message}</p>
        <button
          onClick={() => handleUpdateMessage("Updated from parent!")}
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
        >
          Update Message
        </button>
      </div>

      <div className="mb-6 p-4 bg-blue-50 rounded">
        <h3 className="text-md font-semibold mb-2">Messages from Children</h3>
        <p>Child A sent: {childAMessage || "(no message yet)"}</p>
        <p>Child B sent: {childBMessage || "(no message yet)"}</p>
      </div>

      <div className="flex gap-6">
        <FeatureTwoChildA
          messageFromParent={message}
          onSendMessage={handleChildAMessage}
        />
        <FeatureTwoChildB
          messageFromParent={message}
          onSendMessage={handleChildBMessage}
        />
      </div>
    </div>
  );
};
