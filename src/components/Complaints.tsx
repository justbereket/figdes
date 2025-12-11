import { useState } from 'react';
import { motion } from 'motion/react';
import { Volume2, Droplets, WrenchIcon, Camera, Send, Upload } from 'lucide-react';

export function Complaints() {
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);
  const [description, setDescription] = useState('');

  const issues = [
    { id: 'noise', label: 'Шум', icon: Volume2, color: 'from-red-400 to-red-600' },
    { id: 'dirt', label: 'Грязь', icon: Droplets, color: 'from-orange-400 to-orange-600' },
    { id: 'broken', label: 'Сломанное оборудование', icon: WrenchIcon, color: 'from-yellow-400 to-yellow-600' },
  ];

  const recentComplaints = [
    { id: 1, type: 'Шум', status: 'Рассмотрена', date: '2 дня назад', floor: '3 этаж' },
    { id: 2, type: 'Грязь', status: 'В процессе', date: '5 дней назад', floor: '2 этаж' },
    { id: 3, type: 'Сломанное оборудование', status: 'Решена', date: '1 неделю назад', floor: '2 этаж' },
  ];

  const handleSubmit = () => {
    if (selectedIssue && description) {
      alert('Жалоба отправлена анонимно!');
      setSelectedIssue(null);
      setDescription('');
    }
  };

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl text-gray-900 mb-2">Анонимные жалобы</h1>
        <p className="text-gray-600">Ваши жалобы останутся конфиденциальными</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Complaint Form - 2 columns */}
        <div className="lg:col-span-2 space-y-6">
          {/* Issue Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-xl text-gray-900 mb-4">Что случилось?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {issues.map((issue, index) => {
                const Icon = issue.icon;
                return (
                  <motion.button
                    key={issue.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    onClick={() => setSelectedIssue(issue.id)}
                    className={`bg-gradient-to-br ${issue.color} rounded-2xl p-6 text-white shadow-lg flex flex-col items-center gap-3 transition-all ${
                      selectedIssue === issue.id
                        ? 'ring-4 ring-blue-300 scale-105'
                        : 'hover:scale-105'
                    }`}
                  >
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                      <Icon className="w-8 h-8" />
                    </div>
                    <span className="text-lg">{issue.label}</span>
                    {selectedIssue === issue.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-6 h-6 bg-white rounded-full flex items-center justify-center"
                      >
                        <div className="w-3 h-3 bg-blue-600 rounded-full" />
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl text-gray-900 mb-4">Опишите проблему</h3>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Расскажите подробнее о проблеме... Укажите этаж, комнату и время происшествия."
              className="w-full h-40 bg-white border-2 border-gray-200 rounded-2xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </motion.div>

          {/* Photo Upload */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-xl text-gray-900 mb-4">Приложите фото (необязательно)</h3>
            <button className="w-full border-2 border-dashed border-gray-300 rounded-2xl p-12 flex flex-col items-center gap-4 text-gray-500 hover:border-blue-400 hover:text-blue-500 hover:bg-blue-50 transition-all">
              <div className="bg-gray-100 rounded-full p-6">
                <Upload className="w-10 h-10" />
              </div>
              <div className="text-center">
                <div>Нажмите чтобы загрузить</div>
                <div className="text-sm text-gray-400 mt-1">или перетащите файл сюда</div>
              </div>
            </button>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSubmit}
            disabled={!selectedIssue || !description}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl py-5 shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg"
          >
            <Send className="w-6 h-6" />
            Отправить анонимно
          </motion.button>
        </div>

        {/* Recent Complaints Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <h2 className="text-xl text-gray-900">Недавние жалобы</h2>

          <div className="space-y-3">
            {recentComplaints.map((complaint, index) => (
              <motion.div
                key={complaint.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-sm text-gray-900">{complaint.type}</span>
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    complaint.status === 'Решена' 
                      ? 'bg-green-100 text-green-700'
                      : complaint.status === 'В процессе'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {complaint.status}
                  </span>
                </div>
                <div className="text-xs text-gray-500">{complaint.floor}</div>
                <div className="text-xs text-gray-400 mt-1">{complaint.date}</div>
              </motion.div>
            ))}
          </div>

          {/* Info Card */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
            <h3 className="text-gray-900 mb-3">💡 Советы</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Добавьте фото для быстрого решения</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Укажите точное время и место</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Опишите проблему подробно</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Все жалобы анонимны</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
