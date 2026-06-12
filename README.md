# Minha Rede Social

Uma rede social moderna e responsiva desenvolvida com **HTML, CSS e JavaScript puro**, sem dependências externas.

## 📋 Características

- **Interface moderna e intuitiva** com design similar ao Twitter/X
- **Navegação por abas** (Feed, Explorar, Mensagens, Notificações, Perfil)
- **Sistema de posts** com criação, curtidas, retweets e respostas
- **Tendências em tempo real** na barra lateral
- **Design responsivo** que funciona em desktop, tablet e mobile
- **Armazenamento local** com LocalStorage para persistência de dados
- **Animações suaves** para melhor experiência do usuário

## 🚀 Como Usar

1. Clone o repositório:
```bash
git clone https://github.com/jokerthur/minha-rede-social.git
cd minha-rede-social
```

2. Abra o arquivo `index.html` em seu navegador:
```bash
# No Linux/Mac
open index.html

# No Windows
start index.html

# Ou use um servidor local
python3 -m http.server 8000
```

3. Acesse em seu navegador: `http://localhost:8000`

## 📁 Estrutura do Projeto

```
minha-rede-social/
├── index.html          # Arquivo principal HTML
├── styles.css          # Estilos CSS
├── script.js           # Lógica JavaScript
├── README.md           # Este arquivo
└── LICENSE             # Licença do projeto
```

## 🎨 Funcionalidades

### Feed
- Visualizar posts de usuários
- Criar novos posts
- Curtir, retweet, responder e compartilhar posts
- Contador de interações em tempo real

### Explorar
- Seção para descobrir tendências
- Recomendações de pessoas para seguir
- Comunidades de interesse

### Mensagens
- Lista de conversas
- Interface para enviar mensagens diretas

### Notificações
- Alertas de curtidas
- Notificações de respostas
- Histórico de interações

### Perfil
- Foto de capa e avatar
- Informações do usuário
- Estatísticas de seguidores
- Posts do usuário

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos responsivos com Grid e Flexbox
- **JavaScript (ES6+)** - Lógica e interatividade
- **LocalStorage API** - Persistência de dados

## 💾 Armazenamento de Dados

Os dados são armazenados localmente no navegador usando a API `localStorage`. Isso significa que:
- Os posts são salvos automaticamente
- Os dados persistem entre sessões
- Não há servidor backend necessário

## 📱 Responsividade

O projeto é totalmente responsivo e se adapta a diferentes tamanhos de tela:
- **Desktop** (1200px+): Layout completo com 3 colunas
- **Tablet** (768px - 1200px): 2 colunas (sem barra de tendências)
- **Mobile** (< 768px): 1 coluna com navegação inferior

## 🎯 Próximas Melhorias

- [ ] Sistema de autenticação
- [ ] Backend com banco de dados
- [ ] Upload de imagens
- [ ] Sistema de seguidores
- [ ] Busca avançada
- [ ] Modo escuro
- [ ] Notificações em tempo real
- [ ] API REST

## 📝 Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👨‍💻 Autor

Desenvolvido por **jokerthur**

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

---

**Desenvolvido com ❤️ em HTML, CSS e JavaScript**
