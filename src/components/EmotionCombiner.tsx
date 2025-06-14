import React from 'react';
import { Sparkles } from 'lucide-react';
import { getEmotionCombination } from '../utils/emotionCombinations';

const EmotionCombiner = ({ emotions }) => {
  const combination = getEmotionCombination(emotions);

  if (!combination) {
    return (
      <div className="text-center py-4">
        <p className="text-gray-500 text-sm">
          Try different emotion combinations to discover new feelings.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200">
      <div className="flex items-center space-x-2 mb-3">
        <Sparkles className="h-5 w-5 text-purple-600" />
        <span className="font-semibold text-purple-900">Combination Result</span>
      </div>
      
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h4 className="font-bold text-lg text-gray-900 mb-2">{combination.name}</h4>
        <p className="text-gray-600 text-sm leading-relaxed mb-3">{combination.description}</p>
        
        <div className="space-y-2">
          <div>
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Example</span>
            <p className="text-sm text-gray-700 italic">"{combination.example}"</p>
          </div>
          
          {combination.advice && (
            <div>
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Helpful Tip</span>
              <p className="text-sm text-gray-700">{combination.advice}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmotionCombiner;