import { MapPin, Phone, Mail, Clock, MessageSquare, Building } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: '公司地址',
      content: '重庆市江北区',
      detail: '（详细地址待更新）',
    },
    {
      icon: Phone,
      title: '联系电话',
      content: '销售热线：待更新',
      detail: '售后服务：待更新',
    },
    {
      icon: Mail,
      title: '电子邮箱',
      content: '邮箱：待更新',
      detail: '',
    },
    {
      icon: Clock,
      title: '营业时间',
      content: '周一至周日',
      detail: '8:00 - 18:00',
    },
  ];

  const departments = [
    {
      name: '销售部',
      description: '车型咨询、试驾预约、购车服务',
      phone: '待更新',
    },
    {
      name: '售后部',
      description: '维修保养、配件供应、技术支持',
      phone: '待更新',
    },
    {
      name: '金融部',
      description: '购车金融、贷款申请、方案咨询',
      phone: '待更新',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative text-white py-24 mt-20">
        <img
          src="https://images.pexels.com/photos/7173037/pexels-photo-7173037.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="联系我们"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6">联系我们</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            随时为您提供专业的商用车咨询服务
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all text-center"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <item.icon className="text-blue-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 mb-1">{item.content}</p>
                {item.detail && <p className="text-gray-600 text-sm">{item.detail}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">各部门联系方式</h2>
              <p className="text-gray-600 text-lg">根据您的需求，联系对应部门获取专业服务</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {departments.map((dept, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mb-6">
                    <Building className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{dept.name}</h3>
                  <p className="text-gray-600 mb-4">{dept.description}</p>
                  <div className="flex items-center text-blue-600">
                    <Phone size={18} className="mr-2" />
                    <span className="font-semibold">{dept.phone}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">在线留言</h2>
                <p className="text-gray-600 mb-8">
                  填写以下表单，我们会尽快与您联系
                </p>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      姓名 *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      联系电话 *
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="请输入您的联系电话"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      咨询类型
                    </label>
                    <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>车型咨询</option>
                      <option>购车金融</option>
                      <option>售后服务</option>
                      <option>配件查询</option>
                      <option>其他</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      留言内容 *
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="请输入您的留言内容"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all"
                  >
                    提交留言
                  </button>
                </form>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">常见问题</h2>
                <div className="space-y-6">
                  <div className="bg-slate-50 p-6 rounded-xl">
                    <h3 className="font-bold text-slate-900 mb-2">如何预约试驾？</h3>
                    <p className="text-gray-600 text-sm">
                      您可以通过电话联系我们的销售部，或填写在线留言表单，我们会尽快安排试驾时间。
                    </p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-xl">
                    <h3 className="font-bold text-slate-900 mb-2">购车需要准备什么资料？</h3>
                    <p className="text-gray-600 text-sm">
                      企业购车需要提供营业执照、法人身份证等基本资料。如需申请金融服务，还需要提供财务相关证明材料。
                    </p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-xl">
                    <h3 className="font-bold text-slate-900 mb-2">售后服务如何预约？</h3>
                    <p className="text-gray-600 text-sm">
                      请提前致电售后服务部预约保养维修时间，以便我们为您安排合适的服务时段，减少等待时间。
                    </p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-xl">
                    <h3 className="font-bold text-slate-900 mb-2">配件如何查询和订购？</h3>
                    <p className="text-gray-600 text-sm">
                      您可以联系售后服务部或配件专员，提供车型和配件信息，我们会为您快速查询并提供报价。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-900 to-slate-800 p-12 rounded-2xl text-center">
              <MessageSquare className="text-white mx-auto mb-6" size={64} />
              <h2 className="text-4xl font-bold mb-6">我们期待与您沟通</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                无论您有任何关于商用车销售、金融、售后服务的问题，我们的专业团队都将竭诚为您服务
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 transition-all"
                >
                  <Phone className="mr-2" size={20} />
                  立即致电
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  在线留言
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0 bg-slate-50">
        <div className="h-96 bg-slate-300 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="text-slate-600 mx-auto mb-4" size={48} />
            <p className="text-slate-600 text-lg">地图位置展示区域</p>
            <p className="text-slate-500 text-sm mt-2">（可嵌入高德地图或百度地图）</p>
          </div>
        </div>
      </section>
    </div>
  );
}
