import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/Screenshot_2026-03-07_at_18.12.30.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-slate-900/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            重庆恒帅汽车销售有限公司
          </h1>
          <p className="text-2xl md:text-3xl text-gray-200">
            专业商用车销售与服务
          </p>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-5xl font-bold text-slate-900 mb-8">
            欢迎来到重庆恒帅汽车销售有限公司
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            我们专注于商用车销售与服务，提供乘龙、欧曼等知名品牌卡车，
            以及全方位的金融支持、维修保养和配件供应服务。
            凭借专业的团队和优质的服务，我们致力于为客户提供最佳的商用车解决方案。
          </p>
        </div>
      </section>

      <section className="py-32 bg-slate-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-5xl font-bold text-slate-900 mb-20">车型展示</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Link
              to="/models/chenglong"
              className="group relative h-[500px] overflow-hidden"
            >
              <img
                src="/chenglong-truck.jpg"
                alt="乘龙卡车"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-12">
                <h3 className="text-4xl font-bold text-white mb-4">乘龙卡车</h3>
                <div className="inline-flex items-center text-white text-lg group-hover:text-red-400 transition-colors">
                  了解更多
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={24} />
                </div>
              </div>
            </Link>

            <Link
              to="/models/auman"
              className="group relative h-[500px] overflow-hidden"
            >
              <img
                src="/auman-truck.jpg"
                alt="欧曼卡车"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-12">
                <h3 className="text-4xl font-bold text-white mb-4">欧曼卡车</h3>
                <div className="inline-flex items-center text-white text-lg group-hover:text-red-400 transition-colors">
                  了解更多
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={24} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-5xl font-bold text-slate-900 mb-20">我们的服务</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Link
              to="/services/finance"
              className="group relative h-[500px] overflow-hidden"
            >
              <img
                src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="购车支持"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-12">
                <h3 className="text-4xl font-bold text-white mb-4">购车支持</h3>
                <p className="text-xl text-gray-200 mb-6">
                  提供灵活的金融解决方案，帮助您轻松购车
                </p>
                <div className="inline-flex items-center text-white text-lg group-hover:text-red-400 transition-colors">
                  了解更多
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={24} />
                </div>
              </div>
            </Link>

            <Link
              to="/services/maintenance"
              className="group relative h-[500px] overflow-hidden"
            >
              <img
                src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="维修保养"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-12">
                <h3 className="text-4xl font-bold text-white mb-4">维修保养</h3>
                <p className="text-xl text-gray-200 mb-6">
                  专业维修团队，确保车辆稳定高效运行
                </p>
                <div className="inline-flex items-center text-white text-lg group-hover:text-red-400 transition-colors">
                  了解更多
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={24} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-5xl font-bold text-slate-900 mb-20">行业应用</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="relative h-[400px] overflow-hidden group">
              <img
                src="https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="物流运输"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-3xl font-bold text-white">物流运输</h3>
              </div>
            </div>

            <div className="relative h-[400px] overflow-hidden group">
              <img
                src="https://images.pexels.com/photos/1886610/pexels-photo-1886610.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="工程运输"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-3xl font-bold text-white">工程运输</h3>
              </div>
            </div>

            <div className="relative h-[400px] overflow-hidden group">
              <img
                src="https://images.pexels.com/photos/1839904/pexels-photo-1839904.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="城市配送"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-3xl font-bold text-white">城市配送</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-900 text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-8">需要更多信息？</h2>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-red-600 hover:bg-red-700 text-white font-semibold text-lg transition-all"
          >
            联系我们
          </Link>
        </div>
      </section>
    </div>
  );
}
