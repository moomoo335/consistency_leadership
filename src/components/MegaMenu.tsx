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
      className={`fixed left-0 right-0 bg-white shadow-md border-t border-gray-100 transition-all duration-300 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
      style={{ top: '80px' }}
    >
      <div className="max-w-[1100px] mx-auto px-8 py-12">
        <div className="grid grid-cols-2 gap-20">
          <div>
            <h3 className="text-base font-semibold text-slate-900 mb-6 tracking-wide">
              乘龙展厅
            </h3>
            <ul className="space-y-3">
              {chenglongCategories.map((category) => (
                <li key={category.label}>
                  <Link
                    to={category.path}
                    className="block py-2 text-gray-700 hover:text-slate-900 font-normal transition-colors"
                  >
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900 mb-6 tracking-wide">
              欧曼展厅
            </h3>
            <ul className="space-y-3">
              {aumanCategories.map((category) => (
                <li key={category.label}>
                  <Link
                    to={category.path}
                    className="block py-2 text-gray-700 hover:text-slate-900 font-normal transition-colors"
                  >
                    {category.label}
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
