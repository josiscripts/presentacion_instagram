import { X, Sparkles, Camera, RotateCcw, Zap, Image as ImageIcon, Type } from 'lucide-react';

export function CameraScreen() {
  return (
    <div className="h-full bg-black text-white flex flex-col">
      {/* Top Bar */}
      <div className="px-4 py-4 flex items-center justify-between">
        <X className="w-7 h-7" />
        <div className="flex items-center gap-4">
          <Zap className="w-6 h-6" />
          <Sparkles className="w-6 h-6" />
        </div>
      </div>

      {/* Camera View */}
      <div className="flex-1 relative bg-gradient-to-br from-purple-900/50 to-pink-900/50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <Camera className="w-16 h-16 mx-auto text-white/50" />
            <p className="text-white/70">Vista previa de la cámara</p>
          </div>
        </div>

        {/* Left Side Tools */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 space-y-6">
          <button className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Type className="w-5 h-5" />
            </div>
            <span className="text-xs">Aa</span>
          </button>
          
          <button className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-xs">Efectos</span>
          </button>
        </div>

        {/* Right Side Controls */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 space-y-4">
          <button className="w-10 h-10 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center">
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>

        {/* Story Mode Indicator */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full text-sm animate-pulse">
          ⭐ Modo Story Activado
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="px-6 py-8 bg-gradient-to-t from-black to-transparent">
        {/* Mode Selector */}
        <div className="flex items-center justify-center gap-8 mb-8">
          <button className="text-gray-400 text-sm">Crear</button>
          <button className="relative">
            <span className="text-white text-lg">STORY</span>
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"></div>
          </button>
          <button className="text-gray-400 text-sm">Reels</button>
        </div>

        {/* Capture Button */}
        <div className="flex items-center justify-center gap-12">
          <button className="flex flex-col items-center gap-1">
            <ImageIcon className="w-8 h-8" />
            <span className="text-xs">Galería</span>
          </button>
          
          <button className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center hover:scale-105 transition-transform">
            <div className="w-16 h-16 rounded-full bg-white"></div>
          </button>
          
          <div className="w-8"></div>
        </div>
      </div>
    </div>
  );
}
