const searchInput = document.getElementById('search-input');
const gamesGrid = document.getElementById('games-grid');
const gameCards = gamesGrid.querySelectorAll('.game-card');
const noResultsMessage = document.getElementById('no-results');

function cardGamesTemplate(
    title, description, textEmoji, path,
    borderColor = 'border-blue-500',
    buttonBgColor = 'bg-blue-500'
) {
    return `
     <div class="game-card bg-white p-6 rounded-xl shadow-lg border-t-4 ${borderColor} flex flex-col">
        <div class="text-4xl mb-4">${textEmoji}</div>
        <h2 class="text-xl font-bold text-slate-800 mb-2">${title}</h2>
        <p class="text-sm text-slate-600 flex-grow">${description}</p>
        <button
            class="mt-6 ${buttonBgColor} text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors w-full" 
            onclick="location.href='${path}'">
            Jogar
        </button>
    </div>
    `;
}

const miniGames = [
    {
        title: "Dados: V ou F?",
        description: "Teste seus conhecimentos sobre o que são e onde ficam guardados seus dados pessoais.",
        textEmoji: "❓",
        path: "./games/dados-v-ou-f.html",
        borderColor: 'border-red-500',
        buttonBgColor: 'bg-red-500'
    },
    {
        title: "Forca da Senha",
        description: "Descubra as dicas para criar senhas fortes antes que o tempo acabe. Um clássico reinventado!",
        textEmoji: "🔑",
        path: "./games/forca-da-senha/index.html",
        borderColor: 'border-green-500',
        buttonBgColor: 'bg-green-500'
    },
    {
        title: "Alerta de Fraude",
        description: "Simule uma compra online e identifique os sinais de alerta de um site falso. Você consegue comprar com segurança?",
        textEmoji: "🚨",
        path: "./games/alerta-de-fraude/index.html",
        borderColor: 'border-yellow-500',
        buttonBgColor: 'bg-yellow-500'
    },
    {
        title: "Caça ao Phishing",
        description: "Encontre os e-mails de phishing escondidos entre mensagens legítimas. Cuidado com os cliques!",
        textEmoji: "🎣",
        path: "./games/caca-ao-phishing/index.html",
        borderColor: 'border-purple-500',
        buttonBgColor: 'bg-purple-500'
    },
    {
        title: "Memória Digital",
        description: "Encontre os pares que conectam suas ações online (curtidas, posts) com os rastros que elas deixam.",
        textEmoji: "🧠",
        path: "./games/memoria-digital/index.html",
        borderColor: 'border-pink-500',
        buttonBgColor: 'bg-pink-500'
    },
    {
        title: "Quiz de Segurança",
        description: "Teste seus conhecimentos sobre segurança digital com perguntas desafiadoras.",
        textEmoji: "📸",
        path: "./games/quiz-seguranca/index.html",
        borderColor: 'border-blue-500',
        buttonBgColor: 'bg-blue-500'
    },
    {
        title: "Aventuras na Nuvem",
        description: "Explore os perigos e benefícios do armazenamento em nuvem enquanto navega por um labirinto digital.",
        textEmoji: "☁️",
        path: "./games/aventuras-na-nuvem/index.html",
        borderColor: 'border-teal-500',
        buttonBgColor: 'bg-teal-500'
    }
];

function renderGames() {
    const gameCardsHTML = miniGames.map(game => cardGamesTemplate(game.title, game.description, game.textEmoji, game.path, game.borderColor, game.buttonBgColor)).join('');
    gamesGrid.innerHTML = gameCardsHTML;
}

renderGames()

searchInput.addEventListener('keyup',
    (e) => searchAndRenderGames(e.target.value.toLowerCase())
);

function searchAndRenderGames(search) {
    const filteredGames = miniGames.filter(game => game.title.toLowerCase().includes(search) || game.description.toLowerCase().includes(search));
    gamesGrid.innerHTML = filteredGames.map(game => cardGamesTemplate(game.title, game.description, game.textEmoji, game.path, game.borderColor, game.buttonBgColor)).join('');

    noResultsMessage.style.display = filteredGames.length > 0 ? 'none' : 'block';
}
