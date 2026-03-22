import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PartsMegaMenuProps {
  isVisible: boolean;
}

export default function PartsMegaMenu({ isVisible }: PartsMegaMenuProps) {
  const categories = [
    { label: '发动机系统', path: '/parts' },
    { label: '变速箱系统', path: '/parts' },
    { label: '制动系统', path: '/parts' },
    { label: '电气系统', path: '/parts' },
    { label: '车身与外观', path: '/parts' },
    { label: '内饰配件', path: '/parts' },
    { label: '轮胎与轮毂', path: '/parts' },
  ];

  const hotProducts = [
    { label: '发动机机油', path: '/parts' },
    { label: '刹车片', path: '/parts' },
    { label: '空气滤芯', path: '/parts' },
    { label: '蓄电池', path: '/parts' },
    { label: '商用车轮胎', path: '/parts' },
  ];

  const quickActions = [
    { label: '进入配件商城', path: '/parts' },
    { label: '查看采购清单', path: '/parts' },
    { label: '联系客服', path: '/contact' },
  ];

  return (
    <div
      className={`absolute left-1/2 -translate-x-1/2 top-full w-screen bg-white shadow-lg transition-all duration-300 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-16 py-10 grid grid-cols-[2fr_2fr_1.5fr] gap-20">
        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-6 pb-3 border-b-2 border-slate-200">
            配件分类
          </h3>
          <ul className="space-y-4">
            {categories.map((category) => (
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
            热门配件
          </h3>
          <ul className="space-y-4">
            {hotProducts.map((product) => (
              <li key={product.label}>
                <Link
                  to={product.path}
                  className="group flex items-center justify-between py-2 text-gray-700 hover:text-slate-900 transition-colors cursor-pointer"
                >
                  <span className="text-base font-medium">{product.label}</span>
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
            快速采购
          </h3>
          <ul className="space-y-4">
            {quickActions.map((action) => (
              <li key={action.label}>
                <Link
                  to={action.path}
                  className="group flex items-center justify-between py-2 text-gray-700 hover:text-slate-900 transition-colors cursor-pointer"
                >
                  <span className="text-base font-medium">{action.label}</span>
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
  );
}
