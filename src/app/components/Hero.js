import Image from "next/image";
import Link from "next/link";
import {  FaBook, FaPlane, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative bg-background pt-10 md:pt-28 lg:px-20">
      <div className="container max-w-7xl px-4 md:px-5 lg:px-5 mx-auto flex flex-col md:flex-row items-center md:text-right">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-right space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary leading-snug">
            حقق حلمك الدراسي في الصين
          </h1>
          <p className="text-lg text-secondary">
            نحن نساعد الطلاب المغاربة على اكتشاف فرص دراسية رائعة في الصين. ابدأ
            رحلتك الآن نحو تعليم عالمي ومستقبل مشرق.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 space-x-reverse">
            <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdXjXek-f4uYjIRaRyQAUYnLHSLjmgPpH5-wG8W-oFnt-HIuQ/viewform?usp=header" target="_blank"
            className="bg-primary text-white px-8 py-3 rounded-lg shadow-lg hover:bg-hover transition duration-300">
              ابدأ الآن
            </Link>
          </div>
        </div>

        {/* Image Content */}
        <div className="relative mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <Image
            src="/female-student.png"
            alt="Student"
            className="rounded-lg"
            width={500}
            height={500}
            priority
          />

          {/* Notification 1 - Admission Submitted */}
          <div className="absolute top-32 md:left-5 bg-white shadow-lg rounded-2xl px-4 py-3 flex items-center space-x-3 w-[88%] md:w-fit min-w-fit border">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center ml-2">
              <FaEnvelope className="text-orange-500" size={18} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">تهانينا</h4>
              <p className="text-gray-600 text-sm">تم إرسال طلب قبولك</p>
            </div>
          </div>

          {/* Notification 2 - Travel to China */}
          <div className="absolute top-52 md:top-64 md:right-5 bg-white shadow-lg rounded-2xl px-4 py-3 flex items-center space-x-3 w-[88%] md:w-fit min-w-fit border">
            
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center ml-2">
              <FaPlane className="text-blue-500" size={18} />
            </div>

            <div>
              <h4 className="font-semibold text-gray-900">حان وقت السفر</h4>
              <p className="text-gray-600 text-sm">جاهز لرحلتك إلى الصين؟</p>
            </div>
          </div>

          {/* Notification 3 - Study in China */}
          <div className="absolute top-72 md:top-96 md:left-10 bg-white shadow-lg rounded-2xl px-4 py-3 flex items-center space-x-3 w-[88%] md:w-fit min-w-fit border">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center ml-2">
              <FaBook className="text-green-500" size={18} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">ابدأ دراستك</h4>
              <p className="text-gray-600 text-sm">مرحبا بك في جامعتك الجديدة</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
