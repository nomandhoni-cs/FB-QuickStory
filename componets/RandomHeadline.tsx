import { useState, useEffect } from "react";

const blinkEyeHeadlines = [
  "Tired of Digital Fatigue? Give Your Eyes a Break with Blink Eye!",
  "Struggling with Eye Strain? Transform Your Screen Time with Blink Eye!",
  "Burned Out by Screens? Discover Instant Relief and Boost Your Productivity with Blink Eye.",
  "Don't Let Screen Stress Drain Your Vision—Experience the Comfort of Blink Eye Today.",
  "Overworked Eyes? Reclaim Clarity and Comfort with Blink Eye.",
  "Is Your Screen Time Taking a Toll? Refresh Your Vision and Focus with Blink Eye.",
  "Are Your Eyes Screaming for Relief? Transform Screen Time into Eye Care with Blink Eye!",
  "Screen Fatigue Dragging You Down? Unlock Instant Relief and Boost Your Focus with Blink Eye.",
  "Digital Burnout? Let Blink Eye Be Your Shield Against Eye Strain and Fatigue.",
  "When Every Blink Counts: Combat Screen Strain and Revitalize Your Vision with Blink Eye.",
  "Feeling Drained by Endless Screens? Give Your Eyes the Rest They Deserve with Blink Eye.",
  "Stop Suffering in Silence—Reclaim Comfort and Productivity with Blink Eye’s Smart Breaks.",
  "Tired, Overworked Eyes? Experience a Refreshing Change with Blink Eye’s Eye-Saving Features.",
];

const RandomHeadline = () => {
  const [headline, setHeadline] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * blinkEyeHeadlines.length);
    setHeadline(blinkEyeHeadlines[randomIndex]);
  }, []);

  return (
    <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">
      {headline}
    </h1>
  );
};

export default RandomHeadline;
