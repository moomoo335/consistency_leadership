import { useState } from 'react';
import { X, ShoppingCart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  models: string[];
  description: string;
  specs: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: '机油滤清器',
    category: '保养耗材',
    image: 'https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?auto=compress&cs=tinysrgb&w=600',
    models: ['乘龙H7', '乘龙H5', '欧曼EST', '欧曼GTL'],
    description: '原厂机油滤清器，高效过滤机油杂质，保护发动机。',
    specs: ['高效过滤', '耐高温', '密封性好', '使用寿命长'],
  },
  {
    id: 2,
    name: '空气滤清器',
    category: '保养耗材',
    image: 'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=600',
    models: ['乘龙H7', '乘龙H5', '欧曼EST'],
    description: '高效空气滤芯，有效过滤空气中的灰尘和杂质。',
    specs: ['高效过滤', '低阻力', '防水防潮', '延长发动机寿命'],
  },
  {
    id: 3,
    name: '燃油滤清器',
    category: '保养耗材',
    image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=600',
    models: ['乘龙全系', '欧曼全系'],
    description: '精密燃油过滤，保护燃油系统清洁。',
    specs: ['精密过滤', '防锈蚀', '稳定性好', '原厂品质'],
  },
  {
    id: 4,
    name: '刹车片',
    category: '底盘系统',
    image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=600',
    models: ['乘龙H7', '欧曼EST', '欧曼GTL'],
    description: '高性能刹车片，制动力强，耐磨损。',
    specs: ['高摩擦系数', '低噪音', '耐高温', '使用寿命长'],
  },
  {
    id: 5,
    name: '离合器总成',
    category: '传动系统',
    image: 'https://images.pexels.com/photos/3806387/pexels-photo-3806387.jpeg?auto=compress&cs=tinysrgb&w=600',
    models: ['乘龙H7', '乘龙H5'],
    description: '原厂离合器总成，传动平稳，耐用可靠。',
    specs: ['传动平稳', '结构稳定', '耐磨性强', '原厂配套'],
  },
  {
    id: 6,
    name: '起动机',
    category: '电气系统',
    image: 'https://images.pexels.com/photos/13065145/pexels-photo-13065145.jpeg?auto=compress&cs=tinysrgb&w=600',
    models: ['乘龙全系', '欧曼全系'],
    description: '高品质起动机，启动迅速，性能稳定。',
    specs: ['启动快速', '耐用可靠', '低噪音', '免维护'],
  },
  {
    id: 7,
    name: '发电机',
    category: '电气系统',
    image: 'https://images.pexels.com/photos/162564/aircraft-alternator-battery-electric-162564.jpeg?auto=compress&cs=tinysrgb&w=600',
    models: ['欧曼EST', '欧曼GTL'],
    description: '高效发电机，输出稳定，充电快速。',
    specs: ['输出稳定', '充电效率高', '耐用性强', '原厂品质'],
  },
  {
    id: 8,
    name: '蓄电池',
    category: '电气系统',
    image: 'https://images.pexels.com/photos/5266889/pexels-photo-5266889.jpeg?auto=compress&cs=tinysrgb&w=600',
    models: ['乘龙全系', '欧曼全系'],
    description: '大容量蓄电池，启动力强，使用寿命长。',
    specs: ['大容量', '启动力强', '免维护', '使用寿命长'],
  },
  {
    id: 9,
    name: '减震器',
    category: '底盘系统',
    image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=600',
    models: ['乘龙H7', '欧曼EST'],
    description: '高性能减震器，提升驾驶舒适性和操控性。',
    specs: ['减震效果好', '耐用性强', '操控稳定', '舒适性佳'],
  },
  {
    id: 10,
    name: '传动轴',
    category: '传动系统',
    image: 'https://images.pexels.com/photos/3806387/pexels-photo-3806387.jpeg?auto=compress&cs=tinysrgb&w=600',
    models: ['乘龙H5', '欧曼GTL'],
    description: '高强度传动轴，传动效率高，使用寿命长。',
    specs: ['高强度', '传动平稳', '耐磨损', '原厂配套'],
  },
  {
    id: 11,
    name: '涡轮增压器',
    category: '发动机配件',
    image: 'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=600',
    models: ['乘龙H7', '欧曼EST'],
    description: '高性能涡轮增压器，提升发动机动力输出。',
    specs: ['动力强劲', '响应迅速', '高效节能', '原厂品质'],
  },
  {
    id: 12,
    name: '水泵',
    category: '发动机配件',
    image: 'https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?auto=compress&cs=tinysrgb&w=600',
    models: ['乘龙全系', '欧曼全系'],
    description: '高效水泵，保证发动机冷却系统正常运行。',
    specs: ['循环效率高', '耐用性强', '低噪音', '密封性好'],
  },
];

const categories = ['全部', '发动机配件', '传动系统', '底盘系统', '电气系统', '车身配件', '保养耗材'];

export default function Parts() {
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [inquiryProduct, setInquiryProduct] = useState<Product | null>(null);

  const filteredProducts =
    selectedCategory === '全部'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleInquiry = (product: Product) => {
    setInquiryProduct(product);
    setShowInquiryForm(true);
    setSelectedProduct(null);
  };

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    alert('询价已提交！我们的客服人员会尽快联系您。');
    setShowInquiryForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative h-[60vh] flex items-center justify-center">
        <img
          src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="汽车配件"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">原厂汽车配件</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            提供乘龙与欧曼卡车全系列原厂配件，保证品质，快速供应。
          </p>
        </div>
      </section>

      <section className="py-12 bg-white sticky top-20 z-30 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">配件分类</h2>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-md text-sm font-semibold">
                    {product.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.models.slice(0, 2).map((model, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {model}
                      </span>
                    ))}
                    {product.models.length > 2 && (
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        +{product.models.length - 2}
                      </span>
                    )}
                  </div>
                  <button className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition-colors">
                    查看详情
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-900">产品详情</h2>
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-80 object-cover rounded-lg mb-6"
              />
              <h3 className="text-3xl font-bold text-slate-900 mb-2">{selectedProduct.name}</h3>
              <div className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-md text-sm font-semibold mb-6">
                {selectedProduct.category}
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-bold text-slate-900 mb-2">产品介绍</h4>
                <p className="text-gray-600 leading-relaxed">{selectedProduct.description}</p>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-bold text-slate-900 mb-3">产品参数</h4>
                <div className="grid grid-cols-2 gap-3">
                  {selectedProduct.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                      {spec}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-bold text-slate-900 mb-3">适配车型</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.models.map((model, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md font-semibold"
                    >
                      {model}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={() => handleInquiry(selectedProduct)}
                className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingCart size={20} />
                询价采购
              </button>
            </div>
          </div>
        </div>
      )}

      {showInquiryForm && inquiryProduct && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-900">询价采购</h2>
              <button
                onClick={() => setShowInquiryForm(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-gray-600 mb-1">询价产品</p>
                <p className="text-xl font-bold text-slate-900">{inquiryProduct.name}</p>
              </div>
              <form onSubmit={handleSubmitInquiry}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      姓名 <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      公司名称 <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="请输入公司名称"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      联系电话 <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="请输入联系电话"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      车型 <span className="text-red-600">*</span>
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    >
                      <option value="">请选择车型</option>
                      {inquiryProduct.models.map((model, idx) => (
                        <option key={idx} value={model}>
                          {model}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      需求数量 <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="number"
                      required
                      min="1"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="请输入需求数量"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">备注</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="请输入备注信息（选填）"
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full mt-6 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-lg transition-colors"
                >
                  提交询价
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
