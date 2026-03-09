import { Link } from 'react-router-dom';
import { ChevronRight, Truck } from 'lucide-react';

export default function Models() {
  const brands = [
    {
      name: '乘龙展厅',
      path: '/models/chenglong',
      description: '中国领先的商用车品牌',
    },
    {
      name: '欧曼展厅',
      path: '/models/auman',
      description: '高端重卡品牌，融合欧洲技术',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">车型一览</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            提供全系商用车型，满足各类运输需求
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {brands.map((brand) => (
                <Link
                  key={brand.path}
                  to={brand.path}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-transparent hover:border-red-600"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mb-6">
                    <Truck className="text-white" size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">{brand.name}</h2>
                  <p className="text-gray-600 mb-6">{brand.description}</p>
                  <div className="inline-flex items-center text-red-600 font-semibold">
                    进入展厅
                    <ChevronRight className="ml-2" size={20} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">需要购车咨询？</h2>
          <p className="text-xl text-gray-300 mb-8">
            联系我们的专业顾问，为您推荐最适合的商用车方案
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
