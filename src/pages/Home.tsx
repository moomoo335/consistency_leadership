import { Link } from 'react-router-dom';
import { ArrowRight, Wallet, Wrench, Package, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-screen flex items-center">
        <img
          src="https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="卡车运输场景"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12 w-full">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
              让运输更高效
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-16 font-light leading-relaxed">
              专业商用车销售与一站式服务解决方案
            </p>
            <div className="flex flex-wrap gap-6">
              <Link
                to="/models"
                className="px-10 py-5 bg-white text-black font-medium text-lg hover:bg-white/90 transition-all"
              >
                查看车型
              </Link>
              <Link
                to="/contact"
                className="px-10 py-5 bg-transparent border-2 border-white text-white font-medium text-lg hover:bg-white hover:text-black transition-all"
              >
                获取报价
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">我们的服务</h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-4xl mx-auto">
            从购车、融资到售后维护，我们为运输企业提供全生命周期支持
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Link
              to="/service"
              className="group relative h-[600px] overflow-hidden bg-gray-100"
            >
              <img
                src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="购车与服务"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-12">
                <h2 className="text-5xl font-bold text-white mb-4">购车与服务</h2>
                <p className="text-xl text-white/90 mb-6 font-light">金融方案、保险、售后支持</p>
                <div className="inline-flex items-center text-white text-lg font-medium group-hover:gap-3 gap-2 transition-all">
                  了解更多
                  <ArrowRight size={20} />
                </div>
              </div>
            </Link>

            <Link
              to="/parts"
              className="group relative h-[600px] overflow-hidden bg-gray-100"
            >
              <img
                src="https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="汽车配件"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-12">
                <h2 className="text-5xl font-bold text-white mb-4">汽车配件</h2>
                <p className="text-xl text-white/90 mb-6 font-light">原厂配件、快速供应、稳定品质</p>
                <div className="inline-flex items-center text-white text-lg font-medium group-hover:gap-3 gap-2 transition-all">
                  了解更多
                  <ArrowRight size={20} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            <div>
              <div className="mb-6">
                <Wallet size={48} className="text-black" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">金融服务</h3>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                灵活的购车金融方案
              </p>
            </div>

            <div>
              <div className="mb-6">
                <Wrench size={48} className="text-black" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">维修保养</h3>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                专业技术保障运营
              </p>
            </div>

            <div>
              <div className="mb-6">
                <Package size={48} className="text-black" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">配件支持</h3>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                原厂配件快速供应
              </p>
            </div>

            <div>
              <div className="mb-6">
                <Users size={48} className="text-black" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">车队管理</h3>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                一站式车队解决方案
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">车型展示</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Link to="/models/chenglong/tractor" className="group">
              <div className="relative h-[400px] overflow-hidden bg-gray-100 mb-8">
                <img
                  src="/chenglong-truck.jpg"
                  alt="牵引车"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-3xl font-bold text-black mb-4">牵引车</h3>
              <p className="text-lg text-gray-600 font-light mb-6">
                长途运输的可靠伙伴
              </p>
              <div className="inline-flex items-center text-black font-medium group-hover:gap-3 gap-2 transition-all">
                了解更多
                <ArrowRight size={18} />
              </div>
            </Link>

            <Link to="/models/auman/cargo" className="group">
              <div className="relative h-[400px] overflow-hidden bg-gray-100 mb-8">
                <img
                  src="/auman-truck.jpg"
                  alt="载货车"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-3xl font-bold text-black mb-4">载货车</h3>
              <p className="text-lg text-gray-600 font-light mb-6">
                城际物流高效之选
              </p>
              <div className="inline-flex items-center text-black font-medium group-hover:gap-3 gap-2 transition-all">
                了解更多
                <ArrowRight size={18} />
              </div>
            </Link>

            <Link to="/models/chenglong/dump" className="group">
              <div className="relative h-[400px] overflow-hidden bg-gray-100 mb-8">
                <img
                  src="https://images.pexels.com/photos/1886610/pexels-photo-1886610.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="自卸车"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-3xl font-bold text-black mb-4">自卸车</h3>
              <p className="text-lg text-gray-600 font-light mb-6">
                工程建设专业设备
              </p>
              <div className="inline-flex items-center text-black font-medium group-hover:gap-3 gap-2 transition-all">
                了解更多
                <ArrowRight size={18} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 text-center">
            <div>
              <div className="text-6xl md:text-7xl font-bold text-black mb-4">1000+</div>
              <div className="text-xl text-gray-600 font-light">服务客户</div>
            </div>
            <div>
              <div className="text-6xl md:text-7xl font-bold text-black mb-4">50+</div>
              <div className="text-xl text-gray-600 font-light">覆盖城市</div>
            </div>
            <div>
              <div className="text-6xl md:text-7xl font-bold text-black mb-4">15年</div>
              <div className="text-xl text-gray-600 font-light">行业经验</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 md:py-40 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-16">需要专业运输解决方案？</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/contact"
              className="px-10 py-5 bg-white text-black font-medium text-lg hover:bg-white/90 transition-all"
            >
              联系我们
            </Link>
            <Link
              to="/contact"
              className="px-10 py-5 bg-transparent border-2 border-white text-white font-medium text-lg hover:bg-white hover:text-black transition-all"
            >
              获取报价
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
