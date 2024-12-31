'use client';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className="relative min-h-[600px] mt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/india/home/banner.png"
          alt="Indian e-Visa Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <span className="inline-block text-white/90 text-sm tracking-wider mb-4">
            SIMPLIFIED VISA PROCESS
          </span>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
            Indian e-Visa Application
          </h1>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            Efficient online visa processing with clear requirements and quick
            turnaround time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/visa/step-one"
              className="inline-flex items-center justify-center px-8 py-3 text-sm text-black bg-white hover:bg-white/90 transition-colors duration-300"
            >
              Apply Now
            </Link>
            <Link
              href="/track-application"
              className="inline-flex items-center justify-center px-8 py-3 text-sm text-white border border-white/30 hover:bg-white/10 transition-colors duration-300"
            >
              Track Application
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-3 gap-8">
            <div className="text-white/80">
              <div className="text-2xl font-light mb-1">24/7</div>
              <div className="text-sm">Online Support</div>
            </div>
            <div className="text-white/80">
              <div className="text-2xl font-light mb-1">100%</div>
              <div className="text-sm">Secure Process</div>
            </div>
            <div className="text-white/80">
              <div className="text-2xl font-light mb-1">Fast</div>
              <div className="text-sm">Processing</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
