import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { emotions } from '../data/emotions';
import EmotionSegment from './EmotionSegment';
import EmotionInfo from './EmotionInfo';
import EmotionCombiner from './EmotionCombiner';

interface EmotionIntensity {
  word: string;
  level: 'low' | 'medium' | 'high';
}

interface Emotion {
  id: string;
  name: string;
  color: string;
  darkColor: string;
  description: string;
  triggers: string[];
  intensities: EmotionIntensity[];
}

const EmotionWheel = () => {
  const [selectedEmotions, setSelectedEmotions] = useState<Array<{ emotion: Emotion; intensity: EmotionIntensity }>>([]);

  const handleEmotionSelect = (emotion: Emotion, intensity: EmotionIntensity) => {
    setSelectedEmotions(prev => {
      // Check if this emotion and intensity is already selected
      const isAlreadySelected = prev.some(
        selected => selected.emotion.name === emotion.name && 
                   selected.intensity.level === intensity.level
      );

      if (isAlreadySelected) {
        // Remove the emotion if it's already selected
        return prev.filter(
          selected => !(selected.emotion.name === emotion.name && 
                       selected.intensity.level === intensity.level)
        );
      } else {
        // Add the new emotion with its intensity
        return [...prev, { emotion, intensity }];
      }
    });
  };

  return (
    <div className="flex flex-col items-center space-y-4 md:space-y-8 px-4 md:px-0">
      <div className="relative w-full max-w-[300px] md:max-w-[600px] aspect-square">
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full"
        >
          <g>
            {emotions.map((emotion, index) => (
              <EmotionSegment
                key={emotion.name}
                emotion={emotion}
                index={index}
                total={emotions.length}
                onEmotionSelect={handleEmotionSelect}
                selectedEmotions={selectedEmotions}
              />
            ))}
          </g>
        </svg>
      </div>

      <div className="w-full max-w-[300px] md:max-w-[600px]">
        <EmotionCombiner 
          emotions={selectedEmotions.map(selected => ({
            name: selected.emotion.name,
            intensity: selected.intensity.level
          }))}
        />
      </div>
    </div>
  );
};

export default EmotionWheel;