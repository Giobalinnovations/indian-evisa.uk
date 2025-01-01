'use client';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className="relative min-h-[600px] md:min-h-[calc(100vh-5rem)] mt-12 md:mt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/india/home/banner.png"
          alt="Indian e-Visa Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-6 h-full flex items-center py-12 md:py-16">
        <div className="max-w-2xl space-y-6 md:space-y-8">
          <span className="inline-block text-white/90 text-xs md:text-sm tracking-wider">
            SIMPLIFIED VISA PROCESS
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-light text-white">
            Indian e-Visa Application
          </h1>
          <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-xl">
            Efficient online visa processing with clear requirements and quick
            turnaround time.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Link
              href="/visa/step-one"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 text-sm md:text-base text-black bg-white hover:bg-white/90 transition-colors duration-300"
            >
              Apply Now
            </Link>
            {/* <Link
              href="/track-application"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 text-sm md:text-base text-white border border-white/30 hover:bg-white/10 transition-colors duration-300"
            >
              Track Application
            </Link> */}
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 md:mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8">
            <div className="text-white/80">
              <div className="text-xl md:text-2xl font-light mb-1">24/7</div>
              <div className="text-xs md:text-sm">Online Support</div>
            </div>
            <div className="text-white/80">
              <div className="text-xl md:text-2xl font-light mb-1">100%</div>
              <div className="text-xs md:text-sm">Secure Process</div>
            </div>
            <div className="text-white/80 col-span-2 sm:col-span-1">
              <div className="text-xl md:text-2xl font-light mb-1">Fast</div>
              <div className="text-xs md:text-sm">Processing</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
