import React from 'react';
import { X, Plus, BookOpen, Lightbulb } from 'lucide-react';

const EmotionInfo = ({ emotion, onClose, onAddToCombiner }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div
              className="w-6 h-6 rounded-full shadow-sm"
              style={{ backgroundColor: emotion.color }}
            />
            <h3 className="text-xl font-bold text-gray-900">{emotion.name}</h3>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={onAddToCombiner}
              className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
              title="Add to combiner"
            >
              <Plus className="h-5 w-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <BookOpen className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Description</span>
            </div>
            <p className="text-gray-600 leading-relaxed">{emotion.description}</p>
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-2">
              <Lightbulb className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Common Triggers</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {emotion.triggers.map((trigger, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  {trigger}
                </span>
              ))}
            </div>
          </div>

          <div>
            <span className="text-sm font-medium text-gray-700 mb-2 block">Intensity Levels</span>
            <div className="space-y-2">
              {emotion.intensities.map((intensity, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-700">{intensity.level}</span>
                  <span className="text-sm font-medium text-gray-900">{intensity.word}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmotionInfo;