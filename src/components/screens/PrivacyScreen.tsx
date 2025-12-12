import { Users, UserCheck, Globe, Lock, Eye, EyeOff, Star } from 'lucide-react';

export function PrivacyScreen() {
  return (
    <div className="h-full bg-white text-gray-900 flex flex-col">
      {/* Top Bar */}
      <div className="px-4 py-4 flex items-center justify-between border-b border-gray-200">
        <button className="text-sm text-gray-600">Atrás</button>
        <h3 className="text-gray-900">Compartir como</h3>
        <div className="w-12"></div>
      </div>

      {/* Options */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-3">
          {/* Your Story */}
          <button className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-2xl p-5 flex items-center gap-4 shadow-lg">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-left flex-1">
              <h4 className="mb-1">Tu story</h4>
              <p className="text-sm text-white/90">Compartir con todos tus seguidores</p>
            </div>
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            </div>
          </button>

          {/* Close Friends */}
          <button className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl p-5 flex items-center gap-4 hover:bg-gray-100 transition-colors">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Star className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-left flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="text-gray-900">Amigos cercanos</h4>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Privado</span>
              </div>
              <p className="text-sm text-gray-600">Solo tus amigos más cercanos</p>
            </div>
            <div className="w-6 h-6 border-2 border-gray-300 rounded-full flex-shrink-0"></div>
          </button>

          {/* Hide from */}
          <button className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl p-5 flex items-center gap-4 hover:bg-gray-100 transition-colors">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
              <EyeOff className="w-6 h-6 text-gray-600" />
            </div>
            <div className="text-left flex-1">
              <h4 className="text-gray-900 mb-1">Ocultar story de...</h4>
              <p className="text-sm text-gray-600">Elige personas específicas</p>
            </div>
          </button>
        </div>

        {/* Info Section */}
        <div className="mt-6 space-y-4">
          <h4 className="text-gray-900">Configuración adicional</h4>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <Eye className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-700">Permitir compartir</span>
              </div>
              <div className="w-12 h-6 bg-purple-500 rounded-full relative">
                <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full"></div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-700">Guardar en archivo</span>
              </div>
              <div className="w-12 h-6 bg-purple-500 rounded-full relative">
                <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Banner */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-2xl p-4">
          <div className="flex gap-3">
            <Lock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h5 className="text-blue-900 mb-1">Privacidad</h5>
              <p className="text-sm text-blue-800">
                Tu story desaparecerá después de 24 horas. Puedes controlar quién la ve en cualquier momento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
