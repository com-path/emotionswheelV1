# Emotion Wheel Visualization

An interactive web application that visualizes Robert Plutchik's Wheel of Emotions, allowing users to explore and understand the complex relationships between different emotions and their intensity levels.

## Features

- **Interactive Emotion Wheel**: Visual representation of Plutchik's 8 basic emotions
- **Intensity Levels**: Each emotion is displayed with three levels of intensity
  - Mild (e.g., Serenity for Joy)
  - Basic (e.g., Joy)
  - Intense (e.g., Ecstasy for Joy)
- **Emotion Combinations**: Explore how primary emotions combine to create complex feelings
- **Responsive Design**: Works seamlessly on both desktop and mobile devices
- **Modern UI**: Clean and intuitive interface with smooth animations

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- SVG for the emotion wheel visualization

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/com-path/emotionswheelV1.git
cd emotionswheelV1
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. **Exploring Emotions**: Click on any emotion segment to learn more about it
2. **Understanding Intensity**: Each emotion is shown with three levels of intensity
3. **Combining Emotions**: Select multiple emotions to discover their combinations
4. **Interactive Features**: Hover over emotions to see details and click to select

## Project Structure

```
src/
├── components/
│   ├── EmotionWheel.tsx    # Main wheel visualization
│   ├── EmotionSegment.tsx  # Individual emotion segments
│   ├── EmotionInfo.tsx     # Emotion details panel
│   └── EmotionCombiner.tsx # Emotion combination logic
├── data/
│   └── emotions.ts         # Emotion data and definitions
└── utils/
    └── emotionCombinations.ts # Combination calculations
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Based on Robert Plutchik's Wheel of Emotions
- Built with modern web technologies
- Inspired by the need for better emotional understanding and communication 