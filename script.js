

// Global Variables
let currentSection = 'landing';
let cart = [];
let orders = [];
let menuItems = [];

// Sample Menu Data
const sampleMenuItems = [
    {
        "id": 1,
        "name": "Classic Burger",
        "description": "Juicy beef patty with fresh lettuce, tomatoes, and special sauce",
        "price": 149,
        "image": "assets/1.webp",
        "category": "main-course",
        "type": "non-veg",
        "spiceLevel": "mild"
    },
    {
        "id": 2,
        "name": "Margherita Pizza",
        "description": "Fresh mozzarella, tomatoes, and basil on crispy pizza base",
        "price": 199,
        "image": "assets/2.webp",
        "category": "main-course",
        "type": "veg",
        "spiceLevel": "mild"
    },
    {
        "id": 3,
        "name": "Samosa",
        "description": "Crispy fried pastry filled with spiced potatoes and peas",
        "price": 25,
        "image": "assets/3.webp",
        "category": "snacks",
        "type": "veg",
        "spiceLevel": "medium"
    },
    {
        "id": 4,
        "name": "Masala Chai",
        "description": "Traditional Indian spiced tea with milk and aromatic spices",
        "price": 15,
        "image": "assets/4.webp",
        "category": "beverages",
        "type": "veg",
        "spiceLevel": "mild"
    },
    {
        "id": 5,
        "name": "Chicken Biryani",
        "description": "Aromatic basmati rice with tender chicken and traditional spices",
        "price": 179,
        "image": "assets/5.webp",
        "category": "main-course",
        "type": "non-veg",
        "spiceLevel": "hot"
    },
    {
        "id": 6,
        "name": "Cold Coffee",
        "description": "Refreshing iced coffee with whipped cream and chocolate",
        "price": 65,
        "image": "assets/6.webp",
        "category": "beverages",
        "type": "veg",
        "spiceLevel": "mild"
    },
    {
        "id": 7,
        "name": "Paneer Tikka",
        "description": "Grilled cottage cheese cubes marinated in spices and yogurt",
        "price": 129,
        "image": "assets/7.webp",
        "category": "snacks",
        "type": "veg",
        "spiceLevel": "medium"
    },
    {
        "id": 8,
        "name": "Chicken Wings",
        "description": "Spicy grilled chicken wings with BBQ sauce",
        "price": 159,
        "image": "assets/8.webp",
        "category": "snacks",
        "type": "non-veg",
        "spiceLevel": "hot"
    },
    {
        "id": 9,
        "name": "Fresh Lime Soda",
        "description": "Refreshing lime soda with mint and soda water",
        "price": 35,
        "image": "assets/9.webp",
        "category": "beverages",
        "type": "veg",
        "spiceLevel": "mild"
    },
    {
        "id": 10,
        "name": "Veg Sandwich",
        "description": "Grilled sandwich with fresh vegetables and cheese",
        "price": 89,
        "image": "assets/10.webp",
        "category": "snacks",
        "type": "veg",
        "spiceLevel": "mild"
    },
    {
        "id": 11,
        "name": "Butter Chicken",
        "description": "Creamy tomato-based curry with tender chicken pieces",
        "price": 189,
        "image": "assets/11.webp",
        "category": "main-course",
        "type": "non-veg",
        "spiceLevel": "medium"
    },
    {
        "id": 12,
        "name": "Pasta Alfredo",
        "description": "Pasta in creamy Alfredo sauce with herbs and cheese",
        "price": 159,
        "image": "assets/12.webp",
        "category": "main-course",
        "type": "veg",
        "spiceLevel": "mild"
    },
    {
        "id": 13,
        "name": "Cheese Garlic Bread",
        "description": "Toasted bread loaded with garlic butter and melted cheese",
        "price": 69,
        "image": "assets/13.webp",
        "category": "snacks",
        "type": "veg",
        "spiceLevel": "mild"
    },
    {
        "id": 14,
        "name": "Tandoori Momos",
        "description": "Spicy grilled dumplings with a smoky tandoori flavor",
        "price": 109,
        "image": "assets/14.webp",
        "category": "snacks",
        "type": "non-veg",
        "spiceLevel": "hot"
    },
    {
        "id": 15,
        "name": "Virgin Mojito",
        "description": "Cool mint and lime refresher with soda and crushed ice",
        "price": 55,
        "image": "assets/15.webp",
        "category": "beverages",
        "type": "veg",
        "spiceLevel": "mild"
    },
    {
        "id": 16,
        "name": "Strawberry Milkshake",
        "description": "Chilled milkshake with fresh strawberries and cream",
        "price": 75,
        "image": "assets/16.webp",
        "category": "beverages",
        "type": "veg",
        "spiceLevel": "mild"
    },
    {
        "id": 17,
        "name": "Chocolate Brownie",
        "description": "Fudgy chocolate brownie with a crispy top and soft center",
        "price": 60,
        "image": "assets/17.webp",
        "category": "dessert",
        "type": "veg",
        "spiceLevel": "mild"
    },
    {
        "id": 18,
        "name": "Gulab Jamun",
        "description": "Sweet Indian dessert made of milk solids soaked in syrup",
        "price": 45,
        "image": "assets/18.webp",
        "category": "dessert",
        "type": "veg",
        "spiceLevel": "mild"
    },
    {
        "id": 19,
        "name": "Veg Pulao",
        "description": "Aromatic rice dish cooked with vegetables and mild spices",
        "price": 139,
        "image": "assets/19.webp",
        "category": "main-course",
        "type": "veg",
        "spiceLevel": "mild"
    },
    {
        "id": 20,
        "name": "Crispy Corn",
        "description": "Deep-fried golden corn tossed in tangy spices",
        "price": 99,
        "image": "assets/20.webp",
        "category": "snacks",
        "type": "veg",
        "spiceLevel": "medium"
    },
    {
        "id": 21,
        "name": "Oreo Kulfi",
        "description": "Creamy traditional Indian kulfi blended with Oreo chunks",
        "price": 70,
        "image": "assets/21.webp",
        "category": "dessert",
        "type": "veg",
        "spiceLevel": "mild"
    }

];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    menuItems = [...sampleMenuItems];
    loadDataFromStorage();
    setupEventListeners();
    setupScrollObserver();
    showSection('landing');
    renderMenuItems();
    updateCartUI();
    renderOrders();
}

