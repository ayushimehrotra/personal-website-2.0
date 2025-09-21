import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const ResearchSection = () => {
  return (
    <section
      id="research"
      className="scroll-mt-24 mt-16 px-4 sm:px-6 lg:px-20 xl:px-28 max-w-7xl mx-auto space-y-6"
    >
      {/* Header */}
      <motion.div {...fadeIn} viewport={{ once: true }}>
        <h2 className="text-3xl lg:text-4xl font-script font-light text-blue-300 underline decoration-2 underline-offset-6">
          research.
        </h2>
        <p className="text-base sm:text-lg text-blue-100 font-sans font-light leading-relaxed mt-1">
          currently, i'm interested in exploring ai security in llms and engineering novel interpretability methods to understand machine learning models. 
          i'm also dipping my toes into social choice, mechanism design, and causality. most importantly, i'm drawn to areas which intersect the human value of <em>trust</em> and <em>mathematics</em>.
        </p>
      </motion.div>

      {/* Recent Works */}
      <motion.div
        {...fadeIn}
        viewport={{ once: true }}
        className="bg-blue-200/10 border border-blue-300/10 shadow-md rounded-2xl backdrop-blur-sm hover:shadow-lg transition px-4 sm:px-5 md:px-6 lg:px-7 py-4 space-y-4"
      >
        <h3 className="text-xl font-sans font-semibold text-blue-100 underline underline-offset-3">
          Recent Works
        </h3>

        <div className="space-y-4 text-blue-100 font-sans">
          {[
            {
              authors: "Kumarappan A. & Mehrotra, A.",
              title: "Towards Realistic Guarantees: A Probabilistic Certificate for SmoothLLM.",
              venue: "To Appear",
              year: "2025",
            },
            {
              authors: "Mehrotra, A., Peng, D., Bhusal, D., & Rastogi, N.",
              title: "Concept-Based Masking: A Patch-Agnostic Defense Against Adversarial Patch Attacks.",
              venue: "To Appear",
              year: "2025",
            },
            {
              authors: "Mehrotra, A. & Kurz A.",
              title: "Incorporating Patient and Donor Choice in Kidney Exchanges.",
              venue: "AAAS Annual Meeting 2025",
              year: "2025",
            },
            {
              authors: "Mehrotra, A., Bhusal, D., & Rastogi, N.",
              title: "H-Sets: Uncovering Feature Interactions in Image Classifiers.",
              venue: "2nd NeurIPS 2025 ATTRIB Workshop",
              link: "https://openreview.net/pdf?id=qcDCKlP7Tk",
              pressLink: "https://www.davidsongifted.org/gifted-programs/fellows-scholarship/fellows/current-and-past-fellows/2025-fellows/fellow-ayushi-mehrotra/",
              internalLink: "/research/hessian-sets", 
              year: "2024",
              label: "abstract",
            },
            {
              authors: "Mehrotra, A.",
              title: "AdvMed: Detecting Adversarial Attacks in Medical Deep Learning Systems.",
              venue: "ISBI 2024, ISEF 2024",
              link: "https://isef.net/project/robo057-detecting-attacks-in-medical-deep-learning",
              year: "2024",
              label: "abstract",
            },
            {
              authors: "Malladi, B., Mehrotra, A., & Hanchate A.",
              title: "SnoozeNet: Causality-Driven Transformers for Sleep Stage Classification.",
              venue: "MIT URTC 2024",
              link: "https://ieeexplore.ieee.org/abstract/document/10937603",
              year: "2024",
              label: "paper",
              color: "green",
            },
            {
              authors: "Mehrotra, A.",
              title: "Trust Management System for Blockchain Organ Donation Framework.",
              venue: "Women in Cybersecurity Conference 2023",
              link: "https://www.wicys.org/wp-content/uploads/2023/06/2023_WiCyS_Program_Final.pdf",
              year: "2023",
              label: "abstract",
              pressLink: "https://www.aspirations.org/people/ayushi-m/117987"
            },
          ].map((entry, i) => (
            <motion.div
              key={i}
              {...fadeIn}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <p className="text-sm sm:text-base leading-relaxed">
                <span className="text-blue-300 underline transition">
                  {entry.authors}
                </span>{" "}
                ({entry.year}).{" "}
                <strong>{entry.title}</strong>
                <em className="block text-xs mt-0.5">{entry.venue}</em>
              </p>
              <div className="flex gap-2 mt-1.5">
                {entry.link && (
                  <a href={entry.link} target="_blank" rel="noopener noreferrer">
                    <span
                      className={`inline-block ${
                        entry.color === "green"
                          ? "bg-green-100 text-green-800 hover:bg-green-200"
                          : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                      } text-xs font-semibold px-2 py-0.5 rounded transition`}
                    >
                      {entry.label}
                    </span>
                  </a>
                )}
                {entry.internalLink && (
                  <Link to={entry.internalLink}>
                    <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-0.5 rounded hover:bg-purple-200 transition">
                      details
                    </span>
                  </Link>
                )}
                {entry.pressLink && (
                  <a href={entry.pressLink} target="_blank" rel="noopener noreferrer">
                    <span className="inline-flex items-center gap-1 bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-0.5 rounded hover:bg-orange-200 transition">
                      <ExternalLink size={12} />
                      press
                    </span>
                  </a>
                )}
              </div>
              {i !== 6 && (
                <hr className="mt-3 border-t border-blue-300/20" />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};