import { motion } from 'motion/react';
import { Wrench, MessageSquareWarning, ChefHat, AlertCircle, Newspaper, Droplets, TrendingUp, Calendar } from 'lucide-react';

type Screen = 'home' | 'laundry' | 'complaints' | 'kitchen' | 'ratings' | 'maintenance' | 'profile';

interface HomeScreenProps {
  onNavigate: (screen: Screen) => void;
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  const machines = [
    { id: 1, name: 'Машина 1', available: true, floor: '2 этаж' },
    { id: 2, name: 'Машина 2', available: false, floor: '2 этаж', timeLeft: '32 мин' },
    { id: 3, name: 'Машина 3', available: true, floor: '3 этаж' },
    { id: 4, name: 'Машина 4', available: true, floor: '1 этаж' },
  ];

  const news = [
    { id: 1, title: 'Уборка общежития', date: '30 августа', category: 'Уборка' },
    { id: 2, title: 'Ремонт вентиляции на 3 этаже', date: '28 августа', category: 'Ремонт' },
    { id: 3, title: 'Проверка счетчиков воды', date: '25 августа', category: 'Обслуживание' },
    { id: 4, title: 'Новые правила тишины', date: '20 августа', category: 'Объявление' },
  ];

  const stats = [
    { label: 'Активных заявок', value: '3', trend: '+2', icon: Wrench, color: 'from-blue-500 to-blue-600' },
    { label: 'Рейтинг этажа', value: '4.3', trend: '+0.2', icon: TrendingUp, color: 'from-green-500 to-emerald-600' },
    { label: 'Брони кухни', value: '2', trend: 'Эта неделя', icon: Calendar, color: 'from-purple-500 to-purple-600' },
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl text-gray-900 mb-2">Привет, Жансая! 👋</h1>
        <p className="text-gray-600">Добро пожаловать в DormLife</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all`}
            >
              <div className="flex items-start justify-between mb-4">
                <Icon className="w-8 h-8 opacity-80" />
                <span className="text-sm bg-white/20 px-3 py-1 rounded-full">{stat.trend}</span>
              </div>
              <div className="text-4xl mb-2">{stat.value}</div>
              <div className="text-white/80 text-sm">{stat.label}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Laundry Status - Takes 2 columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white shadow-lg"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl">Стиральные машины</h2>
            <button
              onClick={() => onNavigate('laundry')}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-xl transition-all text-sm"
            >
              Все машины
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {machines.map((machine, index) => (
              <motion.button
                key={machine.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                onClick={() => onNavigate('laundry')}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/20 transition-all text-left ${
                  !machine.available ? 'opacity-70' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 rounded-lg p-2">
                      <Droplets className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-lg">{machine.name}</div>
                      <div className="text-xs text-white/70">{machine.floor}</div>
                    </div>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${
                    machine.available ? 'bg-green-400' : 'bg-red-400 animate-pulse'
                  }`} />
                </div>
                {machine.timeLeft && (
                  <div className="text-sm text-white/90">Осталось: {machine.timeLeft}</div>
                )}
                {machine.available && (
                  <div className="text-sm text-green-300">Доступна</div>
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <h2 className="text-xl text-gray-900 mb-4">Быстрые действия</h2>
          
          <button
            onClick={() => onNavigate('maintenance')}
            className="w-full bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl p-5 text-white shadow-lg hover:shadow-xl transition-all group"
          >
            <Wrench className="w-8 h-8 mb-3 group-hover:rotate-12 transition-transform" />
            <div className="text-lg">Обслуживание</div>
            <div className="text-sm text-white/80">Создать заявку</div>
          </button>

          <button
            onClick={() => onNavigate('complaints')}
            className="w-full bg-gradient-to-br from-orange-400 to-red-500 rounded-xl p-5 text-white shadow-lg hover:shadow-xl transition-all group"
          >
            <MessageSquareWarning className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform" />
            <div className="text-lg">Жалобы</div>
            <div className="text-sm text-white/80">Анонимно</div>
          </button>

          <button
            onClick={() => onNavigate('kitchen')}
            className="w-full bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl p-5 text-white shadow-lg hover:shadow-xl transition-all group"
          >
            <ChefHat className="w-8 h-8 mb-3 group-hover:rotate-12 transition-transform" />
            <div className="text-lg">Кухня</div>
            <div className="text-sm text-white/80">Забронировать</div>
          </button>

          <button className="w-full bg-gradient-to-br from-red-400 to-red-600 rounded-xl p-5 text-white shadow-lg hover:shadow-xl transition-all group">
            <AlertCircle className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform" />
            <div className="text-lg">SOS</div>
            <div className="text-sm text-white/80">Экстренная помощь</div>
          </button>
        </motion.div>
      </div>

      {/* News Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="space-y-4"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-900">
            <Newspaper className="w-6 h-6" />
            <h2 className="text-2xl">Новости общежития</h2>
          </div>
          <button className="text-blue-600 hover:text-blue-700 text-sm">
            Все новости →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {news.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  {item.category}
                </span>
                <span className="text-xs text-gray-500">{item.date}</span>
              </div>
              <h3 className="text-gray-800 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
