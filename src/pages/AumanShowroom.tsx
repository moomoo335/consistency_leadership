import { Link } from 'react-router-dom';
import { ChevronRight, ArrowLeft } from 'lucide-react';

export default function AumanShowroom() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24 mt-20">
        <div className="container mx-auto px-4">
          <Link
            to="/models"
            className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            返回车型一览
          </Link>
          <h1 className="text-5xl font-bold mb-6">欧曼展厅</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            高端重卡品牌，融合欧洲技术
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-12 mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">品牌介绍</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              欧曼是福田汽车旗下的高端重卡品牌，融合欧洲先进技术与中国市场需求。
              以智能化、高效能、低油耗为核心优势，为客户创造更高的运营价值。
              产品覆盖长途运输、工程建设、城市配送等多个领域，是追求品质与效率的客户的理想选择。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">车型系列</h2>
            <p className="text-gray-600">内容待完善</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-xl p-12 text-center border-2 border-dashed border-slate-300">
              <p className="text-gray-500 text-lg mb-6">
                车型列表区域
              </p>
              <p className="text-gray-400">
                将在此展示欧曼品牌各系列车型
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">对欧曼车型感兴趣？</h2>
          <p className="text-xl text-gray-300 mb-8">
            联系我们获取详细的车型资料和优惠方案
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
