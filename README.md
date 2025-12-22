# Blockchain Sandbox

Sandbox para estudos e experimentos com blockchain e Web3.

## Projetos

### stacks-block-explorer
Mini explorador de blocos para a blockchain Stacks.

- **Repositório original:** [dev-araujo/account-history__Stacks_learnWeb3-dao](https://github.com/dev-araujo/account-history__Stacks_learnWeb3-dao)
- **Localização:** [/stacks-block-explorer](./stacks-block-explorer)
- **Tecnologias:** Next.js, React, TypeScript, Tailwind CSS, Stacks.js
- **Descrição:** Aplicação que permite conectar carteiras Stacks e explorar histórico de transações

[📖 Ver documentação →](./stacks-block-explorer/README.md)

---

### foundry-fundamentals-cyfrin
Estudos do curso Foundry Fundamentals da Cyfrin Updraft.

- **Repositório original:** [dev-araujo/foundry-fundamentals__Cyfrin-Updraft-sandbox](https://github.com/dev-araujo/foundry-fundamentals__Cyfrin-Updraft-sandbox) (arquivado)
- **Localização:** [/foundry-fundamentals-cyfrin](./foundry-fundamentals-cyfrin)
- **Tecnologias:** Foundry, Solidity, Smart Contracts
- **Descrição:** Projetos e exercícios do curso de fundamentos do Foundry para desenvolvimento de smart contracts

[📖 Ver documentação →](./foundry-fundamentals-cyfrin/README.md)

---

### bitcoin-explorer-dojo
Explorador de blocos Bitcoin conectado ao nó Bitcoin Core.

- **Repositório original:** [dev-araujo/explorer-btc__dojo-nearx](https://github.com/dev-araujo/explorer-btc__dojo-nearx) (arquivado)
- **Localização:** [/bitcoin-explorer-dojo](./bitcoin-explorer-dojo)
- **Tecnologias:** React, TypeScript, Node.js, Bitcoin Core, Oracle Cloud
- **Descrição:** Explorador de blocos que se conecta a um nó Bitcoin para consultar informações da blockchain

[📖 Ver documentação →](./bitcoin-explorer-dojo/README.md)

---

### post-wall-sepolia
Mural descentralizado na rede Testnet Sepolia.

- **Repositório original:** [dev-araujo/post-wall-web3](https://github.com/dev-araujo/post-wall-web3) (arquivado)
- **Localização:** [/post-wall-sepolia](./post-wall-sepolia)
- **Tecnologias:** React, TypeScript, Foundry, Solidity, Smart Contracts
- **Descrição:** Aplicação descentralizada que permite postar mensagens em um mural armazenado na blockchain Sepolia

[📖 Ver documentação →](./post-wall-sepolia/README.md)

---

## Estrutura

```
blockchain-sandbox/
├── README.md (este arquivo)
├── stacks-block-explorer/
│   ├── app/
│   ├── components/
│   └── README.md
├── foundry-fundamentals-cyfrin/
│   ├── src/
│   ├── test/
│   └── README.md
├── bitcoin-explorer-dojo/
│   ├── frontend/
│   ├── backend/
│   └── README.md
└── post-wall-sepolia/
    ├── frontend/
    ├── contracts/
    └── README.md
```

## Como usar

### Clonar o repositório

```bash
git clone https://github.com/dev-araujo/blockchain-sandbox.git
cd blockchain-sandbox
```

### Executar um projeto específico

Cada subpasta contém um projeto independente com seu próprio README e instruções de instalação.

#### Exemplo: Stacks Block Explorer

```bash
cd stacks-block-explorer
npm install
npm run dev
```

Acesse `http://localhost:3000` no navegador.

#### Exemplo: Foundry Fundamentals

```bash
cd foundry-fundamentals-cyfrin
forge install
forge test
```

#### Exemplo: Bitcoin Explorer

```bash
cd bitcoin-explorer-dojo/frontend
npm install
npm start
```

#### Exemplo: Post Wall Sepolia

```bash
cd post-wall-sepolia/frontend
npm install
npm run dev
```

Consulte o README dentro de cada pasta para instruções detalhadas.

---

## Adicionar novos projetos

Para adicionar um novo projeto de estudo em blockchain/Web3:

1. Crie uma nova pasta na raiz do repositório
2. Adicione o código do projeto
3. Inclua um README.md com instruções
4. Atualize este README principal com a descrição do novo projeto

---

## Tecnologias

### Blockchains
- **Stacks** - Blockchain de segunda camada sobre Bitcoin
- **Bitcoin** - Blockchain original
- **Ethereum** - Blockchain com smart contracts
- **Sepolia** - Testnet Ethereum

### Desenvolvimento
- **Foundry** - Framework para smart contracts
- **Solidity** - Linguagem para smart contracts
- **Next.js / React** - Frameworks frontend
- **TypeScript** - Linguagem tipada
- **Node.js** - Runtime JavaScript

---

**Nota:** Este repositório consolida múltiplos projetos de estudo em blockchain e Web3 para facilitar organização e manutenção.
