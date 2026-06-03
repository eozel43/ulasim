# Kütahya Belediyesi Ulaşım Hizmetleri Giriş Sayfası Tasarım Dokümanı

## 1. Genel Bakış

Bu doküman, Kütahya Belediyesi Ulaşım Hizmetleri Müdürlüğü için hazırlanan 3 farklı uygulamaya erişim sağlayan ana giriş sayfasının tasarım spesifikasyonunu içermektedir.

**Proje Amacı:**
- Varakalar (Halk Otobüsü ceza dashboard'ı)
- Halk Otobüsleri Binişleri (Biniş istatistikleri)
- Eşel Mobil (Benzin/asgari ücret/TÜFE artışlarına göre zam hesaplama)

Bu üç uygulamaya tek bir ana sayfa üzerinden erişim sağlamak.

---

## 2. Tasarım Kararı

**Seçilen Yaklaşım: Modern Kart Yapısı**

**Gerekçe:**
- Üç farklı uygulama için görsel olarak net ayrım sağlar
- Kullanıcılar hangi modüle gideceklerini hemen anlar
- Mobil cihazlarda kullanışlı
- Hover efektleri ile modern bir his verir

---

## 3. Teknik Spesifikasyon

### 3.1 Teknoloji Stack
- **Framework:** Pure HTML5 + CSS3 + Vanilla JavaScript
- **CSS Framework:** TailwindCSS (CDN üzerinden)
- **İkonlar:** Font Awesome (CDN üzerinden)
- **Font:** Google Fonts - Poppins (Türkçe destekli)

### 3.2 Renk Paleti
| Renk Adı | Hex Kodu | Kullanım Alanı |
|----------|----------|----------------|
| Primary Yeşil | #1D4E2C | Ana butonlar, vurgular |
| Primary Açık | #2D7A44 | Hover durumları |
| Arka Plan | #F8FAF9 | Sayfa arka planı |
| Kart Beyaz | #FFFFFF | Kart arka planı |
| Text Primary | #1F2937 | Ana metin |
| Text Secondary | #6B7280 | İkincil metin |
| Accent Gold | #D4A853 | Vurgu renkleri |

### 3.3 Tipografi
- **Başlık Fontu:** Poppins, 700 (Bold)
- **Gövde Fontu:** Poppins, 400 (Regular)
- **Boyutlar:**
  - Hero Başlık: 48px
  - Kart Başlık: 24px
  - Kart Açıklama: 16px
  - Footer: 14px

### 3.4 Layout Yapısı

```
┌─────────────────────────────────────────┐
│              HEADER                     │
│  [Logo] Kütahya Belediyesi    [Tarih]  │
├─────────────────────────────────────────┤
│              HERO SECTION               │
│     "Ulaşım Hizmetleri Müdürlüğü"       │
│      "Dijital Yönetim Paneli"           │
├─────────────────────────────────────────┤
│            CARD GRID (3 Kolon)           │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐   │
│  │ VARAKA  │ │ BİNİŞ   │ │ EŞEL    │   │
│  │   🚐    │ │   🚌    │ │   ⛽    │   │
│  │  Detay  │ │  Detay  │ │  Detay  │   │
│  └─────────┘ └─────────┘ └─────────┘   │
├─────────────────────────────────────────┤
│              FOOTER                      │
│    © 2026 Kütahya Belediyesi            │
└─────────────────────────────────────────┘
```

### 3.5 Bileşen Detayları

#### Header Bileşeni
- Sol: Belediye logosu (placeholder) + "Kütahya Belediyesi Ulaşım Hizmetleri Müdürlüğü"
- Sağ: Güncel tarih (Türkçe format)
- Arka plan: Beyaz, alt border: 1px solid #E5E7EB
- Height: 70px

#### Hero Section
- Arka plan: Linear gradient (#1D4E2C → #2D7A44)
- Başlık: "Ulaşım Hizmetleri Müdürlüğü" (beyaz, 48px)
- Alt başlık: "Dijital Yönetim Paneli" (beyaz %80 opak, 20px)
- Padding: 80px yukarı/aşağı

#### Kart Bileşenleri (3 adet)
- Boyut: min 300px genişlik, esnek
- Padding: 32px
- Border radius: 16px
- Arka plan: Beyaz (#FFFFFF)
- Box shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
- Hover: translateY(-8px), shadow artışı

**Kart 1: Varakalar**
- İkon: Font Awesome "file-invoice" (fa-file-invoice-dollar)
- Başlık: "Varakalar"
- Açıklama: "Halk Otobüslerine kesilen cezalara ait dashboard"
- Renk vurgusu: Kırmızı (#DC2626)

**Kart 2: Halk Otobüsleri Binişleri**
- İkon: Font Awesome "users" (fa-users)
- Başlık: "Halk Otobüsleri Binişleri"
- Açıklama: "Yıllara, aylara, biniş türlerine, ücret ve hatlara göre detaylı istatistikler"
- Renk vurgusu: Mavi (#2563EB)

**Kart 3: Eşel Mobil**
- İkon: Font Awesome "gas-pump" (fa-gas-pump)
- Başlık: "Eşel Mobil"
- Açıklama: "Benzin, asgari ücret ve TÜFE artışlarına göre zam hesaplama"
- Renk vurgusu: Turuncu (#D97706)

#### Footer Bileşeni
- Arka plan: #1F2937 (koyu gri)
- Metin: "© 2026 Kütahya Belediyesi - Tüm hakları saklıdır."
- Text color: Beyaz %70
- Padding: 24px

---

## 4. Fonksiyonellik

### 4.1 Navigasyon
- Her kart tıklandığında ilgili harici siteye yönlendirme
- Linkler: `varakalar.html`, `binisler.html`, `eselmobil.html` (placeholder)
- Target: `_self` (aynı sekimde açılır)

### 4.2 Etkileşimler
- Kart hover: Yukarı doğru animasyon (8px), gölge artışı
- Buton hover: Renk koyulaşması, scale(1.02)
- Link hover: Alt çizgi animasyonu

### 4.3 Responsive Davranış
| Ekran Genişliği | Kart Düzeni |
|-----------------|-------------|
| > 1024px | 3 kolon (yan yana) |
| 768px - 1024px | 2 kolon + 1 alt satır |
| < 768px | Tek kolon (dikey) |

### 4.4 Tarayıcı Desteği
- Chrome (son 2 versiyon)
- Firefox (son 2 versiyon)
- Safari (son 2 versiyon)
- Edge (son 2 versiyon)

---

## 5. Erişilebilirlik

- WCAG 2.1 AA standartlarına uyum
- Tüm görsel öğeler için `alt` etiketi
- Renk kontrast oranı minimum 4.5:1
- Klavye navigasyonu destekli
- Focus durumları görünür

---

## 6. Dosya Yapısı

```
project/
├── index.html          # Ana giriş sayfası
├── css/
│   └── styles.css      # Özel stiller
├── js/
│   └── main.js         # JavaScript dosyası
└── assets/
    └── (görseller)
```

---

## 7. Sonraki Adımlar

1. HTML yapısının oluşturulması
2. CSS stillerinin uygulanması
3. JavaScript etkileşimlerinin eklenmesi
4. Responsive testlerin yapılması
5. Tarayıcı uyumluluk testleri

---

**Doküman Tarihi:** 2026-04-03
**Versiyon:** 1.0
**Durum:** Taslak - Kullanıcı Onayı Bekleniyor
