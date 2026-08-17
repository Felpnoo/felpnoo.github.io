# ⚡ Portfólio Profissional & CV — Felipe dos Santos Silva

Portfólio interativo de alta performance com vitrine de projetos, galeria de certificações oficiais (FIAP, Udemy, IFRS) e download direto de currículo em PDF.

Hospedado no **GitHub Pages** sem necessidade de compilação ou frameworks pesados (`0 dependências`).

---

## 🌟 O que foi Integrado

- 📄 **Currículo em PDF Oficial**: Botões no cabeçalho e na hero section que permitem baixar ou visualizar diretamente o arquivo [`FELIPE-DOS-SANTOS-SILVA-CV.pdf`](assets/cv/FELIPE-DOS-SANTOS-SILVA-CV.pdf).
- 🎓 **Galeria de Certificados Interativa**:
  - Seção dedicada com **15 certificações oficiais** organizadas por abas (FIAP, Udemy).
  - Modal nativo para visualização ampliada de cada certificado em alta resolução ao clicar em *"Visualizar Certificado"*.
- 💻 **Perfil Técnico & Carreira Real**:
  - Trajetória em **Ciência da Computação (UERR)**, suporte operacional crítico na **SONDA**, docência na **MEGA CURSOS** e **UERR**, e desenvolvimento na **SH EMPRESAS**.
  - Especialidades: **Python (Pandas, Selenium, OpenCV, Django)**, **Linux Avançado (NixOS, Arch)**, **Automação RPA**, **Cloud & DevOps**.
- 🌓 **Modo Escuro / Claro Inteligente**: Detecção automática de preferência de SO com persistência em `localStorage`.
- 🔍 **Busca & Filtro em Tempo Real**: Filtre projetos e habilidades instantaneamente.

---

## 🚀 Como Publicar no seu GitHub Pages

### Opção 1: Via Linha de Comando (Git)

Abra o terminal na pasta do projeto (`C:\Users\Feliep\projects\projeto4`) e execute:

```bash
# 1. Inicializar o repositório git local
git init

# 2. Adicionar todos os arquivos (HTML, CSS, JS, CV e Certificados)
git add .

# 3. Criar o commit
git commit -m "feat: portfolio profissional de Felipe dos Santos Silva"

# 4. Definir branch principal como main
git branch -M main

# 5. Conectar com o seu repositório no GitHub
git remote add origin https://github.com/felpnoo/NOME-DO-SEU-REPOSITORIO.git

# 6. Enviar
git push -u origin main
```

Após o push:
1. No repositório no GitHub, vá em **Settings** ➔ **Pages** (no menu lateral).
2. Em **Build and deployment > Source**, selecione **Deploy from a branch**.
3. Escolha o branch `main` e a pasta `/ (root)`. Clique em **Save**.
4. Em 1 minuto, seu portfólio estará online no link: `https://felpnoo.github.io/NOME-DO-SEU-REPOSITORIO/`

---

## 📁 Estrutura de Arquivos

```
projeto4/
│
├── index.html            # Estrutura semântica HTML5 com SEO, acessibilidade e modais
├── style.css             # Design System moderno, Glassmorphism, temas Dark/Light
├── app.js                # Dados do Felipe, lógica interativa, filtros e modais
├── README.md             # Documentação e instruções de deploy
│
└── assets/
    ├── cv/
    │   └── FELIPE-DOS-SANTOS-SILVA-CV.pdf     # Seu currículo oficial para download
    ├── certificates/                          # Imagens dos 15 certificados (FIAP, Udemy)
    └── images/                                # Mockups de projetos e avatar
```

---

## 📜 Licença

Distribuído sob a licença [MIT](LICENSE).
