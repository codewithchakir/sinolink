import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["400", "700"], // Choose the weights you want
  variable: "--font-vazirmatn",
});

export const metadata = {
  title: "SINOLINK | حقق حلمك الدراسي في الصين، الدراسة، السفر، والفرص",
  description: "اكتشف فرص الدراسة في الصين مع SINOLINK. نقدم خدمات للطلاب المغاربة تشمل القبول الجامعي، السفر، والدعم الأكاديمي. ابدأ الآن!",
  keywords: "دراسة في الصين, التعليم في الصين, فرص دراسية, الطلاب المغاربة, SINOLINK, الدراسة بالخارج, القبول الجامعي, السفر إلى الصين",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${vazirmatn.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
