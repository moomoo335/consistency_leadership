import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Models() {
  const brands = [
    {
      name: '乘龙展厅',
      path: '/models/chenglong',
      description: '中国领先的商用车品牌',
      logo: '/chenglong-logo.png',
      image: '/chenglong-truck.jpg',
    },
    {
      name: '欧曼展厅',
      path: '/models/auman',
      description: '高端重卡品牌，融合欧洲技术',
      logo: '/auman-logo.png',
      image: '/auman-truck.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative text-white py-24 mt-20">
        <img
          src="https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="车型中心"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6">车型中心</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            选择品牌，探索专业商用车型
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {brands.map((brand) => (
                <Link
                  key={brand.path}
                  to={brand.path}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-transparent hover:border-red-600"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                    <div className="absolute top-6 left-6 bg-white p-3 rounded-lg shadow-lg">
                      <img
                        src={brand.logo}
                        alt={`${brand.name} Logo`}
                        className="h-12 w-auto object-contain"
                      />
                    </div>
                  </div>
                  <div className="p-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-3">{brand.name}</h2>
                    <p className="text-gray-600 mb-6">{brand.description}</p>
                    <div className="inline-flex items-center text-red-600 font-semibold group-hover:gap-3 transition-all">
                      进入展厅
                      <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 text-white">
        <img
          src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="购车咨询"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
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
