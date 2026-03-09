import { Link } from 'react-router-dom';
import { Truck, Phone, MapPin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Truck className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">恒帅汽车</h3>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              专注于商用车销售、维修服务及配件供应的综合性企业，致力于为客户提供优质、高效的一站式汽车服务解决方案。
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">快速链接</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/" className="hover:text-red-500 transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link to="/models" className="hover:text-red-500 transition-colors">
                  车型一览
                </Link>
              </li>
              <li>
                <Link to="/buying-service" className="hover:text-red-500 transition-colors">
                  购车与服务
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-red-500 transition-colors">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">产品服务</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/models" className="hover:text-red-500 transition-colors">
                  牵引车
                </Link>
              </li>
              <li>
                <Link to="/models" className="hover:text-red-500 transition-colors">
                  重型卡车
                </Link>
              </li>
              <li>
                <Link to="/models" className="hover:text-red-500 transition-colors">
                  轻型卡车
                </Link>
              </li>
              <li>
                <Link to="/parts" className="hover:text-red-500 transition-colors">
                  原厂配件
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">联系我们</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>重庆市江北区</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span>联系电话：待更新</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span>邮箱：待更新</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} 重庆恒帅汽车销售有限公司 版权所有
          </p>
          <p className="text-gray-500 text-xs mt-2">
            专业 · 诚信 · 创新 · 共赢
          </p>
        </div>
      </div>
    </footer>
  );
}
