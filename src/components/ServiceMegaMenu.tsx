import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface ServiceMegaMenuProps {
  isVisible: boolean;
}

export default function ServiceMegaMenu({ isVisible }: ServiceMegaMenuProps) {
  const buyingServices = [
    { label: '金融方案', path: '/finance-service' },
    { label: '保险服务', path: '/buying-service' },
    { label: '获取报价', path: '/buying-service' },
    { label: '购车咨询', path: '/buying-service' },
  ];

  const afterSalesServices = [
    { label: '维修保养', path: '/maintenance-service' },
    { label: '服务网点', path: '/service' },
    { label: '原厂配件', path: '/parts' },
    { label: '客户支持', path: '/contact' },
  ];

  return (
    <div
      className={`absolute left-1/2 -translate-x-1/2 top-full w-screen bg-white shadow-lg transition-all duration-300 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-16 py-10 flex gap-24">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-slate-900 mb-6 pb-3 border-b-2 border-slate-200">
            购车服务
          </h3>
          <ul className="space-y-4">
            {buyingServices.map((service) => (
              <li key={service.label}>
                <Link
                  to={service.path}
                  className="group flex items-center justify-between py-2 text-gray-700 hover:text-slate-900 transition-colors cursor-pointer"
                >
                  <span className="text-base font-medium">{service.label}</span>
                  <ChevronRight
                    size={18}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-bold text-slate-900 mb-6 pb-3 border-b-2 border-slate-200">
            售后服务
          </h3>
          <ul className="space-y-4">
            {afterSalesServices.map((service) => (
              <li key={service.label}>
                <Link
                  to={service.path}
                  className="group flex items-center justify-between py-2 text-gray-700 hover:text-slate-900 transition-colors cursor-pointer"
                >
                  <span className="text-base font-medium">{service.label}</span>
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
