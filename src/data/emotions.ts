export interface EmotionIntensity {
  word: string;
  level: 'low' | 'medium' | 'high';
}

export interface Emotion {
  id: string;
  name: string;
  color: string;
  darkColor: string;
  description: string;
  triggers: string[];
  intensities: EmotionIntensity[];
}

export const emotions: Emotion[] = [
  {
    id: 'joy',
    name: 'Joy',
    color: '#FFD700',
    darkColor: '#FFA500',
    description: 'A feeling of great pleasure, happiness, and contentment. Joy represents the positive emotion we experience when things go well or when we achieve something meaningful.',
    triggers: ['Achievement', 'Love', 'Success', 'Good news', 'Pleasant surprises'],
    intensities: [
      { level: 'low', word: 'Serenity' },
      { level: 'medium', word: 'Joy' },
      { level: 'high', word: 'Ecstasy' }
    ]
  },
  {
    id: 'trust',
    name: 'Trust',
    color: '#87CEEB',
    darkColor: '#4682B4',
    description: 'A feeling of confidence and reliability in someone or something. Trust forms the foundation of relationships and our sense of security in the world.',
    triggers: ['Reliability', 'Honesty', 'Consistency', 'Support', 'Safety'],
    intensities: [
      { level: 'low', word: 'Acceptance' },
      { level: 'medium', word: 'Trust' },
      { level: 'high', word: 'Admiration' }
    ]
  },
  {
    id: 'fear',
    name: 'Fear',
    color: '#8B4513',
    darkColor: '#654321',
    description: 'An unpleasant emotion caused by the belief that someone or something is dangerous, likely to cause pain, or a threat. Fear serves as a protective mechanism.',
    triggers: ['Danger', 'Unknown', 'Threats', 'Vulnerability', 'Loss of control'],
    intensities: [
      { level: 'low', word: 'Apprehension' },
      { level: 'medium', word: 'Fear' },
      { level: 'high', word: 'Terror' }
    ]
  },
  {
    id: 'surprise',
    name: 'Surprise',
    color: '#32CD32',
    darkColor: '#228B22',
    description: 'A brief emotional state experienced as the result of an unexpected event. Surprise can be positive or negative and helps us adapt to new situations.',
    triggers: ['Unexpected events', 'Sudden changes', 'Novel experiences', 'Startling sounds', 'Unforeseen outcomes'],
    intensities: [
      { level: 'low', word: 'Distraction' },
      { level: 'medium', word: 'Surprise' },
      { level: 'high', word: 'Amazement' }
    ]
  },
  {
    id: 'sadness',
    name: 'Sadness',
    color: '#4169E1',
    darkColor: '#191970',
    description: 'An emotional state of unhappiness, often triggered by loss, disappointment, or hurt. Sadness helps us process difficult experiences and seek support.',
    triggers: ['Loss', 'Disappointment', 'Rejection', 'Loneliness', 'Failure'],
    intensities: [
      { level: 'low', word: 'Pensiveness' },
      { level: 'medium', word: 'Sadness' },
      { level: 'high', word: 'Grief' }
    ]
  },
  {
    id: 'disgust',
    name: 'Disgust',
    color: '#800080',
    darkColor: '#4B0082',
    description: 'A feeling of revulsion or strong disapproval aroused by something unpleasant or offensive. Disgust helps us avoid harmful substances or situations.',
    triggers: ['Unpleasant tastes', 'Bad smells', 'Moral violations', 'Contamination', 'Offensive behavior'],
    intensities: [
      { level: 'low', word: 'Boredom' },
      { level: 'medium', word: 'Disgust' },
      { level: 'high', word: 'Loathing' }
    ]
  },
  {
    id: 'anger',
    name: 'Anger',
    color: '#DC143C',
    darkColor: '#8B0000',
    description: 'A strong feeling of annoyance, displeasure, or hostility. Anger often arises when we perceive injustice, threats, or obstacles to our goals.',
    triggers: ['Injustice', 'Frustration', 'Threats', 'Disrespect', 'Blocked goals'],
    intensities: [
      { level: 'low', word: 'Annoyance' },
      { level: 'medium', word: 'Anger' },
      { level: 'high', word: 'Rage' }
    ]
  },
  {
    id: 'anticipation',
    name: 'Anticipation',
    color: '#FF8C00',
    darkColor: '#FF4500',
    description: 'The emotion of looking forward to future events, often with pleasure or excitement. Anticipation helps us prepare for what\'s to come.',
    triggers: ['Future events', 'Planning', 'Hope', 'Expectations', 'Possibilities'],
    intensities: [
      { level: 'low', word: 'Interest' },
      { level: 'medium', word: 'Anticipation' },
      { level: 'high', word: 'Vigilance' }
    ]
  }
];