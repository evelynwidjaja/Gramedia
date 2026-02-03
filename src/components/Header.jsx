import React, {useState} from 'react'
import MobileDrawer from './MobileDrawer'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [kategoriOpen, setKategoriOpen] = useState(false)

  const categories = [
    'Buku',
    'Elemen',
    'Fashion',
    'Elektronik',
    'Koleksi',
    'Musik',
    'Film',
    'Mainan',
    'Hobi'
  ]

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <button className="mobile-hamburger" onClick={()=>setOpen(true)} aria-label="Open menu">≡</button>
          
          <div className="logo">
            <img src="/img/gramedia-logo.png" alt="Gramedia.com"/>
          </div>
          
          <div className="kategori-wrapper">
            <button className="kategori-btn" onClick={()=>setKategoriOpen(!kategoriOpen)}>
              <span>Kategori</span>
              <span className={kategoriOpen ? 'open' : ''}>▼</span>
            </button>
            {kategoriOpen && (
              <>
                <div className="mega-backdrop" onClick={()=>setKategoriOpen(false)} />
                <div className="kategori-dropdown">
                  <div className="kategori-left">
                    <div className="segmented">
                      <button className="seg-btn active">Buku</button>
                      <button className="seg-btn">Non Buku</button>
                    </div>

                    <div className="kategori-list">
                      <h4>Buku</h4>
                      {categories.map((cat) => (
                        <a key={cat} href="#" className="kategori-item" onClick={(e)=>{e.preventDefault(); setKategoriOpen(false)}}>
                          {cat}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="kategori-sections">
                    <div className="kategori-section">
                      <h4>Agama</h4>
                      <a className="kategori-item" href="#">Buddha</a>
                      <a className="kategori-item" href="#">Hindu</a>
                      <a className="kategori-item" href="#">Islam</a>
                      <a className="kategori-item" href="#">Konfusianisme</a>
                      <a className="kategori-item" href="#">Kristen &amp; Katolik</a>
                      <a className="kategori-item" href="#">Spiritualitas</a>
                    </div>

                    <div className="kategori-section">
                      <h4>Komputer</h4>
                      <a className="kategori-item" href="#">Aplikasi Bisnis &amp; Produktivitas</a>
                      <a className="kategori-item" href="#">Aplikasi Matematika &amp; Statistik</a>
                      <a className="kategori-item" href="#">Database Administrasi &amp; Manajemen</a>
                      <a className="kategori-item" href="#">Desain, Grafik &amp; Media</a>
                      <a className="kategori-item" href="#">Hacking</a>
                      <a className="kategori-item" href="#">Ilmu Komputer</a>
                      <a className="kategori-item" href="#">Internet</a>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          
          <div className="search">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
              <circle cx="8" cy="8" r="6"/>
              <path d="M12 12l6 6"/>
            </svg>
            <input placeholder="Cari Produk, Judul Buku, atau Penulis" />
          </div>
          
          <button className="cart-btn" aria-label="Shopping cart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
          </button>
          
          <div className="actions">
            <button className="btn ghost">Masuk</button>
            <button className="btn primary">Daftar</button>
          </div>
        </div>
      </header>
      <MobileDrawer open={open} onClose={()=>setOpen(false)} />
    </>
  )
}
