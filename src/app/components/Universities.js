const Universities = () => {
    return (
      <div className="bg-white py-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary leading-snug mb-12">
            موثوق من قبل الجامعات الرائدة
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-12 justify-center">
            {/* Logo 1 */}
            <div className="flex justify-center items-center">
              <img
                src="https://via.placeholder.com/150x50.png?text=Logo+1" // Dummy logo
                alt="جامعة 1"
                className="h-12 md:h-16 transition-transform transform hover:scale-105"
              />
            </div>
  
            {/* Logo 2 */}
            <div className="flex justify-center items-center">
              <img
                src="https://via.placeholder.com/150x50.png?text=Logo+2" // Dummy logo
                alt="جامعة 2"
                className="h-12 md:h-16 transition-transform transform hover:scale-105"
              />
            </div>
  
            {/* Logo 3 */}
            <div className="flex justify-center items-center">
              <img
                src="https://via.placeholder.com/150x50.png?text=Logo+3" // Dummy logo
                alt="جامعة 3"
                className="h-12 md:h-16 transition-transform transform hover:scale-105"
              />
            </div>
  
            {/* Logo 4 */}
            <div className="flex justify-center items-center">
              <img
                src="https://via.placeholder.com/150x50.png?text=Logo+4" // Dummy logo
                alt="جامعة 4"
                className="h-12 md:h-16 transition-transform transform hover:scale-105"
              />
            </div>
  
            {/* Logo 5 */}
            <div className="flex justify-center items-center">
              <img
                src="https://via.placeholder.com/150x50.png?text=Logo+5" // Dummy logo
                alt="جامعة 5"
                className="h-12 md:h-16 transition-transform transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Universities;
  