// Storage Functions - Enhanced to use localStorage
function saveToStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
}

function loadFromStorage(key, defaultValue = []) {
    try {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : defaultValue;
    } catch (error) {
        console.error('Error loading from localStorage:', error);
        return defaultValue;
    }
}

function saveCartToStorage() {
    saveToStorage('campusCanteen_cart', cart);
}

function saveOrdersToStorage() {
    saveToStorage('campusCanteen_orders', orders);
}

function loadDataFromStorage() {
    cart = loadFromStorage('campusCanteen_cart', []);
    orders = loadFromStorage('campusCanteen_orders', []);
}

// Event Listeners Setup - Enhanced
function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', handleNavigation);
    });

    // Cart
    document.getElementById('cart-icon').addEventListener('click', toggleCart);
    document.getElementById('close-cart-btn').addEventListener('click', closeCart);
    document.getElementById('place-order-btn').addEventListener('click', placeOrder);

    // Search and filters with debouncing
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleSearch, 300));
    }
    
    document.getElementById('filter-category').addEventListener('change', handleFilter);
    document.getElementById('filter-veg').addEventListener('change', handleFilter);
    document.getElementById('filter-spicy').addEventListener('change', handleFilter);

    // Footer links
    document.querySelectorAll('.footer-section a[data-section]').forEach(link => {
        link.addEventListener('click', handleNavigation);
    });

    // Prevent cart modal from closing when clicking inside
    document.getElementById('cart-modal').addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Close cart when clicking outside
    document.addEventListener('click', function(e) {
        const cartModal = document.getElementById('cart-modal');
        const cartIcon = document.getElementById('cart-icon');
        
        if (!cartModal.contains(e.target) && 
            !cartIcon.contains(e.target) && 
            !cartModal.classList.contains('hidden')) {
            closeCart();
        }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeCart();
            closeAnyModals();
        }
    });
}

// Scroll Observer for Active Navigation
function setupScrollObserver() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observerOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id.replace('-section', '');
                updateActiveNavLink(sectionId);
                currentSection = sectionId;
                updatePageTitle(sectionId);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
}

