import { motion } from 'motion/react';
import { Plus, Lightbulb, Wind, Droplet, CheckCircle2, Clock, AlertCircle } from 'lucide-react';

export function Maintenance() {
  const activeRequests = [
    {
      id: 1,
      title: 'Сломанный свет в комнате 217',
      icon: Lightbulb,
      status: 'В процессе',
      priority: 'Высокий',
      created: '2 дня назад',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      id: 2,
      title: 'Кондиционер не работает',
      icon: Wind,
      status: 'Назначено',
      priority: 'Средний',
      created: '5 дней назад',
      color: 'from-blue-400 to-blue-600',
    },
    {
      id: 3,
      title: 'Протекающий кран на кухне',
      icon: Droplet,
      status: 'Завершено',
      priority: 'Высокий',
      created: '1 неделю назад',
      color: 'from-green-400 to-emerald-600',
    },
  ];

  const stats = [
    { label: 'Открыто', value: '2', color: 'from-blue-500 to-blue-600' },
    { label: 'В процессе', value: '1', color: 'from-orange-500 to-orange-600' },
    { label: 'Завершено', value: '8', color: 'from-green-500 to-emerald-600' },
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl text-gray-900 mb-2">Обслуживание</h1>
          <p className="text-gray-600">Управление заявками на ремонт и обслуживание</p>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl px-6 py-3 shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Создать заявку
        </motion.button>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 text-white shadow-lg`}
          >
            <div className="text-4xl mb-2">{stat.value}</div>
            <div className="text-white/80">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Active Requests - 2 columns */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-2xl text-gray-900">Активные заявки</h2>
          
          {activeRequests.map((request, index) => {
            const Icon = request.icon;
            return (
              <motion.div
                key={request.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className={`bg-gradient-to-br ${request.color} rounded-xl p-4 text-white shadow-md flex-shrink-0`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg text-gray-900">{request.title}</h3>
                      <span className={`text-xs px-3 py-1 rounded-full flex-shrink-0 ml-2 ${
                        request.priority === 'Высокий' 
                          ? 'bg-red-100 text-red-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {request.priority}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        {request.status === 'Завершено' ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                            <span className="text-green-600">{request.status}</span>
                          </>
                        ) : request.status === 'В процессе' ? (
                          <>
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                            <span className="text-blue-600">{request.status}</span>
                          </>
                        ) : (
                          <>
                            <Clock className="w-4 h-4 text-orange-600" />
                            <span className="text-orange-600">{request.status}</span>
                          </>
                        )}
                      </div>
                      <span>•</span>
                      <span>{request.created}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          {/* Tips */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6">
            <h3 className="text-gray-900 mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-blue-600" />
              Советы
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 flex-shrink-0">✓</span>
                <span>Добавьте фото проблемы для быстрого решения</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 flex-shrink-0">✓</span>
                <span>Укажите точный номер комнаты и этаж</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 flex-shrink-0">✓</span>
                <span>Опишите проблему максимально подробно</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 flex-shrink-0">✓</span>
                <span>Укажите приоритет: срочно или может подождать</span>
              </li>
            </ul>
          </div>

          {/* Common Issues */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
            <h3 className="text-gray-900 mb-4">Частые проблемы</h3>
            <div className="space-y-3">
              {[
                { icon: Lightbulb, label: 'Освещение', count: 15 },
                { icon: Wind, label: 'Вентиляция', count: 8 },
                { icon: Droplet, label: 'Сантехника', count: 12 },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700">{item.label}</span>
                    </div>
                    <span className="text-sm text-gray-500">{item.count}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Response Time */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6">
            <h3 className="text-gray-900 mb-2">⚡ Среднее время ответа</h3>
            <div className="text-3xl text-green-600 mb-1">2.5 ч</div>
            <p className="text-sm text-gray-600">На 30% быстрее чем в прошлом месяце</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
