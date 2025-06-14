interface Emotion {
  name: string;
  intensity: 'low' | 'medium' | 'high';
}

// Emotion combination mappings based on Plutchik's theory
const emotionCombinations = {
  // Two-emotion combinations
  'joy+trust': {
    name: 'Love',
    description: 'A deep affection and warm attachment that combines happiness with confidence and security.',
    example: 'The warm feeling you have towards someone you both enjoy being with and completely trust.',
    advice: 'Cherish these relationships and express your appreciation regularly.'
  },
  'trust+fear': {
    name: 'Submission',
    description: 'A state of yielding to authority or yielding to another\'s will, mixing confidence with caution.',
    example: 'Following a leader you trust even when you\'re uncertain about the outcome.',
    advice: 'Ensure your submission is conscious and healthy, not based on low self-worth.'
  },
  'fear+surprise': {
    name: 'Awe',
    description: 'A feeling of reverential respect mixed with fear or wonder, often towards something vast or powerful.',
    example: 'Standing at the edge of the Grand Canyon feeling both amazed and slightly overwhelmed.',
    advice: 'Allow yourself to experience wonder while maintaining your sense of safety.'
  },
  'surprise+sadness': {
    name: 'Disappointment',
    description: 'The feeling that arises when expectations are not met, combining unexpected outcomes with unhappiness.',
    example: 'Learning that a planned vacation has been cancelled at the last minute.',
    advice: 'Practice flexibility and remember that disappointments often lead to unexpected opportunities.'
  },
  'sadness+disgust': {
    name: 'Remorse',
    description: 'Deep regret or guilt for a wrong committed, mixing sorrow with self-reproach.',
    example: 'Feeling terrible after saying something hurtful to a friend in anger.',
    advice: 'Use remorse as motivation to make amends and grow from the experience.'
  },
  'disgust+anger': {
    name: 'Contempt',
    description: 'A feeling of disdain and superiority towards someone or something considered worthless or beneath consideration.',
    example: 'Looking down on someone who consistently lies or cheats others.',
    advice: 'While natural, try to understand underlying causes rather than dismissing entirely.'
  },
  'anger+anticipation': {
    name: 'Aggressiveness',
    description: 'A forceful, assertive approach that combines hostility with forward-looking energy.',
    example: 'Confronting someone who has been unfair to you with determination to resolve it.',
    advice: 'Channel this energy constructively towards solving problems rather than attacking people.'
  },
  'anticipation+joy': {
    name: 'Optimism',
    description: 'A hopeful and confident outlook about the future, combining positive expectations with happiness.',
    example: 'Feeling excited and confident about starting a new job or relationship.',
    advice: 'Balance optimism with realistic planning to achieve your positive expectations.'
  },
  // Opposite combinations often create complex emotions
  'joy+sadness': {
    name: 'Bittersweetness',
    description: 'A complex emotion combining happiness and sorrow, often felt during transitions or memories.',
    example: 'Graduating from school - happy for the achievement but sad to leave friends behind.',
    advice: 'Allow yourself to feel both emotions fully; this complexity is part of meaningful experiences.'
  },
  'love+fear': {
    name: 'Anxiety in Love',
    description: 'The vulnerable feeling that comes with caring deeply while fearing loss or rejection.',
    example: 'Worrying about whether someone you love feels the same way about you.',
    advice: 'Communicate openly about your feelings and practice self-compassion.'
  }
};

export const getEmotionCombination = (emotions: Emotion[]) => {
  if (emotions.length < 2) return null;
  
  // Sort emotions by name to create consistent keys
  const sortedNames = emotions.map(e => e.name.toLowerCase()).sort();
  const combinationKey = sortedNames.join('+');
  
  // Get base combination
  let combination = emotionCombinations[combinationKey];
  
  // If no exact match, try reverse order for two emotions
  if (!combination && emotions.length === 2) {
    const reverseKey = sortedNames.reverse().join('+');
    combination = emotionCombinations[reverseKey];
  }
  
  // If still no match, create a general combination
  if (!combination) {
    if (emotions.length >= 3) {
      return {
        name: 'Complex Emotional State',
        description: `A nuanced emotional experience combining ${emotions.map(e => e.name.toLowerCase()).join(', ')}. This complexity reflects the rich tapestry of human emotions.`,
        example: 'Like feeling nervous excitement before a big presentation while also feeling grateful for the opportunity.',
        advice: 'Complex emotions are normal and healthy. Take time to identify each component to better understand your experience.'
      };
    }
    return null;
  }

  // Enhance the combination description based on intensities
  const intensityDescription = emotions.map(e => 
    `${e.name} (${e.intensity} intensity)`
  ).join(' and ');

  return {
    ...combination,
    description: `${combination.description} This combination involves ${intensityDescription}.`,
    intensityContext: emotions.map(e => ({
      emotion: e.name,
      intensity: e.intensity,
      impact: e.intensity === 'high' ? 'strong' : e.intensity === 'medium' ? 'moderate' : 'subtle'
    }))
  };
};