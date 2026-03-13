import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BuyingService() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">购车与服务</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            提供全方位的购车金融方案和专业售后服务
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-white p-12 rounded-xl border border-slate-200 flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                欢迎来到重庆恒帅汽车销售有限公司
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                了解我们的业务，认识我们的产品与服务。<br />
                我们致力于为客户提供专业的商用车销售、<br />
                金融支持以及完善的售后服务解决方案。
              </p>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="商用卡车展示"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <Link
              to="/services/finance"
              className="group relative h-[400px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <img
                src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="购车支持"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/50 transition-colors"></div>
              <div className="relative h-full flex flex-col justify-end p-10">
                <h3 className="text-3xl font-bold text-white mb-4">购车支持</h3>
                <p className="text-gray-100 mb-6 text-lg leading-relaxed">
                  提供灵活的金融方案、快速审批和专业购车咨询，<br />
                  帮助客户轻松完成车辆采购。
                </p>
                <div className="inline-flex items-center text-white font-semibold group-hover:text-red-400 transition-colors">
                  了解更多
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </div>
              </div>
            </Link>

            <Link
              to="/services/maintenance"
              className="group relative h-[400px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <img
                src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="维修保养"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/50 transition-colors"></div>
              <div className="relative h-full flex flex-col justify-end p-10">
                <h3 className="text-3xl font-bold text-white mb-4">维修保养</h3>
                <p className="text-gray-100 mb-6 text-lg leading-relaxed">
                  专业维修团队与原厂设备，<br />
                  提供定期保养、故障检测及维修服务，<br />
                  确保车辆稳定高效运行。
                </p>
                <div className="inline-flex items-center text-white font-semibold group-hover:text-red-400 transition-colors">
                  了解更多
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
