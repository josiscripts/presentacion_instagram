import { ChevronLeft, ChevronRight } from 'lucide-react';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { HomeScreen } from './screens/HomeScreen';
import { CreateScreen } from './screens/CreateScreen';
import { CameraScreen } from './screens/CameraScreen';
import { RecordingScreen } from './screens/RecordingScreen';
import { EditingScreen } from './screens/EditingScreen';
import { PrivacyScreen } from './screens/PrivacyScreen';
import { PublishScreen } from './screens/PublishScreen';
import { CompleteScreen } from './screens/CompleteScreen';

type ScreenType = 'welcome' | 'home' | 'create' | 'camera' | 'recording' | 'editing' | 'privacy' | 'publish' | 'complete';

interface PhoneScreenProps {
  screen: ScreenType;
  onNext: () => void;
  onPrevious: () => void;
  currentStep: number;
  totalSteps: number;
}

export function PhoneScreen({ screen, onNext, onPrevious, currentStep, totalSteps }: PhoneScreenProps) {
  const renderScreen = () => {
    switch (screen) {
      case 'welcome':
        return <WelcomeScreen />;
      case 'home':
        return <HomeScreen />;
      case 'create':
        return <CreateScreen />;
      case 'camera':
        return <CameraScreen />;
      case 'recording':
        return <RecordingScreen />;
      case 'editing':
        return <EditingScreen />;
      case 'privacy':
        return <PrivacyScreen />;
      case 'publish':
        return <PublishScreen />;
      case 'complete':
        return <CompleteScreen />;
      default:
        return <WelcomeScreen />;
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Phone Frame */}
      <div className="relative">
        {/* Phone Body */}
        <div className="bg-black rounded-[3rem] p-3 shadow-2xl">
          {/* Phone Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-10"></div>
          
          {/* Phone Screen */}
          <div className="bg-white rounded-[2.5rem] overflow-hidden w-[340px] h-[680px] relative">
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-10 bg-black/5 backdrop-blur-sm z-20 flex items-center justify-between px-8 text-xs">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-3 border border-black rounded-sm relative">
                  <div className="absolute inset-0.5 bg-black rounded-sm"></div>
                </div>
              </div>
            </div>

            {/* Screen Content */}
            <div className="absolute inset-0 pt-10">
              {renderScreen()}
            </div>
          </div>
        </div>
      </div>

      {/* Step Indicator */}
      <div className="mt-6 text-white text-center">
        <p className="text-sm opacity-80">Paso {currentStep + 1} de {totalSteps}</p>
      </div>
    </div>
  );
}