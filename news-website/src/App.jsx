import React from 'react'
import './App.css'
import Header from './components/PageComponents/Header'
import ArticleList from './components/Pages/Home'
import Footer from './components/PageComponents/Footer'
import AsideList from './components/Pages/AsideList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArticleDetail from './components/Pages/ArticleDetail'

function App() {
  return (
    <Router>
    <div className='App'>
      <Header/>
      <main>
        <Routes className='article-list'>
          <Route path='/' element={<ArticleList/>}/>
          <Route path='/articles/:id' element={<ArticleDetail/>} />
        </Routes>
                   
      </main> 
      <aside>
        <AsideList/>      
      </aside>      
      <Footer/>     
    </div>
    </Router>
  )
}
export default App