// Navigation Functions - Enhanced
function handleNavigation(e) {
    // e.preventDefault();
    const targetSection = e.target.getAttribute('data-section');
    if (targetSection) {
        showSection(targetSection);
    }

    e.preventDefault();
}

document.getElementById('order-btn').addEventListener('click', function() {
    if (currentSection !== 'menu') {
        showSection('menu');
    } else {
        toggleCart();
    }
});

function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
    });

    // Show target section
    const targetSection = document.getElementById(`${sectionName}-section`);
    if (targetSection) {
        targetSection.classList.remove('hidden');
        currentSection = sectionName;
        
        // Update active nav link
        updateActiveNavLinkBySection(sectionName);
        
        // Update page title
        updatePageTitle(sectionName);
        
        // Render section-specific content
        switch(sectionName) {
            case 'menu':
                renderMenuItems();
                break;
            case 'orders':
                renderOrders();
                break;
        }

        // scroll to respective section
        window.scrollTo({ top: targetSection.offsetTop, behavior: 'smooth' });
        // Close cart if open
        closeCart();
    }
}

function updateActiveNavLink(sectionName) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === sectionName) {
            link.classList.add('active');
        }
    });
}

function updateActiveNavLinkBySection(sectionName) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === sectionName) {
            link.classList.add('active');
        }
    });
}

function updatePageTitle(section) {
    const titles = {
        landing: 'CampusCanteen - Food Ordering',
        menu: 'Menu - CampusCanteen',
        orders: 'My Orders - CampusCanteen'
    };
    document.title = titles[section] || 'CampusCanteen';
}

// Menu Functions - Enhanced
function renderMenuItems(items = menuItems) {
    const menuContainer = document.getElementById('menu-items');
    if (!menuContainer) return;
    
    if (items.length === 0) {
        menuContainer.innerHTML = `
            <div class="no-items">
                <i class="fas fa-search" style="font-size: 3rem; color: #adb5bd; margin-bottom: 1rem;"></i>
                <h3>No items found</h3>
                <p>Try adjusting your search or filters</p>
            </div>
        `;
        return;
    }

    menuContainer.innerHTML = items.map(item => `
        <div class="menu-item" data-item-id="${item.id}">
            <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x300?text=Food+Image'">
            <div class="menu-item-badge ${item.type}-badge">
                <i class="fas fa-circle"></i>
                ${item.type === 'veg' ? 'Veg' : 'Non-Veg'}
            </div>
            <div class="menu-item-details">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="menu-item-info">
                    <span class="menu-item-price">₹${item.price}</span>
                    ${item.spiceLevel !== 'mild' ? `
                        <span class="spicy-badge">
                            <i class="fas fa-pepper-hot"></i>
                            ${item.spiceLevel}
                        </span>
                    ` : ''}
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${item.id})">
                    <i class="fas fa-plus"></i>
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');

    // Add animation delay to items
    const menuItemElements = menuContainer.querySelectorAll('.menu-item');
    menuItemElements.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('fade-in');
    });
}

function handleSearch() {
    applyFilters();
}

function handleFilter() {
    applyFilters();
}

function applyFilters() {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const categoryFilter = document.getElementById('filter-category').value;
    const vegFilter = document.getElementById('filter-veg').value;
    const spicyFilter = document.getElementById('filter-spicy').value;

    let filteredItems = menuItems.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm) || 
                            item.description.toLowerCase().includes(searchTerm);
        const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
        const matchesType = vegFilter === 'all' || item.type === vegFilter;
        const matchesSpice = spicyFilter === 'all' || item.spiceLevel === spicyFilter;

        return matchesSearch && matchesCategory && matchesType && matchesSpice;
    });

    renderMenuItems(filteredItems);
}

// Cart Functions - Enhanced with proper event handling
function addToCart(itemId) {
    const item = menuItems.find(item => item.id === itemId);
    if (!item) return;

    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...item,
            quantity: 1
        });
    }

    saveCartToStorage();
    updateCartUI();
    showToast('Item added to cart!', 'success');
    
    // Add animation to cart icon
    animateCartIcon();
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCartToStorage();
    updateCartUI();
    renderCartItems();
    showToast('Item removed from cart', 'success');
}

function updateQuantity(itemId, change, event) {
    // Prevent event bubbling to avoid closing cart
    if (event) {
        event.stopPropagation();
        event.preventDefault();
    }
    
    const item = cart.find(cartItem => cartItem.id === itemId);
    if (!item) return;

    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(itemId);
        return;
    }

    saveCartToStorage();
    updateCartUI();
    renderCartItems();
}

function updateCartUI() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    const cartCountElement = document.querySelector('.cart-count');
    const cartTotalElement = document.getElementById('cart-total');
    
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
        cartCountElement.style.display = cartCount > 0 ? 'flex' : 'none';
    }
    
    if (cartTotalElement) {
        cartTotalElement.textContent = `₹${cartTotal}`;
    }
}

function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    const isHidden = cartModal.classList.contains('hidden');
    
    if (isHidden) {
        openCart();
    } else {
        closeCart();
    }
}

function openCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.classList.remove('hidden');
    renderCartItems();
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart" style="font-size: 3rem; color: #adb5bd; margin-bottom: 1rem;"></i>
                <h3>Your cart is empty</h3>
                <p>Add some delicious items to get started!</p>
                <button id="order-btn" class="cta-button" onclick="browseMenu()">
                    Browse Menu
                </button>
            </div>
        `;
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/80x80?text=Food'">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>₹${item.price}</p>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1, event)">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1, event)">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})" 
                    style="color: #ff7675; border: none; background: none; font-size: 1.2rem; cursor: pointer;"
                    title="Remove item">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
}

function browseMenu() {
    closeCart();
    showSection('menu');
}

function placeOrder() {
    if (cart.length === 0) {
        showToast('Your cart is empty!', 'error');
        return;
    }

    const order = {
        id: generateOrderId(),
        items: [...cart],
        total: cart.reduce((total, item) => total + (item.price * item.quantity), 0),
        status: 'pending',
        timestamp: new Date().toISOString(),
    };

    orders.push(order);
    saveOrdersToStorage();

    // Clear cart
    cart = [];
    saveCartToStorage();
    updateCartUI();
    closeCart();

    // Show confirmation
    showOrderConfirmation(order);
    
    // Simulate order processing
    setTimeout(() => {
        updateOrderStatus(order.id, 'preparing');
    }, 3000);
    
    setTimeout(() => {
        updateOrderStatus(order.id, 'ready');
   
    }, 20000); // Half the estimated time
    
    setTimeout(() => {
        updateOrderStatus(order.id, 'completed');
    
    },  30000);
}

function generateOrderId() {
    return 'ORD' + Date.now().toString().slice(-6) + Math.floor(Math.random() * 100).toString().padStart(2, '0');
}

function showOrderConfirmation(order) {
    const modal = document.createElement('div');
    modal.className = 'order-confirmation-modal';
    modal.innerHTML = `
        <div class="confirmation-content">
            <div class="success-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h2>Order Placed Successfully!</h2>
            <p>Order ID: <strong>${order.id}</strong></p>
            <p>Total: <strong>₹${order.total}</strong></p>
            <p>Estimated Time: <strong>${order.estimatedTime} minutes</strong></p>
            <div class="confirmation-buttons">
                <button class="cta-button" onclick="viewOrders(); this.parentElement.parentElement.parentElement.remove();">
                    View Orders
                </button>
                <button class="cta-button" onclick="viewOrders(); this.parentElement.parentElement.parentElement.remove();" 
                        style="background: #6c757d; margin-left: 1rem;">
                    Close
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Auto remove after 10 seconds
    setTimeout(() => {
        if (modal.parentElement) {
            modal.remove();
        }
    }, 10000);
}

function viewOrders() {
    showSection('orders');
}

// Orders Functions - Enhanced
function renderOrders() {
    const ordersContainer = document.getElementById('orders-list');
    if (!ordersContainer) return;
    
    if (orders.length === 0) {
        ordersContainer.innerHTML = `
            <div class="no-orders">
                <i class="fas fa-receipt" style="font-size: 3rem; color: #adb5bd; margin-bottom: 1rem;"></i>
                <h3>No orders yet</h3>
                <p>Place your first order to see it here!</p>
                <button class="cta-button" onclick="showSection('menu')">
                    Browse Menu
                </button>
            </div>
        `;
        return;
    }

    // Sort orders by timestamp (newest first)
    const sortedOrders = [...orders].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    ordersContainer.innerHTML = `
        ${sortedOrders.map(order => `
            <div class="order-card">
                <div class="order-header">
                    <div class="order-id">Order #${order.id}</div>
                    <div class="order-status status-${order.status}">
                        <i class="fas fa-${getStatusIcon(order.status)}"></i>
                        ${order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </div>
                </div>
                <div class="order-items">
                    ${order.items.map(item => `
                        <div class="order-item">
                            <div class="order-item-details">
                                <strong>${item.name}</strong>
                                <span>Qty: ${item.quantity}</span>
                            </div>
                            <div class="order-item-price">₹${item.price * item.quantity}</div>
                        </div>
                    `).join('')}
                </div>
                <div class="order-total">
                    <div class="order-time">
                        <i class="fas fa-calendar-alt"></i>
                        ${formatDateTime(order.timestamp)}
                    </div>
                    <div class="total-amount">Total: ₹${order.total}</div>
                </div>
            </div>
        `).join('')}
        <div style="text-align: center; margin-top: 2rem;">
            <button onclick="clearOrderHistory()" class="order-action-btn" style="background: #ff7675; color: white;">
                <i class="fas fa-trash"></i> Clear History
            </button>
        </div>
    `;
}

function getStatusIcon(status) {
    const icons = {
        pending: 'clock',
        preparing: 'fire',
        ready: 'bell',
        completed: 'check-circle'
    };
    return icons[status] || 'clock';
}

function updateOrderStatus(orderId, newStatus) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        order.status = newStatus;
        saveOrdersToStorage();
        
        if (currentSection === 'orders') {
            renderOrders();
        }
        
        const statusMessages = {
            preparing: 'is now being prepared',
            ready: 'is ready for pickup',
            completed: 'has been completed'
        };
        
        showToast(`Order #${orderId} ${statusMessages[newStatus] || 'status updated'}!`, 'success');
    }
}

// Utility Functions - Enhanced
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    toast.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        ${message}
    `;
    toast.className = `toast ${type}`;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function animateCartIcon() {
    const cartIcon = document.getElementById('cart-icon');
    if (!cartIcon) return;
    
    cartIcon.style.animation = 'none';
    setTimeout(() => {
        cartIcon.style.animation = 'pulse 0.5s ease-in-out';
    }, 10);
}

function formatDateTime(timestamp) {
    const date = new Date(timestamp);
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return date.toLocaleDateString('en-US', options);
}

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

function closeAnyModals() {
    // Close order confirmation modals
    document.querySelectorAll('.order-confirmation-modal').forEach(modal => {
        modal.remove();
    });
}

// Enhanced Performance and Animations
function addFloatingAnimation() {
    const cards = document.querySelectorAll('.feature-card, .menu-item');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('floating');
    });
}

// Window event listeners - Enhanced
window.addEventListener('resize', debounce(() => {
    if (window.innerWidth <= 768) {
        closeCart();
    }
}, 250));

window.addEventListener('beforeunload', () => {
    saveCartToStorage();
    saveOrdersToStorage();
});

window.addEventListener('load', () => {
    addFloatingAnimation();
    
    // Initialize tooltips or other UI enhancements
    initializeUIEnhancements();
});

function initializeUIEnhancements() {
    // Add loading states, tooltips, etc.
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
}

// Error Handling
window.addEventListener('error', function(e) {
    console.error('Application error:', e.error);
    showToast('Something went wrong. Please try again.', 'error');
});

// Export functions for global access
window.showSection = showSection;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.toggleCart = toggleCart;
window.closeCart = closeCart;
window.placeOrder = placeOrder;
window.browseMenu = browseMenu;
window.viewOrders = viewOrders;


if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}
// Add this function to clear order history
function clearOrderHistory() {
    orders = [];
    saveOrdersToStorage();
    if (currentSection === 'orders') {
        renderOrders();
    }
    showToast('Order history cleared successfully', 'success');
}