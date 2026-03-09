import { Target, Compass, Heart } from 'lucide-react';

export default function Culture() {
  return (
    <section id="culture" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">企业文化</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Target className="text-white" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">愿景</h3>
            <p className="text-gray-700 text-center leading-relaxed">
              成为重庆地区具有影响力和竞争力的汽车销售服务品牌，为更多客户提供专业、便捷、可靠的汽车服务。
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Compass className="text-white" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">使命</h3>
            <p className="text-gray-700 text-center leading-relaxed">
              以客户满意为目标，以诚信服务为根本，以专业能力为支撑，持续为客户创造价值，推动汽车行业健康发展。
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Heart className="text-white" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">核心价值观</h3>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span><strong>专业：</strong>精通业务，提供专业服务</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span><strong>诚信：</strong>诚实守信，言行一致</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span><strong>创新：</strong>持续改进，追求卓越</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span><strong>共赢：</strong>与客户、员工、合作伙伴共同成长</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
