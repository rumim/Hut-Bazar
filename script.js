// Global variables
let productsData = [];
let currentCategory = 'gifts';
let isSearchActive = false;

// Categories configuration
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

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing...');
  
  // Initialize audio
  initAudio();
  
  // Setup category click handlers
  setupCategoryHandlers();
  
  // Setup search functionality
  setupSearch();
  
  // Setup modal functionality
  setupModal();
  
  // Load products data
  loadProducts();
});

// Load products from GitHub
function loadProducts() {
  console.log('Loading products...');
  
  // Try jsDelivr CDN first
  fetchProducts('https://cdn.jsdelivr.net/gh/rumim/Hut-Bazar@main/products.json')
    .then(data => {
      productsData = data;
      console.log('Products loaded via jsDelivr:', productsData.length, 'items');
      filterProducts(currentCategory);
    })
    .catch(error => {
      console.log('jsDelivr failed, trying raw GitHub...', error);
      
      // Fallback to raw GitHub
      fetchProducts('https://raw.githubusercontent.com/rumim/Hut-Bazar/refs/heads/main/products.json')
        .then(data => {
          productsData = data;
          console.log('Products loaded via raw GitHub:', productsData.length, 'items');
          filterProducts(currentCategory);
        })
        .catch(error => {
          console.error('All product loading methods failed:', error);
          showErrorMessage('Failed to load products. Please refresh the page.');
        });
    });
}

// Fetch products from URL
function fetchProducts(url) {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (!Array.isArray(data) || data.length === 0) {
        throw new Error('Invalid or empty product data');
      }
      return data;
    });
}

// Setup category click handlers
function setupCategoryHandlers() {
  const categoryItems = document.querySelectorAll('#categoryList li');
  categoryItems.forEach(item => {
    item.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      if (category) {
        filterProducts(category);
      }
    });
  });
}

// Setup search functionality
function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase().trim();
      performSearch(searchTerm);
    });
  }
}

// Setup modal functionality
function setupModal() {
  const modal = document.getElementById('imageModal');
  const closeBtn = document.querySelector('.close');
  
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }
  
  if (modal) {
    modal.addEventListener('click', function(event) {
      if (event.target === modal) {
        closeModal();
      }
    });
  }
  
  // Close modal with Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
}

// Filter products by category
function filterProducts(category) {
  console.log('Filtering products for category:', category);
  
  if (productsData.length === 0) {
    console.log('No products data available yet');
    return;
  }
  
  currentCategory = category;
  isSearchActive = false;
  
  // Clear search input
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.value = '';
  }
  
  // Update active category in sidebar
  updateActiveCategory(category);
  
  // Filter and display products
  const filteredProducts = productsData.filter(product => product.category === category);
  displayProducts(filteredProducts, `${getCategoryName(category)} Products`);
}

// Get category name by ID
function getCategoryName(categoryId) {
  const category = categories.find(cat => cat.id === categoryId);
  return category ? category.name : categoryId.charAt(0).toUpperCase() + categoryId.slice(1);
}

// Update active category in sidebar
function updateActiveCategory(category) {
  const categoryItems = document.querySelectorAll('#categoryList li');
  categoryItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('data-category') === category) {
      item.classList.add('active');
    }
  });
}

// Perform search across all products
function performSearch(searchTerm) {
  if (!searchTerm) {
    // If search is empty, return to current category
    if (!isSearchActive) {
      return;
    }
    isSearchActive = false;
    filterProducts(currentCategory);
    return;
  }
  
  isSearchActive = true;
  
  const searchResults = productsData.filter(product => {
    const name = product.name.toLowerCase();
    const description = product.description.toLowerCase();
    const category = product.category.toLowerCase();
    
    return name.includes(searchTerm) || 
           description.includes(searchTerm) || 
           category.includes(searchTerm);
  });
  
  displayProducts(searchResults, `Search Results for "${searchTerm}"`);
  
  // Update no results message
  const noResults = document.querySelector('.no-results');
  if (noResults) {
    noResults.style.display = searchResults.length === 0 ? 'block' : 'none';
  }
}

