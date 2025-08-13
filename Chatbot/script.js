// script.js
let chatOpen = false;

function toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    chatOpen = !chatOpen;
    chatWindow.style.display = chatOpen ? 'block' : 'none';

    if (chatOpen) {
        initializeChat();
    }
}

function initializeChat() {
    const chatMessages = document.getElementById('chat-messages');
    const chatOptions = document.getElementById('chat-options');

    // Clear previous messages and options
    chatMessages.innerHTML = '';
    chatOptions.innerHTML = '';

    // Add the bot's initial message
    chatMessages.innerHTML += `
        <div class="message bot-message">
            Bonjour! Je suis un assistant virtuel et je peux vous aider à réserver votre prochain séjour.
        </div>
    `;

    // Show initial options
    showInitialOptions();
}

function showInitialOptions() {
    const chatOptions = document.getElementById('chat-options');
    chatOptions.innerHTML = `
        <button onclick="selectOption('booking')">📅 Réserver une chambre</button>
        <button onclick="selectOption('contact')">Notre numéro</button>
        <button onclick="selectOption('other')">Autre sujet</button>
    `;
}

function selectOption(type) {
    const chatMessages = document.getElementById('chat-messages');
    const chatOptions = document.getElementById('chat-options');
    const typing = document.getElementById('chat-typing');

    // Hide options and show typing animation
    chatOptions.classList.add('hidden');
    typing.classList.remove('hidden');

    setTimeout(() => {
        typing.classList.add('hidden');

        if (type === 'booking') {
            chatOptions.innerHTML = `
                <button onclick="selectRoom('Single')">Chambre – « Single »</button>
                <button onclick="selectRoom('Standard')">Chambres – Standard</button>
                <button onclick="selectRoom('Confort')">Chambres – Confort</button>
                <button onclick="selectRoom('VIP')">Chambres – VIP</button>
                <button onclick="selectRoom('Famille')">2 suites – Famille (2 chambres)</button>
            `;
        } else if (type === 'contact') {
            chatMessages.innerHTML += `
                <div class="message bot-message">
                    Notre numéro de téléphone: +221 338207659<br>
                    Email: relax@relaxappart.com
                </div>
            `;
            askForMoreInfo();
        } else if (type === 'other') {
            chatOptions.innerHTML = `
                <button onclick="selectOther('Wi-Fi')">Wi-Fi</button>
                <button onclick="selectOther('Parking')">Parking</button>
            `;
        }

        chatOptions.classList.remove('hidden');
    }, 1000); // Simulate 3 seconds of "typing"
}

function selectRoom(room) {
    const chatMessages = document.getElementById('chat-messages');
    const chatOptions = document.getElementById('chat-options');
    const typing = document.getElementById('chat-typing');

    chatOptions.classList.add('hidden');
    typing.classList.remove('hidden');

    setTimeout(() => {
        typing.classList.add('hidden');
        chatMessages.innerHTML += `
            <div class="message bot-message">
                Vous avez choisi: ${room}.<br>
                Veuillez remplir le formulaire de réservation.
            </div>
        `;
        askForMoreInfo();
    }, 1000);
}

function selectOther(option) {
    const chatMessages = document.getElementById('chat-messages');
    const chatOptions = document.getElementById('chat-options');
    const typing = document.getElementById('chat-typing');

    chatOptions.classList.add('hidden');
    typing.classList.remove('hidden');

    setTimeout(() => {
        typing.classList.add('hidden');
        let response = '';
        if (option === 'Wi-Fi') {
            response = "Le Wi-Fi est gratuit et disponible dans tout l'hôtel. Vitesse: 100 Mbps.";
        } else if (option === 'Parking') {
            response = "Le parking est gratuit et sécurisé. Capacité: 50 places.";
        }
        chatMessages.innerHTML += `<div class="message bot-message">${response}</div>`;
        askForMoreInfo();
    }, 1000);
}

function askForMoreInfo() {
    const chatOptions = document.getElementById('chat-options');
    const typing = document.getElementById('chat-typing');

    typing.classList.remove('hidden');

    setTimeout(() => {
        typing.classList.add('hidden');
        chatOptions.innerHTML = `
            <button onclick="showInitialOptions()">Oui</button>
            <button onclick="endChat()">C'est bon</button>
        `;
        chatOptions.classList.remove('hidden');
    }, 1000);
}

function endChat() {
    const chatMessages = document.getElementById('chat-messages');
    const chatOptions = document.getElementById('chat-options');
    const typing = document.getElementById('chat-typing');

    chatOptions.classList.add('hidden');
    typing.classList.remove('hidden');

    setTimeout(() => {
        typing.classList.add('hidden');
        chatMessages.innerHTML += `
            <div class="message bot-message">
                Merci de nous aider à améliorer notre service.
            </div>
        `;
    }, 1000);
}