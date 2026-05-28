# Guia do Projeto — Cartão de Visitas Digital

> Entrega: **14/05** via GitHub  
> Stack: HTML semântico + CSS com variáveis + JavaScript puro (sem frameworks)

---

## O que é o projeto

Uma página pessoal que funciona como seu cartão de visitas digital.
Deve ser enviada para processos seletivos, LinkedIn, WhatsApp, etc.

---

## Cronograma sugerido (4 semanas)

| Semana | Foco | O que fazer |
|--------|------|-------------|
| **1** | Estrutura & conteúdo | Preencher o HTML com seus dados reais (nome, sobre, fotos, contatos). Criar a pasta no GitHub e fazer o primeiro commit. |
| **2** | Estilo | Personalizar as variáveis CSS (`--cor-primaria`, fontes, espaçamentos). Ajustar layouts para mobile. Testar em telas diferentes. |
| **3** | JavaScript | Verificar se as 4 interações funcionam. Adicionar ou substituir a interação de escolha. Testar acessibilidade (teclado, leitores de tela). |
| **4** | Polimento & entrega | Revisar todos os textos, checar links quebrados, rodar o checklist de auto-avaliação, fazer o commit final e entregar. |

---

## Requisitos técnicos

### HTML semântico
- Usar as tags corretas: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Todo `<img>` deve ter atributo `alt` descritivo
- `<iframe>` de vídeo deve ter `title`
- Formulários e botões interativos devem ter `aria-label` quando o texto não for claro

### CSS com variáveis
- Pelo menos **5 variáveis** definidas em `:root` (cores, fontes, espaçamentos)
- Tema escuro implementado por classe (`.tema-escuro`) alterando as variáveis
- Layout responsivo usando **media queries** para tablet (≤768px) e mobile (≤480px)
- Proibido usar frameworks (Bootstrap, Tailwind, etc.)

### JavaScript — 3 interações obrigatórias + 1 à escolha

| # | Descrição | Onde fica |
|---|-----------|-----------|
| 1 | Alternar tema claro/escuro | Botão na nav, salva no `localStorage` |
| 2 | Copiar e-mail ao clicar | Seção de contato, notificação visual |
| 3 | Scroll spy — destaque do link ativo | Nav, atualiza em tempo real |
| **4** | **À sua escolha** — exemplos abaixo | Qualquer seção |

**Opções para a interação 4:**
- Animação de digitação (já incluída no template)
- Modal com galeria ao clicar nas fotos
- Contador de tempo desde uma data (ex: "há X anos na área")
- Formulário de contato com validação
- Menu hambúrguer no mobile
- Animação de entrada ao rolar a página (Intersection Observer)

---

## Conteúdo obrigatório

| Item | Critério |
|------|----------|
| **Nome** | Visível e em destaque no hero |
| **Sobre** | Pelo menos 2 parágrafos reais sobre você |
| **Fotos** | Pelo menos 2 fotos suas (pode usar a mesma com tratamentos diferentes) |
| **Vídeo** | Embed de YouTube ou arquivo local |
| **Elemento criativo** | Seção livre — linha do tempo, mapa, citações, etc. |

---

## Rubrica de avaliação

### Como funciona
Cada critério é avaliado como **Aprovado** ou **Reprovado**.
Reprovação em qualquer critério com peso `OBRIGATÓRIO` reprova o projeto todo.

---

### Critérios

#### HTML — Estrutura e semântica

| Critério | Peso | Aprovado quando... | Reprovado quando... |
|----------|------|--------------------|---------------------|
| Arquivo válido abre no navegador sem erros | OBRIGATÓRIO | Página carrega normalmente | Arquivo quebrado ou em branco |
| Uso de tags semânticas | OBRIGATÓRIO | `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` presentes | Só usa `<div>` para tudo |
| Atributos `alt` nas imagens | OBRIGATÓRIO | Toda `<img>` tem `alt` com texto descritivo | Alguma `<img>` sem `alt` ou com `alt=""` vazio |
| `<title>` personalizado | Importante | Título da aba contém o nome do aluno | `<title>` genérico ou ausente |
| Indentação e organização | Importante | Código legível e indentado corretamente | Código sem indentação |