// Display products in the container
function displayProducts(products, title = '') {
  const container = document.getElementById('productsContainer');
  
  if (!container) {
    console.error('Products container not found');
    return;
  }
  
  // Clear container
  container.innerHTML = '';
  
  if (products.length === 0) {
    container.innerHTML = `
      <div class="no-products-message">
        <i class="fas fa-box-open"></i>
        <h3>No products found</h3>
        <p>Try searching for something else or browse other categories.</p>
      </div>
    `;
    return;
  }
  
  // Create and display products
  products.forEach((product, index) => {
    const productElement = createProductElement(product);
    container.appendChild(productElement);
    
    // Add staggered fade-in animation
    setTimeout(() => {
      productElement.classList.add('fade-in');
    }, index * 100);
  });
  
  console.log(`Displayed ${products.length} products`);
}

// Create a product element
function createProductElement(product) {
  const productDiv = document.createElement('div');
  productDiv.className = 'product';
  productDiv.setAttribute('data-category', product.category);
  
  productDiv.innerHTML = `
    <img src="${product.imgSrc}" 
         alt="${product.alt}" 
         onclick="openModal('${product.imgSrc}', '${product.alt}')"
         onerror="this.src='https://via.placeholder.com/300x200?text=Image+Not+Found'">
    <p>${product.name}</p>
    <div class="price">
      <i class="fas fa-tag"></i> ৳${product.price}
    </div>
    <div class="description">${product.description}</div>
    <div class="product-actions">
      <a href="https://wa.me/+8801715141616?text=Hi, I'm interested in ${encodeURIComponent(product.name)} - Price: ৳${product.price}" 
         target="_blank" 
         class="whatsapp-btn">
        <i class="fab fa-whatsapp"></i> WhatsApp
      </a>
      <a href="https://m.me/hutbazarsupershop" 
         target="_blank" 
         class="messenger-btn">
        <i class="fab fa-facebook-messenger"></i> Messenger
      </a>
    </div>
  `;
  
  return productDiv;
}

// Open image modal
function openModal(imgSrc, imgAlt) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('expandedImg');
  
  if (modal && modalImg) {
    modal.style.display = 'flex';
    modalImg.src = imgSrc;
    modalImg.alt = imgAlt || '';
    document.body.style.overflow = 'hidden';
  }
}

// Close modal
function closeModal() {
  const modal = document.getElementById('imageModal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

// Initialize audio
function initAudio() {
  const audio = document.getElementById('backgroundAudio');
  if (audio) {
    audio.volume = 0.3;
    
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log('Auto-play prevented, waiting for user interaction');
        
        // Enable audio on first user interaction
        const enableAudio = () => {
          audio.play().catch(e => console.log('Audio play failed:', e));
          document.removeEventListener('click', enableAudio);
          document.removeEventListener('touchstart', enableAudio);
          document.removeEventListener('keydown', enableAudio);
        };
        
        document.addEventListener('click', enableAudio);
        document.addEventListener('touchstart', enableAudio);
        document.addEventListener('keydown', enableAudio);
      });
    }
  }
}

// Show error message
function showErrorMessage(message) {
  const container = document.getElementById('productsContainer');
  if (container) {
    container.innerHTML = `
      <div class="error-message">
        <i class="fas fa-exclamation-triangle"></i>
        <h3>Error</h3>
        <p>${message}</p>
        <button onclick="location.reload()" class="retry-btn">
          <i class="fas fa-refresh"></i> Retry
        </button>
      </div>
    `;
  }
}

// Legacy function for backward compatibility
window.filterProducts = filterProducts;
window.openModal = openModal;

console.log('Hut Bazar script loaded successfully');
/* Hut Bazar Super Shop CSS */
/* Reset and Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  line-height: 1.6;
  position: relative;
}

/* Background Effects */
.bg-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%);
  z-index: -1;
  animation: floatBg 20s ease-in-out infinite;
}

@keyframes floatBg {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(1deg); }
}

