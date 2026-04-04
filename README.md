<div align="center">
  
  <img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" width="80" height="80" alt="Paw Icon"/>
  
  <h1 style="font-size: 3em; margin: 0;">🐾 PetManager</h1>
  <h3 style="color: #6c5ce7; margin-top: -10px;">✨ MVC Architecture Pet Management System ✨</h3>
  
  <p>
    <img src="https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=node.js&logoColor=white" />
    <img src="https://img.shields.io/badge/Express-4.x-000000?style=for-the-badge&logo=express&logoColor=white" />
    <img src="https://img.shields.io/badge/Handlebars-4.x-FF6600?style=for-the-badge&logo=handlebars&logoColor=white" />
    <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-00C7B7?style=for-the-badge" />
  </p>
  
  <p>
    <img src="https://img.shields.io/badge/📚%20Disciplina-Desenvolvimento%20Web%203-9b59b6?style=flat-square" />
    <img src="https://img.shields.io/badge/🎓%20Autora-Maysa%20Alexandre%20Nazario-f39c12?style=flat-square" />
  </p>

  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=header&fontSize=0" width="100%"/>

</div>

---

## 🌟 **Destaques do Projeto**

<div align="center">
  <table>
    <tr>
      <td align="center">🎯</td>
      <td><b>Arquitetura MVC</b><br/>Separação clara de responsabilidades</td>
      <td align="center">⚡</td>
      <td><b>CRUD Completo</b><br/>Create, Read, Update, Delete</td>
    </tr>
    <tr>
      <td align="center">🎨</td>
      <td><b>Design Moderno</b><br/>Interface responsiva e intuitiva</td>
      <td align="center">🔧</td>
      <td><b>Node.js + Express</b><br/>Backend robusto e eficiente</td>
    </tr>
  </table>
</div>

---

## 📖 **Sobre o Projeto**

<div align="center">
  <blockquote style="font-size: 1.1em; border-left: 4px solid #6c5ce7; padding: 10px 20px; background: #f8f9fa; border-radius: 10px;">
    <i>"Uma aplicação web completa que transforma o gerenciamento de pets em uma experiência simples, elegante e eficiente."</i>
  </blockquote>
</div>

<p align="justify">
  O <b>PetManager</b> é um sistema desenvolvido com propósito educacional para a disciplina de <b>Desenvolvimento Web 3</b>. A aplicação demonstra na prática os conceitos fundamentais do padrão arquitetural <b>MVC (Model-View-Controller)</b>, implementando um sistema completo de gerenciamento de animais de estimação com funcionalidades de cadastro, listagem, edição e exclusão.
</p>

### 🎯 **Objetivos de Aprendizado Alcançados**

- ✅ Compreensão prática do padrão **MVC**
- ✅ Implementação de **rotas dinâmicas** com Express
- ✅ Renderização de **views dinâmicas** com Handlebars
- ✅ Manipulação de dados com **JavaScript puro**
- ✅ **Organização modular** do código
- ✅ **Boas práticas** de desenvolvimento web

---

## 🏛️ **Arquitetura do Sistema**

<div align="center">
  
```mermaid
graph TB
    subgraph "Cliente"
        A[Navegador Web]
    end
    
    subgraph "Server Node.js"
        B[Express Server]
        C[Routes]
    end
    
    subgraph "MVC Pattern"
        D[Controller<br/>animaisController.js]
        E[Model<br/>animaisModel.js]
        F[View<br/>Handlebars Templates]
    end
    
    A -->|HTTP Request| B
    B --> C
    C --> D
    D -->|CRUD Operations| E
    E -->|Data| D
    D -->|Render| F
    F -->|HTML/CSS| A
    
    style D fill:#6c5ce7,stroke:#333,stroke-width:2px,color:#fff
    style E fill:#00b894,stroke:#333,stroke-width:2px,color:#fff
    style F fill:#fdcb6e,stroke:#333,stroke-width:2px,color:#fff
```
  
</div>

### 📂 **Estrutura de Diretórios**

```bash
📦 projeto_mvc-desenvolvimento-web3/
┣ 📂 controllers/
┃ ┗ 📜 animaisController.js      # 🎮 Lógica de controle
┣ 📂 models/
┃ ┗ 📜 animaisModel.js           # 💾 Gerenciamento de dados
┣ 📂 views/
┃ ┣ 📜 layout.handlebars         # 🖼️ Template base
┃ ┣ 📜 listaAnimais.handlebars   # 📋 Listagem de pets
┃ ┣ 📜 adicionarAnimal.handlebars # ➕ Formulário de cadastro
┃ ┗ 📜 editaAnimal.handlebars    # ✏️ Formulário de edição
┣ 📂 public/
┃ ┗ 🎨 estilo.css                 # 🎨 Estilização da interface
┗ 🚀 server.js                    # ⚙️ Configuração principal
```

---

## 🛠️ **Tecnologias Utilizadas**

