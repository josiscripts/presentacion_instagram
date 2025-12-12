import { Check } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  shortTitle: string;
  description: string;
  tips?: string[];
}

interface StepsNavigationProps {
  steps: Step[];
  currentStep: number;
  onStepClick: (stepId: number) => void;
}

export function StepsNavigation({ steps, currentStep, onStepClick }: StepsNavigationProps) {
  return (
    <div className="bg-white/95 backdrop-blur rounded-3xl p-6 shadow-xl">
      <h2 className="text-gray-900 mb-6">Pasos del Tutorial</h2>
      
      {/* Desktop Grid View */}
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-3">
        {steps.map((step) => {
          const isActive = step.id === currentStep;
          const isCompleted = step.id < currentStep;
          
          return (
            <button
              key={step.id}
              onClick={() => onStepClick(step.id)}
              className={`p-4 rounded-2xl transition-all text-center ${
                isActive
                  ? 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 text-white shadow-lg scale-105'
                  : isCompleted
                  ? 'bg-purple-50 text-purple-900 hover:bg-purple-100'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="flex flex-col items-center gap-2">
                {/* Step Number or Check */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  isActive
                    ? 'bg-white/20'
                    : isCompleted
                    ? 'bg-purple-500'
                    : 'bg-gray-200'
                }`}>
                  {isCompleted ? (
                    <Check className="w-5 h-5 text-white" />
                  ) : (
                    <span className={`${isActive ? 'text-white' : 'text-gray-600'}`}>
                      {step.id + 1}
                    </span>
                  )}
                </div>

                {/* Step Title */}
                <h3 className={`text-sm ${isActive ? 'text-white' : ''}`}>
                  {step.shortTitle}
                </h3>

                {/* Active Indicator */}
                {isActive && (
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Mobile Horizontal Scroll */}
      <div className="md:hidden overflow-x-auto -mx-6 px-6">
        <div className="flex gap-3 pb-2">
          {steps.map((step) => {
            const isActive = step.id === currentStep;
            const isCompleted = step.id < currentStep;
            
            return (
              <button
                key={step.id}
                onClick={() => onStepClick(step.id)}
                className={`flex-shrink-0 p-4 rounded-2xl transition-all w-32 ${
                  isActive
                    ? 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 text-white shadow-lg scale-105'
                    : isCompleted
                    ? 'bg-purple-50 text-purple-900'
                    : 'bg-gray-50 text-gray-700'
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    isActive
                      ? 'bg-white/20'
                      : isCompleted
                      ? 'bg-purple-500'
                      : 'bg-gray-200'
                  }`}>
                    {isCompleted ? (
                      <Check className="w-4 h-4 text-white" />
                    ) : (
                      <span className={`text-sm ${isActive ? 'text-white' : 'text-gray-600'}`}>
                        {step.id + 1}
                      </span>
                    )}
                  </div>
                  <span className={`text-xs text-center ${isActive ? 'text-white' : ''}`}>
                    {step.shortTitle}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
