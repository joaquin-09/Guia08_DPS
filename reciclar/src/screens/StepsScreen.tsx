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
      // Si estamos en el último paso, navegamos a otra pantalla o reiniciamos
      navigation.navigate('Inicio'); // Ejemplo — cámbialo según tu flujo
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