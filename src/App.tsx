import { useState } from 'react';
import { PhoneScreen } from './components/PhoneScreen';
import { StepsNavigation } from './components/StepsNavigation';
import { Home } from 'lucide-react';

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 0,
      title: 'Bienvenida',
      shortTitle: 'Inicio',
      description: 'Aprende a subir una Story a Instagram paso a paso',
      screen: 'welcome' as const
    },
    {
      id: 1,
      title: 'Abre Instagram',
      shortTitle: 'Abrir App',
      description: 'Localiza y abre la aplicación de Instagram en tu dispositivo móvil',
      tips: ['Asegúrate de tener la última versión', 'Inicia sesión en tu cuenta'],
      screen: 'home' as const
    },
    {
      id: 2,
      title: 'Accede a tu Story',
      shortTitle: 'Tu Story',
      description: 'Toca tu foto de perfil con el "+" o desliza hacia la derecha',
      tips: ['También puedes tocar el icono de cámara arriba a la izquierda', 'O deslizar la pantalla hacia la derecha'],
      screen: 'create' as const
    },
    {
      id: 3,
      title: 'Selecciona "Story"',
      shortTitle: 'Modo Story',
      description: 'Asegúrate de estar en el modo Story en la parte inferior',
      tips: ['Verás diferentes opciones: Crear, Story, Reels', 'Story es el modo predeterminado'],
      screen: 'camera' as const
    },
    {
      id: 4,
      title: 'Captura o Sube Contenido',
      shortTitle: 'Capturar',
      description: 'Toma una foto, graba un video o selecciona de tu galería',
      tips: ['Toca el botón del centro para foto', 'Mantén presionado para video', 'Desliza arriba para ver tu galería'],
      screen: 'recording' as const
    },
    {
      id: 5,
      title: 'Edita tu Story',
      shortTitle: 'Editar',
      description: 'Personaliza con stickers, texto, filtros, música y más',
      tips: ['Toca los iconos superiores para añadir elementos', 'Usa emojis y GIFs', 'Añade ubicación y hashtags'],
      screen: 'editing' as const
    },
    {
      id: 6,
      title: 'Configura tu Audiencia',
      shortTitle: 'Audiencia',
      description: 'Elige quién puede ver tu story antes de publicar',
      tips: ['Comparte con todos, amigos cercanos o personas específicas', 'Puedes ocultar tu story a usuarios específicos'],
      screen: 'privacy' as const
    },
    {
      id: 7,
      title: '¡Comparte tu Story!',
      shortTitle: 'Publicar',
      description: 'Toca "Tu story" para publicar y compartir con tus seguidores',
      tips: ['Tu story estará visible por 24 horas', 'Podrás ver quién la vio', 'Puedes archivarla o eliminarla'],
      screen: 'publish' as const
    },
    {
      id: 8,
      title: '¡Completado!',
      shortTitle: 'Finalizado',
      description: 'Ahora ya sabes cómo compartir stories en Instagram. ¡Comparte tus momentos!',
      screen: 'complete' as const
    }
  ];

  const goToStep = (stepId: number) => {
    setCurrentStep(stepId);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStart = () => {
    setCurrentStep(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-8">
          {/* Phone Screen - Centered */}
          <div className="w-full flex justify-center">
            <PhoneScreen 
              screen={steps[currentStep].screen}
              onNext={nextStep}
              onPrevious={previousStep}
              currentStep={currentStep}
              totalSteps={steps.length}
            />
          </div>

          {/* Steps Navigation - Below Phone */}
          <div className="w-full max-w-4xl">
            <StepsNavigation
              steps={steps}
              currentStep={currentStep}
              onStepClick={goToStep}
            />
          </div>

          {/* Tips Panel */}
          {steps[currentStep].tips && (
            <div className="w-full max-w-4xl bg-white/95 backdrop-blur rounded-3xl p-6 shadow-xl">
              <h3 className="text-purple-900 mb-4 flex items-center gap-2">
                💡 Tips importantes
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {steps[currentStep].tips?.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3 text-gray-700 bg-purple-50 rounded-2xl p-4">
                    <span className="text-purple-500 text-xl">✓</span>
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer Progress - Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm py-4 md:hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={previousStep}
              disabled={currentStep === 0}
              className="px-4 py-2 bg-white/20 hover:bg-white/30 disabled:bg-white/10 disabled:cursor-not-allowed rounded-full text-white transition-all text-sm"
            >
              ← Anterior
            </button>
            
            <div className="text-white text-sm">
              {currentStep + 1} / {steps.length}
            </div>

            <button
              onClick={nextStep}
              disabled={currentStep === steps.length - 1}
              className="px-4 py-2 bg-white/20 hover:bg-white/30 disabled:bg-white/10 disabled:cursor-not-allowed rounded-full text-white transition-all text-sm"
            >
              Siguiente →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}