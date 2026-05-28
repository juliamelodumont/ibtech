
const btnTema = document.getElementById('btnTema');

function inicializarTema() {
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo === 'escuro') {
        document.body.classList.add('tema-escuro');
        btnTema.textContent = '☀️';
    }
}

btnTema.addEventListener('click', () => {
    document.body.classList.toggle('tema-escuro');

    const escuroAtivo = document.body.classList.contains('tema-escuro');
    btnTema.textContent = escuroAtivo ? '☀️' : '🌙';
    localStorage.setItem('tema', escuroAtivo ? 'escuro' : 'claro');
});

inicializarTema();


/* =====================================================
   INTERAÇÃO 2 — COPIAR E-MAIL AO CLICAR
   Usa a Clipboard API. Se o navegador não suportar,
   exibe o endereço via alert como fallback.
   ===================================================== */
const copiarEmailEl = document.getElementById('copiarEmail');
const notificacao    = document.getElementById('notificacao');
let timeoutNotificacao;

if (copiarEmailEl) {

    function ativarCopiaEmail() {
        // O e-mail está no atributo data-email do próprio elemento
        // ✏️ Se mudar o e-mail no HTML, não precisa alterar nada aqui
        const email = copiarEmailEl.dataset.email;

        navigator.clipboard.writeText(email)
            .then(() => {
                exibirNotificacao('✅ E-mail copiado para a área de transferência!');
            })
            .catch(() => {
                // Fallback para navegadores que bloqueiam clipboard
                alert('E-mail: ' + email);
            });
    }

    // Suporta clique do mouse e tecla Enter/Space (acessibilidade)
    copiarEmailEl.addEventListener('click', ativarCopiaEmail);
    copiarEmailEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            ativarCopiaEmail();
        }
    });
}

function exibirNotificacao(mensagem) {
    notificacao.textContent = mensagem;
    notificacao.classList.add('visivel');
    clearTimeout(timeoutNotificacao);
    timeoutNotificacao = setTimeout(() => {
        notificacao.classList.remove('visivel');
    }, 3000);
}


/* =====================================================
   INTERAÇÃO 3 — SCROLL SPY (destaque do link ativo)
   Detecta qual seção está visível na tela e marca
   o link correspondente no menu de navegação.
   ===================================================== */
const secoes   = document.querySelectorAll('section[id]');
const linksNav = document.querySelectorAll('.nav__links a[href^="#"]');

function atualizarLinkAtivo() {
    let secaoAtual = '';

    secoes.forEach(secao => {
        const topoDaSecao = secao.offsetTop - 140;
        if (window.scrollY >= topoDaSecao) {
            secaoAtual = secao.getAttribute('id');
        }
    });

    linksNav.forEach(link => {
        link.classList.remove('ativo');
        if (link.getAttribute('href') === '#' + secaoAtual) {
            link.classList.add('ativo');
        }
    });
}

window.addEventListener('scroll', atualizarLinkAtivo, { passive: true });
atualizarLinkAtivo(); 



const elementoDigitacao = document.getElementById('typing-text');
const frases = [
    'Formei em 2025, na Fundacao Torino',         
    'Estudante de CID-IA, na Ibmec',            
    
]
const VELOCIDADE_DIGITAR  = 75;   // ms por caractere ao digitar (menor = mais rápido)
const VELOCIDADE_APAGAR   = 40;   // ms por caractere ao apagar
const PAUSA_ENTRE_FRASES  = 2200; // ms que a frase fica completa antes de apagar

let indiceFrase = 0;
let indiceChar  = 0;
let estaDigitando = true;

function animarDigitacao() {
    if (!elementoDigitacao) return;

    const fraseAtual = frases[indiceFrase];

    if (estaDigitando) {
        elementoDigitacao.textContent = fraseAtual.substring(0, indiceChar + 1);
        indiceChar++;

        if (indiceChar === fraseAtual.length) {
            // Frase completa: pausa antes de começar a apagar
            estaDigitando = false;
            setTimeout(animarDigitacao, PAUSA_ENTRE_FRASES);
            return;
        }
        setTimeout(animarDigitacao, VELOCIDADE_DIGITAR);

    } else {
        elementoDigitacao.textContent = fraseAtual.substring(0, indiceChar - 1);
        indiceChar--;

        if (indiceChar === 0) {
            // Frase apagada: avança para a próxima
            estaDigitando = true;
            indiceFrase = (indiceFrase + 1) % frases.length;
        }
        setTimeout(animarDigitacao, VELOCIDADE_APAGAR);
    }
}

// Delay inicial para não competir com as animações CSS do hero
setTimeout(animarDigitacao, 1200);


/* =====================================================
   EXTRA — ANO AUTOMÁTICO NO RODAPÉ
   Atualiza o ano automaticamente sem precisar editar o HTML.
   ===================================================== */
const anoAtualEl = document.getElementById('anoAtual');
if (anoAtualEl) {
    anoAtualEl.textContent = new Date().getFullYear();
}


/* =====================================================
   EXTRA — BOTÃO "VOLTAR AO TOPO"
   ===================================================== */
const btnTopo = document.getElementById('btnTopo');
if (btnTopo) {
    btnTopo.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
