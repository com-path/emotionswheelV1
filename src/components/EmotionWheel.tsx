import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { emotions } from '../data/emotions';
import EmotionSegment from './EmotionSegment';
import EmotionInfo from './EmotionInfo';
import EmotionCombiner from './EmotionCombiner';

interface Emotion {
  id: string;
  name: string;
  color: string;
  darkColor: string;
  description: string;
  triggers: string[];
  intensities: {
    level: string;
    word: string;
  }[];
}

const EmotionWheel = () => {
  const [selectedEmotion, setSelectedEmotion] = useState<Emotion | null>(null);
  const [selectedEmotions, setSelectedEmotions] = useState<Emotion[]>([]);
  const [showCombiner, setShowCombiner] = useState(false);

  const handleEmotionClick = (emotion: Emotion) => {
    setSelectedEmotion(emotion);
  };

  const handleAddToCombiner = (emotion: Emotion) => {
    if (!selectedEmotions.find(e => e.id === emotion.id) && selectedEmotions.length < 3) {
      setSelectedEmotions([...selectedEmotions, emotion]);
    }
  };

  const removeFromCombiner = (emotionId: string) => {
    setSelectedEmotions(selectedEmotions.filter(e => e.id !== emotionId));
  };

  const clearCombiner = () => {
    setSelectedEmotions([]);
  };

  return (
    <section id="wheel" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Plutchik's Wheel of Emotions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Click on any emotion to learn more, or select multiple emotions to discover their combinations.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Emotion Wheel */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-[800px] aspect-square">
              <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 400 400" 
                preserveAspectRatio="xMidYMid meet"
                className="drop-shadow-lg"
              >
                <defs>
                  {emotions.map((emotion) => (
                    <linearGradient key={emotion.id} id={`gradient-${emotion.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={emotion.color} />
                      <stop offset="100%" stopColor={emotion.darkColor} />
                    </linearGradient>
                  ))}
                </defs>
                
                {emotions.map((emotion, index) => (
                  <EmotionSegment
                    key={emotion.id}
                    emotion={emotion}
                    index={index}
                    total={emotions.length}
                    onEmotionClick={handleEmotionClick}
                    isSelected={selectedEmotion?.id === emotion.id}
                  />
                ))}
                
                {/* Center circle */}
                <circle
                  cx="200"
                  cy="200"
                  r="60"
                  fill="white"
                  stroke="#e5e7eb"
                  strokeWidth="2"
                  className="drop-shadow-sm"
                />
                <text
                  x="200"
                  y="205"
                  textAnchor="middle"
                  className="text-sm font-semibold fill-gray-700"
                >
                  Emotions
                </text>
              </svg>
            </div>
          </div>

          {/* Emotion Combiner */}
          <div className="w-full lg:w-80">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Emotion Combiner</h3>
                {selectedEmotions.length > 0 && (
                  <button
                    onClick={clearCombiner}
                    className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    Clear all
                  </button>
                )}
              </div>

              {selectedEmotions.length === 0 ? (
                <div className="text-center py-8">
                  <Plus className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500 text-sm">
                    Click on emotions in the wheel to add them here and discover combinations.
                  </p>
                </div>
              ) : (
                <div className="space-y-3 mb-6">
                  {selectedEmotions.map((emotion) => (
                    <div
                      key={emotion.id}
                      className="flex items-center justify-between p-3 rounded-lg border border-gray-200 bg-gray-50"
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: emotion.color }}
                        />
                        <span className="font-medium text-gray-900">{emotion.name}</span>
                      </div>
                      <button
                        onClick={() => removeFromCombiner(emotion.id)}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {selectedEmotions.length >= 2 && (
                <EmotionCombiner emotions={selectedEmotions} />
              )}
            </div>

            {selectedEmotion && (
              <div className="mt-6">
                <EmotionInfo
                  emotion={selectedEmotion}
                  onClose={() => setSelectedEmotion(null)}
                  onAddToCombiner={() => handleAddToCombiner(selectedEmotion)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionWheel;