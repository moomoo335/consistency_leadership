import { Building2, Users, Award, TrendingUp, Target, Compass, Heart, Calendar } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Building2,
      title: '专业团队',
      description: '经验丰富的销售与服务团队',
    },
    {
      icon: Users,
      title: '客户至上',
      description: '以客户需求为导向',
    },
    {
      icon: Award,
      title: '品质保证',
      description: '严格的质量管理体系',
    },
    {
      icon: TrendingUp,
      title: '持续创新',
      description: '不断提升服务水平',
    },
  ];

  const milestones = [
    {
      year: '2024年',
      title: '公司成立',
      description: '重庆恒帅汽车销售有限公司正式成立，注册资本100万元，开启汽车销售服务新篇章。',
    },
    {
      year: '2024年',
      title: '业务拓展',
      description: '完善产品线，建立专业团队，开展新车销售、二手车交易、维修保养等多元化业务。',
    },
    {
      year: '2024年',
      title: '服务升级',
      description: '引入先进的服务理念和管理体系，提升客户满意度，打造优质服务品牌。',
    },
    {
      year: '未来',
      title: '持续发展',
      description: '不断创新服务模式，扩大市场份额，致力于成为重庆地区领先的汽车销售服务商。',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">关于我们</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            专业、诚信、创新、共赢
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">企业简介</h2>
              <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  重庆恒帅汽车销售有限公司成立于2024年，注册资本100万元，是一家专注于汽车销售、维修服务及配件供应的综合性企业。
                </p>
                <p>
                  公司秉承"专业、诚信、创新、共赢"的经营理念，致力于为客户提供优质、高效的一站式汽车服务解决方案。
                </p>
                <p>
                  我们拥有经验丰富的销售团队和专业的技术服务人员，能够为客户提供从车辆选购、金融方案、售后维修到配件供应的全方位服务。
                </p>
                <p>
                  公司始终坚持以客户需求为导向，以市场变化为动力，不断优化服务流程，提升服务质量，努力成为重庆地区值得信赖的汽车销售服务商。
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <item.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">企业文化</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Target className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">愿景</h3>
              <p className="text-gray-700 text-center leading-relaxed">
                成为重庆地区具有影响力和竞争力的汽车销售服务品牌，为更多客户提供专业、便捷、可靠的汽车服务。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Compass className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">使命</h3>
              <p className="text-gray-700 text-center leading-relaxed">
                以客户满意为目标，以诚信服务为根本，以专业能力为支撑，持续为客户创造价值，推动汽车行业健康发展。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Heart className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">核心价值观</h3>
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">发展历程</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              稳健起步，持续成长，不断超越
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 to-red-600 transform md:-translate-x-1/2"></div>

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative mb-12 ${
                    index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                  }`}
                >
                  <div className="flex items-center mb-4 md:justify-start">
                    <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-red-600 rounded-full transform md:-translate-x-1/2 flex items-center justify-center z-10">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'}`}>
                      <div className="inline-flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-full">
                        <Calendar size={20} />
                        <span className="font-bold">{milestone.year}</span>
                      </div>
                    </div>
                  </div>

                  <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100">
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">未来展望</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  展望未来，重庆恒帅汽车销售有限公司将继续坚持"专业、诚信、创新、共赢"的核心价值观，不断提升服务质量和客户满意度。
                </p>
                <p>
                  公司计划在未来三年内进一步拓展业务范围，引入更多优质品牌，建立更完善的服务网络，打造智能化、数字化的服务平台。
                </p>
                <p>
                  同时，我们将加强团队建设，培养更多专业人才，积极履行社会责任，为推动汽车行业的健康发展贡献力量，努力成为重庆地区最值得信赖的汽车销售服务品牌。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
