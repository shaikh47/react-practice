import { useState } from "react";

interface FeatureTwoChildBProps {
  messageFromParent: string;
  onSendMessage: (message: string) => void;
}

export const FeatureTwoChildB = ({
  messageFromParent,
  onSendMessage,
}: FeatureTwoChildBProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="flex-1 p-4 border-2 border-blue-500 rounded bg-blue-50">
      <h3 className="text-lg font-semibold mb-4">Child B</h3>

      <div className="mb-4">
        <h4 className="font-semibold text-sm mb-2">
          Receives from Parent (Props)
        </h4>
        <p className="text-sm">Message: "{messageFromParent}"</p>
      </div>

      <div>
        <h4 className="font-semibold text-sm mb-2">
          Send to Parent (Callback)
        </h4>
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type message..."
            className="px-2 py-1 border border-gray-300 rounded text-sm"
          />
          <button
            onClick={handleSend}
            className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
