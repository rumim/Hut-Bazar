// Product data
const products = [
  {
    category: "gifts",
    imgSrc: "https://i.postimg.cc/XvCm6x86/uni-wash-detergent-powder-bucket-free-2kg.jpg",
    alt: "Uni Wash",
    name: "Uni Wash Detergent Powder (Bucket Free) – 2kg",
    price: "385.00",
    description: "Matic Detergent Powder effectively targets tough stains with powerful cleaning action.<br><strong>Category:</strong> Washing<br><strong>Tags:</strong> Detergent, Unilever"
  },
  {
    category: "personal",
    imgSrc: "https://i.postimg.cc/BngtydW9/Cera-Ve-Baby-Moisturizing-Cream-Fragrance-Free-3606000582859.avif",
    alt: "CeraVe",
    name: "CeraVe Baby Moisturizing Cream Fragrance Free - 226g",
    price: "2650.00",
    description: "CeraVe Baby Moisturizing Cream is free of fragrance, paraben, dye and phthalates...<br><strong>Category:</strong> Skin Care<br><strong>Tags:</strong> Skin Care, Cream, CeraVe"
  },
  {
    category: "personal",
    imgSrc: "https://i.postimg.cc/QCHMWtVj/Cera-Ve-Moisturizing-Cream-For-Dry-to-Very-Dry-Skin-2.jpg",
    alt: "CeraVe Moisturizing Cream",
    name: "CeraVe Moisturizing Cream For Dry to Very Dry Skin 340gm",
    price: "3700.00",
    description: "Fragrance-free. Paraben-free. Oil Free. Allergy tested. Hypoallergenic. Non-comedogenic: will not clog pores. 24-hour hydration.<br><strong>Category:</strong> Skin Care<br><strong>Tags:</strong> Skin Care, Cream, CeraVe"
  },
  {
    category: "personal",
    imgSrc: "https://i.postimg.cc/tJCxvpTc/Cetaphil-Daily-Facial-Cleanser-302993927358.avif",
    alt: "Cetaphil Daily Facial Cleanser",
    name: "Cetaphil Daily Facial Cleanser – 237ml",
    price: "2150.00",
    description: "This deep cleansing, gently foaming formula reinforces the skin's moisture barrier and is clinically tested to remove dirt and makeup.<br><strong>Category:</strong> Skin Care<br><strong>Tags:</strong> Skin Care, Cleanser, Cetaphil"
  },
  {
    category: "personal",
    imgSrc: "https://i.postimg.cc/mg68QpdR/Cera-Ve-Acne-Control-Cleanser-with-Salicylic-Acid-237-ml-Hretus-World.webp",
    alt: "Cerave Acne Control Cleanser",
    name: "Cerave Acne Control Cleanser – 237ml",
    price: "3500.00",
    description: "Oil-absorbing technology reduces excess shine. Gentle foaming formula cleanses without drying. Fragrance-free & paraben-free.<br><strong>Category:</strong> Skin Care<br><strong>Tags:</strong> Skin Care, Cleanser, CeraVe"
  },
  {
    category: "personal",
    imgSrc: "https://i.postimg.cc/HLdXTk0W/176.jpg",
    alt: "Himalaya",
    name: "Himalaya Aloe vera Face Wash 100ml",
    price: "375.00",
    description: "The Himalaya Herbals face wash is formulated with soothing neem oil and turmeric. Neem oil targets dry skin and relives itchiness. It reduces irritation as well. Well known for its antimicrobial properties, neem oil treats redness and wounds, and prevents any infection. It gets rid of acne-causing bacteria from the root and improves the overall health and immunity of your skin to keep future acne or ulcers at bay.<br><strong>Category:</strong> Skin Care<br><strong>Tags:</strong> Face Wash, Himalaya"
  },
  {
    category: "personal",
    imgSrc: "https://i.postimg.cc/9fGygxWv/YC-Dead-Sea-Mud-Whitening-Face-Wash-sku25336.jpg",
    alt: "YC Dead Sea Mud",
    name: "YC Dead Sea Mud Whitening Face Wash 100ml",
    price: "375.00",
    description: "YC Whitening Facial Dead Sea Mud with immediate therapeutic cooling, soothing and nourishing effects.<br><strong>Category:</strong> Skin Care<br><strong>Tags:</strong> Face Wash, YC"
  },
  {
    category: "detergent",
    imgSrc: "https://i.postimg.cc/MZP4hQxY/surf-excel-matic-top-load-detergent-liquid-500ml-paikaree.webp",
    alt: "Surf Excel",
    name: "Surf Excel Matic Top Load Detergent Liquid - 500ml",
    price: "1080.00",
    description: "Matic Liquid Detergent effectively targets tough stains with powerful cleaning action.<br><strong>Category:</strong> Washing<br><strong>Tags:</strong> Detergent, Liquid Detergent"
  },
  {
    category: "personal",
    imgSrc: "https://i.postimg.cc/KjRF9hMb/Untitled-1-6.png",
    alt: "Watson",
    name: "Watsons Peach Scented Gel Body Wash 1000ml",
    price: "1685.00",
    description: "Buy Watsons Peach Scented Gel Body Wash 1000ml online from Cellsii.com. Watsons Peach Scented Gel Body Wash thoroughly cleanses your body and helps your skin retain moisture. This refreshing gel body wash comes in a floral scent. It leaves your skin clean, soft, and smooth, for a relaxing feeling.<br><strong>Category:</strong> Skin Care<br><strong>Tags:</strong> Body Wash, Watson, Peach"
  },
  {
    category: "personal",
    imgSrc: "https://i.postimg.cc/bJ9Ynx2t/boots-rose-moisturizing-shower-cream-1000ml-paikaree.webp",
    alt: "Boots",
    name: "Boots Rose Moisturizing Shower Cream - 1000ml",
    price: "1850.00",
    description: "Boots Rose Moisturizing Shower Cream comes with a pH-balanced formula. This shower cream is 100% vegan. It comes with a moisturizing formula. This shower cream contains a soothing fragrance. It is enriched with a lavender scent. This shower cream is made with a creamy soft texture. It is a family pack. This is suitable for all types of skin. It cleanses all the dirt and greasy oil from the skin. This is formulated for adults only. It is unisex. This vegan shower cream soothes the skin and leaves the skin softer. It brightens up the skin and removes the tan. This shower cream provides a refreshing vibe. It is easy to use. This is suitable for daily use. It comes in a beautiful pumping bottle. The shower cream contains a lavender color and is attractive.<br><strong>Category:</strong> Skin Care<br><strong>Tags:</strong> Shower Cream, Boots, Rose"
  },
  {
    category: "detergent",
    imgSrc: "https://i.postimg.cc/gj7ynWf1/9556126605953.webp",
    alt: "Comfort White",
    name: "Comfort White Fabric Conditioner 2ltr",
    price: "1080.00",
    description: "Makes clothes comfortably soft and fresh. Helps achieve easier ironing. Leaves clothes static free.<br><strong>Category:</strong> Fabric Conditioner<br><strong>Tags:</strong> Detergent, Comfort"
  },
  {
    category: "oral",
    imgSrc: "https://i.postimg.cc/ydJtMqpc/PEPS-CPGPT-200.webp",
    alt: "Pepsodent",
    name: "Pepsodent Toothpaste 190g",
    price: "85.00",
    description: "Advanced cavity protection formula for stronger teeth and fresh breath.<br><strong>Category:</strong> Oral Care<br><strong>Tags:</strong> Toothpaste, Pepsodent"
  },
  {
    category: "oral",
    imgSrc: "https://i.postimg.cc/TPMr9n73/product-img-61b05cca795ca-COMPLETE-CARE-HERBAL-TOOTHPASTE.jpg",
    alt: "Himalaya",
    name: "Himalaya Complete Care Toothpaste 100gm",
    price: "190.00",
    description: "The new Himalaya Complete Care Toothpaste not only protects teeth and gums from germs, but also has antioxidants that assist in removing toxins, helping your gums maintain their natural health. 👉herbal ingredients 👉excellent for bleeding gums 👉teeth all-day protection<br><strong>Category:</strong> Oral Care<br><strong>Tags:</strong> Toothpaste, Himalaya"
  },
  {
    category: "snack",
    imgSrc: "https://i.postimg.cc/zXPpBMkg/172517160266d40792016e8.png",
    alt: "Toast",
    name: "Kishwan Tea Toast 180gm",
    price: "50.00",
    description: "Delicious, Fresh<br><strong>Category:</strong> Biscuit<br><strong>Tags:</strong> Biscuit, Toast"
  },
  {
    category: "shampoo",
    imgSrc: "https://i.postimg.cc/bwXJTXJ9/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JQcm9kd-WN0-Qn-Jhbm-Qtc-GJf-Ym-Fubm-Vy-XC8x-MDA2-MTdc-Lz-Ew-MDYx-Ny1-Td-W5za-Wxr-LTR4.webp",
    alt: "Sunsilk Shampoo",
    name: "Sunsilk Shampoo All Type 360ml",
    price: "590.00",
    description: "Professional hair care for shine and nourishment. Suitable for all hair types.<br><strong>Category:</strong> Hair Care<br><strong>Tags:</strong> Unilever, Sunsilk"
  },
  {
    category: "frozen",
    imgSrc: "https://i.postimg.cc/pLbCzjgW/8941193400135.jpg",
    alt: "Frozen",
    name: "Golden Harvest Red Wheat Rooti 20 Pieces 1200g",
    price: "235.00",
    description: "Fresh & Made With Pure Desi Red Wheat<br><strong>Category:</strong> Frozen<br><strong>Tags:</strong> Frozen, Golden Harvest"
  },
  {
    category: "cosmetics",
    imgSrc: "https://i.postimg.cc/P5s28Znd/Essence-Lash-Princess-Mascara-1.webp",
    alt: "Essence",
    name: "Essence Lash Princess Mascara All Flavor 12ml",
    price: "850.00",
    description: "Essence Lash Princess Mascara is a beloved mascara known for its volumizing and lengthening effects on the lashes.<br><strong>Category:</strong> Cosmetic<br><strong>Tags:</strong> Cosmetics, Essence"
  },
  {
    category: "cosmetics",
    imgSrc: "https://i.postimg.cc/7LgN8CvZ/1678272071.jpg",
    alt: "Revolution",
    name: "Makeup Revolution Matte Fix Oil Control Fixing Spray 100ml",
    price: "1250.00",
    description: "The ultimate way to set and protect makeup. The Revolution Fix Oil Fixing Spray Makeup is designed for a matte finish, preventing smudges and fading to keep makeup in place for up to 12 hours.<br><strong>Category:</strong> Cosmetic<br><strong>Tags:</strong> Makeup Fix"
  },
  {
    category: "cosmetics",
    imgSrc: "https://i.postimg.cc/6qfMnYLR/normal-941337-big-5029066099730.jpg",
    alt: "Revolution",
    name: "Revolution Makeup Glow Fixing Flashing Spray 100ml",
    price: "1250.00",
    description: "Reflective particles in the composition of the spray lie on the skin with a weightless veil, creating a soft natural aurora and illuminating it, and the special formula reliably fixes makeup and provides easy hydration.<br><strong>Category:</strong> Cosmetic<br><strong>Tags:</strong> Makeup Fix"
  },
  {
    category: "cosmetics",
    imgSrc: "https://i.postimg.cc/1Rwc8CJY/makeup-revolution-04-1-jpg.webp",
    alt: "Revolution",
    name: "Revolution Matte & Fix Primer 1 Pc",
    price: "980.00",
    description: "Revolution Matte & Fix Primer<br><strong>Category:</strong> Cosmetic<br><strong>Tags:</strong> Premier"
  },
  {
    category: "cosmetics",
    imgSrc: "https://i.postimg.cc/7PnMfN7w/Technic-Dewy-Setting-Spray-30-ml-Technic-9a81d-478453.png",
    alt: "Technic Dewy Setting Spray 30 ml",
    name: "Technic Dewy Setting Spray 30 ml",
    price: "575.00",
    description: "Setting & Finishing Spray<br><strong>Category:</strong> Cosmetic<br><strong>Tags:</strong> Cosmetics, Technic"
  },
  {
    category: "cosmetics",
    imgSrc: "https://i.postimg.cc/KzMb0zPD/White-Superfresh-Coral-Compact-bd.jpg",
    alt: "Mayballine",
    name: "Mayballine White Super Fresh White Pure Perlite SPF 8g",
    price: "250.00",
    description: "Contains SPF 28 to protect your skin UV filters protects from sun darkening and damage Perlite, a pure mineral that visibly lightens complexion, while absorbing sweat and oil Keeps your complexion looking fresh for 12 hours and feels perfect all day long even in hot, humid weather Superior puff and packaging<br><strong>Category:</strong> Cosmetic<br><strong>Tags:</strong> Cosmetics, Mayballine"
  },
  {
    category: "cosmetics",
    imgSrc: "https://i.postimg.cc/QCqdqCDn/3600530854363-1.jpg",
    alt: "Mayballine",
    name: "Maybelline Superstay 24H Ivory Powder 9g",
    price: "550.00",
    description: "Maybelline Super Stay 24 hours waterproof face Powder resists shine, oil, sweat, heat and humidity. It features exclusive mircroflex formula contains silicon coated pigments that repel water oil and sweat all day. It is used for flawless coverage and shine control all day long. For best results apply with sponge applicator on to face. It can be use with or without foundation<br><strong>Category:</strong> Cosmetic<br><strong>Tags:</strong> Cosmetics, Mayballine"
  },
  {
    category: "cosmetics",
    imgSrc: "https://i.postimg.cc/j2DMHwyR/IMAGIC-Concealer-Medium-Beige-1225.webp",
    alt: "Imagic",
    name: "Imagic Concealer Medium Beige 1225 7g",
    price: "350.00",
    description: "Full concealer, natural and easy to apply, brighten,moisturizing,long lasting,gives you flawless skin. Face flaws,effectively cover facial flaws,ances,scars,freckles and so on. Eyes base makeup,cover dark circles,moist and thin, persistent docile<br><strong>Category:</strong> Cosmetic<br><strong>Tags:</strong> Cosmetics, Imagic"
  },
  {
    category: "cosmetics",
    imgSrc: "https://i.postimg.cc/tTNsB2t5/Imagic-Face-Powder-Shade-1.avif",
    alt: "Imagic",
    name: "Imagic Studio Fix Powder Plus Foundation 15g",
    price: "450.00",
    description: "✨ফেস এর এক্সট্রা অয়েল কন্ট্রোল করে। ✨ফেইসে কোনো প্রকার স্পট থাকলে খুব সুন্দর ভাবে কভার করে.. ✨বিবি ক্রিমের উপরে হালকা করে দিলে ফুল কভারেজ একটা লুক আসে.. ✨Face একদমই ঘামায় না এটা দিলে.. আর হালকা ঘামালেও এটা মুছে যায় না.. ✨ফাইন লাইন্স,পোরস,আনইভেনটোন খুব সুন্দর করে হাইড করে... ✨Matte একদম স্মুথ একটা লুক দিবে... ✨সহজে স্কিনে মিশে যায়, মুখে কেকি ভাব আনে না ✨পারফেক্ট মেকআপ লুক দিবে। ✨হাই কোয়ালিটি সম্পন্ন ফেস পাউডার । ✨সব ধরণের ত্বকের উপযোগী।<br><strong>Category:</strong> Cosmetic<br><strong>Tags:</strong> Cosmetics, Imagic"
  },
  {
    category: "cosmetics",
    imgSrc: "https://i.postimg.cc/JnmpYN2q/AT-001294-1.jpg",
    alt: "Bananas",
    name: "Kiss Beauty Bananas 24h Glow Up Face Primer 35ml",
    price: "600.00",
    description: "First yellow facial that illuminates and unifies the skin tone. Cover the imperfections and create a perfect canvas for makeup. Get perfect, bright skin with this first facial.<br><strong>Category:</strong> Cosmetic<br><strong>Tags:</strong> Kiss Beauty"
  },
  {
    category: "cosmetics",
    imgSrc: "https://i.postimg.cc/L6bMdxPN/Untitled-design.png",
    alt: "Kiss Beauty",
    name: "Karite Velvet Lip Gloss 1 Pc",
    price: "150.00",
    description: "💄Karite velvet lipgloss matte 💄Long-lasting waterproof 💄8 shades available 💄lightweight and moisturizing, soft texture 💄Natural with high pigment, uniform and full colors 💄Long-lasting, waterproof formula, color stay all day<br><strong>Category:</strong> Cosmetic<br><strong>Tags:</strong> Kiss Beauty"
  },
  {
    category: "cosmetics",
    imgSrc: "https://i.postimg.cc/zf1fMvS7/SETTSPRAY-1400x1400.jpg",
    alt: "L.A Girl",
    name: "L.A. Girl L A Girl Setting Spray Fix&Set 80ml",
    price: "800.00",
    description: "L.A. Girl Fix & Set Setting Spray is designed to help you achieve a beautiful, radiant look that lasts all day long. Whether you're prepping your skin for makeup or setting your finished look, this versatile spray makes it easy to enhance your beauty routine<br><strong>Category:</strong> Cosmetic<br><strong>Tags:</strong> Settintg Spray, L.A Girl"
  },
  {
    category: "breakfast",
    imgSrc: "https://i.postimg.cc/x85FP1v6/s-l1600.png",
    alt: "Noodles",
    name: "Samyang Ramen All Flavor Variety Combo – Total 5 pack (1 Pack each)",
    price: "1050.00",
    description: "Samyang Ramen All Flavor Variety Combo – Total 5 packs (1 Pack each) Fried Noodles Bundle with 5 ALL for you<br><strong>Category:</strong> Break Fast Items<br><strong>Tags:</strong> Samyang, Noodles"
  },
  {
    category: "breakfast",
    imgSrc: "https://i.postimg.cc/cHjpnHcw/Combo.jpg",
    alt: "Noodles",
    name: "Samyang Ramen All Flavor Variety – 1 Pc 140g",
    price: "220.00",
    description: "Samyang Ramen All Flavor Variety – Single Piece Noodles 140g each<br><strong>Category:</strong> Break Fast Items<br><strong>Tags:</strong> Samyang, Noodles"
  }
];

