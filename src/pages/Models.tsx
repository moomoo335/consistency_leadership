import { Link } from 'react-router-dom';
import { ChevronRight, Gauge, Weight, Zap, Fuel } from 'lucide-react';

export default function Models() {
  const vehicleCategories = [
    {
      category: '牵引车系列',
      description: '适用于长途运输，强劲动力，高效可靠',
      models: [
        {
          name: '重型牵引车 6x4',
          power: '420-480HP',
          weight: '40-50吨',
          fuel: '柴油',
          features: ['AMT自动变速', '驾驶室空气悬挂', '主动安全系统'],
          image: 'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
        {
          name: '超重型牵引车 6x4',
          power: '500-560HP',
          weight: '50-60吨',
          fuel: '柴油',
          features: ['大马力发动机', '智能驾驶辅助', '低油耗设计'],
          image: 'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
      ],
    },
    {
      category: '重型卡车',
      description: '大载重，高效率，适合各类运输场景',
      models: [
        {
          name: '重型自卸车 8x4',
          power: '380-420HP',
          weight: '30-40吨',
          fuel: '柴油',
          features: ['加强型货箱', '液压举升系统', '超强承载'],
          image: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
        {
          name: '重型载货车 6x2',
          power: '350-400HP',
          weight: '25-35吨',
          fuel: '柴油',
          features: ['大容积货箱', '省油经济', '操控灵活'],
          image: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
      ],
    },
    {
      category: '中型卡车',
      description: '灵活机动，适合城际运输',
      models: [
        {
          name: '中型载货车 4x2',
          power: '180-220HP',
          weight: '8-12吨',
          fuel: '柴油',
          features: ['城际配送专用', '经济省油', '维护便捷'],
          image: 'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
      ],
    },
    {
      category: '轻型卡车',
      description: '城市配送首选，机动灵活',
      models: [
        {
          name: '轻型厢式货车',
          power: '130-156HP',
          weight: '3-5吨',
          fuel: '柴油',
          features: ['城市配送', '低排放', '易驾驶'],
          image: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
        {
          name: '微型货车',
          power: '100-120HP',
          weight: '1-2吨',
          fuel: '汽油/柴油',
          features: ['小巧灵活', '经济实惠', '市区通行'],
          image: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
      ],
    },
    {
      category: '新能源车型',
      description: '绿色环保，节能降本',
      models: [
        {
          name: '纯电动物流车',
          power: '120kW电机',
          weight: '2-4吨',
          fuel: '纯电动',
          features: ['零排放', '低运营成本', '静音舒适'],
          image: 'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
      ],
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

      <section className="py-16">
        <div className="container mx-auto px-4">
          {vehicleCategories.map((category, idx) => (
            <div key={idx} className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-3">{category.category}</h2>
                <p className="text-gray-600 text-lg">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.models.map((model, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={model.image}
                        alt={model.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white">{model.name}</h3>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <Gauge className="text-blue-600" size={24} />
                          </div>
                          <div className="text-sm text-gray-600">动力</div>
                          <div className="font-semibold text-slate-900">{model.power}</div>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <Weight className="text-blue-600" size={24} />
                          </div>
                          <div className="text-sm text-gray-600">载重</div>
                          <div className="font-semibold text-slate-900">{model.weight}</div>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <Fuel className="text-blue-600" size={24} />
                          </div>
                          <div className="text-sm text-gray-600">燃料</div>
                          <div className="font-semibold text-slate-900">{model.fuel}</div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-slate-900 mb-3">主要配置</h4>
                        <ul className="space-y-2">
                          {model.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all"
                      >
                        咨询详情
                        <ChevronRight className="ml-2" size={20} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">找不到合适的车型？</h2>
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
