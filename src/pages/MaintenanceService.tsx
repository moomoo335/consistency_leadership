import { Link } from 'react-router-dom';
import { Wrench, Settings, Clock, Phone, MapPin, CheckCircle, ChevronRight, AlertTriangle, Shield } from 'lucide-react';

export default function MaintenanceService() {
  const services = [
    {
      icon: Wrench,
      title: '维修保养',
      description: '专业技师团队，定期保养维修服务',
      items: ['定期保养', '故障诊断', '配件更换', '系统检测'],
    },
    {
      icon: Clock,
      title: '道路救援',
      description: '24小时应急救援，随时待命',
      items: ['24小时热线', '快速响应', '现场维修', '拖车服务'],
    },
    {
      icon: Settings,
      title: '技术检测',
      description: '先进设备，全面检测车辆状况',
      items: ['发动机检测', '底盘检查', '电气系统', '安全系统'],
    },
    {
      icon: Phone,
      title: '服务预约',
      description: '便捷预约，减少等待时间',
      items: ['在线预约', '电话预约', '上门取车', '代步车服务'],
    },
  ];

  const maintenanceTypes = [
    {
      title: '定期保养',
      description: '按照车辆使用手册定期保养，确保车辆性能',
      features: ['机油更换', '滤清器更换', '液体检查', '轮胎检查'],
    },
    {
      title: '故障检测',
      description: '专业诊断设备，快速定位故障原因',
      features: ['电脑诊断', '故障码读取', '系统检测', '性能测试'],
    },
    {
      title: '维修服务',
      description: '原厂配件，专业维修，品质保证',
      features: ['发动机维修', '变速箱维修', '底盘维修', '电气维修'],
    },
    {
      title: '道路救援',
      description: '24小时应急救援，快速响应',
      features: ['现场抢修', '拖车服务', '应急充电', '换胎服务'],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">维修保养</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            专业维修团队，原厂设备与配件，确保您的车辆稳定高效运行
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">服务项目</h2>
            <p className="text-gray-600 text-lg">提供全方位的售后服务解决方案</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all"
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

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">专业服务内容</h2>
            <p className="text-gray-600 text-lg">覆盖车辆全生命周期的维保需求</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {maintenanceTypes.map((type, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-all"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <CheckCircle size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-12 rounded-2xl shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                  <MapPin className="text-blue-600 mb-4" size={32} />
                  <h3 className="text-xl font-bold text-slate-900 mb-4">服务中心地址</h3>
                  <p className="text-gray-700 mb-2">重庆市江北区</p>
                  <p className="text-sm text-gray-500">（具体地址待更新）</p>
                </div>

                <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                  <Phone className="text-blue-600 mb-4" size={32} />
                  <h3 className="text-xl font-bold text-slate-900 mb-4">联系方式</h3>
                  <p className="text-gray-700 mb-2">服务热线：待更新</p>
                  <p className="text-gray-700 mb-2">24小时救援：待更新</p>
                  <p className="text-sm text-gray-500 mt-4">营业时间：周一至周日 8:00-18:00</p>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-xl border border-blue-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <AlertTriangle className="mr-2 text-blue-600" size={24} />
                  温馨提示
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={20} />
                    <span>建议提前预约保养维修服务，减少等待时间</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={20} />
                    <span>首次保养免费，详情请咨询服务顾问</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={20} />
                    <span>定期保养可延长车辆使用寿命，降低故障率</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={20} />
                    <span>使用原厂配件，保障维修质量和车辆性能</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-12 rounded-2xl text-white shadow-2xl">
              <div className="flex items-center mb-6">
                <Shield className="mr-4" size={48} />
                <h2 className="text-3xl font-bold">服务保障</h2>
              </div>
              <p className="text-blue-100 mb-8 text-lg">
                我们承诺为您提供专业、可靠的维修保养服务
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="font-bold mb-2 text-lg">原厂配件</h3>
                  <p className="text-blue-100">使用厂家认证的原厂配件，保证质量</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="font-bold mb-2 text-lg">专业技师</h3>
                  <p className="text-blue-100">持证上岗，经验丰富的维修团队</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="font-bold mb-2 text-lg">质保服务</h3>
                  <p className="text-blue-100">维修项目提供质保，安心无忧</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="font-bold mb-2 text-lg">透明价格</h3>
                  <p className="text-blue-100">明码标价，收费透明，无隐藏费用</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">预约服务</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            联系我们预约维修保养服务，专业团队随时为您服务
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all"
            >
              立即预约
              <ChevronRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/parts"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 transition-all"
            >
              查看配件
              <ChevronRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
