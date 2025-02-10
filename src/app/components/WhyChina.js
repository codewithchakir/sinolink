import { FaGlobe, FaCoins, FaHandshake } from "react-icons/fa";

const WhyChina = () => {
  return (
    <div className="bg-white py-16">
      <div className="container max-w-7xl px-4 md:px-5 lg:px-5 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary leading-snug mb-8">
          لماذا تختار الدراسة في الصين؟
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Global Universities */}
          <div className="bg-white p-6 rounded-lg border-2 border-primary shadow-lg text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <FaGlobe className="text-blue-500" size={24} />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">جامعات عالمية</h3>
            <p className="text-lg text-secondary">
              تتمتع الصين بجامعات معترف بها دولياً تقدم برامج تعليمية من المستوى العالمي.
            </p>
          </div>

          {/* Affordable Living */}
          <div className="bg-white p-6 rounded-lg border-2 border-primary shadow-lg text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <FaCoins className="text-green-500" size={24} />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">تكلفة معيشة منخفضة</h3>
            <p className="text-lg text-secondary">
              توفر الصين بيئة معيشية مريحة بأسعار معقولة بالإضافة إلى منح دراسية مميزة للطلاب الدوليين.
            </p>
          </div>

          {/* Cultural Experience */}
          <div className="bg-white p-6 rounded-lg border-2 border-primary shadow-lg text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <FaHandshake className="text-orange-500" size={24} />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">فرصة للتعرف على الثقافة الصينية</h3>
            <p className="text-lg text-secondary">
              تمنحك الصين فرصة التفاعل مع ثقافة غنية والتواصل مع شبكة دولية من الطلاب من مختلف أنحاء العالم.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChina;