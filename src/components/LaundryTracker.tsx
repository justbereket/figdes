import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Bell, Clock, Droplets } from 'lucide-react';

export function LaundryTracker() {
  const [timeLeft, setTimeLeft] = useState(32 * 60); // 32 minutes in seconds
  const totalTime = 92 * 60; // 92 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const progress = ((totalTime - timeLeft) / totalTime) * 100;

  const allMachines = [
    { id: 1, name: 'Машина 1', available: true, floor: '2 этаж' },
    { id: 2, name: 'Машина 2', available: false, floor: '2 этаж', active: true },
    { id: 3, name: 'Машина 3', available: true, floor: '3 этаж' },
    { id: 4, name: 'Машина 4', available: true, floor: '1 этаж' },
    { id: 5, name: 'Машина 5', available: false, floor: '3 этаж' },
    { id: 6, name: 'Машина 6', available: true, floor: '1 этаж' },
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl text-gray-900 mb-2">Трекер стирки</h1>
        <p className="text-gray-600">Отслеживайте доступность стиральных машин</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Active Wash */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white shadow-2xl"
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl mb-2">Моя стирка</h2>
            <p className="text-white/80">Стиральная машина 2 • 2 этаж</p>
          </div>

          {/* Circular Progress */}
          <div className="relative w-56 h-56 mx-auto mb-8">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="112"
                cy="112"
                r="100"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="16"
              />
              <motion.circle
                cx="112"
                cy="112"
                r="100"
                fill="none"
                stroke="white"
                strokeWidth="16"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 100}
                initial={{ strokeDashoffset: 2 * Math.PI * 100 }}
                animate={{ strokeDashoffset: 2 * Math.PI * 100 * (1 - progress / 100) }}
                transition={{ duration: 0.5 }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-2">
                  {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                </div>
                <div className="text-white/70">осталось</div>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3 text-white/90 bg-white/10 rounded-xl p-3">
              <Clock className="w-5 h-5" />
              <span>Полный цикл: 92 минуты</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white/90 bg-white/10 rounded-xl p-3">
              <Bell className="w-5 h-5" />
              <span>Уведомление включено</span>
            </div>
          </div>

          {/* Action Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-full mt-6 bg-white text-blue-600 rounded-xl py-4 shadow-lg hover:shadow-xl transition-all"
          >
            Забронировать следующую стирку
          </motion.button>
        </motion.div>

        {/* All Machines Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="text-xl text-gray-900">Все машины</h3>
          
          <div className="grid grid-cols-1 gap-3">
            {allMachines.map((machine, index) => (
              <motion.div
                key={machine.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className={`bg-white border-2 rounded-xl p-5 flex items-center justify-between transition-all hover:shadow-lg ${
                  machine.active 
                    ? 'border-blue-500 shadow-lg shadow-blue-100' 
                    : 'border-gray-200'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${
                    machine.available 
                      ? 'bg-green-100 text-green-600' 
                      : 'bg-gray-100 text-gray-400'
                  }`}>
                    <Droplets className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-gray-900">{machine.name}</h4>
                    <p className="text-sm text-gray-500">{machine.floor}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {machine.active && (
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      Моя стирка
                    </span>
                  )}
                  {machine.available ? (
                    <>
                      <span className="text-green-600 text-sm">Доступна</span>
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </>
                  ) : (
                    <>
                      <span className="text-gray-500 text-sm">Занята</span>
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5">
              <div className="text-3xl text-green-600 mb-1">4</div>
              <div className="text-sm text-gray-600">Доступно сейчас</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5">
              <div className="text-3xl text-blue-600 mb-1">2</div>
              <div className="text-sm text-gray-600">В процессе</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
