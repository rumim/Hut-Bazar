// Products data - embedded to avoid CORS issues
const productsData = [
  {
    "name": "Maggi 2 Min 8 Pack 496gm With 2 Pcs Free",
    "image": "https://i.postimg.cc/vTCGxP2z/485044809-973988864825802-6574764279868820392-n.jpg",
    "price": "৳385.00",
    "description": "ম্যাগী মাসালা নুডল্‌স ৮ টির প্যাকেট কিনলেই পাচ্ছেন আরও ২টি প্যাক ফ্রী! অফার থাকতে বুঝে নিন।\n*প্রতিটি ম্যাগী মাসালা ইনস্ট্যান্ট নুডল্‌স ৪৯৬ গ্রামের প্যাকের সাথে পাচ্ছেন ২টি ম্যাগী ইনস্ট্যান্ট নুডল্‌স ৬২ গ্রাম প্যাক। সাশ্রয় ৪৩.৭৫ টাকা।",
    "category": "gifts",
    "categoryDisplay": "Offers & Gifts",
    "tags": "Maggi, Noodles"
  },
  {
    "name": "Uni Wash Detergent Powder (Bucket Free) – 2kg",
    "image": "https://i.postimg.cc/XvCm6x86/uni-wash-detergent-powder-bucket-free-2kg.jpg",
    "price": "৳385.00",
    "description": "Matic Detergent Powder effectively targets tough stains with powerful cleaning action.",
    "category": "gifts",
    "categoryDisplay": "Offers & Gifts",
    "tags": "Detergent, Unilever"
  },
  {
    "name": "CeraVe Baby Moisturizing Cream Fragrance Free - 226g",
    "image": "https://i.postimg.cc/BngtydW9/Cera-Ve-Baby-Moisturizing-Cream-Fragrance-Free-3606000582859.avif",
    "price": "৳2650.00",
    "description": "CeraVe Baby Moisturizing Cream is free of fragrance, paraben, dye and phthalates...",
    "category": "personal",
    "categoryDisplay": "Personal Care",
    "tags": "Skin Care, Cream, CeraVe"
  },
  {
    "name": "CeraVe Moisturizing Cream For Dry to Very Dry Skin 340gm",
    "image": "https://i.postimg.cc/QCHMWtVj/Cera-Ve-Moisturizing-Cream-For-Dry-to-Very-Dry-Skin-2.jpg",
    "price": "৳3700.00",
    "description": "Fragrance-free. Paraben-free. Oil Free. Allergy tested. Hypoallergenic. Non-comedogenic: will not clog pores. 24-hour hydration.",
    "category": "personal",
    "categoryDisplay": "Personal Care",
    "tags": "Skin Care, Cream, CeraVe"
  },
  {
    "name": "Cetaphil Daily Facial Cleanser – 237ml",
    "image": "https://i.postimg.cc/tJCxvpTc/Cetaphil-Daily-Facial-Cleanser-302993927358.avif",
    "price": "৳2150.00",
    "description": "This deep cleansing, gently foaming formula reinforces the skin's moisture barrier and is clinically tested to remove dirt and makeup.",
    "category": "personal",
    "categoryDisplay": "Personal Care",
    "tags": "Skin Care, Cleanser, Cetaphil"
  },
  {
    "name": "Cerave Acne Control Cleanser – 237ml",
    "image": "https://i.postimg.cc/mg68QpdR/Cera-Ve-Acne-Control-Cleanser-with-Salicylic-Acid-237-ml-Hretus-World.webp",
    "price": "৳3500.00",
    "description": "Oil-absorbing technology reduces excess shine. Gentle foaming formula cleanses without drying. Fragrance-free & paraben-free.",
    "category": "personal",
    "categoryDisplay": "Personal Care",
    "tags": "Skin Care, Cleanser, CeraVe"
  },
  {
    "name": "Himalaya Aloe vera Face Wash 100ml",
    "image": "https://i.postimg.cc/HLdXTk0W/176.jpg",
    "price": "৳375.00",
    "description": "The Himalaya Herbals face wash is formulated with soothing neem oil and turmeric. Neem oil targets dry skin and relives itchiness. It reduces irritation as well. Well known for its antimicrobial properties, neem oil treats redness and wounds, and prevents any infection. It gets rid of acne-causing bacteria from the root and improves the overall health and immunity of your skin to keep future acne or ulcers at bay.",
    "category": "personal",
    "categoryDisplay": "Personal Care",
    "tags": "Face Wash, Himalaya"
  },
  {
    "name": "YC Dead Sea Mud Whitening Face Wash 100ml",
    "image": "https://i.postimg.cc/9fGygxWv/YC-Dead-Sea-Mud-Whitening-Face-Wash-sku25336.jpg",
    "price": "৳375.00",
    "description": "YC Whitening Facial Dead Sea Mud with immediate therapeutic cooling, soothing and nourishing effects.",
    "category": "personal",
    "categoryDisplay": "Personal Care",
    "tags": "Face Wash, YC"
  },
  {
    "name": "Surf Excel Matic Top Load Detergent Liquid - 500ml",
    "image": "https://i.postimg.cc/MZP4hQxY/surf-excel-matic-top-load-detergent-liquid-500ml-paikaree.webp",
    "price": "৳1080.00",
    "description": "Matic Liquid Detergent effectively targets tough stains with powerful cleaning action.",
    "category": "detergent",
    "categoryDisplay": "Detergent",
    "tags": "Detergent, Liquid Detergent"
  },
  {
    "name": "Watsons Peach Scented Gel Body Wash 1000ml",
    "image": "https://i.postimg.cc/KjRF9hMb/Untitled-1-6.png",
    "price": "৳1685.00",
    "description": "Buy Watsons Peach Scented Gel Body Wash 1000ml online from Cellsii.com. Watsons Peach Scented Gel Body Wash thoroughly cleanses your body and helps your skin retain moisture. This refreshing gel body wash comes in a floral scent. It leaves your skin clean, soft, and smooth, for a relaxing feeling.",
    "category": "personal",
    "categoryDisplay": "Personal Care",
    "tags": "Body Wash, Watson, Peach"
  },
  {
    "name": "Boots Lavender Moisturizing Shower Cream - 1000ml",
    "image": "https://i.postimg.cc/vB1bhd9s/boots-lavender-moisturizing-shower-cream-1000ml-paikaree.webp",
    "price": "৳1850.00",
    "description": "Boots Lavender Moisturizing Shower Cream comes with a pH-balanced formula. This shower cream is 100% vegan. It comes with a moisturizing formula. This shower cream contains a soothing fragrance. It is enriched with a lavender scent. This shower cream is made with a creamy soft texture. It is a family pack. This is suitable for all types of skin. It cleanses all the dirt and greasy oil from the skin. This is formulated for adults only. It is unisex. This vegan shower cream soothes the skin and leaves the skin softer. It brightens up the skin and removes the tan. This shower cream provides a refreshing vibe. It is easy to use. This is suitable for daily use. It comes in a beautiful pumping bottle. The shower cream contains a lavender color and is attractive.",
    "category": "personal",
    "categoryDisplay": "Personal Care",
    "tags": "Shower Cream, Boots, Lavender"
  },
  {
    "name": "Boots Peony Moisturizing Shower Cream - 1000ml",
    "image": "https://i.postimg.cc/V5ytNByb/790082c2-d45a-46c5-9853-5d69987a8d37-large.jpg",
    "price": "৳1850.00",
    "description": "Boots Peony Moisturizing Shower Cream comes with a pH-balanced formula. This shower cream is 100% vegan. It comes with a moisturizing formula. This shower cream contains a soothing fragrance. It is enriched with a lavender scent. This shower cream is made with a creamy soft texture. It is a family pack. This is suitable for all types of skin. It cleanses all the dirt and greasy oil from the skin. This is formulated for adults only. It is unisex. This vegan shower cream soothes the skin and leaves the skin softer. It brightens up the skin and removes the tan. This shower cream provides a refreshing vibe. It is easy to use. This is suitable for daily use. It comes in a beautiful pumping bottle. The shower cream contains a lavender color and is attractive.",
    "category": "personal",
    "categoryDisplay": "Personal Care",
    "tags": "Shower Cream, Boots, Peony"
  },
  {
    "name": "Boots Rose Moisturizing Shower Cream - 1000ml",
    "image": "https://i.postimg.cc/bJ9Ynx2t/boots-rose-moisturizing-shower-cream-1000ml-paikaree.webp",
    "price": "৳1850.00",
    "description": "Boots Rose Moisturizing Shower Cream comes with a pH-balanced formula. This shower cream is 100% vegan. It comes with a moisturizing formula. This shower cream contains a soothing fragrance. It is enriched with a lavender scent. This shower cream is made with a creamy soft texture. It is a family pack. This is suitable for all types of skin. It cleanses all the dirt and greasy oil from the skin. This is formulated for adults only. It is unisex. This vegan shower cream soothes the skin and leaves the skin softer. It brightens up the skin and removes the tan. This shower cream provides a refreshing vibe. It is easy to use. This is suitable for daily use. It comes in a beautiful pumping bottle. The shower cream contains a lavender color and is attractive.",
    "category": "personal",
    "categoryDisplay": "Personal Care",
    "tags": "Shower Cream, Boots, Rose"
  },
  {
    "name": "Comfort White Fabric Conditioner 2ltr",
    "image": "https://i.postimg.cc/gj7ynWf1/9556126605953.webp",
    "price": "৳1080.00",
    "description": "Makes clothes comfortably soft and fresh. Helps achieve easier ironing. Leaves clothes static free.",
    "category": "detergent",
    "categoryDisplay": "Fabric Conditioner",
    "tags": "Detergent, Comfort"
  },
  {
    "name": "Pepsodent Toothpaste 190g",
    "image": "https://i.postimg.cc/ydJtMqpc/PEPS-CPGPT-200.webp",
    "price": "৳85.00",
    "description": "Advanced cavity protection formula for stronger teeth and fresh breath.",
    "category": "oral",
    "categoryDisplay": "Oral Care",
    "tags": "Toothpaste, Pepsodent"
  },
  {
    "name": "Himalaya Complete Care Toothpaste 100gm",
    "image": "https://i.postimg.cc/TPMr9n73/product-img-61b05cca795ca-COMPLETE-CARE-HERBAL-TOOTHPASTE.jpg",
    "price": "৳190.00",
    "description": "The new Himalaya Complete Care Toothpaste not only protects teeth and gums from germs, but also has antioxidants that assist in removing toxins, helping your gums maintain their natural health.\n\n👉herbal ingredients\n👉excellent for bleeding gums\n👉teeth all-day protection",
    "category": "oral",
    "categoryDisplay": "Oral Care",
    "tags": "Toothpaste, Himalaya"
  },
  {
    "name": "Kishwan Tea Toast 180gm",
    "image": "https://i.postimg.cc/zXPpBMkg/172517160266d40792016e8.png",
    "price": "৳50.00",
    "description": "Delicious, Fresh",
    "category": "snack",
    "categoryDisplay": "Biscuit",
    "tags": "Biscuit, Toast"
  },
  {
    "name": "Sunsilk Shampoo All Type 360ml",
    "image": "https://i.postimg.cc/bwXJTXJ9/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JQcm9kd-WN0-Qn-Jhbm-Qtc-GJf-Ym-Fubm-Vy-XC8x-MDA2-MTdc-Lz-Ew-MDYx-Ny1-Td-W5za-Wxr-LTR4.webp",
    "price": "৳590.00",
    "description": "Professional hair care for shine and nourishment. Suitable for all hair types.",
    "category": "shampoo",
    "categoryDisplay": "Hair Care",
    "tags": "Unilever, Sunsilk"
  },
  {
    "name": "Golden Harvest Red Wheat Rooti 20 Pieces 1200g",
    "image": "https://i.postimg.cc/pLbCzjgW/8941193400135.jpg",
    "price": "৳235.00",
    "description": "Fresh & Made With Pure Desi Red Wheat",
    "category": "frozen",
    "categoryDisplay": "Frozen",
    "tags": "Frozen, Golden Harvest"
  },
  {
    "name": "Essence Lash Princess Mascara All Flavor 12ml",
    "image": "https://i.postimg.cc/P5s28Znd/Essence-Lash-Princess-Mascara-1.webp",
    "price": "৳850.00",
    "description": "Essence Lash Princess Mascara is a beloved mascara known for its volumizing and lengthening effects on the lashes.",
    "category": "cosmetics",
    "categoryDisplay": "Cosmetic",
    "tags": "Cosmetics, Essence"
  },
  {
    "name": "Makeup Revolution Matte Fix Oil Control Fixing Spray 100ml",
    "image": "https://i.postimg.cc/7LgN8CvZ/1678272071.jpg",
    "price": "৳1250.00",
    "description": "The ultimate way to set and protect makeup.\nThe Revolution Fix Oil Fixing Spray Makeup is designed for a matte finish, preventing smudges and fading to keep makeup in place for up to 12 hours.",
    "category": "cosmetics",
    "categoryDisplay": "Cosmetic",
    "tags": "Makeup Fix"
  },
  {
    "name": "Revolution Makeup Glow Fixing Flashing Spray 100ml",
    "image": "https://i.postimg.cc/6qfMnYLR/normal-941337-big-5029066099730.jpg",
    "price": "৳1250.00",
    "description": "Reflective particles in the composition of the spray lie on the skin with a weightless veil, creating a soft natural aurora and illuminating it, and the special formula reliably fixes makeup and provides easy hydration.",
    "category": "cosmetics",
    "categoryDisplay": "Cosmetic",
    "tags": "Makeup Fix"
  },
  {
    "name": "Revolution Matte & Fix Primer 1 Pc",
    "image": "https://i.postimg.cc/1Rwc8CJY/makeup-revolution-04-1-jpg.webp",
    "price": "৳980.00",
    "description": "Revolution Matte & Fix Primer",
    "category": "cosmetics",
    "categoryDisplay": "Cosmetic",
    "tags": "Premier"
  },
  {
    "name": "Technic Dewy Setting Spray 30 ml",
    "image": "https://i.postimg.cc/7PnMfN7w/Technic-Dewy-Setting-Spray-30-ml-Technic-9a81d-478453.png",
    "price": "৳575.00",
    "description": "Setting & Finishing Spray",
    "category": "cosmetics",
    "categoryDisplay": "Cosmetic",
    "tags": "Cosmetics, Technic"
  },
  {
    "name": "Mayballine White Super Fresh White Pure Perlite SPF 8g",
    "image": "https://i.postimg.cc/KzMb0zPD/White-Superfresh-Coral-Compact-bd.jpg",
    "price": "৳250.00",
    "description": "Contains SPF 28 to protect your skin\nUV filters protects from sun darkening and damage\nPerlite, a pure mineral that visibly lightens complexion, while absorbing sweat and oil\nKeeps your complexion looking fresh for 12 hours and feels perfect all day long even in hot, humid weather\nSuperior puff and packaging",
    "category": "cosmetics",
    "categoryDisplay": "Cosmetic",
    "tags": "Cosmetics, Mayballine"
  },
  {
    "name": "Maybelline Superstay 24H Ivory Powder 9g",
    "image": "https://i.postimg.cc/QCqdqCDn/3600530854363-1.jpg",
    "price": "৳550.00",
    "description": "Maybelline Super Stay 24 hours waterproof face Powder resists shine, oil, sweat, heat and humidity. It features exclusive mircroflex formula contains silicon coated pigments that repel water oil and sweat all day. It is used for flawless coverage and shine control all day long. For best results apply with sponge applicator on to face. It can be use with or without foundation",
    "category": "cosmetics",
    "categoryDisplay": "Cosmetic",
    "tags": "Cosmetics, Mayballine"
  },
  {
    "name": "Imagic Concealer Medium Beige 1225 7g",
    "image": "https://i.postimg.cc/j2DMHwyR/IMAGIC-Concealer-Medium-Beige-1225.webp",
    "price": "৳350.00",
    "description": "Full concealer, natural and easy to apply, brighten,moisturizing,long lasting,gives you flawless skin.\nFace flaws,effectively cover facial flaws,ances,scars,freckles and so on.\nEyes base makeup,cover dark circles,moist and thin, persistent docile",
    "category": "cosmetics",
    "categoryDisplay": "Cosmetic",
    "tags": "Cosmetics, Imagic"
  },
  {
    "name": "Imagic Studio Fix Powder Plus Foundation 15g",
    "image": "https://i.postimg.cc/tTNsB2t5/Imagic-Face-Powder-Shade-1.avif",
    "price": "৳450.00",
    "description": "✨ফেস এর এক্সট্রা অয়েল কন্ট্রোল করে।\n✨ফেইসে কোনো প্রকার স্পট থাকলে খুব সুন্দর ভাবে কভার করে..\n✨বিবি ক্রিমের উপরে হালকা করে দিলে ফুল কভারেজ একটা লুক আসে..\n✨Face একদমই ঘামায় না এটা দিলে.. আর হালকা ঘামালেও এটা মুছে যায় না..\n✨ফাইন লাইন্স,পোরস,আনইভেনটোন খুব সুন্দর করে হাইড করে...\n✨Matte একদম স্মুথ একটা লুক দিবে...\n✨সহজে স্কিনে মিশে যায়, মুখে কেকি ভাব আনে না\n✨পারফেক্ট মেকআপ লুক দিবে।\n✨হাই কোয়ালিটি সম্পন্ন ফেস পাউডার ।\n✨সব ধরণের ত্বকের উপযোগী।",
    "category": "cosmetics",
    "categoryDisplay": "Cosmetic",
    "tags": "Cosmetics, Imagic"
  },
  {
    "name": "Kiss Beauty Bananas 24h Glow Up Face Primer 35ml",
    "image": "https://i.postimg.cc/JnmpYN2q/AT-001294-1.jpg",
    "price": "৳600.00",
    "description": "First yellow facial that illuminates and unifies the skin tone. Cover the imperfections and create a perfect canvas for makeup. Get perfect, bright skin with this first facial.",
    "category": "cosmetics",
    "categoryDisplay": "Cosmetic",
    "tags": "Kiss Beauty"
  },
  {
    "name": "Karite Velvet Lip Gloss 1 Pc",
    "image": "https://i.postimg.cc/L6bMdxPN/Untitled-design.png",
    "price": "৳150.00",
    "description": "💄Karite velvet lipgloss matte\n💄Long-lasting waterproof\n💄8 shades available\n💄lightweight and moisturizing, soft texture\n💄Natural with high pigment, uniform and full colors\n💄Long-lasting, waterproof formula, color stay all day",
    "category": "cosmetics",
    "categoryDisplay": "Cosmetic",
    "tags": "Kiss Beauty"
  },
  {
    "name": "L.A. Girl L A Girl Setting Spray Fix&Set 80ml",
    "image": "https://i.postimg.cc/zf1fMvS7/SETTSPRAY-1400x1400.jpg",
    "price": "৳800.00",
    "description": "L.A. Girl Fix & Set Setting Spray is designed to help you achieve a beautiful, radiant look that lasts all day long. Whether you're prepping your skin for makeup or setting your finished look, this versatile spray makes it easy to enhance your beauty routine",
    "category": "cosmetics",
    "categoryDisplay": "Cosmetic",
    "tags": "Setting Spray, L.A Girl"
  },
  {
    "name": "Maggi 2 Min 8 Pack 496gm With 2 Pcs Free",
    "image": "https://i.postimg.cc/vTCGxP2z/485044809-973988864825802-6574764279868820392-n.jpg",
    "price": "৳180.00",
    "description": "যাগী মাসালা নুডল্‌স ৮ টির প্যাকেট কিনলেই পাচ্ছেন আরও ২টি প্যাক ফ্রী! অফার থাকতে বুঝে নিন।\n*প্রতিটি ম্যাগী মাসালা ইনস্ট্যান্ট নুডল্‌স ৪৯৬ গ্রামের প্যাকের সাথে পাচ্ছেন ২টি ম্যাগী ইনস্ট্যান্ট নুডল্‌স ৬২ গ্রাম প্যাক। সাশ্রয় ৪৩.৭৫ টাকা।",
    "category": "breakfast",
    "categoryDisplay": "Break Fast Item",
    "tags": "Maggi, Noodles"
  },
  {
    "name": "Samyang Ramen All Flavor Variety Combo – Total 5 pack (1 Pack each)",
    "image": "https://i.postimg.cc/x85FP1v6/s-l1600.png",
    "price": "৳1050.00",
    "description": "Samyang Ramen All Flavor Variety Combo – Total 5 packs (1 Pack each) Fried Noodles Bundle with 5 ALL for you",
    "category": "breakfast",
    "categoryDisplay": "Break Fast Items",
    "tags": "Samyang, Noodles"
  },
  {
    "name": "Samyang Ramen All Flavor Variety – 1 Pc 140g",
    "image": "https://i.postimg.cc/cHjpnHcw/Combo.jpg",
    "price": "৳220.00",
    "description": "Samyang Ramen All Flavor Variety – Single Piece Noodles 140g each",
    "category": "breakfast",
    "categoryDisplay": "Break Fast Items",
    "tags": "Samyang, Noodles"
  }
];

