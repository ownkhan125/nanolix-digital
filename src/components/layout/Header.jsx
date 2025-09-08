import React from "react";

const Header = () => {
  return (
    <AnimatePresence>
      <motion.nav>
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex flex-row justify-between">
            <div className="text-2xl font-bold">Logo</div>

            {/* Navigation Links Desktop */}
            <nav>
              <ul className="flex flex-row gap-8">
                <li>
                  <a href="#" className="text-gray-800 hover:text-gray-600">
                    Home
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default Header;