<div align="center">
  
  | 🚀 Backend | 🎨 Frontend | 🛠️ Ferramentas |
  |------------|-------------|-----------------|
  | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white) | ![Handlebars](https://img.shields.io/badge/Handlebars-FF6600?style=flat-square&logo=handlebars&logoColor=white) | ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) |
  | ![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white) | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | ![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white) |
  | ![Body-Parser](https://img.shields.io/badge/Body_Parser-5.6.0-8A2BE2?style=flat-square) | - | ![NPM](https://img.shields.io/badge/NPM-CB3837?style=flat-square&logo=npm&logoColor=white) |
  
</div>

---

## 🚀 **Como Executar o Projeto**

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=18&duration=3000&pause=500&color=6C5CE7&center=true&vCenter=true&width=435&lines=⚡+Pronto+para+começar%3F;🐱+Siga+os+passos+abaixo+...;🚀+Seu+pet+manager+te+espera!" alt="Typing SVG" />
</div>

### 📋 **Pré-requisitos**

```bash
✓ Node.js (versão 14 ou superior)
✓ NPM (gerenciador de pacotes)
✓ Git (para clonar o repositório)
```

### 💻 **Passo a Passo**

```bash
# 1️⃣ Clone o repositório
git clone https://github.com/seu-usuario/projeto_mvc-desenvolvimento-web3.git

# 2️⃣ Acesse a pasta do projeto
cd projeto_mvc-desenvolvimento-web3

# 3️⃣ Instale as dependências
npm install

# 4️⃣ Inicie o servidor
npm start
# ou
node server.js

# 5️⃣ Abra o navegador e acesse
🌐 http://localhost:3000
```

---

## 🔗 **Rotas da Aplicação**

<div align="center">
  
| Método | Rota | Descrição | 📍 Status |
|--------|------|-----------|-----------|
| <span style="color:#61affe">GET</span> | `/` | 🏠 Página inicial - Lista todos os pets | 🟢 Ativo |
| <span style="color:#61affe">GET</span> | `/animais/adicionar` | 📝 Exibe formulário de cadastro | 🟢 Ativo |
| <span style="color:#49cc90">POST</span> | `/animais` | 💾 Cadastra novo animal | 🟢 Ativo |
| <span style="color:#61affe">GET</span> | `/animais/:id/editar` | ✏️ Exibe formulário de edição | 🟢 Ativo |
| <span style="color:#49cc90">POST</span> | `/animais/:id/editar` | 🔄 Salva alterações | 🟢 Ativo |
| <span style="color:#f93e3e">GET</span> | `/animais/:id/excluir` | 🗑️ Remove animal do sistema | 🟢 Ativo |

</div>

---

## ✨ **Funcionalidades**

<div align="center">
  
  | Funcionalidade | Descrição | Status |
  |----------------|-----------|--------|
  | 🐕 **Listagem de Pets** | Visualize todos os animais cadastrados | ✅ |
  | ➕ **Cadastro de Pets** | Adicione novos animais com espécie e status vacinal | ✅ |
  | ✏️ **Edição de Pets** | Atualize informações dos animais cadastrados | ✅ |
  | 🗑️ **Exclusão de Pets** | Remova animais do sistema | ✅ |
  | 🎨 **Interface Moderna** | Design responsivo e intuitivo | ✅ |
  | 📱 **Responsividade** | Funciona em dispositivos móveis e desktop | ✅ |

</div>

---

## 🎨 **Preview da Interface**

<div align="center">
  
  ```
  ┌────────────────────────────────────────────────────┐
  │  🐾 PETMANAGER                        [➕ NOVO PET] │
  ├────────────────────────────────────────────────────┤
  │                                                    │
  │  🐕 Rex (Cachorro)                                │
  │  🟢 Status: Vacinado                               │
  │  [✏️ EDITAR]  [🗑️ EXCLUIR]                       │
  │                                                    │
  │  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
  │                                                    │
  │  🐱 Mimi (Gato)                                   │
  │  🔴 Status: Não Vacinado                           │
  │  [✏️ EDITAR]  [🗑️ EXCLUIR]                       │
  │                                                    │
  │  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
  │                                                    │
  │  🐦 Piu (Pássaro)                                 │
  │  🟡 Status: Pendente                               │
  │  [✏️ EDITAR]  [🗑️ EXCLUIR]                       │
  │                                                    │
  └────────────────────────────────────────────────────┘
  ```
  
</div>

---

## 📦 **Dependências do Projeto**

<details>
<summary><b>📋 Clique para ver as dependências</b></summary>

```json
{
  "dependencies": {
    "express": "^4.18.2",
    "express-handlebars": "^7.0.7",
    "body-parser": "^1.20.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```
</details>

---

## 🤝 **Contribuição**

<div align="center">
  
  Este é um projeto educacional, mas sugestões são sempre bem-vindas!
  
  <a href="#">
    <img src="https://img.shields.io/badge/💡%20Sugestões-Bem%20Vindas-6c5ce7?style=for-the-badge" />
  </a>
  
</div>

---

## 👩‍🎓 **Sobre a Autora**

<div align="center">
  
  <img src="https://img.icons8.com/color/96/000000/circled-user-male-skin-type-7.png" width="80" style="border-radius: 50%"/>
  
  ### **Maysa Alexandre Nazario**
  
  <p>
    🎓 Estudante de Desenvolvimento Web<br/>
    💡 Apaixonada por tecnologia e inovação<br/>
    🐾 Amante de animais e código bem escrito
  </p>
  
  <a href="https://github.com/maysanazario">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
  </a>
  <a href="https://linkedin.com/in/maysanazario">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
  
</div>

---

## 📄 **Licença**

<div align="center">
  
  Este projeto está sob a licença **MIT** - sinta-se livre para usar, modificar e distribuir!
  
  <img src="https://img.shields.io/badge/License-MIT-6c5ce7?style=flat-square" />
  
</div>

---

<div align="center">
  
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=footer&fontSize=0" width="100%"/>

</div>
