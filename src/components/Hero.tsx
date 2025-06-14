import React from 'react';
import { Brain, Sparkles, Users } from 'lucide-react';
import EmotionWheel from './EmotionWheel';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Understand Your{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Emotions
            </span>
            {' '}Better
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Explore Robert Plutchik's revolutionary Wheel of Emotions to gain deeper insights into your feelings, 
            understand emotional combinations, and develop better emotional intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#wheel" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Explore the Wheel
            </a>
            <button className="border-2 border-purple-500 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Emotion Wheel */}
        <div className="mt-16 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Interactive Emotion Wheel
          </h2>
          <div className="w-full max-w-[1200px] mx-auto">
            <EmotionWheel />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-200/50 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Self-Awareness</h3>
            <p className="text-gray-600">
              Develop deeper understanding of your emotional patterns and triggers through interactive exploration.
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-200/50 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Emotion Combinations</h3>
            <p className="text-gray-600">
              Discover how primary emotions blend together to create complex feelings and emotional experiences.
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-200/50 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Better Relationships</h3>
            <p className="text-gray-600">
              Improve communication and empathy by understanding both your emotions and those of others.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;