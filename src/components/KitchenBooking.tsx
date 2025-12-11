import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Clock, Calendar as CalendarIcon, CheckCircle2 } from 'lucide-react';

export function KitchenBooking() {
  const [selectedDate, setSelectedDate] = useState<number | null>(8);
  const [selectedTime, setSelectedTime] = useState<string | null>('10:30');

  const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  const dates = Array.from({ length: 30 }, (_, i) => i + 1);

  const timeSlots = [
    { id: '08:00', time: '08:00', available: true },
    { id: '10:30', time: '10:30', available: true },
    { id: '13:00', time: '13:00', available: false },
    { id: '15:30', time: '15:30', available: true },
    { id: '18:00', time: '18:00', available: true },
    { id: '20:00', time: '20:00', available: false },
  ];

  const upcomingBookings = [
    { id: 1, date: '15 августа', time: '10:30', kitchen: 'Кухня 1' },
    { id: 2, date: '18 августа', time: '18:00', kitchen: 'Кухня 2' },
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl text-gray-900 mb-2">Бронирование кухни</h1>
        <p className="text-gray-600">Забронируйте время для использования кухни</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Booking Form - 2 columns */}
        <div className="lg:col-span-2 space-y-6">
          {/* Calendar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white border-2 border-gray-200 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl text-gray-900">Август 2024</h2>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-xl hover:bg-gray-100 flex items-center justify-center transition-colors">
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <button className="w-10 h-10 rounded-xl hover:bg-gray-100 flex items-center justify-center transition-colors">
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Days of week */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              {daysOfWeek.map((day, i) => (
                <div key={i} className="text-center text-sm text-gray-500 py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Dates grid */}
            <div className="grid grid-cols-7 gap-2">
              {/* Empty cells for alignment */}
              {[1, 2].map((i) => (
                <div key={`empty-${i}`} />
              ))}
              {dates.map((date) => (
                <motion.button
                  key={date}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedDate(date)}
                  className={`aspect-square rounded-xl flex items-center justify-center transition-all ${
                    selectedDate === date
                      ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg'
                      : 'hover:bg-gray-100 text-gray-700'
                  } ${date === 8 || date === 16 ? 'ring-2 ring-purple-300' : ''}`}
                >
                  {date}
                </motion.button>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gradient-to-br from-blue-600 to-indigo-600 rounded"></div>
                <span className="text-gray-600">Выбранная дата</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-purple-300 rounded"></div>
                <span className="text-gray-600">Есть бронь</span>
              </div>
            </div>
          </motion.div>

          {/* Time Slots */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl text-gray-900 mb-4">Выберите время</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {timeSlots.map((slot, index) => (
                <motion.button
                  key={slot.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  onClick={() => slot.available && setSelectedTime(slot.id)}
                  disabled={!slot.available}
                  className={`rounded-xl p-5 transition-all flex flex-col items-center gap-2 ${
                    selectedTime === slot.id
                      ? 'bg-gradient-to-br from-green-400 to-emerald-600 text-white shadow-lg'
                      : slot.available
                      ? 'bg-white border-2 border-gray-200 text-gray-700 hover:border-blue-400'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <Clock className="w-5 h-5" />
                  <div>{slot.time}</div>
                  {!slot.available && <div className="text-xs">Занято</div>}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Room Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl text-gray-900 mb-4">Выберите кухню</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[1, 2].map((num) => (
                <button
                  key={num}
                  className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-xl p-5 text-left hover:border-purple-400 transition-all"
                >
                  <h4 className="text-gray-900 mb-1">Кухня {num}</h4>
                  <p className="text-sm text-gray-600">Этаж {num}</p>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileTap={{ scale: 0.95 }}
            disabled={!selectedDate || !selectedTime}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl py-5 shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg flex items-center justify-center gap-2"
          >
            <CalendarIcon className="w-6 h-6" />
            Забронировать
          </motion.button>
        </div>

        {/* Sidebar - Upcoming Bookings */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <h2 className="text-xl text-gray-900">Мои брони</h2>

          <div className="space-y-3">
            {upcomingBookings.map((booking, index) => (
              <motion.div
                key={booking.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-5"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-green-500 rounded-full p-2">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-900">{booking.kitchen}</h4>
                    <p className="text-sm text-gray-600">{booking.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700 bg-white rounded-lg p-2">
                  <Clock className="w-4 h-4" />
                  <span>{booking.time}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Rules Card */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
            <h3 className="text-gray-900 mb-3">📋 Правила</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Максимум 2 часа за бронь</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Уберите после использования</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Отмена минимум за 2 часа</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Не опаздывайте на бронь</span>
              </li>
            </ul>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-2xl text-blue-600 mb-1">12</div>
              <div className="text-xs text-gray-600">Всего броней</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-2xl text-green-600 mb-1">2</div>
              <div className="text-xs text-gray-600">Активных</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
