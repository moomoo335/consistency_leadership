import { Link } from 'react-router-dom';
import { ChevronRight, Shield, Users, Award } from 'lucide-react';

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
      title: '购车支持',
      description: '快速审批，低首付，灵活还款方案',
      image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/services/finance',
    },
    {
      title: '维修保养',
      description: '专业技师团队，原厂设备，品质保证',
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/services/maintenance',
    },
    {
      title: '原厂配件',
      description: '品类齐全，正品保障，快速供应',
      image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/parts',
    },
  ];

  const advantages = [
    {
      icon: Shield,
      title: '厂家授权',
      description: '多品牌授权，正规渠道保障',
    },
    {
      icon: Users,
      title: '专业维修团队',
      description: '经验丰富，持证上岗',
    },
    {
      icon: Award,
      title: '完善售后服务',
      description: '全程跟踪，贴心保障',
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
              <Link
                key={vehicle.id}
                to="/models"
                className="group relative h-[350px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/50 transition-colors"></div>
                <div className="relative h-full flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{vehicle.name}</h3>
                  <p className="text-gray-100 mb-6">{vehicle.description}</p>
                  <div className="inline-flex items-center text-white font-semibold group-hover:text-red-400 transition-colors">
                    查看详情
                    <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group relative h-[350px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/50 transition-colors"></div>
                <div className="relative h-full flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-100 mb-6">{service.description}</p>
                  <div className="inline-flex items-center text-white font-semibold group-hover:text-red-400 transition-colors">
                    了解更多
                    <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" size={18} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">公司优势</h2>
            <p className="text-gray-600 text-lg">专业、可靠、值得信赖的商用车服务商</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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

      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">联系我们</h2>
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