// Function to render products
function renderProducts(category) {
  const container = document.getElementById('productsContainer');
  container.innerHTML = '';
  
  const filteredProducts = products.filter(product => product.category === category);
  
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

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  // Auto-play background music
  const audio = document.getElementById('backgroundAudio');
  audio.volume = 0.3;
  
  const playPromise = audio.play();
  
  if (playPromise !== undefined) {
    playPromise.then(() => {
      console.log('Background music started');
    }).catch((error) => {
      console.log('Autoplay blocked by browser. Music will start on user interaction.');
      
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
  
  // Initialize with gifts products
  filterProducts('gifts');
  
  // Add smooth scroll behavior
  document.documentElement.style.scrollBehavior = 'smooth';
});

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

searchInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    const searchTerm = this.value.toLowerCase().trim();
    performSearch(searchTerm);
    this.blur();
  }
});

// Filter products by category
function filterProducts(category) {
  const categoryItems = document.querySelectorAll('.sidebar li');
  
  // Update active category
  categoryItems.forEach(li => li.classList.remove('active'));
  document.querySelector(`.sidebar li[onclick="filterProducts('${category}')"]`).classList.add('active');
  
  // Render products
  renderProducts(category);
  
  // Clear search input when switching categories
  searchInput.value = '';
  noResultsMessage.style.display = 'none';
}

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
