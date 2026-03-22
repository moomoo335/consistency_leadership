import { Link } from 'react-router-dom';
import { ChevronRight, ArrowLeft } from 'lucide-react';

export default function ChenglongCargo() {
  const models = [
    {
      name: '乘龙H5载货车',
      description: '大容量装载，城际物流首选',
      image: '/chenglong-truck.jpg',
    },
    {
      name: '乘龙M3载货车',
      description: '经济实用，中短途运输利器',
      image: '/chenglong-truck.jpg',
    },
    {
      name: '乘龙L3载货车',
      description: '轻量化设计，降低运营成本',
      image: '/chenglong-truck.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative text-white py-32 mt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/chenglong-truck.jpg"
            alt="Chenglong Cargo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/models"
            className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            返回车型中心
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-6xl font-bold mb-6">乘龙载货车</h1>
            <p className="text-2xl text-gray-200">
              多功能物流运输解决方案
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">产品介绍</h2>
              <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
              乘龙载货车系列以大承载力和高可靠性著称，
              适用于城际物流、区域配送等多种运输场景。
              采用优化的车身结构设计，提供更大的载货空间，
              同时保证良好的燃油经济性和驾驶舒适性。
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">热门车型</h2>
            <p className="text-gray-600 text-lg">优质车型，满足不同运输需求</p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {models.map((model, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {model.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {model.description}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold"
                  >
                    了解详情
                    <ChevronRight className="ml-1" size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">准备购买乘龙载货车？</h2>
          <p className="text-xl text-gray-300 mb-8">
            联系我们获取详细的车型资料、配置方案和优惠价格
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            立即咨询
            <ChevronRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
