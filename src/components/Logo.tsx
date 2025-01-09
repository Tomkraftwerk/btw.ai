import React from 'react';
import { Vote } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Vote className="h-8 w-8 text-blue-500" />
      <span className="text-2xl font-bold">bundestagswahl.ai</span>
    </div>
  );
}