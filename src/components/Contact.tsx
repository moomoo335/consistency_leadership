import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: '公司地址',
      content: '重庆市江北区',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Phone,
      title: '联系电话',
      content: '待补充',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Mail,
      title: '电子邮箱',
      content: '待补充',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Clock,
      title: '营业时间',
      content: '周一至周日 9:00-18:00',
      color: 'from-red-500 to-red-600',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">联系我们</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            欢迎咨询，我们竭诚为您服务
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <item.icon className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.content}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">为什么选择我们？</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-bold text-gray-900 mb-3 text-lg">专业团队</h4>
              <p className="text-gray-700">
                拥有经验丰富的销售顾问和专业技师，为您提供专业的咨询和服务
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-bold text-gray-900 mb-3 text-lg">诚信经营</h4>
              <p className="text-gray-700">
                坚持诚信为本，价格透明，绝无隐性消费，让您买得放心
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-bold text-gray-900 mb-3 text-lg">优质服务</h4>
              <p className="text-gray-700">
                完善的售前、售中、售后服务体系，全程为您保驾护航
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-bold text-gray-900 mb-3 text-lg">品质保证</h4>
              <p className="text-gray-700">
                严格的质量管理体系，原厂配件，确保每一辆车的品质
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
