import { Link } from 'react-router-dom';
import { ChevronRight, ArrowLeft } from 'lucide-react';

export default function ChenglongDump() {
  const models = [
    {
      name: '乘龙H7自卸车',
      description: '重载自卸，工程运输专家',
      image: '/chenglong-truck.jpg',
    },
    {
      name: '乘龙H5自卸车',
      description: '高效耐用，矿山运输首选',
      image: '/chenglong-truck.jpg',
    },
    {
      name: '乘龙M3自卸车',
      description: '灵活机动，城市工程专用',
      image: '/chenglong-truck.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative text-white py-32 mt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/chenglong-truck.jpg"
            alt="Chenglong Dump"
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
            <h1 className="text-6xl font-bold mb-6">乘龙自卸车</h1>
            <p className="text-2xl text-gray-200">
              工程建设运输专用，强悍可靠
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
              乘龙自卸车系列专为工程建设和矿山运输设计，
              采用加强型车架和高强度货箱，承载能力强劲。
              配备先进的液压举升系统，卸货高效便捷，
              是工程运输和矿山作业的可靠伙伴。
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
          <h2 className="text-4xl font-bold mb-6">准备购买乘龙自卸车？</h2>
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
