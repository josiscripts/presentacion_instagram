import { PartyPopper, Sparkles, Trophy, CheckCircle2 } from 'lucide-react';

export function CompleteScreen() {
  return (
    <div className="h-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 text-white flex flex-col items-center justify-center p-8">
      <div className="text-center space-y-6 max-w-sm">
        <div className="relative">
          <div className="text-8xl animate-bounce">🎉</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Sparkles className="w-12 h-12 text-yellow-300 animate-spin" style={{ animationDuration: '3s' }} />
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-white text-3xl">¡Felicitaciones!</h2>
          <p className="text-white/90 text-lg">
            Ahora dominas las Instagram Stories
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="mt-8 space-y-3 w-full">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
              <Trophy className="w-6 h-6 text-yellow-900" />
            </div>
            <div className="text-left">
              <p className="text-sm">Tutorial completado</p>
              <p className="text-xs text-white/70">8 pasos completados</p>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4">
            <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
              <PartyPopper className="w-6 h-6 text-pink-900" />
            </div>
            <div className="text-left">
              <p className="text-sm">¡Listo para compartir!</p>
              <p className="text-xs text-white/70">Comparte tus mejores momentos</p>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4">
            <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-6 h-6 text-green-900" />
            </div>
            <div className="text-left">
              <p className="text-sm">Experto en Stories</p>
              <p className="text-xs text-white/70">Conoces todos los secretos</p>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-3">
          <h3 className="text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            Consejos finales
          </h3>
          <ul className="space-y-2 text-sm text-white/90 text-left">
            <li className="flex items-start gap-2">
              <span>✨</span>
              <span>Sé auténtico y espontáneo</span>
            </li>
            <li className="flex items-start gap-2">
              <span>⏰</span>
              <span>Publica de forma consistente</span>
            </li>
            <li className="flex items-start gap-2">
              <span>🎨</span>
              <span>Experimenta con stickers y filtros</span>
            </li>
            <li className="flex items-start gap-2">
              <span>💬</span>
              <span>Interactúa con tus seguidores</span>
            </li>
            <li className="flex items-start gap-2">
              <span>📊</span>
              <span>Revisa tus estadísticas</span>
            </li>
          </ul>
        </div>

        <div className="mt-8 text-sm text-white/70">
          ¡Es tu turno de brillar en Instagram! 🌟
        </div>
      </div>
    </div>
  );
}
