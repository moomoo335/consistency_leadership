import { Link } from 'react-router-dom';
import { Package, Shield, Truck, Clock, CheckCircle, Phone } from 'lucide-react';

export default function Parts() {
  const categories = [
    {
      name: '发动机系统',
      items: ['发动机总成', '缸体缸盖', '活塞连杆', '曲轴凸轮轴', '涡轮增压器', '喷油器'],
      icon: '🔧',
    },
    {
      name: '传动系统',
      items: ['变速箱总成', '离合器', '传动轴', '差速器', '取力器', '万向节'],
      icon: '⚙️',
    },
    {
      name: '制动系统',
      items: ['制动器总成', '刹车片', '刹车盘', '制动分泵', 'ABS泵', '制动管路'],
      icon: '🛑',
    },
    {
      name: '底盘系统',
      items: ['车架总成', '悬挂系统', '转向系统', '轮胎轮毂', '钢板弹簧', '减震器'],
      icon: '🚛',
    },
    {
      name: '电气系统',
      items: ['发电机', '起动机', '线束', '传感器', '控制器', '仪表盘'],
      icon: '⚡',
    },
    {
      name: '车身附件',
      items: ['驾驶室总成', '车门', '玻璃', '灯具', '后视镜', '保险杠'],
      icon: '🚪',
    },
    {
      name: '液压系统',
      items: ['液压油缸', '液压泵', '液压阀', '液压管路', '举升系统', '翻转系统'],
      icon: '💧',
    },
    {
      name: '易损件',
      items: ['机油滤清器', '空气滤清器', '燃油滤清器', '雨刷器', '灯泡', '保险丝'],
      icon: '🔄',
    },
  ];

  const advantages = [
    {
      icon: Shield,
      title: '原厂品质',
      description: '所有配件均为原厂或指定品牌，质量有保证',
    },
    {
      icon: Package,
      title: '品类齐全',
      description: '涵盖全车系配件，满足各类维修保养需求',
    },
    {
      icon: Truck,
      title: '快速供应',
      description: '常用配件现货充足，紧急配件快速调货',
    },
    {
      icon: Clock,
      title: '质保服务',
      description: '配件享受质保服务，使用无忧',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">汽车配件</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            提供原厂品质配件，品类齐全，快速供应
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">配件分类</h2>
            <p className="text-gray-600 text-lg">涵盖商用车各类配件，满足全方位维修保养需求</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{category.name}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                      {item}
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">配件优势</h2>
            <p className="text-gray-600 text-lg">为什么选择我们的配件</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="text-white" size={32} />
                </div>
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
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-12 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">品质保证</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="mr-3 mt-1 flex-shrink-0" size={24} />
                      <div>
                        <div className="font-semibold mb-1">原厂品质</div>
                        <div className="text-blue-100 text-sm">所有配件均为原厂或指定品牌供应商</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-3 mt-1 flex-shrink-0" size={24} />
                      <div>
                        <div className="font-semibold mb-1">质保服务</div>
                        <div className="text-blue-100 text-sm">配件享受完善的质保服务体系</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-3 mt-1 flex-shrink-0" size={24} />
                      <div>
                        <div className="font-semibold mb-1">快速供应</div>
                        <div className="text-blue-100 text-sm">常用配件现货充足，紧急配件快速调货</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-3 mt-1 flex-shrink-0" size={24} />
                      <div>
                        <div className="font-semibold mb-1">专业指导</div>
                        <div className="text-blue-100 text-sm">提供专业的配件选型和使用指导</div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                  <Package className="text-white mb-4" size={48} />
                  <h3 className="text-2xl font-bold mb-4">配件查询</h3>
                  <p className="text-blue-100 mb-6">
                    需要查询特定配件？联系我们的配件专员，为您快速查询和报价。
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all"
                  >
                    <Phone className="mr-2" size={20} />
                    联系我们
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">配件订购流程</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="font-bold mb-2">咨询查询</h3>
                <p className="text-sm text-gray-400">提供车型和配件信息</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="font-bold mb-2">确认报价</h3>
                <p className="text-sm text-gray-400">我们提供详细报价单</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="font-bold mb-2">下单付款</h3>
                <p className="text-sm text-gray-400">确认订单并完成付款</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="font-bold mb-2">配送安装</h3>
                <p className="text-sm text-gray-400">快速配送或到店安装</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">需要配件？</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            联系我们的配件专员，获取专业的配件咨询和快速报价
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            <Phone className="mr-2" size={20} />
            立即咨询
          </Link>
        </div>
      </section>
    </div>
  );
}
