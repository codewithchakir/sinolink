import {
    FaGraduationCap,
    FaBook,
    FaPlane,
    FaHandHoldingHeart,
    FaUserShield,
    FaComments,
  } from "react-icons/fa";
  
  const Services = () => {
    const services = [
      {
        id: 1,
        icon: <FaGraduationCap className="text-blue-500" size={24} />,
        title: "مساعدتك في الحصول على منح دراسية",
        description:
          "نساعدك في التقديم للمنح الدراسية المتاحة في الجامعات الصينية، مع توفير معلومات مفصلة عن الشروط والمتطلبات.",
        bgColor: "bg-blue-100",
      },
      {
        id: 2,
        icon: <FaBook className="text-green-500" size={24} />,
        title: "اختيار البرامج التعليمية المناسبة",
        description:
          "نقدم لك استشارات تعليمية لاختيار البرامج التعليمية التي تناسب مجالك واهتماماتك، مع مراعاة متطلبات سوق العمل.",
        bgColor: "bg-green-100",
      },
      {
        id: 3,
        icon: <FaPlane className="text-orange-500" size={24} />,
        title: "التحضير قبل السفر",
        description:
          "نساعدك في تجهيز جميع الوثائق المطلوبة ونقدم لك إرشادات ثقافية لتسهيل اندماجك في المجتمع الصيني.",
        bgColor: "bg-orange-100",
      },
      {
        id: 4,
        icon: <FaHandHoldingHeart className="text-purple-500" size={24} />,
        title: "دعم دائم طوال فترة الدراسة",
        description:
          "نحن معك طوال فترة دراستك في الصين لتقديم الدعم اللازم وضمان تجربة سلسة وغنية.",
        bgColor: "bg-purple-100",
      },
      {
        id: 5,
        icon: <FaUserShield className="text-red-500" size={24} />,
        title: "إرشادات طلب الفيزا",
        description:
          "نساعدك في تقديم طلب التأشيرة ومتابعة الإجراءات حتى الحصول على الموافقة.",
        bgColor: "bg-red-100",
      },
      {
        id: 6,
        icon: <FaComments className="text-indigo-500" size={24} />,
        title: "استشارات تعليمية متخصصة",
        description:
          "نقدم استشارات تعليمية متخصصة لمساعدتك في اتخاذ القرارات الصحيحة بشأن دراستك في الصين.",
        bgColor: "bg-indigo-100",
      },
    ];
  
    return (
      <div className="bg-white py-16" id="services">
        <div className="container max-w-7xl px-4 md:px-5 lg:px-5 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary leading-snug mb-8">
            خدماتنا
          </h2>
          <p className="text-lg text-secondary mb-12">
            نقدم مجموعة من الخدمات الشاملة لدعمك في رحلتك الدراسية في الصين.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-6 rounded-lg border-2 border-primary shadow-lg text-center space-y-4 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center">
                  <div
                    className={`w-12 h-12 ${service.bgColor} rounded-full flex items-center justify-center`}
                  >
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-lg text-secondary">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Services;