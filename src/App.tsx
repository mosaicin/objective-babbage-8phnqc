import { useState } from 'react';

interface CounterProps {}

const Counter: React.FC<CounterProps> = () => {
  const [count, setCount] = useState(88);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <div className="text-6xl font-bold">{count}</div>
      <div className="flex gap-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;