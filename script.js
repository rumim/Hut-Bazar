// Load products from JSON file
function loadProducts() {
  fetch('https://cdn.jsdelivr.net/gh/rumim/Hut-Bazar@main/products.json')
    .then(response => response.json())
    .then(products => {
      const productsContainer = document.getElementById('productsContainer');
      productsContainer.innerHTML = '';
      
      products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product fade-in';
        productElement.setAttribute('data-category', product.category);
        
        productElement.innerHTML = `
          <img src="${product.image}" alt="${product.name}" onclick="openModal(this)">
          <p>${product.name}</p>
          <div class="price"><i class="fas fa-tag"></i> ${product.price}</div>
          <div class="description">
            ${product.description}<br>
            <strong>Category:</strong> ${product.categoryDisplay}<br>
            <strong>Tags:</strong> ${product.tags}
          </div>
          <div class="product-actions">
            <a href="https://wa.me/+8801715141616" target="_blank" class="whatsapp-btn">
              <i class="fab fa-whatsapp"></i> WhatsApp
            </a>
            <a href="https://m.me/hutbazarsupershop" target="_blank" class="messenger-btn">
              <i class="fab fa-facebook-messenger"></i> Messenger
            </a>
          </div>
        `;
        
        productsContainer.appendChild(productElement);
      });
      
      // Initialize with gifts products (default active category)
      filterProducts('gifts');
      
      // Add fade-in animation to products on scroll
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animationDelay = Math.random() * 0.5 + 's';
            entry.target.classList.add('fade-in');
          }
        });
      }, observerOptions);

      document.querySelectorAll('.product').forEach(product => {
        observer.observe(product);
      });
    })
    .catch(error => console.error('Error loading products:', error));
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

document.querySelector(".close").onclick = function() {
  document.getElementById("imageModal").style.display = "none";
  document.body.style.overflow = "auto";
}

window.onclick = function(event) {
  const modal = document.getElementById("imageModal");
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    document.getElementById("imageModal").style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// Search functionality
function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  const noResultsMessage = document.querySelector('.no-results');

  function performSearch(searchTerm) {
    const allProducts = document.querySelectorAll('.product');
    let hasResults = false;
    
    allProducts.forEach(product => {
      const productName = product.querySelector('p').textContent.toLowerCase();
      const productDesc = product.querySelector('.description')?.textContent.toLowerCase() || '';
      
      if (productName.includes(searchTerm) || productDesc.includes(searchTerm)) {
        product.style.display = 'block';
        product.style.opacity = '1';
        product.style.transform = 'translateY(0)';
        hasResults = true;
      } else {
        product.style.display = 'none';
      }
    });
    
    noResultsMessage.style.display = hasResults ? 'none' : 'block';
  }

  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase().trim();
    
    if (searchTerm === '') {
      // If search is empty, show all products of the current category
      const activeCategory = document.querySelector('.sidebar li.active');
      if (activeCategory) {
        const category = activeCategory.getAttribute('onclick').match(/'([^']+)'/)[1];
        filterProducts(category);
      }
      noResultsMessage.style.display = 'none';
      return;
    }
    
    performSearch(searchTerm);
  });

  // Make search work with Enter key
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      const searchTerm = this.value.toLowerCase().trim();
      performSearch(searchTerm);
      this.blur();
    }
  });
}

// Filter products by category
function filterProducts(category) {
  const allProducts = document.querySelectorAll('.product');
  const categoryItems = document.querySelectorAll('.sidebar li');

  // Hide all products with fade out effect
  allProducts.forEach(product => {
    product.style.opacity = '0';
    product.style.transform = 'translateY(20px)';
    setTimeout(() => {
      if (product.getAttribute('data-category') === category) {
        product.style.display = 'block';
        setTimeout(() => {
          product.style.opacity = '1';
          product.style.transform = 'translateY(0)';
        }, 50);
      } else {
        product.style.display = 'none';
      }
    }, 200);
  });

  // Update active category
  categoryItems.forEach(li => li.classList.remove('active'));
  document.querySelector(`.sidebar li[onclick="filterProducts('${category}')"]`).classList.add('active');
  
  // Clear search input when switching categories
  document.getElementById('searchInput').value = '';
  document.querySelector('.no-results').style.display = 'none';
}

// Auto-play background music
function setupAudio() {
  const audio = document.getElementById('backgroundAudio');
  audio.volume = 0.3; // Set volume (0.0 to 1.0) - keep it low for background music
  
  // Try to play the audio
  const playPromise = audio.play();
  
  if (playPromise !== undefined) {
    playPromise.then(() => {
      console.log('Background music started');
    }).catch((error) => {
      console.log('Autoplay blocked by browser. Music will start on user interaction.');
      
      // Fallback for browsers that block autoplay
      const enableAudio = () => {
        audio.play();
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

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  loadProducts();
  setupSearch();
  setupAudio();
  
  // Add smooth scroll behavior
  document.documentElement.style.scrollBehavior = 'smooth';
});
