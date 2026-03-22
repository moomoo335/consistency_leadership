import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface MegaMenuProps {
  isVisible: boolean;
}

export default function MegaMenu({ isVisible }: MegaMenuProps) {
  const chenglongCategories = [
    { label: '牵引车', path: '/models/chenglong/tractor' },
    { label: '载货车', path: '/models/chenglong/cargo' },
    { label: '自卸车', path: '/models/chenglong/dump' },
    { label: '新能源车', path: '/models/chenglong/electric' },
  ];

  const aumanCategories = [
    { label: '牵引车', path: '/models/auman/tractor' },
    { label: '载货车', path: '/models/auman/cargo' },
    { label: '自卸车', path: '/models/auman/dump' },
    { label: '新能源车', path: '/models/auman/electric' },
  ];

  return (
    <div
      className={`absolute left-0 top-full w-full bg-white shadow-lg transition-all duration-300 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
    >
      <div className="max-w-[1000px] mx-auto px-16 py-10">
        <div className="grid grid-cols-2 gap-16">
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-6 pb-3 border-b-2 border-slate-200">
              乘龙展厅
            </h3>
            <ul className="space-y-4">
              {chenglongCategories.map((category) => (
                <li key={category.label}>
                  <Link
                    to={category.path}
                    className="group flex items-center justify-between py-2 text-gray-700 hover:text-slate-900 transition-colors cursor-pointer"
                  >
                    <span className="text-base font-medium">{category.label}</span>
                    <ChevronRight
                      size={18}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-6 pb-3 border-b-2 border-slate-200">
              欧曼展厅
            </h3>
            <ul className="space-y-4">
              {aumanCategories.map((category) => (
                <li key={category.label}>
                  <Link
                    to={category.path}
                    className="group flex items-center justify-between py-2 text-gray-700 hover:text-slate-900 transition-colors cursor-pointer"
                  >
                    <span className="text-base font-medium">{category.label}</span>
                    <ChevronRight
                      size={18}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
