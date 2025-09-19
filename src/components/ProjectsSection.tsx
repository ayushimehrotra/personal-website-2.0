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
      role: "Founder & Director",
      category: "Service",
      status: "past",
      description:
        "Crack the Code is a nonprofit organization that organizes cybersecurity hackathons for high schoolers and college students. I directed and executed 2 hackathons for ~300 students and raised $15k in sponsorships.",
      link: "https://crackthecode.dev/",
    },
    {
      title: "OC Coder",
      role: "President",
      category: "Service",
      status: "past",
      description:
        "I run OC Coder, a sub-organization under STEAM for All, and we conduct monthly coding-related events for over 2000+ participants with 350+ volunteers!",
      link: "https://steamforall.org/",
    },
    {
      title: "Troy Cyber",
      role: "Advanced Instructor",
      category: "Service",
      status: "past",
      description:
        "I taught 60+ high school and middle school students (oh my, those middle schoolers) the curriculum of CCNA and CCNA Security. Though I never actually got the certification, I went to semis for Cyberpatriot twice :D",
      link: "https://sites.google.com/fjuhsd.org/troyhscyberdefense/root-drive",
    },

    // Work
    {
      title: "stealth",
      role: "---",
      category: " ",
      status: "current",
      description:
        "more stuff cookin :D",
      link: "",
    },
    {
      title: "AI4Sec @ RIT",
      role: "Researcher",
      category: " ",
      status: "current",
      description:
        "I am mentored by Dipkamal Bhusal and Professor Nidhi Rastogi. Previously, I've designed and tested a novel feature attribution method for computer vision, which was presented at the NeurIPS ATTRIB Workshop. Currently working on patch attacks <3",
      link: "https://nidhirastogi.github.io/",
    },
    {
      title: "AT&T Labs",
      role: "Project “AdvMed”",
      category: " ",
      status: "past",
      description:
        "I was advised by Dr. Aritra Guha & Dr. Zhengyi Zhou. I engineering robust defenses against adversarial attacks in computer vision, which was presented as sole-author at IEEE ISBI. This work received 1st place in cybersecurity at ISEF 2024, the Non-Trivial Fellowship Award, and a presentation at the National Security Agency!",
      link: "",
    },
    {
      title: "Chapman University",
      role: "Researcher",
      category: " ",
      status: "past",
      description:
        "I designed a novel optimal kidney exchange that included patient and donor choice with Professor Alexander Kurz, which was presented at the AAAS Annual Conference. I was also named AJAS Fellow along with a lot of cool people :) ",
      link: "",
    },
    {
      title: "Interaction Lab @ University of Southern California",
      role: "Research Intern",
      category: " ",
      status: "past",
      description:
        "With Professor Maja Mataric and Dr. Lauren Klein (now postdoc @ Stanford), I designed Python visualizations of interactions between socially assistive robots and infants. I was also one of 4 freshman in the 100-student cohort of USC SHINE 2022!",
      link: "https://uscinteractionlab.web.app/",
    },
    {
      title: "Troy Science Olympiad",
      role: "Team Member",
      category: " ",
      status: "past",
      description:
        "In my high school and middle school career, I've done Detector Building, WIDI, WiFi Lab, Cybersecurity, EXPD, Write it CAD it, Codebusters, etc. I've won 3rd place at Nationals for Write it CAD it (shout-out to Andrew!) and 5th place for cybersecurity at Nationals (go Josephine!)",
      link: "https://sites.google.com/fjuhsd.org/troyscioly",
    },
  ];

  const categories = [" ", "Service"];

  return (
    <section
      id="work"
      className="scroll-mt-24 mt-24 px-4 sm:px-6 lg:px-20 xl:px-28 max-w-7xl mx-auto space-y-16"
    >
      <motion.div {...fadeIn} viewport={{ once: true }}>
        <h2 className="text-4xl lg:text-5xl font-script font-light text-yellow-400 underline decoration-2 underline-offset-8">
          projects.
        </h2>
        <p className="text-lg sm:text-xl text-yellow-100 font-sans font-light leading-relaxed mt-2">
          each one of these is a product of either my curiosity or passion to bring social change. currently, i'm interested in applied ai and cybersecurity ventures, in research, advocacy, and startups. 
        </p>
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
                const isCurrent = project.status === "current";
                return (
                  <div
                    key={index}
                    className={`relative group p-6 rounded-xl shadow transition duration-300 backdrop-blur-md ${
                      isCurrent
                        ? "bg-yellow-200/10 border border-yellow-300/20 text-gray-100 hover:ring-2 hover:ring-yellow-300/40 hover:shadow-lg"
                        : "bg-gray-700/40 border border-gray-600/20 text-gray-400 opacity-80 hover:opacity-100 hover:brightness-110"
                    }`}
                  >
                    {!isCurrent && (
                      <span className="absolute top-2 left-2 bg-gray-600/70 text-[10px] uppercase px-2 py-0.5 rounded text-white tracking-wide">
                        Past
                      </span>
                    )}

                    <h4
                      className={`text-lg font-semibold ${
                        isCurrent ? "text-yellow-200" : "text-gray-300"
                      }`}
                    >
                      {project.title}
                    </h4>
                    <p
                      className={`text-sm mb-2 ${
                        isCurrent ? "text-yellow-100" : "text-gray-400"
                      }`}
                    >
                      {project.role}
                    </p>
                    <p className="text-sm leading-relaxed">
                      {project.description}
                    </p>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-block mt-3 text-xs underline ${
                          isCurrent
                            ? "text-yellow-300 hover:text-yellow-400"
                            : "text-gray-300 hover:text-gray-200"
                        }`}
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