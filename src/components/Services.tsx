import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: '购车支持',
      description: '灵活金融与保险方案,降低企业资金压力,助力快速投入运营。',
      image: 'https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg',
      link: '/service/finance',
    },
    {
      title: '维修保养',
      description: '原厂技术与专业服务网络,确保车辆高效运行,减少停运风险。',
      image: 'https://images.pexels.com/photos/4489743/pexels-photo-4489743.jpeg',
      link: '/service/maintenance',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">我们的服务</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="mb-6 overflow-hidden rounded">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[260px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <Link
                to={service.link}
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:opacity-70 transition-opacity"
              >
                了解更多
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">经营范围</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 max-w-4xl mx-auto">
            <div className="flex items-start space-x-2">
              <span className="text-red-600 mt-1">✓</span>
              <span>新能源汽车整车销售</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-red-600 mt-1">✓</span>
              <span>汽车新车销售</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-red-600 mt-1">✓</span>
              <span>二手车经纪</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-red-600 mt-1">✓</span>
              <span>汽车零配件批发与零售</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-red-600 mt-1">✓</span>
              <span>机动车修理和维护</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-red-600 mt-1">✓</span>
              <span>汽车装饰用品销售</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-red-600 mt-1">✓</span>
              <span>汽车租赁</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-red-600 mt-1">✓</span>
              <span>保险代理业务</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