---

#### CSS — Estilo e responsividade

| Critério | Peso | Aprovado quando... | Reprovado quando... |
|----------|------|--------------------|---------------------|
| Variáveis CSS em uso | OBRIGATÓRIO | Pelo menos 5 variáveis em `:root` | Nenhuma variável; valores hard-coded |
| Tema escuro funciona | OBRIGATÓRIO | Botão alterna entre claro e escuro com cores diferentes | Botão não faz nada ou só muda o emoji |
| Responsivo em mobile | OBRIGATÓRIO | Layout legível em tela de 375px | Conteúdo cortado ou sobreposto no mobile |
| Responsivo em tablet | Importante | Layout se adapta em 768px | Quebra de layout em tablet |
| Sem framework CSS | OBRIGATÓRIO | Nenhum `<link>` para Bootstrap, Tailwind, etc. | Framework externo detectado |

---

#### JavaScript — Interatividade

| Critério | Peso | Aprovado quando... | Reprovado quando... |
|----------|------|--------------------|---------------------|
| Interação 1: tema claro/escuro | OBRIGATÓRIO | Funciona e persiste ao recarregar (localStorage) | Não funciona ou não persiste |
| Interação 2: copiar e-mail | OBRIGATÓRIO | Clique copia o e-mail e exibe confirmação | Clique não faz nada |
| Interação 3: scroll spy | OBRIGATÓRIO | Link correto fica destacado ao rolar | Nenhum link muda de estado |
| Interação 4 (escolha) | OBRIGATÓRIO | Funciona e melhora a experiência | Ausente ou quebrada |
| JS inline ausente | Importante | Todo JS está no `script.js` | `onclick=` no HTML |

---

#### Conteúdo

| Critério | Peso | Aprovado quando... | Reprovado quando... |
|----------|------|--------------------|---------------------|
| Nome e foto real | OBRIGATÓRIO | Nome do aluno e pelo menos 1 foto | Placeholder não substituído |
| Texto "Sobre mim" | OBRIGATÓRIO | Pelo menos 2 parágrafos reais escritos pelo aluno | Placeholder/Lorem Ipsum |
| Vídeo presente | OBRIGATÓRIO | Vídeo incorporado e reproduzível | Seção de vídeo ausente ou quebrada |
| Contato com e-mail real | Importante | E-mail do aluno visível e copiável | E-mail placeholder |
| Elemento criativo | OBRIGATÓRIO | Seção criativa personalizada (não é só o template padrão) | Seção com placeholder sem edição |

---

#### Entrega

| Critério | Peso | Aprovado quando... | Reprovado quando... |
|----------|------|--------------------|---------------------|
| Repositório no GitHub | OBRIGATÓRIO | Link público acessível | Repo privado ou link errado |
| Arquivo `index.html` na raiz | OBRIGATÓRIO | `index.html` na raiz do repositório | Arquivo em subpasta sem `index.html` na raiz |
| Histórico de commits | Importante | Mais de 1 commit (evolução visível) | Único commit com tudo de uma vez |
| Entrega no prazo | OBRIGATÓRIO | Último commit até 14/05 23:59 | Commit após o prazo |

---

## Checklist de auto-avaliação pré-entrega

Faça isso **antes** de entregar. Se qualquer item estiver desmarcado, corrija primeiro.

### HTML
- [ ] O arquivo abre no navegador sem erro
- [ ] O `<title>` da aba tem meu nome
- [ ] Usei `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` corretamente
- [ ] Toda imagem tem `alt` com texto que descreve o que está na foto
- [ ] O `<iframe>` do vídeo tem `title` preenchido
- [ ] Não há texto placeholder ("Seu Nome Aqui", "seuemail@exemplo.com", etc.)

### CSS
- [ ] Há pelo menos 5 variáveis definidas no `:root`
- [ ] As cores do tema escuro são visivelmente diferentes das do tema claro
- [ ] A página é legível em celular (testei redimensionando a janela para 375px)
- [ ] A página é legível em tablet (testei em 768px)
- [ ] Não usei Bootstrap, Tailwind ou outro framework CSS

