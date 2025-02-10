'use client'
// import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const AboutUs = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const accordions = [
    {
      id: 1,
      question: "كيف يمكنني التقديم للجامعات الصينية؟",
      answer:
        "يمكنك التقديم للجامعات الصينية من خلالنا. نقدم لك الدعم الكامل في عملية التقديم، بدءًا من اختيار الجامعة المناسبة وحتى إرسال المستندات المطلوبة.",
    },
    {
      id: 2,
      question: "ما هي تكلفة الدراسة في الصين؟",
      answer:
        "تختلف تكلفة الدراسة في الصين حسب الجامعة والتخصص. نقدم لك قائمة بالجامعات ذات التكلفة المعقولة والمنح الدراسية المتاحة للطلاب الدوليين.",
    },
    {
      id: 3,
      question: "هل أحتاج إلى معرفة اللغة الصينية؟",
      answer:
        "لا تحتاج إلى معرفة اللغة الصينية للدراسة في الصين. العديد من الجامعات تقدم برامج باللغة الإنجليزية. ومع ذلك، ننصح بتعلم اللغة الصينية للاستفادة الكاملة من تجربتك.",
    },
  ];

  return (
    <section className="py-8 md:py-24 relative bg-white" id='about'>
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
          {/* Text Content */}
          <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
              <h2 className="text-primary text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                نساعد الطلاب المغاربة على تحقيق أحلامهم الدراسية في الصين
              </h2>
              <p className="text-secondary text-base font-normal leading-relaxed lg:text-start text-center">
                نعمل على توفير الدعم الكامل للطلاب المغاربة لتحقيق أحلامهم الدراسية في الصين. من خلال التعاون مع الجامعات الصينية المرموقة، نقدم خدمات شاملة تشمل التقديم للجامعات، تأمين القبول، المساعدة في تأشيرة الطالب، والاستشارات التعليمية. نهتم بكل تفاصيل رحلتك الدراسية لضمان نجاحك وتميزك.
              </p>
            </div>

            {/* Accordions */}
            <div className="w-full space-y-4">
              {accordions.map((accordion) => (
                <div
                  key={accordion.id}
                  className="border-b border-gray-200 pb-4"
                >
                  <button
                    className="w-full flex justify-between items-center text-lg font-medium text-secondary hover:text-primary transition-colors duration-300"
                    onClick={() => toggleAccordion(accordion.id)}
                  >
                    <span>{accordion.question}</span>
                    <svg
                      className={`w-6 h-6 transform transition-transform duration-300 ${
                        openAccordion === accordion.id ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openAccordion === accordion.id && (
                    <div className="mt-2 text-secondary">
                      <p>{accordion.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSdXjXek-f4uYjIRaRyQAUYnLHSLjmgPpH5-wG8W-oFnt-HIuQ/viewform?usp=header" target="_blank"
              className="sm:w-fit w-full px-3.5 py-2 bg-primary hover:bg-hover transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex"
            >
              <span className="px-1.5 text-white text-sm font-medium leading-6">
                ابدأ رحلتك الآن
              </span>
            </Link>
          </div>

          {/* Image */}
          <div className="lg:mx-0 mx-auto h-full rounded-3xl overflow-hidden">
          <img className="lg:mx-0 mx-auto h-full rounded-3xl object-cover" src="/images/studying-together.jpg" alt="about Us image" />
            {/* <Image
              src="/about-us.jpg" // Replace with your image path
              alt="طلاب مغاربة في الصين"
              width={600}
              height={400}
              className="rounded-3xl object-cover"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;