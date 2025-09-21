import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const ProjectsSection = () => {
  const projects = [
    // Service
    {
      title: "Crack the Code",
      role: "Founder & Director • 2023-2025",
      category: "service",
      description:
        "Crack the Code is a nonprofit organization that organizes cybersecurity hackathons for high schoolers and college students. We directed and executed 2 hackathons for ~300 students and raised $15k in sponsorships.",
      link: "https://crackthecode.dev/",
    },
    {
      title: "OC Coder",
      role: "President • 2021-2025",
      category: "service",
      description:
        "I ran OC Coder, a sub-organization under STEAM for All, and we conduct monthly coding-related events for over 2000+ participants with 350+ volunteers!",
      link: "https://steamforall.org/",
    },
    

    {
      title: "AI4Sec @ RIT",
      role: "Researcher • 2023-Present",
      category: " ",
      description:
        "I've designed and tested a novel feature attribution method for computer vision called H-Sets, which was presented at the NeurIPS ATTRIB Workshop. Currently, I work on defenses against patch attacks using concept XAI.",
      link: "https://nidhirastogi.github.io/",
    },
    {
      title: "AT&T Labs",
      role: "Project “AdvMed” • 2024-2025",
      category: " ",
      description:
        "I engineering robust defenses against adversarial attacks in computer vision with Dr. Aritra Guha & Dr. Zhengyi Zhou, which was presented as sole-author at IEEE ISBI. This work received 1st place in cybersecurity at ISEF 2024, the Non-Trivial Fellowship Award, and a presentation at the National Security Agency!",
      link: "https://isef.net/project/robo057-detecting-attacks-in-medical-deep-learning",
    },
    {
      title: "Chapman University",
      role: "Researcher • 2023-2024",
      category: " ",
      description:
        "I designed a novel optimal kidney exchange that included patient and donor choice with Professor Alexander Kurz, which was presented at the AAAS Annual Conference. I was also named AJAS Fellow. ",
      link: "",
    },
    {
      title: "Interaction Lab @ USC",
      role: "Research Intern • Summer 2022",
      category: " ",
      description:(
        <>
            With Professor Maja Mataric and Dr. Lauren Klein (now postdoc @ Stanford), I designed <u>data visualizations</u> of interactions between socially assistive robots and infants. I was also one of 4 freshman in the 100-student cohort of USC SHINE 2022!
        </>
      ),
      link: "https://uscinteractionlab.web.app/",
    },
    {
      title: "Blockchain Databases for secure NoSQL key-store",
      role: "First Author • 2022-2023",
      category: " ",
      description: "To test the waters of cybersecurity research, I conducted an independent project on blockchain databases, testing their security, latency, and throughput. It resulted in my first paper published in the Journal of Emerging Investigators.",
      link: "https://emerginginvestigators.org/articles/22-084",
    },
    {
      title: "Troy Science Olympiad",
      role: "Team Member • 2021-2024",
      category: " ",
      description:
        "I've done Detector Building, WIDI, WiFi Lab, Cybersecurity, EXPD, Write it CAD it, Codebusters, etc. I've won 3rd place at Nationals for Write it CAD it and 5th place for cybersecurity at Nationals.",
      link: "https://sites.google.com/fjuhsd.org/troyscioly",
    },
    {
      title: "Troy Cyber",
      role: "Advanced Instructor • 2022-2025",
      category: " ",
      description:
        "I taught 60+ high school and middle school students (oh my, those middle schoolers) the curriculum of CCNA and CCNA Security. Though I never actually got the certification, I went to semifinals for Cyberpatriot twice.",
      link: "https://sites.google.com/fjuhsd.org/troyhscyberdefense/root-drive",
    },

    {
      title: "Adaa Dance Academy",
      role: "Competitive Dancer • 2013-Present",
      category: "more...",
      description:
        "Over the past 12 years, I've trained in and danced Bollywood, hip-hop, contemporary, and kathak. In 2020, we got invited to go to Starpower Nationals!",
      link: "https://www.adaadanceacademy.com/",
    },
  ];

  const categories = [" ", "service", "more..."];

  return (
    <section
      id="work"
      className="scroll-mt-24 mt-24 px-4 sm:px-6 lg:px-20 xl:px-28 max-w-7xl mx-auto space-y-16"
    >
      <motion.div {...fadeIn} viewport={{ once: true }}>
        <h2 className="text-3xl lg:text-4xl font-script font-light text-yellow-400 underline decoration-2 underline-offset-8">
          projects & portfolio.
        </h2>
      </motion.div>

      {categories.map((category, catIdx) => {
        const filtered = projects.filter((p) => p.category === category);
        if (filtered.length === 0) return null;

        return (
          <motion.div
            key={category}
            {...fadeIn}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIdx * 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-sans font-semibold text-yellow-100 underline decoration-yellow-300/40">
              {category}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project, index) => {
                return (
                  <div
                    key={index}
                    className={`relative group p-6 rounded-xl shadow transition duration-300 backdrop-blur-md bg-yellow-200/10 border border-yellow-300/20 text-gray-100 hover:ring-2 hover:ring-yellow-300/40 hover:shadow-lg"`}
                  >

                    <h4
                      className={`text-lg font-sans font-semibold text-yellow-200"`}
                    >
                      {project.title}
                    </h4>
                    <p
                      className={`text-sm mb-2 font-sans text-yellow-100"`}
                    >
                      {project.role}
                    </p>
                    <p className="text-sm font-sans leading-relaxed">
                      {project.description}
                    </p>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={"inline-block mt-3 text-xs underline text-yellow-300 hover:text-yellow-400"}
                      >
                        View →
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        );
      })}
    </section>
  );
};