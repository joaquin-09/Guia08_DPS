import React from 'react';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import StepScreen from './StepScreen';

interface Step { step: number; description: string; }

interface StepsScreenProps {
  steps: Step[];
  navigation: NavigationProp<ParamListBase>;
}

const StepsScreen = ({ steps, navigation }: StepsScreenProps) => {
  const [currentStep, setCurrentStep] = React.useState(0);

  const handleNextStep = () => {
  if (currentStep < steps.length - 1) {
    setCurrentStep(currentStep + 1);
  } else {
    setCurrentStep(0); // reinicia al paso 1
  }
};

  return (
    <StepScreen
      step={steps[currentStep].step}
      description={steps[currentStep].description}
      onNextStep={handleNextStep}
    />
  );
};

export default StepsScreen;