import { Link } from 'react-router-dom';
import { Truck, Phone, MapPin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-bold text-xl mb-6">恒帅汽车</h3>
            <p className="text-gray-400 leading-relaxed">
              专业商用车销售与服务
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-6">快速链接</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link to="/models" className="hover:text-white transition-colors">
                  车型中心
                </Link>
              </li>
              <li>
                <Link to="/buying-service" className="hover:text-white transition-colors">
                  购车与服务
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">服务</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/services/finance" className="hover:text-white transition-colors">
                  金融服务
                </Link>
              </li>
              <li>
                <Link to="/services/maintenance" className="hover:text-white transition-colors">
                  维修保养
                </Link>
              </li>
              <li>
                <Link to="/parts" className="hover:text-white transition-colors">
                  原厂配件
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">联系我们</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>重庆市江北区</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <span>联系电话：待更新</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <span>邮箱：待更新</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} 重庆恒帅汽车销售有限公司 版权所有
          </p>
        </div>
      </div>
    </footer>
  );
}
