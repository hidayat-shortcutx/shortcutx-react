import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProductMaxPlus from './pages/ProductMaxPlus'
import CategoryFatBurners from './pages/CategoryFatBurners'
import BrandStory from './pages/BrandStory'
import TheScience from './pages/TheScience'
import FindYourFit from './pages/FindYourFit'
import DesignSystem from './pages/DesignSystem'

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main className="pt-[104px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/max-plus" element={<ProductMaxPlus />} />
          <Route path="/collections/fat-burners" element={<CategoryFatBurners />} />
          <Route path="/pages/our-story" element={<BrandStory />} />
          <Route path="/pages/the-science" element={<TheScience />} />
          <Route path="/pages/find-your-fit" element={<FindYourFit />} />
          <Route path="/design-system" element={<DesignSystem />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
