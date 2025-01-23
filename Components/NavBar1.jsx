import { Newspaper } from 'lucide-react';

function NavBar1() {
  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center space-x-2 text-xl font-bold hover:text-gray-200 transition-colors"
          >
            <Newspaper className="h-6 w-6" />
            <span>Daily Digest</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar1;
