import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-white pt-36 pb-16 lg:pt-48 lg:pb-24 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Menghapus gap besar di sini agar elemen bisa lebih berdekatan */}
        <div className="flex flex-col lg:flex-row items-center justify-between">
        
          {/* Bagian Kiri: Konten Teks (z-10 agar selalu di atas jika gambar overlap) */}
          <div className="w-full lg:w-[50%] flex flex-col justify-center items-start relative z-10 lg:pr-4">
            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold text-gray-900 leading-tight mb-6 tracking-tight">
              Smarter Cities.<br/>
              <span className="relative whitespace-nowrap">
                Better Living.
                <svg 
                  className="absolute w-full h-4 -bottom-2 left-0 text-gray-900" 
                  viewBox="0 0 250 16" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 11C60 3 170 3 248 11" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                  <path d="M20 14C80 8 160 8 230 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-lg leading-relaxed">
              Connect citizens, transportation, environment, and public services through one intelligent digital ecosystem designed for a safer, greener, and more efficient city.
            </p>

            <div className="w-full max-w-md">
              <div className="flex items-center gap-10 mb-6">
                <div>
                  <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-1">98%</h3>
                  <p className="text-gray-500 text-sm font-medium">Public Service Satisfaction</p>
                </div>
                
                {/* Garis Pembatas Vertikal */}
                <div className="w-px h-14 bg-gray-200"></div>
                
                <div>
                  <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-1">32%</h3>
                  <p className="text-gray-500 text-sm font-medium">Energy Saving</p>
                </div>
              </div>
              
              {/* Garis Pembatas Horizontal */}
              <div className="h-px w-full bg-gray-200 mb-6"></div>
            </div>

          </div>

          {/* Bagian Kanan: Ilustrasi */}
          {/* Memperlebar max-width, memberikan efek scale besar, dan negative margin kiri */}
          <div className="w-full lg:w-[50%] flex justify-center lg:justify-end relative z-0 mt-16 lg:mt-0">
            <img 
              src="/hero.png" 
              alt="Smart City Ecosystem Illustration" 
              className="w-full max-w-[800px] h-auto object-contain transform lg:scale-[1.2] xl:scale-[1.3] lg:-ml-16 pointer-events-none"
            />
          </div>

        </div>
      </div>


      
    </section>

    
  );
};

export default HeroSection;