# Quick Cam Preview

**Demo ao vivo:** [https://mateusgiordani.github.io/quick-cam-preview/](https://mateusgiordani.github.io/quick-cam-preview/)

Ferramenta mínima no navegador para testar entradas de vídeo. Escolha uma câmera na lista e veja o feed ao vivo na hora — sem instalação, sem backend.

Funciona com:

- Webcam integrada do notebook
- Webcams USB
- Placas de captura USB baratas (HDMI, composite, etc.)

Se o navegador enxergar o dispositivo, você pode testar aqui.

## Início rápido

1. Clone ou baixe este repositório.
2. Abra `index.html` em um navegador moderno (Chrome, Firefox, Edge, Safari).
3. Permita o acesso à câmera quando solicitado.
4. Selecione um dispositivo no menu e clique em **Start Feed** (ou troque o dispositivo — o stream atualiza sozinho).

> **Nota:** Navegadores exigem contexto seguro para acesso à câmera. Abrir o arquivo direto (`file://`) costuma funcionar para testes locais. Se houver problema de permissão, sirva a pasta com qualquer servidor estático:

```bash
python3 -m http.server 8080
```

Depois acesse `http://localhost:8080`.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub chamado `quick-cam-preview` (ou renomeie o repositório atual para esse nome).
2. Envie estes arquivos para a branch `main` (a raiz do repo deve conter `index.html`).
3. No GitHub: **Settings → Pages → Build and deployment**
   - **Source:** Deploy from a branch
   - **Branch:** `main` / **Folder:** `/ (root)`
4. Salve. Em alguns minutos o site fica no ar (este projeto):

   [https://mateusgiordani.github.io/quick-cam-preview/](https://mateusgiordani.github.io/quick-cam-preview/)

> Use sempre a URL do Pages (HTTPS). Câmera em `http://` costuma ser bloqueada fora de `localhost`.

## Como funciona

1. Pede permissão de câmera uma vez para os nomes dos dispositivos aparecerem.
2. Lista cada `videoinput` via [MediaDevices API](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices).
3. Abre o stream do dispositivo selecionado em até 1280×720.

## Estrutura do projeto

```
quick-cam-preview/
├── index.html      # Marcação da página
├── css/
│   └── styles.css  # Layout e estilos
├── js/
│   └── app.js      # Enumeração de dispositivos e stream
└── README.md
```

## Requisitos

- Navegador com suporte a `navigator.mediaDevices.getUserMedia`
- Pelo menos uma entrada de vídeo
- Permissão de câmera concedida para a origem da página

## Solução de problemas

| Problema | O que tentar |
|--------|-------------|
| Lista de câmeras vazia | Conceda permissão e atualize a página |
| Nomes genéricos como "Camera 1" | Permissão foi negada antes da enumeração; recarregue e permita acesso |
| Stream falha em placa de captura | Algumas placas precisam de sinal conectado; teste outro navegador |
| `file://` bloqueado | Use um servidor HTTP local (veja Início rápido) |
| Página no Pages sem câmera | Confirme que está em `https://...github.io/...` e permitiu a câmera |

## Licença

Use como quiser — utilitário pequeno para conferir se suas câmeras funcionam.
