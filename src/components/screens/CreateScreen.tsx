export function CreateScreen() {
  return (
    <div className="h-full bg-black text-white flex items-center justify-center">
      <div className="text-center space-y-6 p-8">
        <div className="relative">
          <div className="text-6xl animate-pulse">📸</div>
          <div className="absolute inset-0 bg-purple-500 blur-3xl opacity-50 animate-pulse"></div>
        </div>
        
        <div className="space-y-3">
          <h2 className="text-white text-2xl">Abriendo Cámara...</h2>
          <p className="text-gray-400">Preparando tu story</p>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}
