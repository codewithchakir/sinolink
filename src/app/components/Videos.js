import { FaPlay } from "react-icons/fa";

const Videos = () => {
  const videos = [
    {
      id: 1,
      title: "جامعات صينية مرموقة وحرمها الجامعي",
      description: "اكتشف أبرز الجامعات الصينية وحرمها الجامعي المتطور.",
      thumbnail: "/images/video1-thumbnail.jpg", // Replace with your actual thumbnail URL
      url: "https://www.youtube.com/watch?v=VIDEO_URL_1", // Replace with actual video URL
    },
    {
      id: 2,
      title: "طلاب في الفصول الدراسية في الصين",
      description: "شاهد الطلاب في الفصول الدراسية وتفاعلهم مع المعلمين.",
      thumbnail: "/images/video2-thumbnail.jpg",
      url: "https://www.youtube.com/watch?v=VIDEO_URL_2",
    },
    {
      id: 3,
      title: "أنشطة ثقافية وحياة طلابية في الصين",
      description: "تعرف على الأنشطة الثقافية والحياة اليومية للطلاب.",
      thumbnail: "/images/video3-thumbnail.jpg",
      url: "https://www.youtube.com/watch?v=VIDEO_URL_3",
    },
    // Add more videos as needed
  ];

  return (
    <section className="bg-white py-16">
      <div className="container max-w-7xl px-4 md:px-5 lg:px-5 mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-8">
          فيديوهات تعليمية وحياة طلابية في الصين
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8" id="videos">
          {videos.map((video) => (
            <div key={video.id} className="group relative">
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-background rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform group-hover:scale-105"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-60 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaPlay size={48} className="text-white" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-primary mb-2">{video.title}</h3>
                  <p className="text-sm text-secondary">{video.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
