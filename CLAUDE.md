# charconverter.com — Contexto do Projeto

## Regra crítica
**Nunca fazer commit ou push sem autorização explícita do usuário.** Após qualquer atualização, perguntar: "Quer que eu faça o commit (e push)?"

## O que é este projeto
Refatoração do site **charconverter.com** — ferramenta de conversão de texto em HTML+CSS+JS puro, hospedado na Vercel. O objetivo é aplicar o mesmo padrão visual e de UX do projeto **calcularrendapassiva.com** (CRP), disponível em `c:\projetos\calcularrendapassiva`.

## Referência: calcularrendapassiva.com (CRP)
Projeto-irmão já concluído em `c:\projetos\calcularrendapassiva`.
- Mesmo owner, mesmo stack (HTML+CSS+JS puro + Vercel)
- Mesmo design system (dark theme, cards, header-card.js, footer)
- **Sempre que tiver dúvida sobre padrão, CSS ou estrutura, consulte o CRP.**

## Arquivos base já copiados do CRP
| Arquivo | O que é |
|---|---|
| `css/style.css` | Design system completo — usar este, não o legado |
| `js/header-card.js` | Componente de branding (injeta card, lang-switch automático) |
| `js/email.js` | Captura de email bilíngue |
| `api/subscribe.js` | Vercel Function para Brevo |
| `vercel.json` | Redirect www→bare + cache headers |
| `robots.txt` | Base |

## Estrutura legada existente
- `index.html` — página principal (lógica dos modos de conversão a preservar)
- `script.js` — lógica JS atual
- `style.css` — CSS antigo na raiz (substituir por `css/style.css`)
- `assets/css/style.css` e `assets/js/script.js` — estrutura de build legada (descartar)
- `assets/less/` — LESS (descartar, não usar pré-processador)
- `articles/` — 4 artigos existentes a migrar para o novo template:
  - `ferramenta-texto.html`
  - `maiusculas-minusculas.html`
  - `slug.html`
  - `titulos.html`

## O que o site faz — modos de conversão
O usuário digita um texto e escolhe um dos modos. A conversão acontece em tempo real:
1. TUDO MAIÚSCULO
2. tudo minúsculo
3. Primeira letra maiúscula (somente)
4. Primeira Letra Maiúscula Mantendo As Existentes
5. Primeira letra de cada frase maiúscula
6. pRIMEIRA LETRA MINÚSCULA
7. aLtErNaDo CoMeÇaNdO mInÚsCuLo
8. AlTeRnAdO cOmEçAnDo MaIúScUlO
9. converter-para-slug

## Funcionalidades novas a adicionar
- **Contador em tempo real:** letras, palavras, caracteres, caracteres com espaços
- Exibido abaixo do textarea de input, atualiza conforme o usuário digita

## Objetivo da refatoração
- Aplicar o design system do CRP (`css/style.css`)
- Interface: textarea de input (grande) + botões de modo + textarea de output (ou atualização in-place)
- Contador em tempo real no input
- Migrar os 4 artigos existentes para o novo template de artigo do CRP
- **Bilíngue PT + EN** — "char converter" já está em inglês, audiência global
- `js/header-card.js` com mapa de pares bilíngues para artigos que tiverem versão EN
- SEO: sitemap, canonical, GA4, AdSense, Vercel Analytics

## Stack e regras técnicas
- HTML + CSS + JS puro — zero frameworks, zero Bootstrap, zero jQuery, zero LESS
- Sem build process — arquivos servidos diretamente
- Sem `style.css` na raiz — usar apenas `css/style.css`
- Converter a lógica de conversão do `script.js` atual para `js/conversor.js` (ou similar)

## Códigos de rastreamento
- **GA4:** confirmar com o usuário qual ID usar (pode ser o mesmo do CRP ou diferente)
- **AdSense:** confirmar com o usuário (pode ser o mesmo ca-pub-)
- **Vercel Analytics:** `/_vercel/insights/script.js`

## Deploy
- Vercel (projeto novo ou existente — verificar com o usuário)
- Testar URL provisória Vercel antes do swap de domínio
- Swap: configurar domínio como Primary (não redirect para www)