.floating-elements {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.floating-elements::before,
.floating-elements::after {
  content: '✨';
  position: absolute;
  color: rgba(255, 255, 255, 0.6);
  font-size: 20px;
  animation: float 6s ease-in-out infinite;
}

.floating-elements::before {
  top: 20%;
  left: 10%;
  animation-delay: -2s;
}

.floating-elements::after {
  top: 70%;
  right: 15%;
  animation-delay: -4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

/* Header Styles */
header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 30px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

header::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  position: relative;
  z-index: 2;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  animation: glow 3s ease-in-out infinite alternate;
}

@keyframes glow {
  from { text-shadow: 2px 2px 4px rgba(0,0,0,0.3), 0 0 10px rgba(255,255,255,0.2); }
  to { text-shadow: 2px 2px 4px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.4); }
}

header p {
  position: relative;
  z-index: 2;
  font-size: 1.1rem;
  margin: 5px 0;
}

/* Marquee Styles */
.marquee {
  background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57);
  background-size: 300% 300%;
  animation: gradientShift 4s ease infinite;
  color: white;
  padding: 15px;
  font-weight: bold;
  font-size: 1.2rem;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
}

.marquee-content {
  display: inline-block;
  animation: scroll-right-to-left 15s linear infinite;
  padding-left: 100%;
}

@keyframes scroll-right-to-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.marquee::before {
  content: '❤️✨❤️';
  position: absolute;
  left: -50px;
  animation: sparkle 13s linear infinite;
}

@keyframes sparkle {
  0% { left: -50px; transform: rotate(0deg); }
  100% { left: 100%; transform: rotate(360deg); }
}

/* Search Section */
.search-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 0 20px;
  text-align: center;
}

.search-heading {
  color: white;
  font-size: 1.8rem;
  margin-bottom: 15px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.search-box {
  position: relative;
  max-width: 600px;
  margin: 0 auto 30px;
}

.search-box input {
  width: 100%;
  padding: 15px 20px;
  padding-right: 50px;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.search-box input:focus {
  outline: none;
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  transform: translateY(-2px);
}

.search-box i {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: #667eea;
  font-size: 1.2rem;
}

.no-results {
  color: white;
  text-align: center;
  font-size: 1.2rem;
  margin: 20px 0;
  display: none;
}

.products-heading {
  text-align: center;
  color: white;
  font-size: 2rem;
  margin: 20px 0;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

/* Main Container */
.container {
  display: flex;
  max-width: 1400px;
  margin: 20px auto;
  padding: 0 20px;
  gap: 30px;
}

/* Sidebar Styles */
.sidebar {
  width: 280px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 25px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  position: sticky;
  top: 20px;
  height: fit-content;
  border: 1px solid rgba(255,255,255,0.2);
}

.sidebar h3 {
  margin-bottom: 20px;
  color: #333;
  font-size: 1.3rem;
  text-align: center;
  position: relative;
}

.sidebar h3::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 2px;
}

.sidebar ul {
  list-style: none;
}

.sidebar li {
  padding: 15px 20px;
  cursor: pointer;
  border-radius: 12px;
  margin: 8px 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  font-weight: 500;
  color: #555;
}

.sidebar li::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  transition: left 0.5s;
}

.sidebar li:hover::before {
  left: 100%;
}

.sidebar li:hover,
.sidebar li.active {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
}

/* Products Grid */
.products {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 25px;
}

/* Product Card Styles */
.product {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 25px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
}

.product.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.product::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57);
  background-size: 300% 300%;
  animation: gradientShift 4s ease infinite;
}

.product:hover {
  transform: translateY(-10px) rotateX(5deg);
  box-shadow: 0 25px 50px rgba(0,0,0,0.2);
}

.product img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.3s ease;
  margin-bottom: 15px;
  cursor: pointer;
}

.product:hover img {
  transform: scale(1.05);
}

.product p {
  font-size: 1.1rem;
  margin: 15px 0;
  font-weight: 600;
  color: #333;
  line-height: 1.4;
  text-align: center;
}

