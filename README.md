# Terapia Além dos Muros

Site de Daniel Sena: atendimento terapêutico, dependência química, apoio aos familiares e informações sobre as unidades de Camaçari, Ilhéus e Itabuna. Mensalidades a partir de R$ 1.300; pacote de consultas terapêuticas separado. Todos os contatos seguem para o WhatsApp de Daniel.

## Publicar na Cloudflare Workers

No painel Cloudflare, abra **Workers & Pages → Create → Import a repository**, selecione este repositório e a branch **main**.

| Campo | Valor |
| --- | --- |
| Nome do Worker | `terapia-alem-dos-muros` |
| Diretório raiz | raiz do repositório |
| Comando de build | `npm run build` |
| Comando de deploy | `npm run deploy` |

Clique em **Deploy**. Não precisa configurar banco de dados, variáveis de ambiente ou colar tokens no código. A conexão GitHub/Cloudflare deve ter acesso a este repositório. As imagens e a página estão em `public/`, prontas para publicação. O comando padrão `npx wrangler deploy` também funciona, pois os arquivos estáticos já estão preparados.

O `wrangler.jsonc` contém a configuração de hospedagem. O nome do Worker no painel deve corresponder a `terapia-alem-dos-muros`. Depois da conexão, os pushes em `main` podem gerar novas publicações pela integração da Cloudflare.

### Alternativa: Cloudflare Pages

Selecione **Pages**, use o preset **None**, build **npm run build** e diretório de saída **public**. Não há comando de deploy no fluxo do Pages.

## Comandos locais

- `npm ci`: instala as versões do lockfile.
- `npm run dev`: abre o ambiente local do Wrangler.
- `npm run build`: verifica os arquivos, as imagens, o JavaScript e os links internos.
- `npm run deploy:check`: valida a configuração sem publicar.
- `npm run deploy`: verifica e publica na conta Cloudflare autenticada.

## Conteúdo

Edite `public/index.html`. As imagens editoriais geradas por IA estão em `public/assets/`. Relatos públicos e estatísticas têm fonte identificada no site; não são depoimentos de pacientes de Daniel. O formulário apenas prepara uma mensagem no WhatsApp, sem armazenamento de dados.
