// Global variables
let productsData = [];
const categories = [
  { id: 'gifts', name: 'Offers & Gifts', icon: 'gift' },
  { id: 'personal', name: 'Personal Care', icon: 'user-check' },
  { id: 'detergent', name: 'Detergent', icon: 'tint' },
  { id: 'oral', name: 'Oral Care', icon: 'tooth' },
  { id: 'snack', name: 'Snacks', icon: 'cookie-bite' },
  { id: 'shampoo', name: 'Shampoo', icon: 'pump-soap' },
  { id: 'frozen', name: 'Frozen Food', icon: 'ice-cream' },
  { id: 'cosmetics', name: 'Cosmetics', icon: 'hand-sparkles' },
  { id: 'breakfast', name: 'Breakfast Items', icon: 'coffee' }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  // Initialize audio
  initAudio();
  
  // Load categories
  loadCategories();
  
  // Load product data from jsdelivr CDN
  fetch('https://cdn.jsdelivr.net/gh/rumim/Hut-Bazar@main/products.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      productsData = data;
      filterProducts('gifts'); // Default category
    })
    .catch(error => {
      console.error('Error loading products:', error);
      // Fallback to hardcoded data if fetch fails
      loadFallbackData();
      filterProducts('gifts');
    });
    
  // Initialize search functionality
  initializeSearch();
  
  // Initialize modal functionality
  initializeModal();
});

// Load fallback data if JSON fetch fails
function loadFallbackData() {
  productsData = [
    {
      "category": "gifts",
      "imgSrc": "https://i.postimg.cc/XvCm6x86/uni-wash-detergent-powder-bucket-free-2kg.jpg",
      "alt": "Uni Wash",
      "name": "Uni Wash Detergent Powder (Bucket Free) – 2kg",
      "price": "385.00",
      "description": "Matic Detergent Powder effectively targets tough stains with powerful cleaning action.<br><strong>Category:</strong> Washing<br><strong>Tags:</strong> Detergent, Unilever"
    },
    {
      "category": "personal",
      "imgSrc": "https://i.postimg.cc/BngtydW9/Cera-Ve-Baby-Moisturizing-Cream-Fragrance-Free-3606000582859.avif",
      "alt": "CeraVe",
      "name": "CeraVe Baby Moisturizing Cream Fragrance Free - 226g",
      "price": "2650.00",
      "description": "CeraVe Baby Moisturizing Cream is free of fragrance, paraben, dye and phthalates...<br><strong>Category:</strong> Skin Care<br><strong>Tags:</strong> Skin Care, Cream, CeraVe"
    },
    {
      "category": "detergent",
      "imgSrc": "https://i.postimg.cc/MZP4hQxY/surf-excel-matic-top-load-detergent-liquid-500ml-paikaree.webp",
      "alt": "Surf Excel",
      "name": "Surf Excel Matic Top Load Detergent Liquid - 500ml",
      "price": "1080.00",
      "description": "Matic Liquid Detergent effectively targets tough stains with powerful cleaning action.<br><strong>Category:</strong> Washing<br><strong>Tags:</strong> Detergent, Liquid Detergent"
    },
    {
      "category": "cosmetics",
      "imgSrc": "https://i.postimg.cc/P5s28Znd/Essence-Lash-Princess-Mascara-1.webp",
      "alt": "Essence",
      "name": "Essence Lash Princess Mascara All Flavor 12ml",
      "price": "850.00",
      "description": "Essence Lash Princess Mascara is a beloved mascara known for its volumizing and lengthening effects on the lashes.<br><strong>Category:</strong> Cosmetic<br><strong>Tags:</strong> Cosmetics, Essence"
    }
  ];
}

// Load categories into sidebar
function loadCategories() {
  const categoryList = document.getElementById('categoryList');
  if (!categoryList) return;
  
  categoryList.innerHTML = ''; // Clear existing content
  
  categories.forEach(category => {
    const li = document.createElement('li');
    li.innerHTML = `<i class="fas fa-${category.icon}"></i> ${category.name}`;
    li.setAttribute('data-category', category.id);
    li.onclick = () => filterProducts(category.id);
    if (category.id === 'gifts') li.classList.add('active');
    categoryList.appendChild(li);
  });
}

