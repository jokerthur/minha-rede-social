// ============ DADOS LOCAIS ============
let posts = [];
let postIdCounter = 1;

// Posts de exemplo
const samplePosts = [
    {
        id: 1,
        author: "João Silva",
        handle: "@joaosilva",
        avatar: "https://via.placeholder.com/48/FF6B6B/FFFFFF?text=JS",
        content: "Olá pessoal! Bem-vindo à minha rede social. Estou muito animado com este projeto! 🚀",
        timestamp: "2 horas atrás",
        likes: 45,
        retweets: 12,
        replies: 8,
        liked: false
    },
    {
        id: 2,
        author: "Maria Santos",
        handle: "@mariasantos",
        avatar: "https://via.placeholder.com/48/4ECDC4/FFFFFF?text=MS",
        content: "Desenvolvendo uma incrível plataforma social com HTML, CSS e JavaScript puro. Sem frameworks! 💻",
        timestamp: "4 horas atrás",
        likes: 128,
        retweets: 56,
        replies: 23,
        liked: false
    },
    {
        id: 3,
        author: "Carlos Dev",
        handle: "@carlosdev",
        avatar: "https://via.placeholder.com/48/95E1D3/FFFFFF?text=CD",
        content: "A comunidade de desenvolvedores está crescendo cada dia mais. Que legal! 🎉",
        timestamp: "6 horas atrás",
        likes: 89,
        retweets: 34,
        replies: 15,
        liked: false
    }
];

// ============ INICIALIZAÇÃO ============
document.addEventListener('DOMContentLoaded', () => {
    posts = [...samplePosts];
    postIdCounter = 4;
    
    renderPosts();
    setupEventListeners();
});

// ============ EVENT LISTENERS ============
function setupEventListeners() {
    // Navigation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const page = item.dataset.page;
            navigateTo(page);
            
            // Update active state
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Post submission
    const btnSubmitPost = document.getElementById('btn-submit-post');
    const postInput = document.getElementById('post-input');
    
    btnSubmitPost.addEventListener('click', createPost);
    postInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && e.ctrlKey) {
            createPost();
        }
    });

    // Floating button
    const btnPost = document.querySelector('.btn-post');
    btnPost.addEventListener('click', () => {
        navigateTo('feed');
        postInput.focus();
    });
}

// ============ NAVIGATION ============
function navigateTo(page) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));

    // Show selected page
    const selectedPage = document.getElementById(page);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
}

// ============ POST MANAGEMENT ============
function createPost() {
    const postInput = document.getElementById('post-input');
    const content = postInput.value.trim();

    if (content === '') {
        alert('Por favor, escreva algo antes de postar!');
        return;
    }

    const newPost = {
        id: postIdCounter++,
        author: "Seu Nome",
        handle: "@seu_usuario",
        avatar: "https://via.placeholder.com/48/1DA1F2/FFFFFF?text=SN",
        content: content,
        timestamp: "agora",
        likes: 0,
        retweets: 0,
        replies: 0,
        liked: false
    };

    posts.unshift(newPost);
    postInput.value = '';
    renderPosts();
}

function renderPosts() {
    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = '';

    posts.forEach(post => {
        const postElement = createPostElement(post);
        postsContainer.appendChild(postElement);
    });
}

function createPostElement(post) {
    const postDiv = document.createElement('div');
    postDiv.className = 'post';
    postDiv.innerHTML = `
        <div class="post-avatar">
            <img src="${post.avatar}" alt="${post.author}">
        </div>
        <div class="post-content">
            <div class="post-header">
                <span class="post-author">${post.author}</span>
                <span class="post-handle">${post.handle}</span>
                <span class="post-time">· ${post.timestamp}</span>
            </div>
            <div class="post-text">${escapeHtml(post.content)}</div>
            <div class="post-actions">
                <div class="post-action" onclick="replyToPost(${post.id})">
                    <span>💬</span>
                    <span>${post.replies}</span>
                </div>
                <div class="post-action" onclick="retweetPost(${post.id})">
                    <span>🔄</span>
                    <span>${post.retweets}</span>
                </div>
                <div class="post-action" onclick="likePost(${post.id})">
                    <span>${post.liked ? '❤️' : '🤍'}</span>
                    <span>${post.likes}</span>
                </div>
                <div class="post-action" onclick="sharePost(${post.id})">
                    <span>📤</span>
                </div>
            </div>
        </div>
    `;

    return postDiv;
}

function likePost(postId) {
    const post = posts.find(p => p.id === postId);
    if (post) {
        post.liked = !post.liked;
        post.likes += post.liked ? 1 : -1;
        renderPosts();
    }
}

function retweetPost(postId) {
    const post = posts.find(p => p.id === postId);
    if (post) {
        post.retweets++;
        renderPosts();
    }
}

function replyToPost(postId) {
    const post = posts.find(p => p.id === postId);
    if (post) {
        const reply = prompt(`Responder para ${post.author}:`);
        if (reply && reply.trim() !== '') {
            post.replies++;
            renderPosts();
            alert('Resposta enviada com sucesso!');
        }
    }
}

function sharePost(postId) {
    const post = posts.find(p => p.id === postId);
    if (post) {
        const shareText = `${post.author} (@${post.handle}): "${post.content}"`;
        
        if (navigator.share) {
            navigator.share({
                title: 'Compartilhar Post',
                text: shareText
            }).catch(err => console.log('Erro ao compartilhar:', err));
        } else {
            // Fallback: copiar para clipboard
            navigator.clipboard.writeText(shareText).then(() => {
                alert('Post copiado para a área de transferência!');
            });
        }
    }
}

// ============ UTILITY FUNCTIONS ============
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ============ SEARCH FUNCTIONALITY ============
const searchBox = document.querySelector('.search-box input');
if (searchBox) {
    searchBox.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        console.log('Buscando por:', searchTerm);
        // Implementar lógica de busca aqui
    });
}

// ============ TRENDING ITEMS ============
const trendingItems = document.querySelectorAll('.trending-item');
trendingItems.forEach(item => {
    item.addEventListener('click', () => {
        const hashtag = item.querySelector('h4').textContent;
        console.log('Clicou em:', hashtag);
        // Implementar navegação para trending aqui
    });
});

// ============ LOCAL STORAGE ============
function savePosts() {
    localStorage.setItem('posts', JSON.stringify(posts));
}

function loadPosts() {
    const saved = localStorage.getItem('posts');
    if (saved) {
        posts = JSON.parse(saved);
    }
}

// Auto-save posts a cada mudança
window.addEventListener('beforeunload', savePosts);
