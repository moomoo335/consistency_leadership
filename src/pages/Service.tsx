import { Link } from 'react-router-dom';
import { Wrench, Clock, Shield, Award, Phone, MapPin, CheckCircle, Settings } from 'lucide-react';

export default function Service() {
  const services = [
    {
      icon: Wrench,
      title: '定期保养',
      description: '按厂家标准提供专业保养服务',
      items: ['更换机油机滤', '检查制动系统', '检查轮胎磨损', '电路系统检查'],
    },
    {
      icon: Settings,
      title: '维修服务',
      description: '专业技师团队，快速诊断维修',
      items: ['发动机维修', '变速箱维修', '底盘维修', '电气系统维修'],
    },
    {
      icon: Shield,
      title: '质保服务',
      description: '完善的质保体系，让您无忧',
      items: ['整车质保', '核心部件延保', '免费检测', '质保期内免工时费'],
    },
    {
      icon: Clock,
      title: '应急救援',
      description: '24小时应急救援服务',
      items: ['24小时热线', '道路救援', '紧急维修', '拖车服务'],
    },
  ];

  const advantages = [
    {
      icon: Award,
      title: '专业资质',
      description: '厂家授权服务中心，技师持证上岗',
    },
    {
      icon: Wrench,
      title: '先进设备',
      description: '配备原厂级维修检测设备',
    },
    {
      icon: Shield,
      title: '原厂配件',
      description: '使用原厂配件，质量有保证',
    },
    {
      icon: Clock,
      title: '高效服务',
      description: '快速响应，缩短停车时间',
    },
  ];

  const maintenancePackages = [
    {
      name: '基础保养',
      price: '¥800起',
      includes: ['更换机油', '更换机滤', '常规检查', '免费洗车'],
      suitable: '适合常规保养',
    },
    {
      name: '标准保养',
      price: '¥1500起',
      includes: ['更换机油', '更换机滤', '更换空滤', '全车检测', '免费洗车'],
      suitable: '推荐选择',
      featured: true,
    },
    {
      name: '深度保养',
      price: '¥2500起',
      includes: ['更换机油', '更换三滤', '制动系统保养', '全车深度检测', '免费洗车'],
      suitable: '适合长途运营车辆',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">售后服务</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            专业维修保养团队，为您的车辆保驾护航
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">服务项目</h2>
            <p className="text-gray-600 text-lg">提供全方位的售后服务解决方案</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="text-blue-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">保养套餐</h2>
            <p className="text-gray-600 text-lg">灵活的保养套餐，满足不同需求</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {maintenancePackages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl overflow-hidden shadow-lg transition-all ${
                  pkg.featured
                    ? 'ring-2 ring-red-500 transform scale-105'
                    : 'hover:shadow-xl'
                }`}
              >
                {pkg.featured && (
                  <div className="bg-red-600 text-white text-center py-2 font-semibold">
                    推荐方案
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">{pkg.price}</div>
                  <p className="text-sm text-gray-600 mb-6">{pkg.suitable}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle size={20} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`block text-center px-6 py-3 rounded-lg font-semibold transition-all ${
                      pkg.featured
                        ? 'bg-red-600 hover:bg-red-700 text-white'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                    }`}
                  >
                    立即预约
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">服务优势</h2>
            <p className="text-gray-600 text-lg">为什么选择我们的售后服务</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((item, index) => (
              <div
                key={index}
                className="text-center p-8"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">服务中心信息</h2>
              <p className="text-gray-300 text-lg">欢迎到店咨询和预约保养维修服务</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-800 p-8 rounded-xl">
                <MapPin className="text-blue-400 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-4">服务中心地址</h3>
                <p className="text-gray-300 mb-2">重庆市江北区</p>
                <p className="text-sm text-gray-400">（具体地址待更新）</p>
              </div>

              <div className="bg-slate-800 p-8 rounded-xl">
                <Phone className="text-blue-400 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-4">联系方式</h3>
                <p className="text-gray-300 mb-2">服务热线：待更新</p>
                <p className="text-gray-300 mb-2">24小时救援：待更新</p>
                <p className="text-sm text-gray-400 mt-4">营业时间：周一至周日 8:00-18:00</p>
              </div>
            </div>

            <div className="mt-8 bg-blue-900/30 p-8 rounded-xl border border-blue-800">
              <h3 className="text-xl font-bold mb-4">温馨提示</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-0.5 flex-shrink-0" size={20} />
                  <span>建议提前预约保养维修服务，减少等待时间</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-0.5 flex-shrink-0" size={20} />
                  <span>首次保养免费，详情请咨询服务顾问</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-0.5 flex-shrink-0" size={20} />
                  <span>定期保养可延长车辆使用寿命，降低故障率</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">预约服务</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            立即预约保养维修服务，享受专业高效的售后体验
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            <Phone className="mr-2" size={20} />
            立即预约
          </Link>
        </div>
      </section>
    </div>
  );
}
