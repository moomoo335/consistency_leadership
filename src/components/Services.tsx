import { Car, Wrench, Package, CreditCard, Shield, Headphones } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Car,
      title: '新车销售',
      description: '提供多品牌新车销售服务，车型选择丰富，价格透明合理',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Package,
      title: '二手车交易',
      description: '正规二手车交易平台，车况透明，手续齐全，售后有保障',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Wrench,
      title: '维修保养',
      description: '专业的汽车维修保养服务，使用原厂配件，技术精湛',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Package,
      title: '配件供应',
      description: '提供原厂及优质品牌配件，保证质量，价格实惠',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: CreditCard,
      title: '金融服务',
      description: '多种汽车金融方案，灵活的贷款方式，助您轻松购车',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Shield,
      title: '保险代理',
      description: '代理多家保险公司业务，为客户提供全面的车险服务',
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: Headphones,
      title: '售后服务',
      description: '完善的售后服务体系，7×24小时客户服务热线',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: Car,
      title: '汽车租赁',
      description: '提供短期、长期汽车租赁服务，车型多样，手续便捷',
      color: 'from-pink-500 to-pink-600',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">产品与服务</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            为客户提供全方位、一站式的汽车服务解决方案
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                <service.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
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
