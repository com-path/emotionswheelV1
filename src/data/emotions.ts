export const emotions = [
  {
    id: 'joy',
    name: 'Joy',
    color: '#FFD700',
    darkColor: '#FFA500',
    description: 'A feeling of great pleasure, happiness, and contentment. Joy represents the positive emotion we experience when things go well or when we achieve something meaningful.',
    triggers: ['Achievement', 'Love', 'Success', 'Good news', 'Pleasant surprises'],
    intensities: [
      { level: 'Mild', word: 'Serenity' },
      { level: 'Basic', word: 'Joy' },
      { level: 'Intense', word: 'Ecstasy' }
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
      { level: 'Mild', word: 'Acceptance' },
      { level: 'Basic', word: 'Trust' },
      { level: 'Intense', word: 'Admiration' }
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
      { level: 'Mild', word: 'Apprehension' },
      { level: 'Basic', word: 'Fear' },
      { level: 'Intense', word: 'Terror' }
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
      { level: 'Mild', word: 'Distraction' },
      { level: 'Basic', word: 'Surprise' },
      { level: 'Intense', word: 'Amazement' }
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
      { level: 'Mild', word: 'Pensiveness' },
      { level: 'Basic', word: 'Sadness' },
      { level: 'Intense', word: 'Grief' }
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
      { level: 'Mild', word: 'Boredom' },
      { level: 'Basic', word: 'Disgust' },
      { level: 'Intense', word: 'Loathing' }
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
      { level: 'Mild', word: 'Annoyance' },
      { level: 'Basic', word: 'Anger' },
      { level: 'Intense', word: 'Rage' }
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
      { level: 'Mild', word: 'Interest' },
      { level: 'Basic', word: 'Anticipation' },
      { level: 'Intense', word: 'Vigilance' }
    ]
  }
];