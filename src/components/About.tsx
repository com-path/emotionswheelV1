import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/60 backdrop-blur-md rounded-3xl shadow-sm border border-gray-200/80">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          What is the Wheel of Emotions?
        </h2>
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            The Wheel of Emotions is a model developed by psychologist Robert Plutchik to illustrate the relationships among different emotions. Plutchik proposed that there are eight primary emotions that are the foundation for all other feelings. These are arranged in opposite pairs on the wheel:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>Joy</strong> vs. <strong>Sadness</strong></li>
            <li><strong>Trust</strong> vs. <strong>Disgust</strong></li>
            <li><strong>Fear</strong> vs. <strong>Anger</strong></li>
            <li><strong>Surprise</strong> vs. <strong>Anticipation</strong></li>
          </ul>
          <p>
            The wheel is organized into three main dimensions:
          </p>
          <ol className="list-decimal list-inside space-y-2 pl-4">
            <li>
              <strong>Intensity:</strong> The cone's vertical dimension represents intensity. Emotions intensify as they move from the outside to the center of the wheel. For example, annoyance can intensify into anger, and then rage.
            </li>
            <li>
              <strong>Polarity:</strong> The emotions are arranged in polar opposite pairs (e.g., joy and sadness). This represents the idea that emotions have opposites.
            </li>
            <li>
              <strong>Combination:</strong> The spaces between the primary emotions show the more complex emotions that are combinations of adjacent primary feelings. For instance, combining joy and trust results in love.
            </li>
          </ol>
          <p>
            By exploring this wheel, you can gain a more nuanced understanding of your emotional landscape, recognize how your feelings are connected, and develop a richer emotional vocabulary.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About; 