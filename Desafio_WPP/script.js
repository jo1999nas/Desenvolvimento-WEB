// ==========================================
// 1. ESTRUTURA DE DADOS (BASE DE DADOS EM MEMÓRIA)
// ==========================================
// Lista de objetos representando os 3 contatos da aplicação.
// Cada contato possui um ID único, nome, foto (avatar), status de presença,
// trecho e horário da última mensagem enviada, e um array 'messages' que armazenará o histórico.
const contacts = [
    {
        id: 1,
        name: "Ana",
        avatar: "https://i.pravatar.cc/150?img=35",
        status: "online",
        lastMessage: "",
        lastTime: "",
        messages: [] // Array onde ficarão salvas as mensagens enviadas para a Ana
    },
    {
        id: 2,
        name: "Carlos",
        avatar: "https://i.pravatar.cc/150?img=69",
        status: "visto por último ontem às 03:27",
        lastMessage: "",
        lastTime: "",
        messages: [] // Array onde ficarão salvas as mensagens enviadas para o Carlos
    },
    {
        id: 3,
        name: "Mariana",
        avatar: "https://i.pravatar.cc/150?img=40",
        status: "online",
        lastMessage: "",
        lastTime: "",
        messages: [] // Array onde ficarão salvas as mensagens enviadas para a Mariana
    }
];

// Variável de estado global que armazena qual contato está selecionado no momento (inicia com o ID 1)
let activeContactId = 1;

// ==========================================
// 2. SELEÇÃO DE ELEMENTOS DO DOM (HTML)
// ==========================================
// Guardamos em variáveis os elementos HTML da página usando seus IDs para manipulá-los facilmente no script.
const contactListEl = document.getElementById('contact-list');           // Lista de contatos na barra lateral
const activeAvatarEl = document.getElementById('active-avatar');         // Foto do contato ativo no cabeçalho
const activeNameEl = document.getElementById('active-name');             // Nome do contato ativo no cabeçalho
const activeStatusEl = document.getElementById('active-status');         // Status do contato ativo (ex: online)
const messagesContainerEl = document.getElementById('messages-container'); // Container interno onde ficam os balões de mensagem
const chatBodyEl = document.getElementById('chat-body');                 // Corpo do chat onde ocorre a rolagem (scroll)
const messageInputEl = document.getElementById('message-input');         // Campo de texto onde o usuário digita a mensagem
const sendBtnEl = document.getElementById('send-btn');                   // Botão de enviar mensagem
const sendIconEl = document.getElementById('send-icon');                 // Ícone dentro do botão de enviar
const searchInputEl = document.getElementById('search-input');           // Campo de pesquisa de contatos

// ==========================================
// 3. FUNÇÃO PRINCIPAL DE INICIALIZAÇÃO
// ==========================================
// Esta função é executada assim que a página é carregada. Ela coordena a montagem inicial da interface.
function init() {
    renderContactList();         // Renderiza os contatos na barra lateral
    selectContact(activeContactId); // Define o primeiro contato como ativo
    setupEventListeners();      // Ativa os ouvintes de eventos (cliques e teclas)
}

// ==========================================
// 4. RENDERIZAÇÃO DA LISTA DE CONTATOS (SIDEBAR)
// ==========================================
// Desenha os cards de contato na barra lateral. Aceita um parâmetro de busca opcional (filterText).
function renderContactList(filterText = '') {
    // Limpa o conteúdo atual da lista para não duplicar elementos
    contactListEl.innerHTML = '';

    // Filtra os contatos comparando o nome com o texto pesquisado (ignorando maiúsculas/minúsculas)
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterText.toLowerCase())
    );

    // Percorre cada contato filtrado e constrói o elemento HTML equivalente
    filteredContacts.forEach(contact => {
        const contactItem = document.createElement('div');

        // Define a classe CSS 'active' caso este seja o contato atualmente selecionado
        contactItem.className = `contact-item ${contact.id === activeContactId ? 'active' : ''}`;

        // Adiciona um evento de clique para selecionar o contato quando o usuário clicar no item
        contactItem.onclick = () => selectContact(contact.id);

        // Define a mensagem que será exibida na prévia (se não houver mensagens, exibe um texto padrão)
        const lastMsgDisplay = contact.lastMessage ? contact.lastMessage : 'Nenhuma mensagem recente';

        // Preenche o HTML interno do card do contato
        contactItem.innerHTML = `
            <div class="contact-avatar">
                <img src="${contact.avatar}" alt="${contact.name}">
            </div>
            <div class="contact-info">
                <div class="top-row">
                    <span class="contact-name">${contact.name}</span>
                    <span class="contact-time">${contact.lastTime}</span>
                </div>
                <span class="contact-last-msg">${lastMsgDisplay}</span>
            </div>
        `;

        // Adiciona o elemento criado na lista de contatos do DOM
        contactListEl.appendChild(contactItem);
    });
}

