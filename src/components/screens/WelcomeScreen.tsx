import { Sparkles } from 'lucide-react';

export function WelcomeScreen() {
  return (
    <div className="h-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex flex-col items-center justify-center p-8 text-white">
      <div className="text-center space-y-6">
        <div className="text-7xl mb-4 animate-bounce">📱</div>
        <h1 className="text-white text-3xl">Instagram Stories</h1>
        <p className="text-white/90 text-lg">Tutorial Interactivo</p>
        
        <div className="flex items-center justify-center gap-2 mt-8">
          <Sparkles className="w-5 h-5" />
          <span className="text-sm">Aprende paso a paso</span>
        </div>

        <div className="mt-12 space-y-3 text-sm text-white/80">
          <p>👆 Selecciona un paso</p>
          <p>📲 Sigue las instrucciones</p>
          <p>✨ ¡Aprende a compartir tu primera Story!</p>
        </div>
      </div>
    </div>
  );
}
