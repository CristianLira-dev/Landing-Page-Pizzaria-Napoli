# 🍕 Pizzaria Napoli - Landing Page Experience


https://github.com/user-attachments/assets/7b081c1f-cd91-42e8-b7fc-1ebe3b601fe1
> *Uma experiência digital imersiva, unindo design gastronômico e performance web.*

## 💻 Sobre o Projeto

A **Pizzaria Napoli** é uma Landing Page de alta conversão desenvolvida para destacar a qualidade artesanal de uma pizzaria premium. 

Diferente de sites estáticos comuns, este projeto foca na **experiência do usuário (UX)** através de **animações fluídas** e interações táteis. O objetivo técnico foi explorar o poder do **React** combinado com **GSAP** para criar uma navegação que desperta o apetite e guia o usuário até o pedido.

🔗 **Acesse o projeto online:** [https://landing-page-pizzaria-napoli.vercel.app/](https://landing-page-pizzaria-napoli.vercel.app/)

---

## ✨ Destaques da Experiência (UX/UI)

- [x] **Animações de Entrada (GSAP):** Elementos que surgem suavemente conforme o scroll, guiando a leitura.
- [x] **Menu Interativo:** Cards de produtos com efeitos de *hover* e feedback visual imediato.
- [x] **Responsividade Total:** Layout adaptado para celulares (onde ocorre a maioria dos pedidos).
- [x] **Performance Otimizada:** Carregamento rápido de imagens e assets.

---

## 🛠️ Engenharia & Tecnologias

Este não é apenas um site bonito, é um código robusto.

- **Core:** React.js (Vite).
- **Animação:** GSAP (GreenSock Animation Platform) e ScrollTrigger.
- **Hooks Avançados:**
  - `useRef`: Para manipulação direta de elementos do DOM nas animações sem causar re-renders desnecessários.
  - `useLayoutEffect`: Para calcular posições e iniciar animações *antes* da pintura da tela, evitando "flicks" visuais.
- **Estilização:** CSS3 Moderno (Flexbox/Grid).

---

## 📸 Galeria Visual

| Hero Section (Início) | Cardápio / Menu |
| :---: | :---: |
| <img width="1919" height="914" alt="image" src="https://github.com/user-attachments/assets/5cbb2c6a-2b88-4726-9d06-0c49d597cc7b" /> | <img width="1919" height="913" alt="image" src="https://github.com/user-attachments/assets/6b873e44-1f11-4ba8-86a1-f1c7c4cccdfd" /> |

| Mobile View | Seção Depoimentos |
| :---: | :---: |
| <img width="467" height="765" alt="image" src="https://github.com/user-attachments/assets/88db752d-033b-4487-85ce-239c81bf09fe" /> | <img width="1919" height="796" alt="image" src="https://github.com/user-attachments/assets/12efd557-ee7c-4220-8b22-9708adbb1749" /> |

---

## 💡 Desafios Técnicos

O maior desafio foi sincronizar o **Ciclo de Vida do React** com as animações imperativas do GSAP.
- **Solução:** Utilizei o `useLayoutEffect` para garantir que o GSAP só iniciasse os cálculos de animação após o DOM estar completamente montado, mas antes de ser exibido ao usuário, garantindo uma fluidez de 60fps.

