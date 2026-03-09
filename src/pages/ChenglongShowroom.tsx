import { Link } from 'react-router-dom';
import { ChevronRight, ArrowLeft } from 'lucide-react';

export default function ChenglongShowroom() {
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
          <h1 className="text-5xl font-bold mb-6">乘龙展厅</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            中国领先的商用车品牌
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-12 mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">品牌介绍</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              乘龙汽车是中国领先的商用车品牌，以卓越的品质、可靠的性能和创新的技术著称。
              专注于为客户提供高效、安全、舒适的运输解决方案，是长途运输和物流行业的首选品牌。
              产品线涵盖重型牵引车、载货车等多个系列，满足不同运输需求。
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
                将在此展示乘龙品牌各系列车型
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">对乘龙车型感兴趣？</h2>
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
