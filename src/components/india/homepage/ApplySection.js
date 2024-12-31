import Image from 'next/image';
import Link from 'next/link';

const ApplySection = () => {
  const essentialServices = [
    {
      title: 'Tourist e-Visa',
      description:
        'Simple online process for tourism and recreational visits. Clear documentation requirements with efficient processing.',
      features: ['Online Process', 'Quick Verification'],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
    },
    {
      title: 'Business e-Visa',
      description:
        'Streamlined process for business-related travel. Focused on essential requirements for corporate visitors.',
      features: ['Business Focus', 'Clear Steps'],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: 'Medical e-Visa',
      description:
        'Essential visa service for medical treatment visits. Simplified process with priority handling.',
      features: ['Priority Service', 'Direct Process'],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      ),
    },
    {
      title: 'Conference e-Visa',
      description:
        'Efficient visa processing for conference and event attendance. Focused on essential documentation.',
      features: ['Event Focus', 'Simple Steps'],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
  ];

  const simpleProcess = [
    {
      title: 'Submit Application',
      description:
        'Complete the essential visa application form with clear, straightforward requirements.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: 'Upload Documents',
      description:
        'Provide the required documentation through our simplified upload process.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
          />
        </svg>
      ),
    },
    {
      title: 'Process Application',
      description:
        'Efficient processing of your visa application with minimal waiting time.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 13l4 4L19 7"
          />
        </svg>
      ),
    },
    {
      title: 'Receive e-Visa',
      description:
        'Quick delivery of your e-Visa through our streamlined digital system.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="py-20 bg-white">
      {/* Essential Services Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm tracking-wider text-gray-500 uppercase">
            Simple Process
          </span>
          <h2 className="mt-2 text-3xl font-light text-gray-900">
            Essential e-Visa Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm">
            Streamlined visa processing with clear requirements and efficient
            service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {essentialServices.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-6 border border-gray-100"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-gray-50 text-gray-600">
                  {service.icon}
                </div>
                <h3 className="text-base font-medium text-gray-900">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                {service.description}
              </p>
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                    {feature}
                  </div>
                ))}
              </div>
              <Link
                href="/visa/step-one"
                className="mt-6 inline-flex items-center text-sm text-gray-900 hover:text-gray-600 transition-colors duration-300"
              >
                Apply →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Simple Process Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mt-24">
        <div className="text-center mb-16">
          <span className="text-sm tracking-wider text-gray-500 uppercase">
            Four Steps
          </span>
          <h2 className="mt-2 text-3xl font-light text-gray-900">
            Application Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {simpleProcess.map((step, index) => (
            <div key={index} className="relative">
              <div className="mb-4">
                <span className="text-xs text-gray-400">
                  Step {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-base font-medium text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600">{step.description}</p>
              {index < simpleProcess.length - 1 && (
                <div className="hidden lg:block absolute top-4 left-full w-full h-px bg-gray-100 transform -translate-x-4"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/visa/step-one"
            className="inline-flex items-center justify-center px-8 py-3 text-sm text-gray-900 bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
          >
            Start Application
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApplySection;
