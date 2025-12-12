import { Home, Search, PlusSquare, Heart, User } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function HomeScreen() {
  return (
    <div className="h-full bg-white text-black flex flex-col">
      {/* Top Bar */}
      <div className="px-4 py-3 flex items-center justify-between border-b border-gray-200">
        <div className="relative">
          <svg width="120" height="36" viewBox="0 0 120 36" fill="none">
            <text x="0" y="28" className="text-2xl" style={{ fontFamily: 'cursive' }}>Instagram</text>
          </svg>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Heart className="w-6 h-6" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
          </div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </div>
      </div>

      {/* Stories Bar */}
      <div className="px-4 py-3 border-b border-gray-200">
        <div className="flex gap-4 overflow-x-auto pb-2">
          {/* Your Story with + indicator */}
          <div className="flex flex-col items-center gap-1 relative">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-0.5">
                <div className="w-full h-full rounded-full bg-white p-0.5">
                  <div className="w-full h-full rounded-full bg-gray-300"></div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-5 h-5 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-white text-xs">+</span>
              </div>
              {/* Animated arrow pointing to it */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap animate-bounce">
                ¡Toca aquí!
              </div>
            </div>
            <span className="text-xs">Tu story</span>
          </div>

          {/* Other stories */}
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col items-center gap-1 flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-0.5">
                <div className="w-full h-full rounded-full bg-white p-0.5">
                  <div className="w-full h-full rounded-full bg-gray-300"></div>
                </div>
              </div>
              <span className="text-xs text-gray-600">usuario{i}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Feed */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 space-y-4">
          {/* Post Card */}
          <div className="bg-white border-b border-gray-200 pb-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"></div>
              <span className="text-sm">usuario_ejemplo</span>
            </div>
            <div className="w-full h-64 bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg"></div>
            <div className="flex items-center gap-4 mt-3">
              <Heart className="w-6 h-6" />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <polyline points="16 6 12 2 8 6" />
                <line x1="12" y1="2" x2="12" y2="15" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="px-4 py-3 flex items-center justify-around border-t border-gray-200">
        <Home className="w-6 h-6" />
        <Search className="w-6 h-6 text-gray-400" />
        <PlusSquare className="w-6 h-6 text-gray-400" />
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
          <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
          <polyline points="17 2 12 7 7 2" />
        </svg>
        <User className="w-6 h-6 text-gray-400" />
      </div>
    </div>
  );
}
