import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Wrench, Package, Headphones, CheckCircle, Shield, Clock, Award } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-screen flex items-center">
        <img
          src="https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="卡车运输场景"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/50"></div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              让运输更高效
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
              专业商用车销售与一站式服务解决方案
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/models"
                className="px-8 py-4 bg-white text-slate-900 font-semibold text-lg rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                查看车型
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold text-lg rounded-lg hover:bg-white hover:text-slate-900 transition-colors inline-flex items-center gap-2"
              >
                获取报价
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              to="/models"
              className="group relative h-[500px] overflow-hidden rounded-lg"
            >
              <img
                src="https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="车型中心"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">车型中心</h2>
                <p className="text-xl text-gray-200 mb-6">查看乘龙与欧曼全系列车型</p>
                <div className="inline-flex items-center text-white text-lg group-hover:translate-x-2 transition-transform">
                  进入车型
                  <ArrowRight className="ml-2" size={24} />
                </div>
              </div>
            </Link>

            <Link
              to="/service"
              className="group relative h-[500px] overflow-hidden rounded-lg"
            >
              <img
                src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="购车与服务"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">购车与服务</h2>
                <p className="text-xl text-gray-200 mb-6">金融、维修、售后一体化服务</p>
                <div className="inline-flex items-center text-white text-lg group-hover:translate-x-2 transition-transform">
                  了解服务
                  <ArrowRight className="ml-2" size={24} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">热门车型</h2>
            <p className="text-xl text-gray-600">满足不同运输场景需求</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/models/chenglong" className="group">
              <div className="relative h-80 overflow-hidden rounded-lg mb-6">
                <img
                  src="/chenglong-truck.jpg"
                  alt="6x4牵引车"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">6x4牵引车</h3>
              <p className="text-lg text-gray-600">适用于长途干线运输</p>
            </Link>

            <Link to="/models/auman" className="group">
              <div className="relative h-80 overflow-hidden rounded-lg mb-6">
                <img
                  src="/auman-truck.jpg"
                  alt="8x4载货车"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">8x4载货车</h3>
              <p className="text-lg text-gray-600">高载重，适合城际物流</p>
            </Link>

            <Link to="/models" className="group">
              <div className="relative h-80 overflow-hidden rounded-lg mb-6">
                <img
                  src="https://images.pexels.com/photos/1886610/pexels-photo-1886610.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="6x4自卸车"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">6x4自卸车</h3>
              <p className="text-lg text-gray-600">工程建设首选车型</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">一站式服务解决方案</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Truck className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">金融服务</h3>
              <p className="text-lg text-gray-600 leading-relaxed">降低资金压力，灵活购车</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Wrench className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">维修保养</h3>
              <p className="text-lg text-gray-600 leading-relaxed">保障车辆高效运行</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Package className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">原厂配件</h3>
              <p className="text-lg text-gray-600 leading-relaxed">品质保障，快速供应</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Headphones className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">技术支持</h3>
              <p className="text-lg text-gray-600 leading-relaxed">专业团队全程支持</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">为什么选择我们</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <Shield className="text-slate-900" size={36} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">原厂授权渠道</h3>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <Clock className="text-slate-900" size={36} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">快速交付能力</h3>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <CheckCircle className="text-slate-900" size={36} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">完整售后体系</h3>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <Award className="text-slate-900" size={36} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">一站式服务</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">关于我们</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                专注商用车销售与服务，为客户提供高效可靠的运输解决方案。
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-lg font-semibold text-slate-900 hover:text-slate-700 transition-colors"
              >
                了解更多
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
            <div className="relative h-[500px] overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="关于我们"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-900 text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">需要获取专业运输方案？</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-10 py-5 bg-white text-slate-900 font-semibold text-lg rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              联系我们
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="px-10 py-5 bg-transparent border-2 border-white text-white font-semibold text-lg rounded-lg hover:bg-white hover:text-slate-900 transition-colors inline-flex items-center gap-2"
            >
              获取报价
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
