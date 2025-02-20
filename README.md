# 🏆 Desafio para Desenvolvedor Full Stack  

Bem-vindo ao nosso desafio técnico! Esta é a sua chance de mostrar suas habilidades como desenvolvedor Full Stack.  

O desafio envolve a criação de uma **API REST** e uma **interface web** para um sistema de classificados de imóveis. Queremos avaliar sua capacidade de estruturar um projeto, organizar o código, aplicar boas práticas e entregar uma solução funcional.  

📌 **Importante:**  
❌ **O uso de IA para gerar código é proibido e desclassificará o candidato.**  
✅ Esperamos código de qualidade, com boas práticas e sem atalhos.  

---

## 📌 Como participar  

1. **Faça um fork deste repositório** e clone o projeto em sua máquina.  
2. Desenvolva as aplicações conforme os requisitos abaixo:  
   - **Backend:** Node.js (TypeScript) dentro da pasta `backend/`  
   - **Frontend:** React com Next.js dentro da pasta `frontend/`  
3. **Adicione um README na raiz do projeto** com instruções para rodar a aplicação.  
4. **Submeta um Pull Request** para este repositório.  

---

## 🏗️ O Desafio  

Você deverá criar um **sistema de classificados de imóveis**, onde usuários podem cadastrar seus imóveis para venda e interessados podem pesquisá-los.

### **1️⃣ Backend (API REST com Node.js e banco de dados)**  

Crie uma API REST que permita o **CRUD** (Create, Read, Update, Delete) dos imóveis, além de um mecanismo de pesquisa eficiente.  

#### 🔹 **Requisitos**  
✔ Desenvolver utilizando **Node.js com TypeScript**  
✔ Usar **Express.js** ou **Fastify** como framework web  
✔ Utilizar **PostgreSQL** ou **MongoDB** como banco de dados  
✔ Aplicar **migrations e seeders** para dados iniciais  
✔ Implementar **filtros avançados** para pesquisa de imóveis  
✔ Criar **paginações eficientes** para listagens  

#### 🏡 **Modelo do Imóvel**  
```json
{
  "id": "uuid",
  "title": "Apartamento 3 quartos",
  "description": "Apartamento novo, 80m², ótima localização",
  "price": 450000,
  "area": 80,
  "address": {
    "street": "Rua das Flores",
    "number": 123,
    "complement": "Apt 101",
    "neighborhood": "Centro",
    "city": "São Paulo",
    "state": "SP",
    "zip_code": "01010-010"
  },
  "published_at": "2024-02-18T12:00:00Z"
}
```

#### 🎯 **Diferenciais (ganhe pontos extras!)**  
✅ **Validação automática do CEP** via [ViaCEP](https://viacep.com.br/)  
✅ **Autenticação e autorização** para cadastro/edição/exclusão de imóveis  
✅ **Cache e otimização de queries** para melhor desempenho  
✅ **Docker** para facilitar a execução da aplicação  

---

### **2️⃣ Frontend (Interface Web com Next.js)**  

Desenvolva uma aplicação web responsiva para que os usuários possam **visualizar, filtrar e cadastrar imóveis**.

#### 🔹 **Requisitos**  
✔ Utilizar **Next.js com TypeScript**  
✔ Criar **duas páginas principais**:  
   - **Listagem de imóveis** com informações básicas  
   - **Detalhes do imóvel** com informações completas  
✔ Implementar **filtros dinâmicos** (preço, cidade, área)  
✔ Criar um **formulário funcional** para cadastrar imóveis  

#### 🎯 **Diferenciais (ganhe pontos extras!)**  
✅ **Persistência de estado** usando LocalStorage ou IndexedDB  
✅ **Paginação eficiente** na listagem de imóveis  
✅ **Animações e experiência aprimorada (UX/UI)**  
✅ **Deploy funcional na Vercel**  

---

## ⚙️ Execução do Projeto  

Após implementar a solução, inclua um **README detalhado** com:  
- Como instalar as dependências  
- Como rodar o projeto localmente  
- Como testar a API  

📢 **Dica:** Envie um código limpo, organizado e bem documentado. Isso conta muito!  

---

## ❌ Desclassificação Automática  

🔴 **Uso de ferramentas de IA para gerar código**  
🔴 **Código plagiado ou sem estrutura organizada**  
🔴 **Falta de README explicativo**  

---

## 📅 Prazo  

O tempo recomendado para o desafio é de **6 a 8 horas**. Caso precise de mais tempo, apenas nos avise.  

Boa sorte! 🚀
