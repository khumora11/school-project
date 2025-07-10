import { Route, Routes } from "react-router-dom"
import Navbar from "./components/shared/navbar"
import Home from "./pages/home"
import Contact from "./pages/contact"
import Footer from "./components/footer/footer"
import Auth from "./pages/auth"
import Dashboard from "./pages/dashboard"
import DeleteCard from "./components/deleteCards/deleteCard"
import Teachers from "./components/teacher/teacher"
import Pupils from "./components/pupils/pupil"
import AddCards from "./components/addCards/addCards"
import DeleteCards from "./components/deleteCards/deleteCards"
import AddNews from "./components/addCards/addNews"
import News from "./pages/news"
import DeleteNews from "./components/deleteCards/deleteNews"
import AddCard from "./components/addCards/addCard"
import AddLessonTable from "./components/addCards/addLessonTable"
import DeleteLesson from "./components/deleteCards/deleteLessons"
import LeesonTable from "./components/tables/lesson-tables"
import About from "./pages/about"

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addCardTeachers" element={<AddCard />} />
        <Route path="/addCardPupils" element={<AddCards/>}/>
        <Route path="/deleteCardTeachers" element={<DeleteCard />} />
        <Route path="/deleteCardPupils" element={<DeleteCards/>}/>
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/pupils" element={<Pupils />} />
        <Route path="/lessonTable" element={<LeesonTable />} />
        <Route path="/news" element={<News />} />
        <Route path="/addNews" element={<AddNews />} />
        <Route path="/deleteNews" element={<DeleteNews/>}/>
        <Route path="/addLesson" element={<AddLessonTable/>}/>
        <Route path="/deleteLesson" element={<DeleteLesson/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App
