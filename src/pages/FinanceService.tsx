import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FinanceService() {
  const [activeTab, setActiveTab] = useState<'financing' | 'insurance'>('financing');

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[60vh] flex items-center justify-center">
        <img
          src="https://images.pexels.com/photos/7876681/pexels-photo-7876681.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="金融服务"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60"></div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            金融服务解决方案
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto">
            为您的商用车业务提供灵活的融资与保险方案。
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => setActiveTab('financing')}
              className="px-10 py-5 bg-red-600 hover:bg-red-700 text-white font-semibold text-lg transition-all"
            >
              了解融资方案
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-white hover:bg-gray-100 text-slate-900 font-semibold text-lg transition-all"
            >
              联系我们
            </Link>
          </div>
        </div>
      </section>

      <section className="py-40">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8">
            有哪些金融产品适合您的业务?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            从灵活融资到可靠保险，我们的金融产品帮助您的运输业务持续前进。
          </p>
        </div>
      </section>

      <section className="pb-40">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="border-b border-gray-200 mb-16">
            <nav className="flex gap-12">
              <button
                onClick={() => setActiveTab('financing')}
                className={`pb-6 text-xl font-semibold transition-all relative ${
                  activeTab === 'financing'
                    ? 'text-slate-900'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                Financing
                {activeTab === 'financing' && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-900 transition-all"></div>
                )}
              </button>
              <button
                onClick={() => setActiveTab('insurance')}
                className={`pb-6 text-xl font-semibold transition-all relative ${
                  activeTab === 'insurance'
                    ? 'text-slate-900'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                Insurance
                {activeTab === 'insurance' && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-900 transition-all"></div>
                )}
              </button>
            </nav>
          </div>

          <div className="relative">
            <div
              className={`transition-opacity duration-500 ${
                activeTab === 'financing' ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
              }`}
            >
              <div className="mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                  融资方案
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl">
                  从第一辆卡车到不断扩大的车队，我们提供灵活的融资解决方案，帮助企业更高效地管理资金与车队发展。
                </p>
              </div>

              <div className="mb-24">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="融资方案"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-32">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                    贷款购车
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    传统贷款方案，固定利率，灵活还款期限。适合希望拥有车辆所有权的企业，提供多种贷款期限选择，帮助企业降低购车资金压力。
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                    融资租赁
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    以租代购，租期结束后可选择购买车辆。灵活的资金安排，保留企业现金流，同时享受税收优惠政策，是快速扩大车队规模的理想选择。
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                    运营租赁
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    短期或长期租赁方案，无需承担车辆残值风险。适合需要灵活调整车队规模的企业，降低固定资产投入，提高资金使用效率。
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 p-12 md:p-16">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16 text-center">
                  为什么选择我们的融资服务
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-slate-900 mb-4">
                      灵活融资
                    </h4>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      多种金融方案满足不同企业需求。
                    </p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-slate-900 mb-4">
                      审批高效
                    </h4>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      快速审批流程帮助客户尽快投入运营。
                    </p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-slate-900 mb-4">
                      专业支持
                    </h4>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      经验丰富的顾问团队提供专业建议。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`transition-opacity duration-500 ${
                activeTab === 'insurance' ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
              }`}
            >
              <div className="mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                  车辆保险服务
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl">
                  为您的车辆和车队提供全面保障，帮助企业降低风险并稳定运营。
                </p>
              </div>

              <div className="mb-24">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="车辆保险服务"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-32">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                    车辆综合险
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    全面覆盖车辆损失、碰撞、盗窃等风险。为您的商用车辆提供完整保护，确保在意外事故发生时，企业资产得到充分保障，降低经济损失。
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                    第三方责任险
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    保障因交通事故造成的第三方人身伤害和财产损失。符合法律法规要求，为企业规避潜在法律风险，保护企业声誉和财务安全。
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                    资产保障计划
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    针对整个车队的综合保障方案，包括车辆维修、道路救援、备用车辆等增值服务。帮助企业最大限度减少停运时间，保持业务连续性。
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 p-12 md:p-16">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16 text-center">
                  我们的保险优势
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-slate-900 mb-4">
                      全面车辆保障
                    </h4>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      覆盖各类风险，保护您的资产。
                    </p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-slate-900 mb-4">
                      快速理赔支持
                    </h4>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      高效理赔流程，减少停运时间。
                    </p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-slate-900 mb-4">
                      降低运营风险
                    </h4>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      专业风险评估，保障业务连续性。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 bg-slate-900 text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12">需要了解更多金融服务?</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-12 py-6 bg-red-600 hover:bg-red-700 text-white font-semibold text-lg transition-all"
            >
              联系我们
            </Link>
            <button
              onClick={() => {
                setActiveTab('financing');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center px-12 py-6 bg-white hover:bg-gray-100 text-slate-900 font-semibold text-lg transition-all"
            >
              咨询融资方案
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
