export default function Sidebar() {
  return (
    <aside
      id="sidebar"
      className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800 transform -translate-x-full transition-transform duration-300 md:hidden z-50"
    >
      <div className="p-6">
        <div className="text-xl font-bold mb-8">Navigation</div>
        <div className="flex flex-col space-y-4">
          <a
            href="#hero"
            className="text-base font-medium hover:text-primary-500 transition-colors"
          >
            Home
          </a>
          <a
            href="#skills"
            className="text-base font-medium hover:text-primary-500 transition-colors"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-base font-medium hover:text-primary-500 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-base font-medium hover:text-primary-500 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </aside>
  );
}
