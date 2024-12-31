export const metadata = {
  title: 'Terms and Conditions - Indian e-Visa UK',
  description:
    'Terms and conditions governing the use of our e-visa application services',
  alternates: {
    canonical: '/terms-and-conditions',
  },
};

const page = () => {
  return (
    <div className="container px-4 pb-12 bg-white lg:pt-24 lg:py-10 lg:px-0 md:pt-28 md:pb-0 pt-28">
      <div className="mx-auto">
        <h1 className="mb-6 text-4xl font-bold text-gray-900 lg:py-6">
          Terms and Conditions
        </h1>
        <p className="my-4 text-lg leading-relaxed text-gray-700">
          Welcome to Indian e-Visa UK. These terms and conditions govern your
          use of our e-visa application services. By accessing our platform and
          using our services, you agree to be bound by these terms.
        </p>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          E-Visa Services
        </h2>
        <div className="mt-4 space-y-4">
          <p className="text-gray-700 leading-relaxed">Our services include:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Online e-visa application processing</li>
            <li>Digital document verification</li>
            <li>Real-time status tracking</li>
            <li>Online support assistance</li>
            <li>Secure payment handling</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          User Requirements
        </h2>
        <div className="mt-4 space-y-4">
          <p className="text-gray-700 leading-relaxed">
            When using our services, you must:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Provide accurate digital information</li>
            <li>Submit valid electronic documents</li>
            <li>Complete online payments</li>
            <li>Follow e-visa guidelines</li>
            <li>Protect account credentials</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Digital Payment Terms
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          All e-visa service fees must be paid online before processing begins.
          Our digital payment system ensures secure transactions. Refunds are
          subject to our electronic refund policy.
        </p>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Service Limitations
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          While we provide efficient online services, e-visa approval decisions
          rest with Indian authorities. We are not liable for:
        </p>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-700">
          <li>E-visa rejections</li>
          <li>Online system delays</li>
          <li>Digital platform issues</li>
          <li>Technical difficulties</li>
        </ul>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Digital Content
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          All content on our online platform is protected by intellectual
          property rights. Unauthorized digital reproduction or distribution is
          strictly prohibited.
        </p>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">Data Security</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Your use of our e-visa services is governed by our Privacy Policy. We
          implement advanced security measures to protect your digital
          information throughout the application process.
        </p>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">Terms Updates</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          We reserve the right to update these terms as needed. Changes become
          effective immediately upon online posting. Continued use of our e-visa
          services indicates acceptance of modified terms.
        </p>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Contact Information
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          For questions about these terms and conditions, please contact our
          online support team at support@indian-evisa.uk
        </p>
      </div>
    </div>
  );
};

export default page;
