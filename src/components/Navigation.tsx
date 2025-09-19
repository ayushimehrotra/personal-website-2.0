export const Navigation = () => {
  const navItems = [
    { label: "research", href: "#research" },
    { label: "projects", href: "#work" },
    { label: "blog", href: "/blog"},
    { label: "resume", href: "/resume.pdf", external: true },
  ];

  return (
    <nav className="mt-0">
      <ul className="flex gap-x-6 text-xl font-sans font-light tracking-wide">
        {navItems.map((item, index) => (
          <li key={item.label}>
            <a
              href={item.href}
              target={item.external ? "_blank" : "_self"}
              rel={item.external ? "noopener noreferrer" : ""}
              className="relative inline-block py-1 px-1 hover:text-blue-200 transition-all duration-200"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-200 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};