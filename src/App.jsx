import React from 'react'
import Header from './components/Header'
import ProductPage from './components/ProductPage'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="app-root">
      <Header />
      <main>
        <ProductPage />
      </main>
      <Footer />
    </div>
  )
}
