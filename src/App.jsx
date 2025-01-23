import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar1 from '../Components/NavBar1';
import NavBar2 from '../Components/NavBar2';
import News from '../Components/News.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          {/* Navigation */}
          <header className="sticky top-0 z-50 bg-white shadow-sm">
            <NavBar1 />
            <NavBar2 />
          </header>

          {/* Main Content */}
          <main className="flex-grow px-4 py-8 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <Routes>
                <Route path="/" element={<News category="general" />} />
                <Route
                  path="/Entertainment"
                  element={<News category="entertainment" />}
                />
                <Route
                  path="/Technology"
                  element={<News category="technology" />}
                />
                <Route path="/Sports" element={<News category="sports" />} />
                <Route
                  path="/Business"
                  element={<News category="business" />}
                />
                <Route path="/Health" element={<News category="health" />} />
                <Route path="/Science" element={<News category="science" />} />
              </Routes>
            </div>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
