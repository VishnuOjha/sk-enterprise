import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";
import { getFAQSchema } from "../lib/seo-config";

// SEO-optimized FAQ data
const faqs = [
  {
    question: "What is false ceiling and why do I need it in Ahmedabad?",
    answer:
      "A false ceiling (also called suspended or dropped ceiling) is a secondary ceiling installed below the main ceiling. In Ahmedabad's hot climate, it provides excellent heat insulation, hides electrical wiring and AC ducts, improves acoustics, and allows for modern LED lighting integration. It's essential for both residential and commercial spaces.",
  },
  {
    question: "How much does false ceiling cost in Ahmedabad?",
    answer:
      "False ceiling costs in Ahmedabad vary based on material and design. Gypsum ceiling ranges from ₹90-150 per sq ft, POP ceiling ₹80-120 per sq ft, PVC ceiling ₹60-100 per sq ft, and metal/aluminum ₹150-250 per sq ft. SK Enterprise offers competitive pricing with free consultation and quotes.",
  },
  {
    question: "What types of false ceiling materials do you use?",
    answer:
      "We use premium materials including gypsum boards (fire-resistant, durable), PVC panels (waterproof, low maintenance), metal/aluminum (modern, industrial look), and thermocol (budget-friendly). Each material has specific benefits suited for different spaces and requirements.",
  },
  {
    question: "How long does false ceiling installation take?",
    answer:
      "For a standard 10x10 feet room, installation typically takes 2-3 days including framework, boarding, and finishing. Larger commercial projects may take 1-2 weeks. Timeline depends on design complexity, room size, and material selection.",
  },
  {
    question: "Do you provide false ceiling services in areas near Ahmedabad?",
    answer:
      "Yes, SK Enterprise provides false ceiling installation throughout Ahmedabad and surrounding areas including Gandhinagar, Sanand, Bavla, and other parts of Gujarat. Contact us for service availability in your location.",
  },
];

export const metadata = {
  title: "False Ceiling in Ahmedabad | Best POP & Gypsum Work | SK Enterprise",
  description:
    "Leading false ceiling contractor in Ahmedabad. Expert gypsum, POP, PVC ceiling installation for homes & offices. 15+ years experience. Free quote: +91 9714620060",
  keywords: [
    "false ceiling in ahmedabad",
    "false ceiling near me",
    "gypsum ceiling ahmedabad",
    "pop work ahmedabad",
    "false ceiling contractor ahmedabad",
    "best false ceiling ahmedabad",
    "suspended ceiling ahmedabad",
    "office false ceiling",
    "home false ceiling",
  ].join(", "),
  alternates: {
    canonical: "https://www.skenterprise.com",
  },
  openGraph: {
    title:
      "False Ceiling in Ahmedabad | Best POP & Gypsum Work | SK Enterprise",
    description:
      "Leading false ceiling contractor in Ahmedabad. Expert gypsum, POP, PVC ceiling installation for homes & offices. 15+ years experience.",
    url: "https://www.skenterprise.com",
  },
};

export default function Home() {
  const faqSchema = getFAQSchema(faqs);

  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Hero />
      <About />
      <Services />
      <Gallery />

      {/* SEO Content Section - Hidden visually but readable by search engines */}
      <section className="sr-only">
        <h2>False Ceiling Services in Ahmedabad</h2>
        <p>
          SK Enterprise is the leading false ceiling contractor in Ahmedabad,
          Gujarat, providing professional installation services for residential
          and commercial properties. Our expertise includes gypsum false
          ceiling, POP work, PVC ceiling, metal ceiling, and custom designs
          tailored to your specific needs.
        </p>
        <p>
          Looking for "false ceiling near me" in Ahmedabad? We serve all areas
          including Satellite, Bopal, Prahlad Nagar, Vastrapur, Maninagar,
          Naranpura, and surrounding regions. With 15+ years of experience and
          500+ completed projects, we're your trusted partner for quality
          ceiling solutions.
        </p>

        <h3>Why Choose SK Enterprise for False Ceiling in Ahmedabad?</h3>
        <ul>
          <li>15+ years of experience in false ceiling installation</li>
          <li>500+ successfully completed projects across Ahmedabad</li>
          <li>Expert team of skilled professionals</li>
          <li>Premium quality materials - Gypsum, POP, PVC, Metal</li>
          <li>Competitive pricing with transparent quotes</li>
          <li>Free consultation and site visit</li>
          <li>On-time project completion guarantee</li>
          <li>Comprehensive warranty on all work</li>
        </ul>

        <h3>Our False Ceiling Services in Ahmedabad Include:</h3>
        <ul>
          <li>Gypsum false ceiling installation</li>
          <li>POP (Plaster of Paris) ceiling work</li>
          <li>PVC ceiling for bathrooms and kitchens</li>
          <li>Metal and aluminum false ceiling</li>
          <li>Grid false ceiling for offices</li>
          <li>Designer ceiling with LED lights</li>
          <li>Acoustic ceiling for sound insulation</li>
          <li>Partition walls and gypsum board work</li>
        </ul>

        <h3>Areas We Serve in Ahmedabad:</h3>
        <p>
          Satellite, Bopal, Prahlad Nagar, Vastrapur, Bodakdev, Thaltej,
          Ambawadi, Maninagar, Naranpura, Chandkheda, Ghatlodia, Sabarmati,
          Navrangpura, Paldi, South Bopal, Science City, and all other areas of
          Ahmedabad and Gujarat.
        </p>
      </section>

      {/* FAQ Section for SEO */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-6 mt-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
