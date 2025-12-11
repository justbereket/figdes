import { useState } from 'react';
import { HomeScreen } from './components/HomeScreen';
import { LaundryTracker } from './components/LaundryTracker';
import { Complaints } from './components/Complaints';
import { KitchenBooking } from './components/KitchenBooking';
import { FloorRatings } from './components/FloorRatings';
import { Maintenance } from './components/Maintenance';
import { Profile } from './components/Profile';
import { Home, Shirt, User, MessageSquareWarning, ChefHat, Star, Wrench, Menu, X, Bell } from 'lucide-react';

type Screen = 'home' | 'laundry' | 'complaints' | 'kitchen' | 'ratings' | 'maintenance' | 'profile';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigationItems = [
    { id: 'home' as Screen, label: 'Главная', icon: Home },
    { id: 'laundry' as Screen, label: 'Стирка', icon: Shirt },
    { id: 'complaints' as Screen, label: 'Жалобы', icon: MessageSquareWarning },
    { id: 'kitchen' as Screen, label: 'Кухня', icon: ChefHat },
    { id: 'ratings' as Screen, label: 'Рейтинги', icon: Star },
    { id: 'maintenance' as Screen, label: 'Обслуживание', icon: Wrench },
    { id: 'profile' as Screen, label: 'Профиль', icon: User },
  ];

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen onNavigate={setCurrentScreen} />;
      case 'laundry':
        return <LaundryTracker />;
      case 'complaints':
        return <Complaints />;
      case 'kitchen':
        return <KitchenBooking />;
      case 'ratings':
        return <FloorRatings />;
      case 'maintenance':
        return <Maintenance />;
      case 'profile':
        return <Profile />;
      default:
        return <HomeScreen onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Top Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              >
                {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white">
                  D
                </div>
                <div>
                  <h1 className="text-xl text-gray-900">DormLife</h1>
                  <p className="text-xs text-gray-500">Управление общежитием</p>
                </div>
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4">
              <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm">
                  Ж
                </div>
                <div className="hidden sm:block">
                  <div className="text-sm text-gray-900">Жансая</div>
                  <div className="text-xs text-gray-500">Комната 217</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <aside className={`${
            sidebarOpen ? 'block' : 'hidden'
          } lg:block w-64 flex-shrink-0`}>
            <div className="bg-white rounded-2xl shadow-lg p-4 sticky top-24">
              <nav className="space-y-1">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setCurrentScreen(item.id);
                        setSidebarOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                        currentScreen === item.id
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-200'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Quick Stats */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-xs text-gray-500 uppercase mb-3 px-2">Быстрая статистика</h3>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-3">
                    <div className="text-xs text-gray-600">Доступно машин</div>
                    <div className="text-2xl text-green-600">2/4</div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-3">
                    <div className="text-xs text-gray-600">Рейтинг этажа</div>
                    <div className="text-2xl text-blue-600">4.3</div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {renderScreen()}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
