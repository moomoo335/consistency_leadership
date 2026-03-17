import { Link } from 'react-router-dom';
import { CheckCircle, Users, Zap } from 'lucide-react';

export default function FinanceService() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-screen flex items-center justify-center mt-20">
        <img
          src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="金融服务"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">金融服务</h1>
          <p className="text-2xl md:text-3xl text-gray-200">为您的运输业务提供灵活的金融解决方案</p>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-bold text-slate-900 mb-8">为您的业务提供金融支持</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                我们为客户提供灵活的商用车金融解决方案，<br />
                帮助企业更轻松地采购车辆并优化资金使用效率。
              </p>
            </div>
            <div className="relative h-[500px] overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="商用卡车"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">车辆贷款</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                提供灵活贷款方案，帮助客户降低购车资金压力。
              </p>
            </div>
            <div className="bg-white p-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">分期付款</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                通过分期付款方式，让客户更轻松完成车辆采购。
              </p>
            </div>
            <div className="bg-white p-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">金融租赁</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                提供灵活租赁方案，满足不同企业的运营需求。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-screen flex items-center justify-center">
        <img
          src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="高效运输"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">让您的运输业务更加高效</h2>
          <p className="text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            通过灵活金融方案，<br />
            帮助企业提升运营效率并降低资金压力。
          </p>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">快速审批</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                高效的审批流程，快速获取金融方案
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">灵活方案</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                根据企业需求定制专属金融解决方案
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">专业团队</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                经验丰富的金融顾问全程为您服务
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-900 text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-8">需要金融方案？</h2>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-red-600 hover:bg-red-700 text-white font-semibold text-lg transition-all"
          >
            联系我们
          </Link>
        </div>
      </section>
    </div>
  );
}