### JavaScript
- [ ] O botão de tema alterna entre claro e escuro
- [ ] Ao recarregar a página, o tema escolhido é mantido
- [ ] Clicar no e-mail copia o endereço e exibe notificação
- [ ] Ao rolar a página, o link ativo no menu muda corretamente
- [ ] A minha interação de escolha (4ª) funciona sem erros no console
- [ ] Abri o DevTools (F12 → Console) e não há erros em vermelho

### Conteúdo
- [ ] Minha foto real está na seção Hero
- [ ] Escrevi pelo menos 2 parágrafos reais sobre mim
- [ ] Meu vídeo está incorporado e toca normalmente
- [ ] Coloquei meus links reais de contato (LinkedIn, GitHub, e-mail)
- [ ] A seção criativa foi personalizada (não está como o template padrão)
- [ ] Tenho pelo menos 3 itens na galeria/portfolio

### Entrega
- [ ] O repositório está **público** no GitHub
- [ ] O `index.html` está na **raiz** do repositório (não dentro de pasta)
- [ ] Fiz pelo menos **3 commits** com mensagens descritivas
- [ ] O último commit foi feito antes de **14/05 às 23:59**
- [ ] Copiei o link do repositório e testei em aba anônima — está acessível

---

## Anexo 1 — Comandos Git essenciais

```bash
# 1. Configurar seu nome e e-mail (só na primeira vez)
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

# 2. Iniciar um repositório na sua pasta do projeto
git init

# 3. Adicionar todos os arquivos para o próximo commit
git add .

# 4. Criar um commit (salva um ponto na história)
git commit -m "feat: estrutura inicial do cartão de visitas"

# 5. Conectar ao repositório do GitHub (substitua a URL)
git remote add origin https://github.com/seuusuario/seu-repositorio.git

# 6. Enviar para o GitHub
git push -u origin main

# Após o primeiro push, use só:
git push
```

**Dicas de mensagens de commit:**
```
feat: adiciona seção de contato
feat: implementa dark mode
style: ajusta cores do tema escuro
fix: corrige link quebrado do LinkedIn
content: adiciona foto e texto sobre mim
```

---

## Anexo 2 — Tags HTML para revisar

```html
<!-- Estrutura semântica -->
<header>   Cabeçalho da página (hero, logo)
<nav>      Navegação principal
<main>     Conteúdo principal (único por página)
<section>  Seção temática (tem título próprio)
<article>  Conteúdo independente (card, post)
<footer>   Rodapé

<!-- Textos -->
<h1> a <h6>  Títulos em ordem hierárquica (um <h1> por página)
<p>          Parágrafo
<strong>     Texto importante (negrito semântico)
<em>         Ênfase (itálico semântico)
<time datetime="2024">  Data/hora semântica

<!-- Mídia -->
<img src="foto.jpg" alt="Descrição da foto">
<video controls>
  <source src="video.mp4" type="video/mp4">
</video>
<iframe src="https://youtube.com/embed/ID" title="Título do vídeo"></iframe>

<!-- Links e botões -->
<a href="https://..." target="_blank" rel="noopener noreferrer">Link externo</a>
<button type="button">Ação sem navegação</button>

<!-- Listas -->
<ul>  Lista sem ordem (bullets)
<ol>  Lista ordenada (números)
<li>  Item de lista
```

---

## Anexo 3 — Variáveis CSS rápidas

```css
:root {
  /* Cores */
  --cor-primaria:    #7c3aed;  /* viola */
  --cor-secundaria:  #ec4899;  /* rosa */
  --cor-fundo:       #ffffff;
  --cor-texto:       #1e1b4b;

  /* Tipografia */
  --fonte: 'Segoe UI', sans-serif;

  /* Espaçamento */
  --gap-sm: 0.5rem;   /*  8px */
  --gap-md: 1rem;     /* 16px */
  --gap-lg: 2rem;     /* 32px */

  /* Bordas */
  --raio: 12px;
}

/* Usar as variáveis: */
.meu-elemento {
  color: var(--cor-primaria);
  padding: var(--gap-md);
  border-radius: var(--raio);
}
```

---

*Bom trabalho! Qualquer dúvida, chame no grupo ou abra uma issue no GitHub.*
