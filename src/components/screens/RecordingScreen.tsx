import { ImageWithFallback } from '../error/ImageWithFallback';

export function RecordingScreen() {
  return (
    <div className="h-full bg-black text-white flex flex-col">
      {/* Recording Progress Bar */}
      <div className="px-2 py-3">
        <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full animate-pulse" style={{ width: '40%' }}></div>
        </div>
      </div>

      {/* Camera Preview */}
      <div className="flex-1 relative overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1533561797500-4fad4750814e"
          alt="Recording"
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Recording Indicator */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-2 bg-red-500 px-4 py-2 rounded-full">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            <span className="text-sm">Capturando...</span>
          </div>
        </div>

        <div className="absolute bottom-12 left-0 right-0 text-center">
          <div className="bg-black/60 backdrop-blur-sm inline-block px-6 py-3 rounded-full">
            <p className="text-white text-sm">📸 Tomando tu foto...</p>
            <p className="text-white/70 text-xs mt-1">O mantén presionado para video</p>
          </div>
        </div>
      </div>

      {/* Capture Button */}
      <div className="px-6 py-8 bg-gradient-to-t from-black to-transparent">
        <div className="flex items-center justify-center">
          <div className="relative">
            <button className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white"></div>
            </button>
            <div className="absolute inset-0 rounded-full border-4 border-purple-500 animate-ping"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
