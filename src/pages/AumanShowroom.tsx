import { Link } from 'react-router-dom';
import { ChevronRight, ArrowLeft } from 'lucide-react';

export default function AumanShowroom() {
  const categories = [
    {
      name: '牵引车',
      description: '适用于长途干线运输',
    },
    {
      name: '载货车',
      description: '多功能物流运输解决方案',
    },
    {
      name: '自卸车',
      description: '工程建设运输专用',
    },
    {
      name: '新能源车',
      description: '绿色环保运输方案',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative text-white py-32 mt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/auman-truck.jpg"
            alt="Auman Truck"
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
            返回车型一览
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-6xl font-bold mb-6">欧曼重卡</h1>
            <p className="text-2xl text-gray-200">
              高端重卡运输解决方案
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">品牌介绍</h2>
              <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
              欧曼重卡是福田戴姆勒汽车旗下高端重卡品牌，<br/>
              以领先的动力系统和智能技术著称，<br/>
              广泛应用于长途干线运输和大型物流运输。
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">车型系列</h2>
            <p className="text-gray-600 text-lg">专业车型，满足多样化运输需求</p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <span className="text-white text-2xl font-bold">{category.name[0]}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">对欧曼车型感兴趣？</h2>
          <p className="text-xl text-gray-300 mb-8">
            联系我们获取详细的车型资料和优惠方案
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
