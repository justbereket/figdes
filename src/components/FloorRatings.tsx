import { motion } from 'motion/react';
import { Star, TrendingUp, TrendingDown, Award, Trophy } from 'lucide-react';

export function FloorRatings() {
  const floors = [
    { floor: 3, status: 'Отлично', rating: 4.8, trend: 'up', color: 'from-green-400 to-emerald-600', change: '+0.3' },
    { floor: 2, status: 'Хорошо', rating: 4.3, trend: 'up', color: 'from-blue-400 to-blue-600', change: '+0.1' },
    { floor: 1, status: 'Шумно', rating: 3.2, trend: 'down', color: 'from-orange-400 to-orange-600', change: '-0.2' },
  ];

  const topRooms = [
    { room: '315', floor: 3, rating: 5.0, streak: '8 недель' },
    { room: '217', floor: 2, rating: 4.9, streak: '5 недель' },
    { room: '102', floor: 1, rating: 4.8, streak: '3 недели' },
  ];

  const categories = [
    { name: 'Чистота', floor3: 4.9, floor2: 4.5, floor1: 3.5 },
    { name: 'Уровень шума', floor3: 4.7, floor2: 4.2, floor1: 2.9 },
    { name: 'Общее состояние', floor3: 4.8, floor2: 4.2, floor1: 3.4 },
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl text-gray-900 mb-2">Рейтинги этажей</h1>
        <p className="text-gray-600">Сравнение чистоты и порядка на этажах</p>
      </motion.div>

      {/* Floor Rankings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {floors.map((floor, index) => (
          <motion.div
            key={floor.floor}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.1 }}
            className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all"
          >
            {/* Badge for top floor */}
            {index === 0 && (
              <div className="mb-4">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm flex items-center gap-1 w-fit">
                  <Trophy className="w-4 h-4" />
                  Лучший этаж
                </span>
              </div>
            )}

            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-3xl text-gray-900 mb-1">{floor.floor} этаж</h3>
                <p className="text-gray-600">{floor.status}</p>
              </div>
              <div className={`bg-gradient-to-br ${floor.color} px-4 py-2 rounded-xl text-white shadow-lg flex items-center gap-2`}>
                <Star className="w-5 h-5 fill-white" />
                <span className="text-xl">{floor.rating}</span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="bg-gray-100 rounded-full h-3 mb-4 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(floor.rating / 5) * 100}%` }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                className={`h-full bg-gradient-to-r ${floor.color} rounded-full`}
              />
            </div>

            {/* Trend */}
            <div className="flex items-center gap-2">
              {floor.trend === 'up' ? (
                <>
                  <div className="bg-green-100 rounded-lg p-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-green-600">{floor.change} за неделю</span>
                </>
              ) : (
                <>
                  <div className="bg-orange-100 rounded-lg p-2">
                    <TrendingDown className="w-4 h-4 text-orange-600" />
                  </div>
                  <span className="text-orange-600">{floor.change} за неделю</span>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Category Breakdown - 2 columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 bg-white border-2 border-gray-200 rounded-2xl p-6"
        >
          <h2 className="text-2xl text-gray-900 mb-6">Детальная разбивка</h2>
          
          <div className="space-y-6">
            {categories.map((category, index) => (
              <div key={category.name}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-gray-700">{category.name}</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-16 text-sm text-gray-600">3 этаж</span>
                    <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(category.floor3 / 5) * 100}%` }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                        className="h-full bg-gradient-to-r from-green-400 to-emerald-600 rounded-full"
                      />
                    </div>
                    <span className="w-12 text-sm text-gray-900">{category.floor3}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-16 text-sm text-gray-600">2 этаж</span>
                    <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(category.floor2 / 5) * 100}%` }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                        className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                      />
                    </div>
                    <span className="w-12 text-sm text-gray-900">{category.floor2}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-16 text-sm text-gray-600">1 этаж</span>
                    <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(category.floor1 / 5) * 100}%` }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                        className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
                      />
                    </div>
                    <span className="w-12 text-sm text-gray-900">{category.floor1}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Top Contributors */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-6"
        >
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-6 h-6 text-yellow-600" />
              <h3 className="text-xl text-gray-900">Лучшие комнаты</h3>
            </div>
            <div className="space-y-4">
              {topRooms.map((room, i) => (
                <div key={room.room} className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${
                      i === 0 ? 'bg-gradient-to-br from-yellow-400 to-orange-500' :
                      i === 1 ? 'bg-gradient-to-br from-gray-300 to-gray-400' :
                      'bg-gradient-to-br from-orange-300 to-orange-400'
                    }`}>
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-gray-900">Комната {room.room}</h4>
                      <p className="text-sm text-gray-500">{room.floor} этаж</p>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-600">
                      <Star className="w-4 h-4 fill-yellow-600" />
                      <span>{room.rating}</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-600 bg-gray-50 rounded-lg p-2">
                    🔥 Streak: {room.streak}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Info Card */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
            <h3 className="text-gray-900 mb-3">ℹ️ О рейтингах</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Рейтинги обновляются еженедельно и основаны на оценках чистоты, 
              уровня шума и общего состояния каждого этажа.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
