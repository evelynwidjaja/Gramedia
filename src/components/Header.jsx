import React, {useState} from 'react'
import MobileDrawer from './MobileDrawer'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <button className="mobile-hamburger" onClick={()=>setOpen(true)} aria-label="Open menu">≡</button>
          <div className="brand">Gramedia.com</div>
          <div className="search">
            <input placeholder="Cari Produk, Judul Buku, atau Penulis" />
          </div>
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
