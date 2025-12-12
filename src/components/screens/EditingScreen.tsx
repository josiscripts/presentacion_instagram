import { Type, Smile, Music, MapPin, Hash, Download, ChevronDown } from 'lucide-react';

export function EditingScreen() {
  return (
    <div className="h-full bg-gradient-to-br from-purple-600 to-pink-500 text-white flex flex-col">
      {/* Top Bar */}
      <div className="px-4 py-4 flex items-center justify-between">
        <button className="text-white">
          <ChevronDown className="w-7 h-7" />
        </button>
        <div className="flex items-center gap-4">
          <button className="text-white">
            <Download className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Preview Area */}
      <div className="flex-1 relative flex items-center justify-center p-8">
        <div className="text-center space-y-6 max-w-xs">
          <div className="text-6xl">🎨</div>
          <h3 className="text-white text-2xl">¡Edita tu Story!</h3>
          <p className="text-white/90">
            Añade texto, stickers, música, ubicación y más para personalizar tu contenido
          </p>
          
          <div className="grid grid-cols-2 gap-3 mt-6">
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-3">
              <Type className="w-6 h-6 mx-auto mb-2" />
              <p className="text-xs">Texto</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-3">
              <Smile className="w-6 h-6 mx-auto mb-2" />
              <p className="text-xs">Stickers</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-3">
              <Music className="w-6 h-6 mx-auto mb-2" />
              <p className="text-xs">Música</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-3">
              <MapPin className="w-6 h-6 mx-auto mb-2" />
              <p className="text-xs">Ubicación</p>
            </div>
          </div>

          {/* Sample Text on Story */}
          <div className="mt-8 bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full inline-block">
            <p className="text-white">¡Mi primera Story! ✨</p>
          </div>
        </div>
      </div>

      {/* Bottom Tools */}
      <div className="px-4 py-6 bg-black/20 backdrop-blur-sm">
        <div className="flex items-center justify-around">
          <button className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Type className="w-6 h-6" />
            </div>
            <span className="text-xs">Aa</span>
          </button>
          
          <button className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Smile className="w-6 h-6" />
            </div>
            <span className="text-xs">GIF</span>
          </button>
          
          <button className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Music className="w-6 h-6" />
            </div>
            <span className="text-xs">Música</span>
          </button>
          
          <button className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <span className="text-xs">Lugar</span>
          </button>

          <button className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Hash className="w-6 h-6" />
            </div>
            <span className="text-xs">Tags</span>
          </button>
        </div>
      </div>

      {/* Next Button */}
      <div className="px-6 pb-6">
        <button className="w-full bg-white text-purple-600 py-3 rounded-full">
          Siguiente →
        </button>
      </div>
    </div>
  );
}
