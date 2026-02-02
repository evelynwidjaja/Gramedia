import React, {useState} from 'react'
import coverImg from '../../img/cover.png'
import designImg from '../../img/design.png'
import popupImg from '../../img/popup.png'
import gramediaImg from '../../img/www.gramedia.com_products_seporsi-mie-ayam-sebelum-mati.png'
import sangAlkemisImg from '../../img/books cover/SangAlkemis.png'
import lautBerceritaImg from '../../img/books cover/LautBercerita.png'
import funiculiImg from '../../img/books cover/FuniculiFunicula.png'

const relatedProducts = [
  { id: 1, title: 'Sang Alkemis', price: 85000, image: sangAlkemisImg },
  { id: 2, title: 'Laut Bercerita', price: 90000, image: lautBerceritaImg },
  { id: 3, title: 'Funiculi Funicula', price: 75000, image: funiculiImg },
  { id: 4, title: 'Sang Alkemis', price: 85000, image: sangAlkemisImg },
  { id: 5, title: 'Laut Bercerita', price: 90000, image: lautBerceritaImg },
  { id: 6, title: 'Funiculi Funicula', price: 75000, image: funiculiImg },
]

const recommendedProducts = [
  { id: 1, title: 'Sang Alkemis', price: 85000, image: sangAlkemisImg },
  { id: 2, title: 'Laut Bercerita', price: 90000, image: lautBerceritaImg },
  { id: 3, title: 'Funiculi Funicula', price: 75000, image: funiculiImg },
  { id: 4, title: 'Sang Alkemis', price: 85000, image: sangAlkemisImg },
  { id: 5, title: 'Laut Bercerita', price: 90000, image: lautBerceritaImg },
  { id: 6, title: 'Funiculi Funicula', price: 75000, image: funiculiImg },
  { id: 7, title: 'Sang Alkemis', price: 85000, image: sangAlkemisImg },
  { id: 8, title: 'Laut Bercerita', price: 90000, image: lautBerceritaImg },
]

const vouchers = [
  { id: 1, title: 'Voucher Potongan Ongkir 10K 56Th', discount: 'Diskon Rp10.000', icon: '🚗', details: ['Diskon Ongkir', 'Berlaku s/d 8 Februari 2026', 'Min. Belanja Rp150.000'], code: 'HUT56GRAM' },
  { id: 2, title: 'Promo Bank BNI Special Annivers...', discount: 'Diskon 30%', icon: '🛒', details: ['Diskon Belanja', 'Berlaku s/d 8 Februari 2026', 'Min. Belanja Rp356.000'], code: 'HUTG56XBNI30' },
  { id: 3, title: 'Cashback Hingga Rp50.000', discount: 'Cashback Rp50.000', icon: '💰', details: ['Cashback', 'Berlaku s/d 15 Februari 2026', 'Min. Belanja Rp200.000'], code: 'CASHBACK50' },
]

function BookCover() {
  return (
    <div className="book-cover">
      <img className="cover-image" src={coverImg} alt="Book Cover" />
    </div>
  )
}

function StoreModal({open, onClose, selectedStore, onSelectStore}) {
  const [searchTerm, setSearchTerm] = useState('')
  const [tempSelected, setTempSelected] = useState(selectedStore)

  const stores = [
    {id: 1, name: 'Gramedia Semarang Setiabudi', city: 'Kota Semarang', price: 69750, oldPrice: 93000, discount: '25%'},
    {id: 2, name: 'Gramedia Cilacap', city: 'Kab. Cilacap', price: 69750, oldPrice: 93000, discount: '25%'},
    {id: 3, name: 'Gramedia Pekanbaru Sudirman', city: 'Kota Pekanbaru', price: 69750, oldPrice: 93000, discount: '25%'},
    {id: 4, name: 'Gramedia Jakarta Pusat', city: 'Jakarta Pusat', price: 69750, oldPrice: 93000, discount: '25%'},
    {id: 5, name: 'Gramedia Bandung', city: 'Kota Bandung', price: 69750, oldPrice: 93000, discount: '25%'},
  ]

  const handleSave = () => {
    onSelectStore(tempSelected)
    onClose()
  }

  return (
    <>
      {open && <div className="modal-overlay" onClick={onClose}></div>}
      <div className={`store-modal ${open ? 'open' : ''}`}>
        <div className="modal-header">
          <h2>Toko</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        
        <div className="modal-search">
          <input 
            type="text" 
            placeholder="Cari Lokasi Toko, Kota" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="modal-message">
          <span className="info-icon">ℹ️</span>
          <span>Tersedia opsi layanan pengambilan di toko.</span>
        </div>

        <div className="stores-list">
          {stores.map(s => (
            <label key={s.id} className="store-item">
              <div className="store-info">
                <div className="store-header">
                  <span className="store-icon">🏪</span>
                  <div>
                    <div className="store-name">{s.name}</div>
                    <div className="store-city">{s.city}</div>
                  </div>
                </div>
                <div className="store-price">
                  <span className="price">Rp{s.price.toLocaleString('id-ID')}</span>
                  <span className="old-price">Rp{s.oldPrice.toLocaleString('id-ID')}</span>
                  <span className="discount">{s.discount}</span>
                </div>
              </div>
              <input 
                type="radio" 
                name="store" 
                value={s.name}
                checked={tempSelected === s.name}
                onChange={(e) => setTempSelected(e.target.value)}
              />
            </label>
          ))}
        </div>

        <button className="btn-save" onClick={handleSave}>Simpan</button>
      </div>
    </>
  )
}

