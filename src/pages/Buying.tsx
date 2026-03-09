import { Link } from 'react-router-dom';
import { DollarSign, FileText, CheckCircle, Clock, CreditCard, Shield, Users, Phone } from 'lucide-react';

export default function Buying() {
  const financingOptions = [
    {
      icon: DollarSign,
      title: '低首付方案',
      description: '首付低至20%，减轻购车压力',
      features: ['首付20%-30%', '最长5年还款期', '灵活还款方式'],
    },
    {
      icon: CreditCard,
      title: '零息金融',
      description: '特定车型享受零利率优惠',
      features: ['指定车型0利率', '最长24个月免息', '手续简便快捷'],
    },
    {
      icon: Clock,
      title: '快速审批',
      description: '最快当天审批放款',
      features: ['当天审批', '快速放款', '专人跟进'],
    },
    {
      icon: Shield,
      title: '灵活方案',
      description: '根据客户需求定制还款计划',
      features: ['个性化方案', '按揭弹性', '提前还款无罚息'],
    },
  ];

  const buyingSteps = [
    {
      step: '01',
      title: '车型咨询',
      description: '专业顾问为您推荐合适车型，详细介绍车辆配置和价格',
    },
    {
      step: '02',
      title: '试驾体验',
      description: '预约试驾，亲身感受车辆性能和驾驶体验',
    },
    {
      step: '03',
      title: '金融方案',
      description: '根据您的需求，定制最优购车金融方案',
    },
    {
      step: '04',
      title: '签约订车',
      description: '签订购车合同，支付定金，确认交车时间',
    },
    {
      step: '05',
      title: '交付验车',
      description: '按约定时间交车，专业讲解车辆使用和保养',
    },
    {
      step: '06',
      title: '售后服务',
      description: '提供全面的售后服务和技术支持',
    },
  ];

  const documents = [
    '企业营业执照',
    '法人身份证',
    '近3个月银行流水',
    '车辆用途说明',
    '其他财务证明材料',
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">购车支持</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            提供灵活的购车金融方案，让您轻松拥有商用车
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">金融方案</h2>
            <p className="text-gray-600 text-lg">多种金融方案可选，满足不同购车需求</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {financingOptions.map((option, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <option.icon className="text-blue-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <ul className="space-y-2">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                      <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">购车流程</h2>
            <p className="text-gray-600 text-lg">简单6步，轻松购车</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {buyingSteps.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-5xl font-bold text-blue-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">申请金融所需资料</h2>
                <p className="text-gray-600 mb-6">
                  准备以下资料，可以加快审批速度
                </p>
                <ul className="space-y-3">
                  {documents.map((doc, index) => (
                    <li key={index} className="flex items-start">
                      <FileText className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-gray-700">
                    <strong>温馨提示：</strong>
                    具体资料要求可能因金融方案不同而有所差异，详情请咨询我们的金融顾问。
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-xl text-white">
                <Users className="text-white mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4">专业金融团队</h3>
                <p className="text-blue-100 mb-6">
                  我们的金融顾问团队拥有丰富的商用车金融服务经验，为您提供：
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 flex-shrink-0" size={20} />
                    <span>专业的金融方案咨询</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 flex-shrink-0" size={20} />
                    <span>快速的审批流程</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 flex-shrink-0" size={20} />
                    <span>全程跟进服务</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 flex-shrink-0" size={20} />
                    <span>一对一专属服务</span>
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all"
                >
                  <Phone className="mr-2" size={20} />
                  立即咨询
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">开始您的购车之旅</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            联系我们获取详细的购车金融方案，我们的专业顾问将为您提供一对一服务
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/models"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 transition-all"
            >
              查看车型
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all"
            >
              联系我们
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
