import React from 'react';

const EmotionSegment = ({ emotion, index, total, onEmotionClick, isSelected }) => {
  const angle = (360 / total) * index;
  const nextAngle = (360 / total) * (index + 1);
  
  // Convert angles to radians
  const startAngle = (angle * Math.PI) / 180;
  const endAngle = (nextAngle * Math.PI) / 180;
  
  
  // Calculate path coordinates for the segment
  const centerX = 200;
  const centerY = 200;
  const innerRadius = 60;
  const middleRadius = 120;
  const outerRadius = 180;
  const segmentWidth = 60; // Width of each intensity level
  
  // Function to generate path data for a segment
  const generatePathData = (startRadius: number, endRadius: number) => {
    const x1 = centerX + startRadius * Math.cos(startAngle);
    const y1 = centerY + startRadius * Math.sin(startAngle);
    const x2 = centerX + endRadius * Math.cos(startAngle);
    const y2 = centerY + endRadius * Math.sin(startAngle);
    
    const x3 = centerX + endRadius * Math.cos(endAngle);
    const y3 = centerY + endRadius * Math.sin(endAngle);
    const x4 = centerX + startRadius * Math.cos(endAngle);
    const y4 = centerY + startRadius * Math.sin(endAngle);
    
    const largeArcFlag = (endAngle - startAngle) > Math.PI ? 1 : 0;
    
    return [
      `M ${x1} ${y1}`,
      `L ${x2} ${y2}`,
      `A ${endRadius} ${endRadius} 0 ${largeArcFlag} 1 ${x3} ${y3}`,
      `L ${x4} ${y4}`,
      `A ${startRadius} ${startRadius} 0 ${largeArcFlag} 0 ${x1} ${y1}`,
      'Z'
    ].join(' ');
  };

  // Generate paths for each intensity level with equal width
  const mildPath = generatePathData(innerRadius, innerRadius + segmentWidth);
  const basicPath = generatePathData(innerRadius + segmentWidth, innerRadius + (segmentWidth * 2));
  const intensePath = generatePathData(innerRadius + (segmentWidth * 2), innerRadius + (segmentWidth * 3));
  
  // Calculate text positions for each intensity level
  const textAngle = (startAngle + endAngle) / 2;
  const mildTextRadius = innerRadius + (segmentWidth / 2);
  const basicTextRadius = innerRadius + segmentWidth + (segmentWidth / 2);
  const intenseTextRadius = innerRadius + (segmentWidth * 2) + (segmentWidth / 2);
  
  const mildTextX = centerX + mildTextRadius * Math.cos(textAngle);
  const mildTextY = centerY + mildTextRadius * Math.sin(textAngle);
  const basicTextX = centerX + basicTextRadius * Math.cos(textAngle);
  const basicTextY = centerY + basicTextRadius * Math.sin(textAngle);
  const intenseTextX = centerX + intenseTextRadius * Math.cos(textAngle);
  const intenseTextY = centerY + intenseTextRadius * Math.sin(textAngle);
  
  return (
    <g>
      {/* Mild intensity segment */}
      <path
        d={mildPath}
        fill={emotion.color}
        fillOpacity="0.2"
        stroke="white"
        strokeWidth="1"
        className={`cursor-pointer transition-all duration-300 ${
          isSelected 
            ? 'drop-shadow-lg transform scale-105' 
            : 'hover:drop-shadow-md hover:brightness-110'
        }`}
        onClick={() => onEmotionClick(emotion)}
      />
      <text
        x={mildTextX}
        y={mildTextY}
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-[10px] font-medium fill-gray-700 pointer-events-none select-none"
      >
        {emotion.intensities[0].word}
      </text>

      {/* Basic intensity segment */}
      <path
        d={basicPath}
        fill={emotion.color}
        fillOpacity="0.5"
        stroke="white"
        strokeWidth="1"
        className={`cursor-pointer transition-all duration-300 ${
          isSelected 
            ? 'drop-shadow-lg transform scale-105' 
            : 'hover:drop-shadow-md hover:brightness-110'
        }`}
        onClick={() => onEmotionClick(emotion)}
      />
      <text
        x={basicTextX}
        y={basicTextY}
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-[10px] font-medium fill-gray-700 pointer-events-none select-none"
      >
        {emotion.intensities[1].word}
      </text>

      {/* Intense intensity segment */}
      <path
        d={intensePath}
        fill={emotion.darkColor}
        fillOpacity="0.8"
        stroke="white"
        strokeWidth="1"
        className={`cursor-pointer transition-all duration-300 ${
          isSelected 
            ? 'drop-shadow-lg transform scale-105' 
            : 'hover:drop-shadow-md hover:brightness-110'
        }`}
        onClick={() => onEmotionClick(emotion)}
      />
      <text
        x={intenseTextX}
        y={intenseTextY}
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-[10px] font-medium fill-gray-700 pointer-events-none select-none"
      >
        {emotion.intensities[2].word}
      </text>
    </g>
  );
};

export default EmotionSegment;