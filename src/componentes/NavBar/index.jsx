import './NavBar.scss'
import { useState } from 'react'

// Função para alternar duas classes em um elemento
function mudarClasseTema(element, classe1, classe2) {
    element.classList.toggle(classe1)
    element.classList.toggle(classe2)
}

// Função para ativar o menu
function fMenu() {
    document.getElementById('botaoMenu').classList.toggle('menuAtivo')
}


// Função principal da barra de navegação
export default function NavBar() {

    // Estado atual
    const [tema, setTema] = useState('tema1')

    // Mudar o tema
    function mudarTema() {
        const root = document.getElementById('root')

        // Alterna as classes no elemento root
        mudarClasseTema(root, 'tema1', 'tema2')

        // Atualiza o estado com o tema atual
        setTema(root.classList.contains('tema1') ? 'tema1' : 'tema2')
    }

    return (
        <span className="navBar">
            <span className="botaoTema" onClick={mudarTema}>

                {/* Condicional para mudar o tema */}
                {tema === 'tema1' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-moon-fill" viewBox="0 0 16 16">
                    <path d="M11.473 11a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5z"/>
                    <path d="M11.286 1.778a.5.5 0 0 0-.565-.755 4.595 4.595 0 0 0-3.18 5.003 5.5 5.5 0 0 1 1.055.209A3.6 3.6 0 0 1 9.83 2.617a4.593 4.593 0 0 0 4.31 5.744 3.58 3.58 0 0 1-2.241.634q.244.477.394 1a4.59 4.59 0 0 0 3.624-2.04.5.5 0 0 0-.565-.755 3.593 3.593 0 0 1-4.065-5.422z"/>
                </svg>
                ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-sun-fill" viewBox="0 0 16 16">
                    <path d="M11.473 11a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5z"/>
                    <path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708zm1.734 3.374a2 2 0 1 1 3.296 2.198q.3.423.516.898a3 3 0 1 0-4.84-3.225q.529.017 1.028.129m4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377M14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"/>
                </svg>
                )}
            </span>

            {/* ìcone do menu - Tamanho até tablet AINDA NÃO CONFIGURADO A RESPONSIVIDADE */}
            <span id="botaoMenu" className="botaoMenu" onClick={fMenu}>
                <span className="linha linha01" />
                <span className="linha linha02" />
                <span className="linha linha03" />
            </span>
        </span>
    );
}
