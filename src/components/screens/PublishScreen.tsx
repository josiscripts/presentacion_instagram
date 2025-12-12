import { Send, Clock, Users, TrendingUp } from 'lucide-react';

export function PublishScreen() {
  return (
    <div className="h-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 text-white flex flex-col items-center justify-center p-8">
      <div className="text-center space-y-6 max-w-sm">
        <div className="relative">
          <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto">
            <Send className="w-12 h-12" />
          </div>
          <div className="absolute inset-0 bg-white blur-2xl opacity-30 rounded-full animate-pulse"></div>
        </div>

        <div className="space-y-3">
          <h2 className="text-white text-2xl">¡Listo para compartir!</h2>
          <p className="text-white/90">Tu story está preparada para publicarse</p>
        </div>

        {/* Publish Buttons */}
        <div className="mt-8 space-y-3 w-full">
          <button className="w-full bg-white text-purple-600 px-8 py-4 rounded-full text-lg hover:scale-105 transition-transform shadow-xl flex items-center justify-center gap-2">
            <Send className="w-5 h-5" />
            <span>Compartir como tu story</span>
          </button>

          <button className="w-full bg-white/20 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/30 transition-all flex items-center justify-center gap-2">
            <Users className="w-5 h-5" />
            <span>Enviar a amigos cercanos</span>
          </button>
        </div>

        {/* Info Cards */}
        <div className="mt-10 space-y-3 w-full">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-sm">Disponible 24 horas</p>
              <p className="text-xs text-white/70">Desaparece automáticamente</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-sm">Visible para seguidores</p>
              <p className="text-xs text-white/70">Según tu configuración</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-sm">Ver estadísticas</p>
              <p className="text-xs text-white/70">Visualizaciones y más</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
