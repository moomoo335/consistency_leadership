import { Link } from 'react-router-dom';

export default function MaintenanceService() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-screen flex items-center justify-center mt-20">
        <img
          src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="维修保养服务"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">维修保养服务</h1>
          <p className="text-2xl md:text-3xl text-gray-200">保障车辆高效稳定运行</p>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-bold text-slate-900 mb-8">专业维修与售后服务</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                我们提供专业维修保养服务，<br />
                确保车辆保持最佳运行状态，<br />
                帮助客户降低运营成本。
              </p>
            </div>
            <div className="relative h-[500px] overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="维修车间"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">专业维修团队</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                经验丰富的技师团队为您提供专业服务
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">先进检测设备</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                使用先进的诊断设备精准检测车辆状况
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">高效服务支持</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                快速响应，高效完成维修保养任务
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="bg-slate-50 p-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">定期保养</h3>
              <p className="text-lg text-gray-600">
                定期检查与保养，延长车辆使用寿命
              </p>
            </div>
            <div className="bg-slate-50 p-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">故障检测</h3>
              <p className="text-lg text-gray-600">
                专业诊断设备快速定位车辆故障
              </p>
            </div>
            <div className="bg-slate-50 p-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">维修服务</h3>
              <p className="text-lg text-gray-600">
                使用原厂配件，保障维修质量
              </p>
            </div>
            <div className="bg-slate-50 p-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">道路救援</h3>
              <p className="text-lg text-gray-600">
                24小时应急救援服务，快速响应
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-screen flex items-center justify-center">
        <img
          src="https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="保障车辆运行"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-5xl md:text-6xl font-bold">保障您的车辆稳定运行</h2>
        </div>
      </section>

      <section className="py-32 bg-slate-900 text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-8">需要维修服务？</h2>
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
