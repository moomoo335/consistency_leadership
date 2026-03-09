import { Building2, Users, Award, TrendingUp } from 'lucide-react';

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

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">关于我们</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">企业简介</h3>
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
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                {item.title}
              </h3>
              <p className="text-gray-600 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
