import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/shared/navbar";
import Footer from "./components/footer/footer";

import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Auth from "./pages/auth";
import Dashboard from "./pages/dashboard";
import News from "./pages/news";

import Teachers from "./components/teacher/teacher";
import Pupils from "./components/pupils/pupil";

import AddCard from "./components/addCards/addCard";
import AddCards from "./components/addCards/addCards";
import DeleteCard from "./components/deleteCards/deleteCard";
import DeleteCards from "./components/deleteCards/deleteCards";

import AddNews from "./components/addCards/addNews";
import DeleteNews from "./components/deleteCards/deleteNews";

import AddLessonTable from "./components/addCards/addLessonTable";
import DeleteLesson from "./components/deleteCards/deleteLessons";
import LeesonTable from "./components/tables/lesson-tables";
import EBooks from "./pages/ebook";
import AudioBooks from "./pages/audioBooks";

const App = () => {
  const location = useLocation();
  const [showNavFooter, setShowNavFooter] = useState(true);

  useEffect(() => {
    // Navbar va Footer ko'rinmasligi kerak bo'lgan route'lar
    const hideNavFooterRoutes = [
      "/dashboard",
      "/addCardTeachers",
      "/deleteCardTeachers",
      "/addCardPupils",
      "/deleteCardPupils",
      "/addLesson",
      "/deleteLesson",
      "/addNews",
      "/deleteNews",
    ];

    const shouldHide = hideNavFooterRoutes.some(route => 
      location.pathname.startsWith(route)
    );
    
    setShowNavFooter(!shouldHide);
  }, [location]);

  return (
    <div>
      {showNavFooter && <Navbar />}

      <Routes>
        {/* Default → /uz ga yuboradi */}
        <Route path="/" element={<Navigate to="/en" replace />} />

        {/* Asosiy sahifalar */}
        <Route path="/:lng" element={<Home />} />
        <Route path="/:lng/about" element={<About />} />
        <Route path="/:lng/contact" element={<Contact />} />
        <Route path="/:lng/news" element={<News />} />
        <Route path="/:lng/signin" element={<Auth />} />
        <Route path="/:lng/pupils" element={<Pupils />} />
        <Route path="/:lng/lessonTable" element={<LeesonTable />} />
        <Route path="/:lng/e-books" element={<EBooks />} />
        <Route path="/:lng/audio-books" element={<AudioBooks />} />

        {/* Admin sahifalari (Navbar va Footersiz) */}
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Teachers admin */}
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/addCardTeachers" element={<AddCard />} />
        <Route path="/deleteCardTeachers" element={<DeleteCard />} />

        {/* Pupils admin */}
        <Route path="/addCardPupils" element={<AddCards />} />
        <Route path="/deleteCardPupils" element={<DeleteCards />} />

        {/* Lessons admin */}
        <Route path="/addLesson" element={<AddLessonTable />} />
        <Route path="/deleteLesson" element={<DeleteLesson />} />

        {/* News admin */}
        <Route path="/addNews" element={<AddNews />} />
        <Route path="/deleteNews" element={<DeleteNews />} /> {/* Tog'rilandi: "//" o'rniga "/" */}

        {/* Not found */}
        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>

      {showNavFooter && <Footer />}
    </div>
  );
};

export default App;