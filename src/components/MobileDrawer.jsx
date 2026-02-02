import React from 'react'

export default function MobileDrawer({open,onClose}){
  return (
    <div className={`mobile-drawer ${open? 'open':''}`} role="dialog" aria-hidden={!open}>
      <div className="drawer-backdrop" onClick={onClose}></div>
      <div className="drawer-panel">
        <div className="drawer-header">
          <strong>Menu</strong>
          <button className="btn ghost" onClick={onClose}>✕</button>
        </div>
        <nav className="drawer-nav">
          <a href="#">Beranda</a>
          <a href="#">Kategori</a>
          <a href="#">Keranjang</a>
          <a href="#">Akun</a>
        </nav>
      </div>
    </div>
  )
}
