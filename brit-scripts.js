document.addEventListener('DOMContentLoaded', function() {
    const britCareContainer = document.getElementById('brit-care-container');
    const currentPath = window.location.pathname;
    
    if (currentPath === '/brit-care') {
        britCareContainer.style.display = 'block';
    } else {
        britCareContainer.style.display = 'none';
    }
});

// Kategori değiştirme fonksiyonu
function changeCategory(category) {
    const catBtn = document.querySelector('.brit-btn-cat');
    const dogBtn = document.querySelector('.brit-btn-dog');
    const catSlider = document.getElementById('catSlider');
    const dogSlider = document.getElementById('dogSlider');

    if (category === 'cat') {
        catBtn.classList.add('active');
        dogBtn.classList.remove('active');
        catSlider.style.display = 'flex';
        dogSlider.style.display = 'none';
        // Gastrointestinal ürününü göster
        showProductDetails('gastrointestinal');
    } else {
        dogBtn.classList.add('active');
        catBtn.classList.remove('active');
        dogSlider.style.display = 'flex';
        catSlider.style.display = 'none';
        // Diabetes ürününü göster
        showProductDetails('diabetes');
    }
}

// Ürün detaylarını gösterme fonksiyonu
function showProductDetails(productId) {
    const allProducts = document.querySelectorAll('.brit-product-info');
    const allCards = document.querySelectorAll('.brit-product-card');
    
    // Tüm kartların active sınıfını kaldır
    allCards.forEach(card => {
        card.classList.remove('active');
        if (card.getAttribute('data-product') === productId) {
            card.classList.add('active');
        }
    });
    
    // Ürün detaylarını göster/gizle
    allProducts.forEach(product => {
        if (product.id === productId) {
            product.style.display = 'block';
            product.classList.add('active');
            product.style.animation = 'fadeInUp 0.5s ease forwards';
        } else {
            product.style.display = 'none';
            product.classList.remove('active');
        }
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    const catSlider = document.getElementById('catSlider');
    const dogSlider = document.getElementById('dogSlider');
    
    // Her slider için ayrı container oluştur
    const catContainer = document.createElement('div');
    catContainer.className = 'brit-slider-container';
    catSlider.parentNode.insertBefore(catContainer, catSlider);
    catContainer.appendChild(catSlider);
    
    const dogContainer = document.createElement('div');
    dogContainer.className = 'brit-slider-container';
    dogSlider.parentNode.insertBefore(dogContainer, dogSlider);
    dogContainer.appendChild(dogSlider);
    
    // Her container için navigasyon ekle
    [catContainer, dogContainer].forEach(container => {
        const navigation = document.createElement('div');
        navigation.className = 'brit-slider-navigation';
        
        const prevArrow = document.createElement('button');
        prevArrow.className = 'brit-slider-arrow brit-prev-arrow';
        prevArrow.innerHTML = '<i class="fas fa-chevron-left"></i>';
        
        const nextArrow = document.createElement('button');
        nextArrow.className = 'brit-slider-arrow brit-next-arrow';
        nextArrow.innerHTML = '<i class="fas fa-chevron-right"></i>';
        
        navigation.appendChild(prevArrow);
        navigation.appendChild(nextArrow);
        container.appendChild(navigation);
    });
    
    const prevArrows = document.querySelectorAll('.brit-prev-arrow');
    const nextArrows = document.querySelectorAll('.brit-next-arrow');
    
    // Her slider için ayrı currentSlide değişkeni
    let sliderStates = {
        catSlider: 0,
        dogSlider: 0
    };
    
    function getSlideCount() {
        const width = window.innerWidth;
        if (width <= 768) {
            return 2; // Mobil için 2 ürün
        } else if (width <= 992) {
            return 3; // Tablet için 3 ürün
        } else {
            return 4; // Masaüstü için 4 ürün
        }
    }
    
    function updateSliderPosition(slider) {
        if (!slider) return;
        
        const sliderId = slider.id;
        // Element'in boyutlarını doğru hesaplamak için getBoundingClientRect() kullanıyoruz
        const cardWidth = slider.children.length > 0 ? slider.children[0].getBoundingClientRect().width : 0;
        // CSS'teki gap değerini script.js'de de kullanıyoruz
        const gap = 20;
        const slidesToShow = getSlideCount();
        const maxSlides = Math.max(0, slider.children.length - slidesToShow);
        
        // Geçerli slide'ı sınırlar içinde tut
        sliderStates[sliderId] = Math.min(Math.max(sliderStates[sliderId], 0), maxSlides);
        
        // Transform değerini hesapla
        const offset = sliderStates[sliderId] * (cardWidth + gap);
        
        // Debug için konsola bilgi yazdırma
        console.log(`Slider: ${sliderId}, Card Width: ${cardWidth}, Gap: ${gap}, Offset: ${offset}`);
        
        slider.style.transform = `translateX(-${offset}px)`;
    }
    
    function showSlide(direction, slider) {
        if (!slider) return;
        
        const sliderId = slider.id;
        const slidesToShow = getSlideCount();
        const maxSlides = slider.children.length - slidesToShow;
        
        if (direction === 'next') {
            sliderStates[sliderId] = sliderStates[sliderId] >= maxSlides ? 0 : sliderStates[sliderId] + 1;
        } else {
            sliderStates[sliderId] = sliderStates[sliderId] <= 0 ? maxSlides : sliderStates[sliderId] - 1;
        }
        
        updateSliderPosition(slider);
    }
    
    // Resize olayını debounce fonksiyonu
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Pencere boyutu değiştiğinde slider'ı güncelle
    window.addEventListener('resize', debounce(() => {
        const activeSlider = document.querySelector('.brit-slider:not([style*="display: none"])');
        if (activeSlider) {
            sliderStates[activeSlider.id] = 0;
            updateSliderPosition(activeSlider);
        }
    }, 250));
    
    // Ok butonlarına tıklama olayları
    prevArrows.forEach(arrow => {
        arrow.addEventListener('click', function(e) {
            e.preventDefault();
            const slider = arrow.closest('.brit-slider-container').querySelector('.brit-slider');
            console.log('Prev button clicked for slider:', slider.id);
            showSlide('prev', slider);
        });
    });
    
    nextArrows.forEach(arrow => {
        arrow.addEventListener('click', function(e) {
            e.preventDefault();
            const slider = arrow.closest('.brit-slider-container').querySelector('.brit-slider');
            console.log('Next button clicked for slider:', slider.id);
            showSlide('next', slider);
        });
    });
    
    const catButton = document.querySelector('.brit-btn-cat');
    const dogButton = document.querySelector('.brit-btn-dog');
    
    function updateActiveSlider(activeContainer, inactiveContainer) {
        // Slider durumlarını sıfırla
        const activeSlider = activeContainer.querySelector('.brit-slider');
        if (activeSlider && activeSlider.id) {
            sliderStates[activeSlider.id] = 0;
        }
        
        activeContainer.style.display = 'block';
        inactiveContainer.style.display = 'none';
        
        if (activeSlider) {
            activeSlider.style.display = 'flex';
            // Slider pozisyonunu güncelle
            setTimeout(() => {
                updateSliderPosition(activeSlider);
            }, 50);
        }
    }
    
    catButton.addEventListener('click', function() {
        updateActiveSlider(catContainer, dogContainer);
        catButton.classList.add('active');
        dogButton.classList.remove('active');
        
        const firstCatProduct = catSlider.querySelector('.brit-product-card');
        if (firstCatProduct) {
            const productId = firstCatProduct.getAttribute('data-product');
            showProductDetails(productId);
        }
    });
    
    dogButton.addEventListener('click', function() {
        updateActiveSlider(dogContainer, catContainer);
        dogButton.classList.add('active');
        catButton.classList.remove('active');
        
        const firstDogProduct = dogSlider.querySelector('.brit-product-card');
        if (firstDogProduct) {
            const productId = firstDogProduct.getAttribute('data-product');
            showProductDetails(productId);
        }
    });
    
    const productCards = document.querySelectorAll('.brit-product-card');
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            const productId = this.getAttribute('data-product');
            showProductDetails(productId);
        });
    });
    
    // Sayfa yüklendiğinde ilk slider'ı göster
    updateActiveSlider(catContainer, dogContainer);
    catButton.classList.add('active');
    
    // İlk sayfa yüklendiğinde sadece ürünü aktif et, ancak otomatik olarak kaydırma yapma
    const firstProduct = catSlider.querySelector('.brit-product-card');
    if (firstProduct) {
        firstProduct.classList.add('active');
        const productId = firstProduct.getAttribute('data-product');
        const product = document.getElementById(productId);
        if (product) {
            product.style.display = 'block';
            product.classList.add('active');
            product.style.animation = 'fadeInUp 0.5s ease forwards';
        }
    }

    // Accordion fonksiyonu
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', function() {
            // Aktif olan accordion'ı kapat
            const currentlyActive = document.querySelector('.accordion-item.active');
            if (currentlyActive && currentlyActive !== item) {
                currentlyActive.classList.remove('active');
            }
            
            // Tıklanan accordion'ı aç/kapat
            item.classList.toggle('active');
        });
    });
    
    // İlk accordion'ı açık olarak göster
    if (accordionItems.length > 0) {
        accordionItems[0].classList.add('active');
    }
});

// Pencere yüklendiğinde ve boyutu değiştiğinde tüm slider pozisyonlarını sıfırla
window.addEventListener('load', function() {
    // Tüm sliderları kontrol et ve pozisyonlarını sıfırla
    const allSliders = document.querySelectorAll('.brit-slider');
    allSliders.forEach(slider => {
        if (slider.id) {
            sliderStates[slider.id] = 0;
            updateSliderPosition(slider);
        }
    });
}); 