// Load products from embedded data instead of external JSON
function loadProducts() {
  try {
    const productsContainer = document.getElementById('productsContainer');
    if (!productsContainer) {
      console.error('Products container not found');
      return;
    }
    
    productsContainer.innerHTML = '';
    
    productsData.forEach(product => {
      const productElement = document.createElement('div');
      productElement.className = 'product fade-in';
      productElement.setAttribute('data-category', product.category);
      
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}" onclick="openModal(this)" loading="lazy">
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
    setTimeout(() => {
      filterProducts('gifts');
    }, 100);
    
    // Add intersection observer for animations
    setupIntersectionObserver();
    
  } catch (error) {
    console.error('Error loading products:', error);
  }
}

// Setup intersection observer for animations
function setupIntersectionObserver() {
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

// Setup modal event listeners
function setupModal() {
  const closeBtn = document.querySelector(".close");
  if (closeBtn) {
    closeBtn.onclick = closeModal;
  }

  window.onclick = function(event) {
    const modal = document.getElementById("imageModal");
    if (event.target == modal) {
      closeModal();
    }
  }

  document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
      closeModal();
    }
  });
}

// Search functionality
function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  const noResultsMessage = document.querySelector('.no-results');

  if (!searchInput || !noResultsMessage) {
    console.error('Search elements not found');
    return;
  }

  function performSearch(searchTerm) {
    const allProducts = document.querySelectorAll('.product');
    let hasResults = false;
    
    allProducts.forEach(product => {
      const productName = product.querySelector('p')?.textContent.toLowerCase() || '';
      const productDesc = product.querySelector('.description')?.textContent.toLowerCase() || '';
      // Products data - embedded to avoid CORS issues
const productsData = [
  {
    "name": "Maggi 2 Min 8 Pack 496gm With 2 Pcs Free",
    "image": "https://i.postimg.cc/vTCGxP2z/485044809-973988864825802-6574764279868820392-n.jpg",
    "price": "৳385.00",
    "description": "ম্যাগী মাসালা নুডল্‌স ৮ টির প্যাকেট কিনলেই পাচ্ছেন আরও ২টি প্যাক ফ্রী! অফার থাকতে বুঝে নিন।\n*প্রতিটি ম্যাগী মাসালা ইনস্ট্যান্ট নুডল্‌স ৪৯৬ গ্রামের প্যাকের সাথে পাচ্ছেন ২টি ম্যাগী ইনস্ট্যান্ট নুডল্‌স ৬২ গ্রাম প্যাক। সাশ্রয় ৪৩.৭৫ টাকা।",
    "category": "gifts",
    "categoryDisplay": "Offers & Gifts",
    "tags": "Maggi, Noodles"
  },
  {
    "name": "Uni Wash Detergent Powder (Bucket Free) – 2kg",
    "image": "https://i.postimg.cc/XvCm6x86/uni-wash-detergent-powder-bucket-free-2kg.jpg",
    "price": "৳385.00",
    "description": "Matic Detergent Powder effectively targets tough stains with powerful cleaning action.",
    "category": "gifts",
    "categoryDisplay": "Offers & Gifts",
    "tags": "Detergent, Unilever"
  },
  {
    "name": "CeraVe Baby Moisturizing Cream Fragrance Free - 226g",
    "image": "https://i.postimg.cc/BngtydW9/Cera-Ve-Baby-Moisturizing-Cream-Fragrance-Free-3606000582859.avif",
    "price": "৳2650.00",
    "description": "CeraVe Baby Moisturizing Cream is free of fragrance, paraben, dye and phthalates...",
    "category": "personal",
    "categoryDisplay": "Personal Care",
    "tags": "Skin Care, Cream, CeraVe"
  },
  {
    "name": "CeraVe Moisturizing Cream For Dry to Very Dry Skin 340gm",
    "image": "https://i.postimg.cc/QCHMWtVj/Cera-Ve-Moisturizing-Cream-For-Dry-to-Very-Dry-Skin-2.jpg",
    "price": "৳3700.00",
    "description": "Fragrance-free. Paraben-free. Oil Free. Allergy tested. Hypoallergenic. Non-comedogenic: will not clog pores. 24-hour hydration.",
    "category": "personal",
    "categoryDisplay": "Personal Care",
    "tags": "Skin Care, Cream, CeraVe"
  },
  {
    "name": "Cetaphil Daily Facial Cleanser – 237ml",
    "image": "https://i.postimg.cc/tJCxvpTc/Cetaphil-Daily-Facial-Cleanser-302993927358.avif",
    "price": "৳2150.00",
    "description": "This deep cleansing, gently foaming formula reinforces the skin's moisture barrier and is clinically tested to remove dirt and makeup.",
    "category": "personal",
    "categoryDisplay": "Personal Care",
    "tags": "Skin Care, Cleanser, Cetaphil"
  },
  {
    "name": "Cerave Acne Control Cleanser – 237ml",
    "image": "https://i.postimg.cc/mg68QpdR/Cera-Ve-Acne-Control-Cleanser-with-Salicylic-Acid-237-ml-Hretus-World.webp",
    "price": "৳3500.00",
    "description": "Oil-absorbing technology reduces excess shine. Gentle foaming formula cleanses without drying. Fragrance-free & paraben-free.",
    "category": "personal",
    "categoryDisplay": "Personal Care",
    "tags": "Skin Care, Cleanser, CeraVe"
  },
  {
    "name": "Himalaya Aloe vera Face Wash 100ml",
    "image": "https://i.postimg.cc/HLdXTk0W/176.jpg",
    "price": "৳375.00",
    "description": "The Himalaya Herbals face wash is formulated with soothing neem oil and turmeric. Neem oil targets dry skin and relives itchiness. It reduces irritation as well. Well known for its antimicrobial properties, neem oil treats redness and wounds, and prevents any infection. It gets rid of acne-causing bacteria from the root and improves the overall health and immunity of your skin to keep future acne or ulcers at bay.",
    "category": "personal",
    "categoryDisplay": "Personal Care",
    "tags": "Face Wash, Himalaya"
  },
  {
    "name": "YC Dead Sea Mud Whitening Face Wash 100ml",
    "image": "https://i.postimg.cc/9fGygxWv/YC-Dead-Sea-Mud-Whitening-Face-Wash-sku25336.jpg",
    "price": "৳375.00",
    "description": "YC Whitening Facial Dead Sea Mud with immediate therapeutic cooling, soothing and nourishing effects.",
    "category": "personal",
    "categoryDisplay": "Personal Care",
    "tags": "Face Wash, YC"
  },
  {
    "name": "Surf Excel Matic Top Load Detergent Liquid - 500ml",
    "image": "https://i.postimg.cc/MZP4hQxY/surf-excel-matic-top-load-detergent-liquid-500ml-paikaree.webp",
    "price": "৳1080.00",
    "description": "Matic Liquid Detergent effectively targets tough stains with powerful cleaning action.",
    "category": "detergent",
    "categoryDisplay": "Detergent",
    "tags": "Detergent, Liquid Detergent"
  },
  {
    "name": "Watsons Peach Scented Gel Body Wash 1000ml",
    "image": "https://i.postimg.cc/KjRF9hMb/Untitled-1-6.png",
    "price": "৳1685.00",
    "description": "Buy Watsons Peach Scented Gel Body Wash 1000ml online from Cellsii.com. Watsons Peach Scented Gel Body Wash thoroughly cleanses your body and helps your skin retain moisture. This refreshing gel body wash comes in a floral scent. It leaves your skin clean, soft, and smooth, for a relaxing feeling.",
    "category": "personal",
    "categoryDisplay": "Personal Care",
    "tags": "Body Wash, Watson, Peach"
  },
  {
    "name": "Boots Lavender Moisturizing Shower Cream - 1000ml",
    "image": "https://i.postimg.cc/vB1bhd9s/boots-lavender-moisturizing-shower-cream-1000ml-paikaree.webp",
    "price": "৳1850.00",
    "description": "Boots Lavender Moisturizing Shower Cream comes with a pH-balanced formula. This shower cream is 100% vegan. It comes with a moisturizing formula. This shower cream contains a soothing fragrance. It is enriched with a lavender scent. This shower cream is made with a creamy soft texture. It is a family pack. This is suitable for all types of skin. It cleanses all the dirt and greasy oil from the skin. This is formulated for adults only. It is unisex. This vegan shower cream soothes the skin and leaves the skin softer. It brightens up the skin and removes the tan. This shower cream provides a refreshing vibe. It is easy to use. This is suitable for daily use. It comes in a beautiful pumping bottle. The shower cream contains a lavender color and is attractive.",
    "category": "personal",
    "categoryDisplay": "Personal Care",
    "tags": "Shower Cream, Boots, Lavender"
  },
  {
    "name": "Boots Peony Moisturizing Shower Cream - 1000ml",
    "image": "https://i.postimg.cc/V5ytNByb/790082c2-d45a-46c5-9853-5d69987a8d37-large.jpg",
    "price": "৳1850.00",
    "description": "Boots Peony Moisturizing Shower Cream comes with a pH-balanced formula. This shower cream is 100% vegan. It comes with a moisturizing formula. This shower cream contains a soothing fragrance. It is enriched with a lavender scent. This shower cream is made with a creamy soft texture. It is a family pack. This is suitable for all types of skin. It cleanses all the dirt and greasy oil from the skin. This is formulated for adults only. It is unisex. This vegan shower cream soothes the skin and leaves the skin softer. It brightens up the skin and removes the tan. This shower cream provides a refreshing vibe. It is easy to use. This is suitable for daily use. It comes in a beautiful pumping bottle. The shower cream contains a lavender color and is attractive.",
    "category": "personal",
    "categoryDisplay": "Personal Care",
    "tags": "Shower Cream, Boots, Peony"
  },
  {
    "name": "Boots Rose Moisturizing Shower Cream - 1000ml",
    "image": "https://i.postimg.cc/bJ9Ynx2t/boots-rose-moisturizing-shower-cream-1000ml-paikaree.webp",
    "price": "৳1850.00",
    "description": "Boots Rose Moisturizing Shower Cream comes with a pH-balanced formula. This shower cream is 100% vegan. It comes with a moisturizing formula. This shower cream contains a soothing fragrance. It is enriched with a lavender scent. This shower cream is made with a creamy soft texture. It is a family pack. This is suitable for all types of skin. It cleanses all the dirt and greasy oil from the skin. This is formulated for adults only. It is unisex. This vegan shower cream soothes the skin and leaves the skin softer. It brightens up the skin and removes the tan. This shower cream provides a refreshing vibe. It is easy to use. This is suitable for daily use. It comes in a beautiful pumping bottle. The shower cream contains a lavender color and is attractive.",
    "category": "personal",
    "categoryDisplay": "Personal Care",
    "tags": "Shower Cream, Boots, Rose"
  },
  {
    "name": "Comfort White Fabric Conditioner 2ltr",
    "image": "https://i.postimg.cc/gj7ynWf1/9556126605953.webp",
    "price": "৳1080.00",
    "description": "Makes clothes comfortably soft and fresh. Helps achieve easier ironing. Leaves clothes static free.",
    "category": "detergent",
    "categoryDisplay": "Fabric Conditioner",
    "tags": "Detergent, Comfort"
  },
  {
    "name": "Pepsodent Toothpaste 190g",
    "image": "https://i.postimg.cc/ydJtMqpc/PEPS-CPGPT-200.webp",
    "price": "৳85.00",
    "description": "Advanced cavity protection formula for stronger teeth and fresh breath.",
    "category": "oral",
    "categoryDisplay": "Oral Care",
    "tags": "Toothpaste, Pepsodent"
  },
  {
    "name": "Himalaya Complete Care Toothpaste 100gm",
    "image": "https://i.postimg.cc/TPMr9n73/product-img-61b05cca795ca-COMPLETE-CARE-HERBAL-TOOTHPASTE.jpg",
    "price": "৳190.00",
    "description": "The new Himalaya Complete Care Toothpaste not only protects teeth and gums from germs, but also has antioxidants that assist in removing toxins, helping your gums maintain their natural health.\n\n👉herbal ingredients\n👉excellent for bleeding gums\n👉teeth all-day protection",
    "category": "oral",
    "categoryDisplay": "Oral Care",
    "tags": "Toothpaste, Himalaya"
  },
  {
    "name": "Kishwan Tea Toast 180gm",
    "image": "https://i.postimg.cc/zXPpBMkg/172517160266d40792016e8.png",
    "price": "৳50.00",
    "description": "Delicious, Fresh",
    "category": "snack",
    "categoryDisplay": "Biscuit",
    "tags": "Biscuit, Toast"
  },
  {
    "name": "Sunsilk Shampoo All Type 360ml",
    "image": "https://i.postimg.cc/bwXJTXJ9/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JQcm9kd-WN0-Qn-Jhbm-Qtc-GJf-Ym-Fubm-Vy-XC8x-MDA2-MTdc-Lz-Ew-MDYx-Ny1-Td-W5za-Wxr-LTR4.webp",
    "price": "৳590.00",
    "description": "Professional hair care for shine and nourishment. Suitable for all hair types.",
    "category": "shampoo",
    "categoryDisplay": "Hair Care",
    "tags": "Unilever, Sunsilk"
  },
  {
    "name": "Golden Harvest Red Wheat Rooti 20 Pieces 1200g",
    "image": "https://i.postimg.cc/pLbCzjgW/8941193400135.jpg",
    "price": "৳235.00",
    "description": "Fresh & Made With Pure Desi Red Wheat",
    "category": "frozen",
    "categoryDisplay": "Frozen",
    "tags": "Frozen, Golden Harvest"
  },
  {
    "name": "Essence Lash Princess Mascara All Flavor 12ml",
    "image": "https://i.postimg.cc/P5s28Znd/Essence-Lash-Princess-Mascara-1.webp",
    "price": "৳850.00",
    "description": "Essence Lash Princess Mascara is a beloved mascara known for its volumizing and lengthening effects on the lashes.",
    "category": "cosmetics",
    "categoryDisplay": "Cosmetic",
    "tags": "Cosmetics, Essence"
  },
  {
    "name": "Makeup Revolution Matte Fix Oil Control Fixing Spray 100ml",
    "image": "https://i.postimg.cc/7LgN8CvZ/1678272071.jpg",
    "price": "৳1250.00",
    "description": "The ultimate way to set and protect makeup.\nThe Revolution Fix Oil Fixing Spray Makeup is designed for a matte finish, preventing smudges and fading to keep makeup in place for up to 12 hours.",
    "category": "cosmetics",
    "categoryDisplay": "Cosmetic",
    "tags": "Makeup Fix"
  },
  {
    "name": "Revolution Makeup Glow Fixing Flashing Spray 100ml",
    "image": "https://i.postimg.cc/6qfMnYLR/normal-941337-big-5029066099730.jpg",
    "price": "৳1250.00",
    "description": "Reflective particles in the composition of the spray lie on the skin with a weightless veil, creating a soft natural aurora and illuminating it, and the special formula reliably fixes makeup and provides easy hydration.",
    "category": "cosmetics",
    "categoryDisplay": "Cosmetic",
    "tags": "Makeup Fix"
  },
  {
    "name": "Revolution Matte & Fix Primer 1 Pc",
    "image": "https://i.postimg.cc/1Rwc8CJY/makeup-revolution-04-1-jpg.webp",
    "price": "৳980.00",
    "description": "Revolution Matte & Fix Primer",
    "category": "cosmetics",
    "categoryDisplay": "Cosmetic",
    "tags": "Premier"
  },
  {
    "name": "Technic Dewy Setting Spray 30 ml",
    "image": "https://i.postimg.cc/7PnMfN7w/Technic-Dewy-Setting-Spray-30-ml-Technic-9a81d-478453.png",
    "price": "৳575.00",
    "description": "Setting & Finishing Spray",
    "category": "cosmetics",
    "categoryDisplay": "Cosmetic",
    "tags": "Cosmetics, Technic"
  },
  {
    "name": "Mayballine White Super Fresh White Pure Perlite SPF 8g",
    "image": "https://i.postimg.cc/KzMb0zPD/White-Superfresh-Coral-Compact-bd.jpg",
    "price": "৳250.00",
    "description": "Contains SPF 28 to protect your skin\nUV filters protects from sun darkening and damage\nPerlite, a pure mineral that visibly lightens complexion, while absorbing sweat and oil\nKeeps your complexion looking fresh for 12 hours and feels perfect all day long even in hot, humid weather\nSuperior puff and packaging",
    "category": "cosmetics",
    "categoryDisplay": "Cosmetic",
    "tags": "Cosmetics, Mayballine"
  },
  {
    "name": "Maybelline Superstay 24H Ivory Powder 9g",
    "image": "https://i.postimg.cc/QCqdqCDn/3600530854363-1.jpg",
    "price": "৳550.00",
    "description": "Maybelline Super Stay 24 hours waterproof face Powder resists shine, oil, sweat, heat and humidity. It features exclusive mircroflex formula contains silicon coated pigments that repel water oil and sweat all day. It is used for flawless coverage and shine control all day long. For best results apply with sponge applicator on to face. It can be use with or without foundation",
    "category": "cosmetics",
    "categoryDisplay": "Cosmetic",
    "tags": "Cosmetics, Mayballine"
  },
  {
    "name": "Imagic Concealer Medium Beige 1225 7g",
    "image": "https://i.postimg.cc/j2DMHwyR/IMAGIC-Concealer-Medium-Beige-1225.webp",
    "price": "৳350.00",
    "description": "Full concealer, natural and easy to apply, brighten,moisturizing,long lasting,gives you flawless skin.\nFace flaws,effectively cover facial flaws,ances,scars,freckles and so on.\nEyes base makeup,cover dark circles,moist and thin, persistent docile",
    "category": "cosmetics",
    "categoryDisplay": "Cosmetic",
    "tags": "Cosmetics, Imagic"
  },
  {
    "name": "Imagic Studio Fix Powder Plus Foundation 15g",
    "image": "https://i.postimg.cc/tTNsB2t5/Imagic-Face-Powder-Shade-1.avif",
    "price": "৳450.00",
    "description": "✨ফেস এর এক্সট্রা অয়েল কন্ট্রোল করে।\n✨ফেইসে কোনো প্রকার স্পট থাকলে খুব সুন্দর ভাবে কভার করে..\n✨বিবি ক্রিমের উপরে হালকা করে দিলে ফুল কভারেজ একটা লুক আসে..\n✨Face একদমই ঘামায় না এটা দিলে.. আর হালকা ঘামালেও এটা মুছে যায় না..\n✨ফাইন লাইন্স,পোরস,আনইভেনটোন খুব সুন্দর করে হাইড করে...\n✨Matte একদম স্মুথ একটা লুক দিবে...\n✨সহজে স্কিনে মিশে যায়, মুখে কেকি ভাব আনে না\n✨পারফেক্ট মেকআপ লুক দিবে।\n✨হাই কোয়ালিটি সম্পন্ন ফেস পাউডার ।\n✨সব ধরণের ত্বকের উপযোগী।",
    "category": "cosmetics",
    "categoryDisplay": "Cosmetic",
    "tags": "Cosmetics, Imagic"
  },
  {
    "name": "Kiss Beauty Bananas 24h Glow Up Face Primer 35ml",
    "image": "https://i.postimg.cc/JnmpYN2q/AT-001294-1.jpg",
    "price": "৳600.00",
    "description": "First yellow facial that illuminates and unifies the skin tone. Cover the imperfections and create a perfect canvas for makeup. Get perfect, bright skin with this first facial.",
    "category": "cosmetics",
    "categoryDisplay": "Cosmetic",
    "tags": "Kiss Beauty"
  },
  {
    "name": "Karite Velvet Lip Gloss 1 Pc",
    "image": "https://i.postimg.cc/L6bMdxPN/Untitled-design.png",
    "price": "৳150.00",
    "description": "💄Karite velvet lipgloss matte\n💄Long-lasting waterproof\n💄8 shades available\n💄lightweight and moisturizing, soft texture\n💄Natural with high pigment, uniform and full colors\n💄Long-lasting, waterproof formula, color stay all day",
    "category": "cosmetics",
    "categoryDisplay": "Cosmetic",
    "tags": "Kiss Beauty"
  },
  {
    "name": "L.A. Girl L A Girl Setting Spray Fix&Set 80ml",
    "image": "https://i.postimg.cc/zf1fMvS7/SETTSPRAY-1400x1400.jpg",
    "price": "৳800.00",
    "description": "L.A. Girl Fix & Set Setting Spray is designed to help you achieve a beautiful, radiant look that lasts all day long. Whether you're prepping your skin for makeup or setting your finished look, this versatile spray makes it easy to enhance your beauty routine",
    "category": "cosmetics",
    "categoryDisplay": "Cosmetic",
    "tags": "Setting Spray, L.A Girl"
  },
  {
    "name": "Maggi 2 Min 8 Pack 496gm With 2 Pcs Free",
    "image": "https://i.postimg.cc/vTCGxP2z/485044809-973988864825802-6574764279868820392-n.jpg",
    "price": "৳180.00",
    "description": "যাগী মাসালা নুডল্‌স ৮ টির প্যাকেট কিনলেই পাচ্ছেন আরও ২টি প্যাক ফ্রী! অফার থাকতে বুঝে নিন।\n*প্রতিটি ম্যাগী মাসালা ইনস্ট্যান্ট নুডল্‌স ৪৯৬ গ্রামের প্যাকের সাথে পাচ্ছেন ২টি ম্যাগী ইনস্ট্যান্ট নুডল্‌স ৬২ গ্রাম প্যাক। সাশ্রয় ৪৩.৭৫ টাকা।",
    "category": "breakfast",
    "categoryDisplay": "Break Fast Item",
    "tags": "Maggi, Noodles"
  },
  {
    "name": "Samyang Ramen All Flavor Variety Combo – Total 5 pack (1 Pack each)",
    "image": "https://i.postimg.cc/x85FP1v6/s-l1600.png",
    "price": "৳1050.00",
    "description": "Samyang Ramen All Flavor Variety Combo – Total 5 packs (1 Pack each) Fried Noodles Bundle with 5 ALL for you",
    "category": "breakfast",
    "categoryDisplay": "Break Fast Items",
    "tags": "Samyang, Noodles"
  },
  {
    "name": "Samyang Ramen All Flavor Variety – 1 Pc 140g",
    "image": "https://i.postimg.cc/cHjpnHcw/Combo.jpg",
    "price": "৳220.00",
    "description": "Samyang Ramen All Flavor Variety – Single Piece Noodles 140g each",
    "category": "breakfast",
    "categoryDisplay": "Break Fast Items",
    "tags": "Samyang, Noodles"
  }
];

// Load products from embedded data instead of external JSON
function loadProducts() {
  try {
    const productsContainer = document.getElementById('productsContainer');
    if (!productsContainer) {
      console.error('Products container not found');
      return;
    }
    
    productsContainer.innerHTML = '';
    
    productsData.forEach(product => {
      const productElement = document.createElement('div');
      productElement.className = 'product fade-in';
      productElement.setAttribute('data-category', product.category);
      
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}" onclick="openModal(this)" loading="lazy">
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
    setTimeout(() => {
      filterProducts('gifts');
    }, 100);
    
    // Add intersection observer for animations
    setupIntersectionObserver();
    
  } catch (error) {
    console.error('Error loading products:', error);
  }
}

// Setup intersection observer for animations
function setupIntersectionObserver() {
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

// Setup modal event listeners
function setupModal() {
  const closeBtn = document.querySelector(".close");
  if (closeBtn) {
    closeBtn.onclick = closeModal;
  }

  window.onclick = function(event) {
    const modal = document.getElementById("imageModal");
    if (event.target == modal) {
      closeModal();
    }
  }

  document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
      closeModal();
    }
  });
}

// Search functionality
function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  const noResultsMessage = document.querySelector('.no-results');

  if (!searchInput || !noResultsMessage) {
    console.error('Search elements not found');
    return;
  }

  function performSearch(searchTerm) {
    const allProducts = document.querySelectorAll('.product');
    let hasResults = false;
    
    allProducts.forEach(product => {
      const productName = product.querySelector('p')?.textContent.toLowerCase() || '';
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
        const onclickAttr = activeCategory.getAttribute('onclick');
        if (onclickAttr) {
          const match = onclickAttr.match(/'([^']+)'/);
          if (match) {
            const category = match[1];
            filterProducts(category);
          }
        }
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
  const targetCategory = document.querySelector(`.sidebar li[onclick="filterProducts('${category}')"]`);
  if (targetCategory) {
    targetCategory.classList.add('active');
  }
  
  // Clear search input when switching categories
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.value = '';
  }
  
  const noResultsMessage = document.querySelector('.no-results');
  if (noResultsMessage) {
    noResultsMessage.style.display = 'none';
  }
}

// Auto-play background music
function setupAudio() {
  const audio = document.getElementById('backgroundAudio');
  if (!audio) return;
  
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

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing...');
  
  // Add smooth scroll behavior
  document.documentElement.style.scrollBehavior = 'smooth';
  
  // Initialize all functions
  loadProducts();
  setupSearch();
  setupModal();
  setupAudio();
});

// Make filterProducts globally accessible
window.filterProducts = filterProducts;
window.openModal = openModal;
