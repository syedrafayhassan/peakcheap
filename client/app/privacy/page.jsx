export const metadata = {
  title: "Privacy Policy | PeakCheap",
  description:
    "Learn how PeakCheap collects, uses, stores, and protects your information when using our price comparison platform.",
};

export default function PrivacyPolicy() {
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="max-w-5xl mx-auto px-6 pt-32! pb-20!">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Privacy Policy
        </h1>

        <p className="text-gray-500">
          Last Updated: <span className="font-medium">{lastUpdated}</span>
        </p>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          At <strong>PeakCheap</strong>, we respect your privacy and are
          committed to protecting your personal information. This Privacy Policy
          explains what information we collect, how we use it, how we protect
          it, and the choices available to you when using our website.
        </p>
      </div>

      {/* Introduction */}
      <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          1. Introduction
        </h2>

        <div className="space-y-4 text-gray-600 leading-8">
          <p>
            PeakCheap is a product search and price comparison platform that
            helps users discover products from various online marketplaces. We
            may collect limited information necessary to provide our services,
            improve website performance, analyze usage, and maintain website
            security.
          </p>

          <p>
            By accessing or using PeakCheap, you acknowledge that you have read
            and understood this Privacy Policy.
          </p>
        </div>
      </section>

      {/* Information We Collect */}
      <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          2. Information We Collect
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Information You Provide
            </h3>

            <p className="text-gray-600 mb-4 leading-7">
              You may voluntarily provide information when interacting with
              PeakCheap, including:
            </p>

            <ul className="space-y-3 text-gray-600 list-disc pl-6">
              <li>Search queries entered on our website.</li>
              <li>Information submitted through contact forms.</li>
              <li>Email address when contacting our support team.</li>
              <li>Feedback or suggestions you voluntarily send us.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Automatically Collected Information
            </h3>

            <p className="text-gray-600 mb-4 leading-7">
              When you browse our website, certain technical information may be
              collected automatically, including:
            </p>

            <ul className="space-y-3 text-gray-600 list-disc pl-6">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Device type</li>
              <li>Language preferences</li>
              <li>Pages visited</li>
              <li>Time spent on pages</li>
              <li>Referring website</li>
              <li>Clicks on affiliate product links</li>
              <li>Approximate geographic location</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How We Use Information */}
      <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          3. How We Use Your Information
        </h2>

        <p className="text-gray-600 mb-6 leading-7">
          We use collected information for legitimate business purposes,
          including:
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {[
            "Provide product search and price comparison services.",
            "Improve website performance and user experience.",
            "Analyze visitor behavior and website traffic.",
            "Maintain website security and prevent abuse.",
            "Detect fraud or suspicious activities.",
            "Respond to user inquiries.",
            "Comply with legal obligations.",
            "Improve future features and services.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-gray-100 bg-gray-50 p-4"
            >
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-5">
          <p className="text-green-800">
            <strong>Important:</strong> PeakCheap does not sell your personal
            information to third parties.
          </p>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="bg-blue-50 rounded-2xl border border-blue-200 shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold mb-5 text-gray-900">
          4. Affiliate Disclosure
        </h2>

        <div className="space-y-4 text-gray-700 leading-8">
          <p>
            PeakCheap participates in affiliate marketing programs including the
            eBay Partner Network and the AliExpress Affiliate Program.
          </p>

          <p>
            When you click an affiliate link and complete a purchase, we may
            receive a commission at no additional cost to you.
          </p>

          <p>
            These commissions help support the operation and maintenance of
            PeakCheap while allowing us to continue providing our services free
            of charge.
          </p>

          <p>
            Affiliate partners may use cookies or similar technologies to track
            purchases completed through affiliate links. Their data collection
            practices are governed by their own privacy policies.
          </p>
        </div>
      </section>
            {/* Third-Party Services */}
      <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          5. Third-Party Services
        </h2>

        <p className="text-gray-600 leading-7 mb-6">
          PeakCheap relies on trusted third-party providers to deliver certain
          features and improve our services. These providers may process limited
          information on our behalf in accordance with their own privacy
          policies.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-4 font-semibold">Service</th>
                <th className="text-left p-4 font-semibold">Purpose</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="p-4 font-medium">eBay API</td>
                <td className="p-4 text-gray-600">
                  Product listings and pricing information.
                </td>
              </tr>

              <tr>
                <td className="p-4 font-medium">AliExpress API</td>
                <td className="p-4 text-gray-600">
                  Product listings and pricing information.
                </td>
              </tr>

              <tr>
                <td className="p-4 font-medium">Google Analytics</td>
                <td className="p-4 text-gray-600">
                  Website analytics and visitor insights.
                </td>
              </tr>

              <tr>
                <td className="p-4 font-medium">Vercel</td>
                <td className="p-4 text-gray-600">
                  Website hosting and infrastructure.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Cookies */}
      <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          6. Cookies & Tracking Technologies
        </h2>

        <div className="space-y-5 text-gray-600 leading-8">
          <p>
            We use cookies and similar technologies to improve your browsing
            experience and enhance the functionality of our website.
          </p>

          <p>Cookies may be used to:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Remember user preferences.</li>
            <li>Analyze website traffic.</li>
            <li>Measure website performance.</li>
            <li>Improve search functionality.</li>
            <li>Support affiliate link tracking.</li>
          </ul>

          <p>
            Most web browsers allow you to control or disable cookies through
            browser settings. Disabling cookies may affect certain website
            features.
          </p>
        </div>
      </section>

      {/* Analytics */}
      <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          7. Analytics
        </h2>

        <div className="space-y-4 text-gray-600 leading-8">
          <p>
            We use analytics services such as Google Analytics to better
            understand how visitors interact with PeakCheap.
          </p>

          <p>Analytics information may include:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Pages visited</li>
            <li>Session duration</li>
            <li>Device type</li>
            <li>Browser information</li>
            <li>Approximate location</li>
            <li>Referral sources</li>
          </ul>

          <p>
            This information is generally aggregated and used to improve our
            website rather than identify individual users.
          </p>
        </div>
      </section>

      {/* Data Sharing */}
      <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          8. Data Sharing
        </h2>

        <p className="text-gray-600 mb-6 leading-7">
          We do not sell, rent, or trade your personal information. We may
          share limited information only in the following circumstances:
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {[
            "Hosting providers",
            "Analytics providers",
            "Affiliate partners after you click affiliate links",
            "Legal authorities when required by law",
            "Protection against fraud or abuse",
            "Business transfers if ownership changes",
          ].map((item) => (
            <div
              key={item}
              className="border rounded-xl p-4 bg-gray-50 border-gray-100"
            >
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Data Retention */}
      <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          9. Data Retention
        </h2>

        <div className="space-y-5 text-gray-600 leading-8">
          <p>
            We retain personal information only for as long as necessary to
            fulfill the purposes described in this Privacy Policy.
          </p>

          <p>Your information may be retained to:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Provide our services.</li>
            <li>Maintain security.</li>
            <li>Resolve disputes.</li>
            <li>Comply with legal obligations.</li>
            <li>Improve website performance.</li>
          </ul>

          <p>
            Anonymous or aggregated analytics data may be retained for longer
            periods.
          </p>
        </div>
      </section>

      {/* Data Security */}
      <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          10. Data Security
        </h2>

        <div className="space-y-5 text-gray-600 leading-8">
          <p>
            We implement appropriate technical and organizational measures
            designed to safeguard your information against unauthorized access,
            alteration, disclosure, or destruction.
          </p>

          <p>Our security practices may include:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Encrypted HTTPS connections.</li>
            <li>Secure hosting infrastructure.</li>
            <li>Restricted administrative access.</li>
            <li>Routine security updates.</li>
            <li>Monitoring for suspicious activity.</li>
          </ul>

          <div className="rounded-xl bg-yellow-50 border border-yellow-200 p-5">
            <p className="text-yellow-800">
              While we take reasonable measures to protect your information, no
              method of transmission over the Internet or electronic storage is
              completely secure. Therefore, we cannot guarantee absolute
              security.
            </p>
          </div>
        </div>
      </section>

      {/* International Data Transfers */}
      <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          11. International Data Transfers
        </h2>

        <div className="space-y-5 text-gray-600 leading-8">
          <p>
            Some of our service providers may process information in countries
            outside your country of residence.
          </p>

          <p>
            By using PeakCheap, you acknowledge that your information may be
            transferred to and processed in jurisdictions that may have
            different data protection laws than those in your country.
          </p>
        </div>
      </section>
            {/* External Links */}
      <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          12. External Links
        </h2>

        <div className="space-y-4 text-gray-600 leading-8">
          <p>
            PeakCheap contains links to third-party websites, including online
            marketplaces and affiliate partners.
          </p>

          <p>
            Once you leave our website, this Privacy Policy no longer applies.
            We encourage you to review the privacy policies of any third-party
            websites before providing personal information or making purchases.
          </p>

          <p>
            We are not responsible for the privacy practices, content, or
            security of external websites.
          </p>
        </div>
      </section>

      {/* Children's Privacy */}
      <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          13. Children's Privacy
        </h2>

        <div className="space-y-4 text-gray-600 leading-8">
          <p>
            PeakCheap is not intended for children under the age of 13 (or the
            minimum age required by applicable law).
          </p>

          <p>
            We do not knowingly collect personal information from children. If
            you believe a child has provided personal information through our
            website, please contact us so we can promptly remove the information.
          </p>
        </div>
      </section>

      {/* Your Rights */}
      <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          14. Your Privacy Rights
        </h2>

        <p className="text-gray-600 mb-6 leading-7">
          Depending on your location and applicable privacy laws, you may have
          the following rights:
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Access your personal information",
            "Request correction of inaccurate information",
            "Request deletion of your personal information",
            "Withdraw consent where applicable",
            "Object to certain data processing activities",
            "Request a copy of your personal data",
            "Restrict processing in certain circumstances",
            "Lodge a complaint with your local data protection authority",
          ].map((right) => (
            <div
              key={right}
              className="rounded-xl border border-gray-100 bg-gray-50 p-4"
            >
              <p className="text-gray-700">{right}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-600 mt-6 leading-7">
          To exercise any of these rights, please contact us using the details
          provided below.
        </p>
      </section>

      {/* Changes */}
      <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          15. Changes to This Privacy Policy
        </h2>

        <div className="space-y-4 text-gray-600 leading-8">
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our services, technology, legal requirements, or business
            practices.
          </p>

          <p>
            Any updates will become effective immediately upon publication on
            this page unless otherwise stated.
          </p>

          <p>
            We encourage you to review this Privacy Policy periodically to stay
            informed about how we protect your information.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 shadow-sm p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          16. Contact Us
        </h2>

        <p className="text-gray-700 leading-8 mb-6">
          If you have any questions, concerns, or requests regarding this
          Privacy Policy or how we handle your information, please contact us.
        </p>

        <div className="rounded-xl bg-white border border-gray-200 p-6">
          <h3 className="font-semibold text-lg text-gray-900 mb-2">
            PeakCheap
          </h3>

          <p className="text-gray-700">
            Email:{" "}
            <a
              href="mailto:peakcheapteam@gmail.com"
              className="text-blue-600 hover:text-blue-700 hover:underline"
            >
              peakcheapteam@gmail.com
            </a>
          </p>

          <p className="text-gray-700 mt-2">
            Website:{" "}
            <a
              href="https://www.peakcheap.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 hover:underline"
            >
              www.peakcheap.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}