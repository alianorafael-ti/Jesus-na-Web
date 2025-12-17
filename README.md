README: Projeto Jesus na Web
🌐 Jesus na Web: Plataforma de Conteúdo Doutrinário e Testemunho
Visão Geral

O projeto Jesus na Web é um website institucional e de conteúdo, criado com o propósito de glorificar a Deus, servir como ferramenta de ensino e discipulado, e promover a Sã Doutrina através da rede (Oséias 6:3).

Este projeto foi desenvolvido como trabalho de conclusão do curso Projeto Avançatc – Curso de PHP e demonstra a aplicação de conceitos de frontend robusto e arquitetura preparada para a integração com back-end em PHP.
🌟 Propósito e Missão

O site é dividido em dois pilares:

    Conteúdo Doutrinário: Oferecer estudos bíblicos, apologética e reflexões, focando na pregação fiel das Escrituras.

    Transparência e Conexão: A página "Quem Somos" inclui o testemunho de vida e propósito do autor (Aliano Rafael), estabelecendo autenticidade e provando o poder restaurador da fé em Jesus Cristo.

💻 Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias web nativas (Vanilla Web) para garantir leveza, alta performance e demonstrar total domínio sobre os fundamentos do frontend.

    Linguagens: HTML5 e CSS3.

    Design/Layout: Utilização de CSS puro (sem frameworks) com Flexbox e CSS Grid para layout responsivo.

    Arquitetura: Single Page Application (SPA adaptada) com estrutura modular.

    Controle de Versão: Git.

🔑 Pontos Técnicos de Destaque

    Preparação para PHP: O Formulário de Contato está estruturado com action="processa_contato.php" e method="POST", além de incluir o atributo name em todos os campos, o que é fundamental para a futura manipulação de dados via back-end em PHP.

    Soluções de Contraste: Implementação de técnicas de CSS (text-shadow e ajustes de overlay) para garantir a legibilidade dos títulos sobre imagens e fundos complexos.

    Design Consistente: Uso de temas visuais (gradientes, cards e transparência) definidos no style.css e padronizados em todas as páginas (index.html e quemsomos.html).

📁 Estrutura de Arquivos

A estrutura do projeto é a seguinte:

Jesus-na-Web/
├── index.html            # Homepage principal (SPA)
├── quemsomos.html        # Página Institucional: Crenças e Testemunho
├── style.css             # Estilos globais (layout, cores, footer)
├── quemsomos.css         # Estilos específicos da página Quem Somos
├── processa_contato.php  # Arquivo placeholder para o futuro script PHP
├── .gitignore            # Arquivo para controle de arquivos ignorados pelo Git
└── README.md             # Este arquivo

⚙️ Como Executar o Projeto Localmente

    Clone o Repositório:
    Bash

git clone https://github.com/alianorafael-ti/Jesus-na-Web.git

Acesse a Pasta:
Bash

cd Jesus-na-Web

Abra no Navegador: Abra o arquivo index.html diretamente no seu navegador (file:///caminho/para/Jesus-na-Web/index.html) ou utilize um servidor local (como o XAMPP).
