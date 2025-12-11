import { motion } from 'motion/react';
import { User, MapPin, Globe, ChevronRight, Bell, Shield, HelpCircle, LogOut, Mail, Phone, Calendar } from 'lucide-react';

export function Profile() {
  const profileInfo = [
    { icon: Mail, label: 'Email', value: 'zhansaya@dormlife.com' },
    { icon: Phone, label: 'Телефон', value: '+7 (777) 123-45-67' },
    { icon: MapPin, label: 'Комната', value: '217, 2 этаж' },
    { icon: Calendar, label: 'Дата заселения', value: '1 сентября 2023' },
    { icon: Globe, label: 'Язык', value: 'Русский' },
  ];

  const settingsItems = [
    { icon: Bell, label: 'Уведомления', description: 'Настройка оповещений' },
    { icon: Shield, label: 'Приватность', description: 'Безопасность и конфиденциальность' },
    { icon: HelpCircle, label: 'Помощь и поддержка', description: 'Часто задаваемые вопросы' },
  ];

  const activityStats = [
    { label: 'Жалобы отправлено', value: '3', color: 'from-orange-500 to-red-500' },
    { label: 'Заявки на обслуживание', value: '5', color: 'from-blue-500 to-indigo-600' },
    { label: 'Брони кухни', value: '12', color: 'from-purple-500 to-purple-600' },
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl text-gray-900 mb-2">Профиль</h1>
        <p className="text-gray-600">Управление личной информацией и настройками</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Profile Section - 2 columns */}
        <div className="lg:col-span-2 space-y-6">
          {/* User Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white shadow-xl"
          >
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center text-blue-600 text-4xl shadow-lg flex-shrink-0">
                Ж
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-2">Жансая</h2>
                <p className="text-white/80 mb-4">Студент • Комната 217</p>
                <div className="flex gap-3">
                  <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-xl transition-all">
                    Редактировать профиль
                  </button>
                  <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-xl transition-all">
                    Сменить фото
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Activity Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl text-gray-900 mb-4">Активность</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {activityStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className={`bg-gradient-to-br ${stat.color} rounded-xl p-6 text-white shadow-lg`}
                >
                  <div className="text-3xl mb-2">{stat.value}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Profile Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl text-gray-900 mb-4">Личная информация</h2>
            <div className="bg-white border-2 border-gray-200 rounded-2xl divide-y divide-gray-200">
              {profileInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    className="p-5 flex items-center gap-4 hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <div className="bg-blue-100 rounded-lg p-3 text-blue-600">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500">{item.label}</div>
                      <div className="text-gray-900">{item.value}</div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Settings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-2xl text-gray-900 mb-4">Настройки</h2>
            <div className="bg-white border-2 border-gray-200 rounded-2xl divide-y divide-gray-200">
              {settingsItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.05 }}
                    className="p-5 flex items-center gap-4 hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <Icon className="w-5 h-5 text-gray-600" />
                    <div className="flex-1">
                      <div className="text-gray-900">{item.label}</div>
                      <div className="text-sm text-gray-500">{item.description}</div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Logout Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl py-4 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
          >
            <LogOut className="w-5 h-5" />
            Выйти из аккаунта
          </motion.button>
        </div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          {/* Quick Info */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-2xl p-6">
            <h3 className="text-gray-900 mb-4">📊 Статистика</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 text-sm">Рейтинг комнаты</span>
                <span className="text-gray-900">4.8 ⭐</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 text-sm">Место в рейтинге</span>
                <span className="text-gray-900">2 место</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 text-sm">Дней в общежитии</span>
                <span className="text-gray-900">467</span>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-2xl p-6">
            <h3 className="text-gray-900 mb-4">🏆 Достижения</h3>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-2xl">🌟</div>
                  <div className="text-sm text-gray-900">Чистюля</div>
                </div>
                <div className="text-xs text-gray-600">5 недель подряд идеальная чистота</div>
              </div>
              <div className="bg-white rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-2xl">🤝</div>
                  <div className="text-sm text-gray-900">Хороший сосед</div>
                </div>
                <div className="text-xs text-gray-600">Нет жалоб на шум</div>
              </div>
              <div className="bg-white rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-2xl">👨‍🍳</div>
                  <div className="text-sm text-gray-900">Мастер кухни</div>
                </div>
                <div className="text-xs text-gray-600">10+ успешных броней</div>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6">
            <h3 className="text-gray-900 mb-3">💬 Нужна помощь?</h3>
            <p className="text-sm text-gray-600 mb-4">
              Наша команда поддержки всегда готова помочь вам
            </p>
            <button className="w-full bg-blue-600 text-white rounded-lg py-3 hover:bg-blue-700 transition-colors">
              Связаться с поддержкой
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
