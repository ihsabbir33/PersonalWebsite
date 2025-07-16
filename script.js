document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission
    const form = document.getElementById('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            // For demonstration, we'll just show an alert
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
        });
    }
    
    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.fade-in');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initialize animations
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
    
    // Add animation classes to elements
    document.querySelectorAll('.hero-content > *').forEach((el, i) => {
        el.classList.add('fade-in', `delay-${i}`);
    });
    
    document.querySelectorAll('.highlight-item').forEach((el, i) => {
        el.classList.add('fade-in', `delay-${i + 1}`);
    });
    
    document.querySelectorAll('.project-card').forEach((el, i) => {
        el.classList.add('fade-in', `delay-${i % 3}`);
    });
    
    document.querySelectorAll('.timeline-item, .skill-category').forEach((el, i) => {
        el.classList.add('fade-in', `delay-${i % 2}`);
    });
});
// Chatbot functionality
document.addEventListener('DOMContentLoaded', function() {
  const chatbotTrigger = document.getElementById('chatbotTrigger');
  const chatbotContainer = document.getElementById('chatbotContainer');
  const closeChatbot = document.getElementById('closeChatbot');
  const chatbotMessages = document.getElementById('chatbotMessages');
  const userInput = document.getElementById('userInput');
  const sendMessage = document.getElementById('sendMessage');

  // Sample Q&A pairs
  const botResponses = {
    "hello": "Hello! I'm Sabbir's AI assistant. How can I help you today?",
    "projects": "Sabbir has worked on: 1) Bangla OCR (92% accuracy), 2) Django E-Commerce, 3) Madrasah Portal, 4) AI Chatbot, 5) Attendance System",
    "skills": "Core: Python, Django, Django REST. AI/ML: TensorFlow, OpenCV. Frontend: HTML5, CSS3, JavaScript",
    "contact": "You can reach Sabbir at: Email: sabbirahmed338989@gmail.com | Phone: +8801846593095",
    "thesis": "Sabbir's thesis is on 'Bangla Handwritten Word Recognition using Deep Learning' at Green University",
    "default": "I'm sorry, I didn't understand that. You can ask about: projects, skills, contact, or thesis."
  };

  // Open/close chatbot
  chatbotTrigger.addEventListener('click', () => {
    chatbotContainer.style.display = 'flex';
    addBotMessage("Hello! I'm Sabbir's AI assistant. Ask me about his projects, skills, or experience!");
  });

  closeChatbot.addEventListener('click', () => {
    chatbotContainer.style.display = 'none';
  });

  // Send message function
  function sendUserMessage() {
    const message = userInput.value.trim();
    if (message) {
      addUserMessage(message);
      userInput.value = '';
      setTimeout(() => {
        const response = generateBotResponse(message);
        addBotMessage(response);
      }, 500);
    }
  }

  // Handle Enter key
  userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendUserMessage();
    }
  });

  sendMessage.addEventListener('click', sendUserMessage);

  // Add message to chat
  function addUserMessage(text) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'user-message');
    messageDiv.textContent = text;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  function addBotMessage(text) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'bot-message');
    messageDiv.textContent = text;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  // Generate bot response
  function generateBotResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    for (const [key, value] of Object.entries(botResponses)) {
      if (lowerMessage.includes(key)) {
        return value;
      }
    }
    return botResponses.default;
  }
});