export const metadata = {
  title: 'Privacy Policy - Indian e-Visa UK',
  description:
    'Our commitment to protecting your privacy and personal information',
  alternates: {
    canonical: '/privacy-policy',
  },
};

const page = () => {
  return (
    <div className="container px-4 pb-12 bg-white lg:pt-24 lg:py-10 lg:px-0 md:pt-28 md:pb-0 pt-28">
      <div className="mx-auto">
        <h1 className="mb-6 text-4xl font-bold text-gray-900 lg:py-6">
          Privacy Policy
        </h1>
        <p className="my-4 text-lg leading-relaxed text-gray-700">
          At Indian e-Visa UK, we are dedicated to protecting your privacy and
          ensuring the security of your personal information. This privacy
          policy outlines our practices for collecting, using, and safeguarding
          your data during the e-visa application process.
        </p>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Information Collection
        </h2>
        <div className="mt-4 space-y-4">
          <h3 className="text-xl font-medium text-gray-800">
            Required Information
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We collect the following information for your e-visa application:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Personal identification information</li>
            <li>Contact details</li>
            <li>Travel documents</li>
            <li>Payment information</li>
            <li>Application correspondence</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">Data Usage</h2>
        <div className="mt-4 space-y-4">
          <p className="text-gray-700 leading-relaxed">
            We use your information to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Process e-visa applications</li>
            <li>Provide customer support</li>
            <li>Send application updates</li>
            <li>Enhance our services</li>
            <li>Meet legal obligations</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Security Measures
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          We protect your data through:
        </p>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-700">
          <li>Encrypted data transmission</li>
          <li>Secure data storage</li>
          <li>Regular security updates</li>
          <li>Staff security training</li>
          <li>Access controls</li>
        </ul>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">Data Sharing</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Your information is shared only with:
        </p>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-700">
          <li>Indian e-visa authorities</li>
          <li>Authorized service providers</li>
          <li>Payment processors</li>
          <li>Legal authorities (when required)</li>
        </ul>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">Your Rights</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          You have the right to:
        </p>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-700">
          <li>Access your personal data</li>
          <li>Request data corrections</li>
          <li>Opt out of communications</li>
          <li>Request data deletion</li>
          <li>Data portability</li>
        </ul>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">Cookies</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Our website uses cookies to improve your experience and analyze site
          performance. You can manage cookie settings through your browser
          preferences.
        </p>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">Policy Changes</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          We regularly review and update this privacy policy to reflect changes
          in our practices and legal requirements. The current version is always
          available on our website.
        </p>
      </div>

      <div className="mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">Contact Us</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          For privacy-related questions or to exercise your rights, please
          contact our privacy team at privacy@indian-evisa.uk
        </p>
      </div>
    </div>
  );
};

export default page;
