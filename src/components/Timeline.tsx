import { Calendar } from 'lucide-react';

export default function Timeline() {
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
    <section id="timeline" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">发展历程</h2>
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
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
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
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">未来展望</h3>
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
  );
}
