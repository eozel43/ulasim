// Kütahya Belediyesi Ulaşım Hizmetleri - Ana Sayfa JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Türkçe tarih formatı
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const now = new Date();
        
        // Türkçe ay isimleri
        const aylar = [
            'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
            'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
        ];
        
        // Türkçe gün isimleri
        const gunler = [
            'Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'
        ];
        
        const gun = gunler[now.getDay()];
        const ay = aylar[now.getMonth()];
        const yil = now.getFullYear();
        const gunNumara = now.getDate();
        
        dateElement.textContent = `${gun}, ${gunNumara} ${ay} ${yil}`;
    }
});
