export function FAQSection() {
  const faqs = [
    {
      q: "What services do you offer in digital marketing?",
      a: "We provide SEO, social media management, email marketing, content marketing, PPC campaigns, and more.",
    },
    {
      q: "How can digital marketing help my business?",
      a: "By increasing visibility, reaching target audiences, and generating more qualified leads.",
    },
    {
      q: "Do you offer local SEO?",
      a: "Yes! We help optimize your business for better local search visibility.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#0f051d] to-[#1a0b2e] text-white py-20 px-6 lg:px-30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Got Questions? <br /> We've got Answers
          </h2>
          <ul className="space-y-3 text-gray-300">
            {[
              "Digital Marketing",
              "Web & Software Development",
              "Graphic Design & Logo",
              "Multimedia & Video Editing",
              "Creative Writting Solutions",
              "Refund, Earn & Cancel Policies",
              "Getting started & General Info",
              "General policy & Customer Support",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-indigo-400">•</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right */}
        <div className="space-y-4 pt-20">
          {faqs.map((f, i) => (
            <details key={i} className="bg-[#1f1036] rounded-xl p-4 border border-gray-700">
              <summary className="cursor-pointer text-lg font-medium">{f.q}</summary>
              <p className="mt-2 text-gray-400">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
