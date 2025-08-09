// Product data and categories
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

let productsData = [];

// DOM Elements
const sidebarContainer = document.getElementById('sidebarContainer');
const productsContainer = document.getElementById('productsContainer');
const searchInput = document.getElementById('searchInput');
const noResultsMessage = document.querySelector('.no-results');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  // Initialize audio
  const audio = document.getElementById('backgroundAudio');
  audio.volume = 0.3;
  audio.play().catch(e => {
    // Audio autoplay blocked, will play on user interaction
    document.addEventListener('click', function enableAudio() {
      audio.play();
      document.removeEventListener('click', enableAudio);
    });
  });

  // Create sidebar
  createSidebar();
  
  // Load products
  loadProducts();
  
  // Initialize search
  searchInput.addEventListener('input', handleSearch);
});

// Create sidebar with categories
function createSidebar() {
  let sidebarHTML = '<h3><i class="fas fa-list"></i> Categories</h3><ul>';
  
  categories.forEach(category => {
    sidebarHTML += `
      <li onclick="filterProducts('${category.id}')" ${category.id === 'gifts' ? 'class="active"' : ''}>
        <i class="fas fa-${category.icon}"></i> ${category.name}
      </li>
    `;
  });
  
  sidebarHTML += '</ul>';
  sidebarContainer.innerHTML = sidebarHTML;
}

// Load products from JSON
function loadProducts() {
  fetch('https://raw.githubusercontent.com/rumim/Hut-Bazar/main/products.json')
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(data => {
      productsData = data;
      filterProducts('gifts'); // Show default category
    })
    .catch(error => {
      console.error('Error loading products:', error);
      productsContainer.innerHTML = `
        <div class="no-products-loaded">
          <p>Failed to load products. Please refresh the page or try again later.</p>
          <p>${error.message}</p>
        </div>
      `;
    });
}

// Filter products by category
function filterProducts(category) {
  // Update active category in sidebar
  document.querySelectorAll('#sidebarContainer li').forEach(li => {
    li.classList.remove('active');
    if (li.getAttribute('onclick').includes(category)) {
      li.classList.add('active');
    }
  });

  // Clear search
  searchInput.value = '';
  noResultsMessage.style.display = 'none';

  // Filter products
  const filteredProducts = productsData.filter(product => product.category === category);
  displayProducts(filteredProducts);
}

// Display products in the container
function displayProducts(products) {
  if (products.length === 0) {
    productsContainer.innerHTML = '<p class="no-results">No products found in this category.</p>';
    return;
  }

  let productsHTML = '';
  products.forEach(product => {
    productsHTML += `
      <div class="product fade-in" data-category="${product.category}">
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
      </div>
    `;
  });

  productsContainer.innerHTML = productsHTML;
  
  // Add fade-in animation
  setTimeout(() => {
    document.querySelectorAll('.product').forEach((product, index) => {
      product.style.animationDelay = `${index * 0.1}s`;
      product.style.opacity = '1';
    });
  }, 50);
}

// Handle search functionality
function handleSearch() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  
  if (searchTerm === '') {
    const activeCategory = document.querySelector('#sidebarContainer li.active');
    if (activeCategory) {
      const category = activeCategory.getAttribute('onclick').match(/'([^']+)'/)[1];
      filterProducts(category);
    }
    return;
  }

  const filteredProducts = productsData.filter(product => {
    const productName = product.name.toLowerCase();
    const productDesc = product.description.toLowerCase();
    return productName.includes(searchTerm) || productDesc.includes(searchTerm);
  });

  if (filteredProducts.length === 0) {
    noResultsMessage.style.display = 'block';
    productsContainer.innerHTML = '';
  } else {
    noResultsMessage.style.display = 'none';
    displayProducts(filteredProducts);
  }
}

// Image modal functionality
function openModal(imgElement) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("expandedImg");
  modal.style.display = "flex";
  modalImg.src = imgElement.src;
  modalImg.alt = imgElement.alt;
  document.body.style.overflow = "hidden";
}

// Close modal
document.querySelector(".close").addEventListener('click', function() {
  document.getElementById("imageModal").style.display = "none";
  document.body.style.overflow = "auto";
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
  const modal = document.getElementById("imageModal");
  if (event.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
  const modal = document.getElementById("imageModal");
  if (event.key === "Escape" && modal.style.display === "flex") {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});
