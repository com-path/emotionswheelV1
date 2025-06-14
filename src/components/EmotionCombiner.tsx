import React from 'react';
import { Sparkles } from 'lucide-react';
import { getEmotionCombination } from '../utils/emotionCombinations';

interface Emotion {
  name: string;
  intensity: 'low' | 'medium' | 'high';
}

interface EmotionCombinerProps {
  emotions: Emotion[];
}

const EmotionCombiner: React.FC<EmotionCombinerProps> = ({ emotions }) => {
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

          <div className="mt-4 pt-4 border-t border-gray-100">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Selected Emotions</span>
            <div className="mt-2 space-y-2">
              {emotions.map((emotion, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">{emotion.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    emotion.intensity === 'high' ? 'bg-red-100 text-red-700' :
                    emotion.intensity === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {emotion.intensity} intensity
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmotionCombiner;