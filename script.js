// ==========================================
// ১. SEARCH BUTTON EVENT (সার্চের কাজ)
// ==========================================
document.querySelector('.search-box button').addEventListener('click', function() {
    const query = document.querySelector('.search-box input').value;
    if(query) {
        alert('Searching for: ' + query);
    } else {
        alert('Please enter a product name to search!');
    }
});

// ==========================================
// ২. ADD TO CART FUNCTION (কার্ট কাউন্টার আপডেট)
// ==========================================
// কার্ট আইটেম কাউন্ট রাখার ভ্যারিয়েবল
let cartCount = 0;

function addToCart(productName) {
    // কার্ট সংখ্যা ১ বৃদ্ধি করা
    cartCount++;
    
    // নেভবারের কার্ট আইডি (cart-count) ধরে কাউন্ট পরিবর্তন করা
    const cartBadge = document.getElementById('cart-count');
    cartBadge.textContent = cartCount;

    // ব্যবহারকারীকে একটি নোটিফিকেশন মেসেজ দেখানো
    alert(productName + ' - এটি আপনার কার্টে যোগ করা হয়েছে!');
}
// ==========================================
// ৩. NEWSLETTER SUBSCRIPTION FUNCTION
// ==========================================
function subscribeNewsletter() {
    const emailInput = document.getElementById('newsletter-email');
    if (emailInput.value) {
        alert('Thank you for subscribing to GadgetPulse updates!');
        emailInput.value = ''; // ফর্ম খালি করা
    }
}
// ১. থাম্বনেল ইমেজে ক্লিক করলে মূল ছবি পরিবর্তন
function changeImage(src) {
    document.getElementById('featured-image').src = src;
    document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
    event.target.classList.add('active');
}

// ২. পরিমাণ কম-বেশি করার ফাংশন
function changeQty(amount) {
    const qtyInput = document.getElementById('item-qty');
    let currentQty = parseInt(qtyInput.value);
    currentQty += amount;
    if (currentQty >= 1) {
        qtyInput.value = currentQty;
    }
}

// ৩. কালার নির্বাচন
function selectColor(element) {
    document.querySelectorAll('.color-btn').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
}

// ৪. ট্যাবস স্যুইচ করা
function openTab(evt, tabId) {
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    evt.currentTarget.classList.add('active');
}
// ১. কার্ট থেকে আইটেম রিমুভ করা
function removeCartItem(button) {
    const row = button.closest('tr');
    row.remove();
    // প্রয়োজনে কার্ট টোটাল পুনরায় হিসাব করতে পারো
}

// ২. কার্টের ভেতরে কোয়ান্টিটি আপডেট করা
function updateCartQty(button, change) {
    const input = button.parentElement.querySelector('input');
    let currentQty = parseInt(input.value);
    currentQty += change;
    
    if (currentQty >= 1) {
        input.value = currentQty;
    }
}
// ১. পেমেন্ট মেথড সিলেক্ট করার ফাংশন
function selectPayment(radio) {
    document.querySelectorAll('.payment-card').forEach(card => card.classList.remove('active'));
    radio.closest('.payment-card').classList.add('active');
}

// ২. অর্ডার সাবমিট হ্যান্ডলার
function handleOrderSubmit(event) {
    event.preventDefault(); // পেজ রিলোড বন্ধ করা
    
    const name = document.getElementById('fname').value;
    alert(`ধন্যবাদ ${name}! আপনার অর্ডারটি সফলভাবে গ্রহণ করা হয়েছে।`);
    
    // হোম পেজে নিয়ে যাওয়া
    window.location.href = 'index.html';
}