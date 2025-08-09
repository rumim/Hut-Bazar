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
  // Load product data
  fetch('https://raw.githubusercontent.com/rumim/Hut-Bazar/main/products.json')
    .then(response => response.json())
    .then(data => {
      productsData = data;
      filterProducts('gifts');
    })
    .catch(error => {
      console.error('Error loading products:', error);
      // Fallback to hardcoded data if fetch fails
      productsData = [
        {
          "category": "gifts",
          "imgSrc": "https://i.postimg.cc/XvCm6x86/uni-wash-detergent-powder-bucket-free-2kg.jpg",
          "alt": "Uni Wash",
          "name": "Uni Wash Detergent Powder (Bucket Free) – 2kg",
          "price": "385.00",
          "description": "Matic Detergent Powder effectively targets tough stains with powerful cleaning action.<br><strong>Category:</strong> Washing<br><strong>Tags:</strong> Detergent, Unilever"
        },
        // Include essential fallback products here
      ];
      filterProducts('gifts');
    });

  // Initialize audio
  initAudio();
});

// Filter products by category
function filterProducts(category) {
  const container = document.getElementById('productsContainer');
  container.innerHTML = '';
  
  const filteredProducts = productsData.filter(product => product.category === category);
  
  if (filteredProducts.length === 0) {
    container.innerHTML = '<p class="no-results">No products found in this category.</p>';
    return;
  }
  
  filteredProducts.forEach(product => {
    const productElement = document.createElement('div');
    productElement.className = 'product fade-in';
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
    
    // Add fade-in animation
    setTimeout(() => {
      productElement.style.opacity = '1';
      productElement.style.transform = 'translateY(0)';
    }, 50);
  });
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
document.querySelector(".close").onclick = function() {
  document.getElementById("imageModal").style.display = "none";
  document.body.style.overflow = "auto";
}

// Initialize audio
function initAudio() {
  const audio = document.getElementById('backgroundAudio');
  audio.volume = 0.3;
  
  const playPromise = audio.play();
  
  if (playPromise !== undefined) {
    playPromise.catch(error => {
      // Enable audio on user interaction
      const enableAudio = () => {
        audio.play();
        document.removeEventListener('click', enableAudio);
        document.removeEventListener('touchstart', enableAudio);
      };
      document.addEventListener('click', enableAudio);
      document.addEventListener('touchstart', enableAudio);
    });
  }
}

// Search functionality
document.getElementById('searchInput').addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase().trim();
  performSearch(searchTerm);
});

function performSearch(searchTerm) {
  const allProducts = document.querySelectorAll('.product');
  let hasResults = false;
  
  allProducts.forEach(product => {
    const productName = product.querySelector('p').textContent.toLowerCase();
    const productDesc = product.querySelector('.description')?.textContent.toLowerCase() || '';
    
    if (productName.includes(searchTerm) || productDesc.includes(searchTerm)) {
      product.style.display = 'block';
      hasResults = true;
    } else {
      product.style.display = 'none';
    }
  });
  
  document.querySelector('.no-results').style.display = hasResults ? 'none' : 'block';
}