.price {
  background: linear-gradient(135deg, #ff6b6b, #ee5a6f);
  color: white;
  font-weight: bold;
  margin: 15px 0;
  padding: 10px 15px;
  border-radius: 25px;
  display: inline-block;
  font-size: 1.3rem;
  box-shadow: 0 5px 15px rgba(238, 90, 111, 0.3);
  animation: pulse 2s infinite;
}

.price i {
  font-size: 1.1rem;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.description {
  font-size: 0.9rem;
  margin-bottom: 20px;
  color: #666;
  line-height: 1.6;
  background: rgba(0,0,0,0.05);
  padding: 15px;
  border-radius: 10px;
  border-left: 4px solid #667eea;
  text-align: left;
  width: 100%;
}

.product-actions {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  width: 100%;
  margin-top: auto;
}

.product a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: white;
  padding: 12px 20px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  width: fit-content;
  margin: 0 auto;
}

.product a.whatsapp-btn {
  background: linear-gradient(135deg, #25D366, #128C7E);
  box-shadow: 0 5px 15px rgba(37, 211, 102, 0.3);
}

.product a.messenger-btn {
  background: linear-gradient(135deg, #006AFF, #0084FF);
  box-shadow: 0 5px 15px rgba(0, 122, 255, 0.3);
}

.product a::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}

.product a:hover::before {
  left: 100%;
}

.product a:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 8px 25px rgba(0,0,0,0.4);
}

/* Modal Styles */
.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.9);
  justify-content: center;
  align-items: center;
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.modal-img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 10px;
}

.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  z-index: 1001;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
}

/* Message Styles */
.no-products-message,
.error-message {
  grid-column: 1 / -1;
  text-align: center;
  color: white;
  padding: 50px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.no-products-message i,
.error-message i {
  font-size: 3rem;
  margin-bottom: 20px;
  display: block;
  opacity: 0.7;
}

.no-products-message h3,
.error-message h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.no-products-message p,
.error-message p {
  font-size: 1.1rem;
  opacity: 0.9;
}

.retry-btn {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
  transition: all 0.3s ease;
}

.retry-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}

.retry-btn i {
  margin-right: 8px;
}

/* Footer Styles */
footer {
  background: linear-gradient(135deg, #2c3e50, #34495e);
  color: white;
  text-align: center;
  padding: 30px;
  margin-top: 50px;
  position: relative;
  overflow: hidden;
}

footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  animation: footerShine 3s ease-in-out infinite;
}

@keyframes footerShine {
  0% { left: -100%; }
  100% { left: 100%; }
}

footer p {
  position: relative;
  z-index: 2;
}

/* Loading Animation */
.loading-message {
  text-align: center;
  color: white;
  font-size: 1.2rem;
  padding: 50px;
  grid-column: 1 / -1;
}

.loading-message i {
  font-size: 2rem;
  margin-bottom: 10px;
  display: block;
}

/* Fade In Animation */
.fade-in {
  animation: fadeInUp 0.6s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    gap: 20px;
  }

  .sidebar {
    width: 100%;
    position: static;
    padding: 20px;
  }

  .products {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
  }

  header h1 {
    font-size: 2rem;
  }

  header p {
    font-size: 1rem;
  }

  .search-heading {
    font-size: 1.5rem;
  }

  .products-heading {
    font-size: 1.8rem;
  }

  .product {
    padding: 20px;
  }

  .product-actions {
    flex-direction: column;
    gap: 8px;
  }

  .product a {
    width: 100%;
    max-width: 200px;
  }

  .modal-img {
    max-width: 95%;
    max-height: 80%;
  }
  
  .close {
    font-size: 30px;
    top: 15px;
    right: 20px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 15px;
  }

  .search-container {
    padding: 0 15px;
  }

  .products {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .product {
    padding: 15px;
  }

  header {
    padding: 20px 15px;
  }

  header h1 {
    font-size: 1.8rem;
  }

  .sidebar {
    padding: 15px;
  }

  .sidebar li {
    padding: 12px 15px;
    font-size: 0.9rem;
  }
}

/* CSS Test Class for Fallback Detection */
.test-css-loaded {
  display: none !important;
}

/* Print Styles */
@media print {
  .marquee, .search-container, .sidebar, .product-actions, footer, .floating-elements, .bg-overlay {
    display: none !important;
  }
  
  body {
    background: white !important;
    color: black !important;
  }
  
  .product {
    background: white !important;
    box-shadow: none !important;
    border: 1px solid #ddd !important;
    break-inside: avoid;
    margin-bottom: 20px;
  }
  
  .products {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}
