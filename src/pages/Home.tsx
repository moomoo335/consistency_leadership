import { Link } from 'react-router-dom';
import { ChevronRight, Truck, Wrench, Package, DollarSign, Shield, Users, Award, Clock } from 'lucide-react';

export default function Home() {
  const featuredVehicles = [
    {
      id: 1,
      name: '牵引车系列',
      description: '强劲动力，长途运输首选',
      specs: '马力：420-560HP | 载重：40-60吨',
      image: 'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 2,
      name: '重型卡车',
      description: '大载重，高效率，超耐用',
      specs: '马力：350-450HP | 载重：25-40吨',
      image: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 3,
      name: '轻型卡车',
      description: '灵活机动，城市配送专家',
      specs: '马力：130-180HP | 载重：2-8吨',
      image: 'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 4,
      name: '新能源物流车',
      description: '绿色环保，节能降本',
      specs: '续航：200-300km | 载重：1-5吨',
      image: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const services = [
    {
      icon: Truck,
      title: '车辆销售',
      description: '提供多品牌商用车销售，满足不同运输需求',
    },
    {
      icon: DollarSign,
      title: '购车金融',
      description: '快速审批，低首付，灵活还款方案',
    },
    {
      icon: Wrench,
      title: '维修保养',
      description: '专业技师团队，原厂设备，品质保证',
    },
    {
      icon: Package,
      title: '原厂配件',
      description: '品类齐全，正品保障，快速供应',
    },
  ];

  const advantages = [
    {
      icon: Shield,
      title: '厂家授权经销商',
      description: '多品牌授权，正规渠道保障',
    },
    {
      icon: Users,
      title: '专业技术团队',
      description: '10年以上经验，持证上岗',
    },
    {
      icon: Award,
      title: '完善售后体系',
      description: '全国联保，24小时应急服务',
    },
    {
      icon: Clock,
      title: '快速金融审批',
      description: '最快当天放款，灵活方案',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/Screenshot_2026-03-07_at_18.12.30.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              重庆恒帅汽车
              <span className="block text-blue-400 mt-2">专业商用车销售</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              创科技 · 领高效 · 享信赖
            </p>
            <p className="text-lg text-gray-300 mb-12">
              提供全系商用车销售、金融、维修、配件一站式服务
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/models"
                className="inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                查看车型
                <ChevronRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-100 text-slate-900 font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                联系我们
                <ChevronRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">热门车型推荐</h2>
            <p className="text-gray-600 text-lg">精选主打商用车型，满足多样运输需求</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{vehicle.name}</h3>
                  <p className="text-gray-600 mb-3">{vehicle.description}</p>
                  <p className="text-sm text-gray-500 mb-4">{vehicle.specs}</p>
                  <Link
                    to="/models"
                    className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold"
                  >
                    查看详情
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">我们的服务</h2>
            <p className="text-gray-600 text-lg">提供全方位商用车服务解决方案</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">为什么选择我们</h2>
            <p className="text-gray-600 text-lg">专业、可靠、值得信赖的商用车服务商</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl border border-slate-200 hover:border-blue-300 transition-all"
              >
                <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <item.icon className="text-red-600" size={28} />
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">专业服务中心</h2>
              <p className="text-gray-300 text-lg mb-6">
                配备先进维修设备和专业技术团队，为您的车辆提供全方位保障
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-300">原厂标准维修车间，设备先进齐全</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-300">10年以上经验技师团队，持证上岗</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-300">原厂配件供应，质量有保障</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-300">24小时应急救援服务</span>
                </li>
              </ul>
              <Link
                to="/service"
                className="inline-flex items-center mt-8 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all"
              >
                了解更多
                <ChevronRight className="ml-2" size={20} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">100+</div>
                <div className="text-gray-400">服务客户</div>
              </div>
              <div className="bg-slate-800 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-400">全天候服务</div>
              </div>
              <div className="bg-slate-800 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">10+</div>
                <div className="text-gray-400">年行业经验</div>
              </div>
              <div className="bg-slate-800 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">98%</div>
                <div className="text-gray-400">客户满意度</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">关于我们</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              重庆恒帅汽车销售有限公司成立于2024年，注册资本100万元，位于重庆市江北区。
              公司专注于商用车销售、维修服务及配件供应，致力于为客户提供优质、高效的一站式汽车服务解决方案。
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              我们秉承"专业、诚信、创新、共赢"的经营理念，以客户需求为导向，
              不断提升服务质量，努力成为客户信赖的商用车服务合作伙伴。
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">准备购买商用车？</h2>
          <p className="text-xl text-gray-300 mb-8">
            我们的专业团队随时为您提供咨询服务
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