// ==========================================
// 5. SELEÇÃO DE CONTATO ATIVO
// ==========================================
// Altera a conversa ativa na tela ao clicar em um contato.
function selectContact(id) {
    activeContactId = id; // Atualiza a variável de estado com o novo ID

    // Busca os dados do contato selecionado no array de contatos
    const contact = contacts.find(c => c.id === id);
    if (!contact) return; // Segurança: interrompe se o contato não existir

    // Atualiza as informações exibidas no cabeçalho do chat principal
    activeAvatarEl.src = contact.avatar;
    activeNameEl.textContent = contact.name;
    activeStatusEl.textContent = contact.status;

    // Atualiza o destaque azul/cinza na barra lateral mantendo o filtro de pesquisa atual
    renderContactList(searchInputEl ? searchInputEl.value : '');

    // Renderiza as mensagens salvas no histórico do contato selecionado
    renderMessages();
}

// ==========================================
// 6. RENDERIZAÇÃO DAS MENSAGENS DE CHAT
// ==========================================
// Desenha os balões de conversa no painel principal referentes ao contato selecionado.
function renderMessages() {
    const contact = contacts.find(c => c.id === activeContactId);
    if (!contact) return;

    // Limpa as mensagens exibidas anteriormente na tela
    messagesContainerEl.innerHTML = '';

    // Se o contato não possuir NENHUMA mensagem no histórico
    if (contact.messages.length === 0) {
        const emptyNotice = document.createElement('div');
        emptyNotice.className = 'empty-chat-state';
        emptyNotice.textContent = 'Nenhuma mensagem por aqui ainda. Digite algo para iniciar a conversa!';
        messagesContainerEl.appendChild(emptyNotice);
    } else {
        // Se houver mensagens, percorre o array e cria os balões de conversa verdes
        contact.messages.forEach(msg => {
            const bubble = document.createElement('div');
            bubble.className = 'message-bubble';
            bubble.innerHTML = `
                <div class="message-text">${escapeHtml(msg.text)}</div>
                <div class="message-meta">
                    <span>${msg.time}</span>
                    <span class="material-symbols-outlined check-icon">done_all</span>
                </div>
            `;
            messagesContainerEl.appendChild(bubble);
        });
    }

    // Faz a rolagem automática para a mensagem mais recente (no final da conversa)
    scrollToBottom();
}

// ==========================================
// 7. ENVIO DE MENSAGENS
// ==========================================
// Função responsável por capturar o texto digitado, formatar o horário e registrar a nova mensagem.
function sendMessage() {
    const text = messageInputEl.value.trim(); // Pega o texto e remove espaços em branco no início/fim
    if (!text) return; // Se a mensagem estiver vazia, ignora o envio

    const contact = contacts.find(c => c.id === activeContactId);
    if (!contact) return;

    // Obtém o horário atual do sistema formatado como HH:MM
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const timeFormatted = `${hours}:${minutes}`;

    // Cria o objeto da nova mensagem enviada pelo usuário
    const newMsg = {
        id: Date.now(), // ID único baseado no carimbo de data/hora atual
        text: text,
        time: timeFormatted
    };

    // Adiciona a nova mensagem ao histórico do contato ativo
    contact.messages.push(newMsg);

    // Atualiza a última mensagem e o horário do contato para exibir na prévia da barra lateral
    contact.lastMessage = text;
    contact.lastTime = timeFormatted;

    // Limpa o campo de entrada de texto e reseta o botão de envio
    messageInputEl.value = '';
    updateSendButtonState();

    // Re-renderiza as mensagens na tela e atualiza a barra lateral com a nova prévia
    renderMessages();
    renderContactList(searchInputEl ? searchInputEl.value : '');
}

// ==========================================
// 8. FUNÇÕES AUXILIARES E SEGURANÇA
// ==========================================

// Rola o container do chat para a parte mais baixa (última mensagem)
function scrollToBottom() {
    chatBodyEl.scrollTop = chatBodyEl.scrollHeight;
}

// Sanitiza o texto digitado prevenindo injeções de scripts maliciosos (XSS)
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Altera a cor do ícone de envio para verde quando há texto no campo de mensagem
function updateSendButtonState() {
    if (messageInputEl.value.trim().length > 0) {
        sendBtnEl.classList.add('active-send');
    } else {
        sendBtnEl.classList.remove('active-send');
    }
}

// ==========================================
// 9. CONFIGURAÇÃO DOS OUVINTES DE EVENTOS (EVENT LISTENERS)
// ==========================================
// Associa as ações do usuário (cliques, digitação) com suas respectivas funções no JavaScript.
function setupEventListeners() {
    // Clique no botão de enviar mensagem
    sendBtnEl.addEventListener('click', sendMessage);

    // Pressionar a tecla Enter no campo de entrada para enviar a mensagem
    messageInputEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Impede a quebra de linha padrão do formulário
            sendMessage();
        }
    });

    // Evento de digitação: altera a cor do botão de envio dinamicamente
    messageInputEl.addEventListener('input', updateSendButtonState);

    // Evento de busca: filtra os contatos na barra lateral enquanto o usuário digita
    searchInputEl.addEventListener('input', (e) => {
        renderContactList(e.target.value);
    });
}

// ==========================================
// 10. DISPARO INICIAL QUANDO O DOM ESTIVER PRONTO
// ==========================================
// Garante que o script só seja executado após todo a estrutura HTML da página ter sido carregada.
document.addEventListener('DOMContentLoaded', init);