export default function ProductPage(){
  const [format,setFormat] = useState('Soft Cover')
  const [store,setStore] = useState('Gramedia Palembang Burlian')
  const [storeModalOpen, setStoreModalOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  return (
    <div className="product-page container">
      <nav className="breadcrumbs">Home &gt; Buku &gt; Fiksi &gt; Kehidupan Kota &gt; Seporsi Mie Ayam Sebelum Mati</nav>
      <div className="product-grid">
        <div className="left-col">
          <BookCover />
        </div>
        <div className="right-col">
          <h1 className="title">Seporsi Mie Ayam Sebelum Mati</h1>
          <div className="author">Brian Khrisna</div>
          <div className="price">Rp69.750 <span className="old">Rp93.000</span></div>
          <div className="favorites-share">
            <button className="btn-favorite">♡ Favorit</button>
            <button className="btn-share">⤴ Bagikan</button>
          </div>
          <div className="stock-notification">
            <div className="notification-icon">📋</div>
            <div className="notification-content">
              <div className="notification-title">Ambil di Toko, Bebas Biaya Pengiriman</div>
              <div className="notification-subtitle">Lihat toko terdekat di mana yang menyediakan stok barang ini</div>
            </div>
          </div>
          <div className="format">
            <label>Format Buku</label>
            <div className="format-options">
              <button className={`chip ${format==='Soft Cover'?'active':''}`} onClick={()=>setFormat('Soft Cover')}>Soft Cover</button>
            </div>
          </div>

          <div className="store">
            <label>Toko</label>
            <button 
              className="store-selector"
              onClick={() => setStoreModalOpen(true)}
            >
              <span className="store-icon">🏪</span>
              {store}
            </button>
          </div>

          <StoreModal 
            open={storeModalOpen} 
            onClose={() => setStoreModalOpen(false)}
            selectedStore={store}
            onSelectStore={setStore}
          />

          <section className="vouchers">
            <div className="section-header">
              <h4>Voucher</h4>
              <a href="#" className="see-all">Lihat Semua</a>
            </div>
            <div className="voucher-list">
              {vouchers.map(voucher => (
                <div key={voucher.id} className="voucher-card">
                  <div className="voucher-header">
                    <div className="voucher-left">
                      <div className="voucher-badge">{voucher.icon}</div>
                      <div className="voucher-header-content">
                        <div className="voucher-title">{voucher.title}</div>
                        <div className="voucher-discount">{voucher.discount}</div>
                      </div>
                    </div>
                    <a href="#" className="voucher-info">Info</a>
                  </div>
                  <div className="voucher-details">
                    {voucher.details.map((detail, idx) => (
                      <div key={idx} className="detail-item">• {detail}</div>
                    ))}
                  </div>
                  <div className="voucher-code-section">
                    <span className="voucher-code-label">Kode:</span>
                    <span className="voucher-code-value">{voucher.code}</span>
                    <button className="voucher-copy-btn" onClick={() => navigator.clipboard.writeText(voucher.code)} title="Copy code">📋</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="description">
            <h3>Deskripsi</h3>
            <p>Ale, seorang pria berusia 37 tahun memiliki tinggi badan 189 cm dan berat 138 kg. Badannya bongsor, berkulit hitam, dan memiliki masalah dengan bau badan. Sejak kecil, Ale hidup di lingkungan keluarga yang tidak mendukungnya.</p>
          </section>

          <section className="details">
            <h4>Detail Buku</h4>
            <div className="detail-grid">
              <div><strong>Penerbit</strong><div>Gramedia Widiasarana Indonesia</div></div>
              <div><strong>Tanggal Terbit</strong><div>20 Jan 2025</div></div>
              <div><strong>ISBN</strong><div>9786020531328</div></div>
              <div><strong>Halaman</strong><div>216</div></div>
            </div>
          </section>

        </div>
      </div>

      <section className="reviews">
        <div className="reviews-header">
          <div>
            <h3>Ulasan Produk</h3>
            <div className="rating">⭐ 4.8 / 5 — 16 Ulasan</div>
          </div>
          <a href="#" className="see-all">Lihat Semua</a>
        </div>
        <div className="review-list">
          <div className="review">
            <div className="review-top">
              <div className="review-author-info">
                <div className="review-avatar">👤</div>
                <div>
                  <div className="review-author">Putra Pratama Rahman</div>
                  <div className="review-date">5 Desember 2024</div>
                </div>
              </div>
              <div className="review-stars">★★★★★</div>
            </div>
            <div className="review-text">Setelah membaca buku ini, saya sangat terkesan dengan cerita yang dibawakan. Buku yang sangat inspiratif dan membuat saya berpikir tentang arti kehidupan. Sempat membuat saya tertawa tapi juga sedih. Goodjob Brian Khrisna</div>
          </div>

          <div className="review">
            <div className="review-top">
              <div className="review-author-info">
                <div className="review-avatar">👤</div>
                <div>
                  <div className="review-author">Ni***</div>
                  <div className="review-date">3 Desember 2024</div>
                </div>
              </div>
              <div className="review-stars">★★★★★</div>
            </div>
            <div className="review-text">Bagus bukunya</div>
          </div>

          <div className="review">
            <div className="review-top">
              <div className="review-author-info">
                <div className="review-avatar">👤</div>
                <div>
                  <div className="review-author">okurpogaasr19</div>
                  <div className="review-date">1 Desember 2024</div>
                </div>
              </div>
              <div className="review-stars">★★★★★</div>
            </div>
            <div className="review-text">Halo teman saya suka buku ini karena kalimatnya bagus dan tokohnya bagus. Jadi kami ingin mencoba membacanya. Terima kasih telah menyarankan buku ini, saya baru saja menyelesaikannya. Semoga buku selanjutnya juga sebagus ini</div>
          </div>

          <div className="review">
            <div className="review-top">
              <div className="review-author-info">
                <div className="review-avatar">👤</div>
                <div>
                  <div className="review-author">D***3</div>
                  <div className="review-date">8 November 2024</div>
                </div>
              </div>
              <div className="review-stars">★★★★★</div>
            </div>
            <div className="review-text">cerita nya bagus banget harus dibagci</div>
          </div>

          <div className="review">
            <div className="review-top">
              <div className="review-author-info">
                <div className="review-avatar">👤</div>
                <div>
                  <div className="review-author">D***p</div>
                  <div className="review-date">6 November 2024</div>
                </div>
              </div>
              <div className="review-stars">★★★★★</div>
            </div>
            <div className="review-text">teori abduah uuudin muslis dibuki ini cay balan</div>
          </div>

          <div className="view-more">
            <a href="#">Lihat Lebih Banyak →</a>
          </div>
        </div>
      </section>

      <section className="related">
        <div className="section-header">
          <h3>Produk Terkait</h3>
          <a href="#" className="see-all">Lihat Semua</a>
        </div>
        <div className="related-grid">
          {relatedProducts.map((product) => (
            <div key={product.id} className="related-card">
              <button className="card-favorite">♡</button>
              <div className="related-thumb">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="related-title">{product.title}</div>
              <div className="related-price">Rp{product.price.toLocaleString('id-ID')}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="recommended">
        <h3>Produk Menarik Lainnya</h3>
        <div className="related-grid">
          {recommendedProducts.map((product) => (
            <div key={product.id} className="related-card">
              <button className="card-favorite">♡</button>
              <div className="related-thumb">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="related-title">{product.title}</div>
              <div className="related-price">Rp{product.price.toLocaleString('id-ID')}</div>
            </div>
          ))}
        </div>
      </section>
      <button className="floating-cart">+ Keranjang</button>

      <div className="sticky-cart-bar">
        <div className="sticky-product-info">
          <div className="sticky-image">
            <img src={coverImg} alt="Seporsi Mie Ayam Sebelum Mati" />
          </div>
          <div className="sticky-details">
            <div className="sticky-format">📕 Soft Cover</div>
            <div className="sticky-store">🏪 {store}</div>
            <div className="sticky-title">Brian Khrisna • Seporsi Mie Ayam Sebelum Mati</div>
            <div className="sticky-price">
              <span className="sticky-current-price">Rp69.750</span>
              <span className="sticky-old-price">Rp93.000</span>
              <span className="sticky-discount">25%</span>
            </div>
          </div>
        </div>
        <button className="sticky-cart-btn" onClick={() => setCartCount(cartCount + 1)}>
          <span className="cart-icon">+ Keranjang</span>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </button>
      </div>
    </div>
  )
}
