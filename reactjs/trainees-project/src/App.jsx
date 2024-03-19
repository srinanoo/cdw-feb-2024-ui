import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LayoutPage from './pages/LayoutPage'
import HomePage from './pages/HomePage'
import TraineesPage from './pages/TraineesPage'
import TrainersPage from './pages/TrainersPage'
import BatchPage from './pages/BatchesPage'
import ClassesPage from './pages/ClassesPage'
import TopicsPage from './pages/TopicsPage'
import LoginPage from './pages/LoginPage'
import TraineesAdd from './components/ListComp/Trainees/AddComp'
import TraineesEdit from './components/ListComp/Trainees/EditComp'

function App() {
  return (
    <>
      <BrowserRouter basename='/cdw-feb-2024-react'>
        <Routes>
          <Route path="/" element={<LayoutPage />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />

            <Route path="/trainees" element={<TraineesPage />} />
            <Route path="/trainees/add" element={<TraineesAdd />} />
            <Route path="/trainees/edit/:id" element={<TraineesEdit />} />

            <Route path="/trainers" element={<TrainersPage />} />
            <Route path="/trainers/add" element="" />
            <Route path="/trainers/edit" element="" />

            <Route path="/batches" element={<BatchPage />} />
            <Route path="/batches/add" element="" />
            <Route path="/batches/edit" element="" />

            <Route path="/classes" element={<ClassesPage />} />
            <Route path="/classes/add" element="" />
            <Route path="/classes/edit" element="" />

            <Route path="/topics" element={<TopicsPage />} />
            <Route path="/topics/add" element="" />
            <Route path="/topics/edit" element="" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