// Filter products by category
function filterProducts(category) {
  const container = document.getElementById('productsContainer');
  if (!container) return;
  
  container.innerHTML = '';
  
  // Update active category
  document.querySelectorAll('#categoryList li').forEach(li => {
    li.classList.remove('active');
  });
  
  // Find and activate the clicked category
  const activeCategory = document.querySelector(`#categoryList li[data-category="${category}"]`);
  if (activeCategory) {
    activeCategory.classList.add('active');
  }
  
  const filteredProducts = productsData.filter(product => product.category === category);
  
  if (filteredProducts.length === 0) {
    container.innerHTML = '<p class="no-results" style="display: block; color: white; text-align: center; font-size: 1.2rem; margin: 20px 0;">No products found in this category.</p>';
    return;
  }
  
  filteredProducts.forEach((product, index) => {
    const productElement = document.createElement('div');
    productElement.className = 'product';
    productElement.setAttribute('data-category', product.category);
    
    productElement.innerHTML = `
      <img src="${product.imgSrc}" alt="${product.alt}" onclick="openModal(this)">
      <p>${product.name}</p>
      <div class="price"><i class="fas fa-tag"></i> ৳${product.price}</div>
      <div class="description">${product.description}</div>
      <div class="product-actions">
        <a href="https://wa.me/+8801715141616" target="_blank" class="whatsapp-btn">
          <i class="fab fa-whatsapp"></i> WhatsApp
        </a>
        <a href="https://m.me/hutbazarsupershop" target="_blank" class="messenger-btn">
          <i class="fab fa-facebook-messenger"></i> Messenger
        </a>
      </div>
    `;
    
    container.appendChild(productElement);
    
    // Add fade-in animation with delay
    setTimeout(() => {
      productElement.classList.add('fade-in');
    }, index * 100);
  });
}

// Image modal functionality
function openModal(imgElement) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("expandedImg");
  if (modal && modalImg) {
    modal.style.display = "flex";
    modalImg.src = imgElement.src;
    modalImg.alt = imgElement.alt;
    document.body.style.overflow = "hidden";
  }
}

// Close modal function
function closeModal() {
  const modal = document.getElementById("imageModal");
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

// Initialize modal functionality
function initializeModal() {
  // Close modal when clicking the X button
  const closeBtn = document.querySelector(".close");
  if (closeBtn) {
    closeBtn.onclick = closeModal;
  }
  
  // Close modal when clicking outside the image
  window.onclick = function(event) {
    const modal = document.getElementById("imageModal");
    if (event.target === modal) {
      closeModal();
    }
  }
  
  // Close modal with Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
}

// Initialize audio
function initAudio() {
  const audio = document.getElementById('backgroundAudio');
  if (audio) {
    audio.volume = 0.3;
    
    // Try to play audio
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log('Auto-play prevented, waiting for user interaction');
        // Enable audio on user interaction
        const enableAudio = () => {
          audio.play().catch(e => console.log('Audio play failed:', e));
          document.removeEventListener('click', enableAudio);
          document.removeEventListener('touchstart', enableAudio);
        };
        document.addEventListener('click', enableAudio);
        document.addEventListener('touchstart', enableAudio);
      });
    }
  }
}

// Initialize search functionality
function initializeSearch() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase().trim();
      performSearch(searchTerm);
    });
    
    // Clear search on escape
    searchInput.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        this.value = '';
        performSearch('');
      }
    });
  }
}

// Search functionality
function performSearch(searchTerm) {
  const allProducts = document.querySelectorAll('.product');
  const noResults = document.querySelector('.no-results');
  let hasResults = false;
  
  if (searchTerm === '') {
    // Show all products if search is empty
    allProducts.forEach(product => {
      product.style.display = 'flex';
      hasResults = true;
    });
  } else {
    allProducts.forEach(product => {
      const productName = product.querySelector('p')?.textContent?.toLowerCase() || '';
      const productDesc = product.querySelector('.description')?.textContent?.toLowerCase() || '';
      
      if (productName.includes(searchTerm) || productDesc.includes(searchTerm)) {
        product.style.display = 'flex';
        hasResults = true;
      } else {
        product.style.display = 'none';
      }
    });
  }
  
  // Show/hide no results message
  if (noResults) {
    noResults.style.display = hasResults ? 'none' : 'block';
  }
}

// Utility function to show loading state
function showLoading() {
  const container = document.getElementById('productsContainer');
  if (container) {
    container.innerHTML = `
      <div style="text-align: center; color: white; font-size: 1.2rem; width: 100%; grid-column: 1 / -1;">
        <i class="fas fa-spinner fa-spin" style="font-size: 2rem; margin-bottom: 10px;"></i>
        <p>Loading products...</p>
      </div>
    `;
  }
}

// Utility function to handle errors
function showError(message) {
  const container = document.getElementById('productsContainer');
  if (container) {
    container.innerHTML = `
      <div style="text-align: center; color: #ff6b6b; font-size: 1.2rem; width: 100%; grid-column: 1 / -1;">
        <i class="fas fa-exclamation-triangle" style="font-size: 2rem; margin-bottom: 10px;"></i>
        <p>${message}</p>
        <p style="font-size: 1rem; margin-top: 10px;">Please try refreshing the page.</p>
      </div>
    `;
  }
}

// Export functions for global access (if needed)
window.filterProducts = filterProducts;
window.openModal = openModal;
window.closeModal = closeModal;
