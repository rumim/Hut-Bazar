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
  
  // Load product data
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
      productsData = [
        // Include at least one sample product here
        {
          "category": "personal",
          "imgSrc": "https://i.postimg.cc/QCHMWtVj/Cera-Ve-Moisturizing-Cream-For-Dry-to-Very-Dry-Skin-2.jpg",
          "alt": "CeraVe Moisturizing Cream",
          "name": "CeraVe Moisturizing Cream For Dry to Very Dry Skin 340gm",
          "price": "3700.00",
          "description": "Fragrance-free. Paraben-free. Oil Free. Allergy tested. Hypoallergenic. Non-comedogenic: will not clog pores. 24-hour hydration.<br><strong>Category:</strong> Skin Care<br><strong>Tags:</strong> Skin Care, Cream, CeraVe"
        }
      ];
      filterProducts('personal');
    });
});

// Load categories into sidebar
function loadCategories() {
  const categoryList = document.getElementById('categoryList');
  categories.forEach(category => {
    const li = document.createElement('li');
    li.innerHTML = `<i class="fas fa-${category.icon}"></i> ${category.name}`;
    li.onclick = () => filterProducts(category.id);
    if (category.id === 'gifts') li.classList.add('active');
    categoryList.appendChild(li);
  });
}

// Filter products by category
function filterProducts(category) {
  const container = document.getElementById('productsContainer');
  container.innerHTML = '';
  
  // Update active category
  document.querySelectorAll('#categoryList li').forEach(li => {
    li.classList.remove('active');
  });
  document.querySelector(`#categoryList li[onclick="filterProducts('${category}')"]`).classList.add('active');
  
  const filteredProducts = productsData.filter(product => product.category === category);
  
  if (filteredProducts.length === 0) {
    container.innerHTML = '<p class="no-results">No products found in this category.</p>';
    return;
  }
  
  filteredProducts.forEach((product, index) => {
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
    
    // Add fade-in animation with delay
    setTimeout(() => {
      productElement.style.opacity = '1';
      productElement.style.transform = 'translateY(0)';
    }, index * 100);
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

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById("imageModal");
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
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
}

// Search functionality
document.getElementById('searchInput')?.addEventListener('input', function() {
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
      product.style.display = 'flex';
      hasResults = true;
    } else {
      product.style.display = 'none';
    }
  });
  
  document.querySelector('.no-results').style.display = hasResults ? 'none' : 'block';
}
