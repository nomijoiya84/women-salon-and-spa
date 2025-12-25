// Main JS
document.addEventListener('DOMContentLoaded', () => {
    console.log('Elegance Salon Website Loaded');

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Booking Form Submission
    const bookingForm = document.getElementById('appointmentForm');
    const bookingMessage = document.getElementById('bookingMessage');

    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simple visual feedback
            bookingForm.classList.add('hidden');
            bookingMessage.classList.remove('hidden');

            // Reset form
            bookingForm.reset();
        });
    }

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('is-active');
        });
    }

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('is-active');
        });
    });

    // Chatbot Logic
    const chatBubble = document.getElementById('chatbot-bubble');
    const chatWindow = document.getElementById('chat-window');
    const closeChat = document.getElementById('close-chat');
    const sendChat = document.getElementById('send-chat');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    const responses = {
        "hello": "Assalam-o-Alaikum! Elegance Salon & Spa mein khush amdeed. Main apki kya madad kar sakti hoon?",
        "hi": "Hello! Welcome to Elegance. Hum hair, beauty, aur bridal makeup explore kar saktay hain. Main apki kaisay help karoon?",
        "price": "Humari hair services PKR 2,500+, beauty PKR 500+, aur makeup PKR 7,000 se shuru hoti hain. Bridal makeup PKR 35,000 ka hai. Mazeed details ke liye 'Services' section check karein.",
        "hair": "Hair cuts PKR 2,500, Coloring PKR 8,000, aur Protein treatments PKR 5,000 se start hotay hain. Specials mein Keratin/Rebonding bhi mojood hai.",
        "facial": "Humaray paas Signature Facial PKR 4,500 ka hai. Skin glow ke liye ye best choice hai!",
        "makeup": "Hum Party makeup (7k), Engagement (15k), aur Bridal makeup (35k) provide kartay hain. North Nazimabad mein top quality guarantee hai.",
        "location": "Humara address: Bungalow # E-59/2, Block, North Nazimabad Town, Karachi. Saifee aur Zia-ud-Din Hospital ke darmiyan.",
        "timing": "Elegance Salon rozana subah 10:30 se raat 8:30 PM tak open hota hai. Sunday ko bhi hum available hain!",
        "booking": "Booking bohot asaan hai! Website par form bharein ya humein direct +92 330 3450123 par call/WhatsApp karein.",
        "whatsapp": "G bilkul, aap humein +92 330 3450123 par WhatsApp kar saktay hain fast booking ke liye.",
        "service": "Hum hair care, skincare (facials), waxing, threading, mani-pedi, aur professional makeup transformations provide kartay hain.",
        "bridal": "Bridal packages PKR 35,000 se shuru hotay hain. Is mein appointment lazmi hai.",
        "products": "Hum sirf high-quality aur premium international brands ke products use kartay hain jo apki skin aur hair ke liye best hain.",
        "staff": "Elegance mein sirf trained aur expert female staff kaam karta hai, taakay aap comfortable rahein.",
        "holiday": "Humaray timings public holidays (jesay Quaid-e-Azam Day/Christmas) par badal saktay hain. Confirm karne ke liye call karlein.",
        "default": "Maaf kijiye, mujhe samajh nahi aya. Kya aap 'prices', 'location', 'bridal' ya 'booking' ke baray mein poochna chahti hain?"
    };

    if (chatBubble) {
        chatBubble.addEventListener('click', () => {
            chatWindow.classList.toggle('hidden');
        });
    }

    if (closeChat) {
        closeChat.addEventListener('click', () => {
            chatWindow.classList.add('hidden');
        });
    }

    function addMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${sender}`;
        msgDiv.innerText = text;
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function handleChat() {
        const text = chatInput.value.toLowerCase().trim();
        if (!text) return;

        addMessage(chatInput.value, 'user');
        chatInput.value = '';

        setTimeout(() => {
            let response = responses["default"];
            for (let key in responses) {
                if (text.includes(key)) {
                    response = responses[key];
                    break;
                }
            }
            addMessage(response, 'bot');
        }, 500);
    }

    if (sendChat) {
        sendChat.addEventListener('click', handleChat);
    }

    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleChat();
        });
    }

    // Sticky Header & Back to Top Button
    const header = document.getElementById('header');
    const backToTop = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        // Clear header logic
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.padding = '0';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        }

        // Back to Top logic
        if (window.scrollY > 500) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
