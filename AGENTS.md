# AGENTS.md

## Cursor Cloud specific instructions

### Visão geral

**Quick Cam Preview** é um site estático puro (HTML/CSS/JavaScript vanilla) sem dependências, sem build, sem backend. Não há `package.json`, `requirements.txt` nem qualquer gerenciador de pacotes.

### Como rodar localmente

Servir os arquivos com qualquer servidor HTTP estático a partir da raiz do repositório:

```bash
python3 -m http.server 8080
```

Acessar em `http://localhost:8080`.

### Notas importantes para agentes Cloud

- **Sem dependências para instalar** — não há `npm install`, `pip install`, nem comandos de build.
- **Câmera não disponível em VMs headless** — a funcionalidade principal (acesso à webcam via `getUserMedia`) não funciona em ambientes sem dispositivo de vídeo. O app exibe "Permission denied or no camera found" nesse cenário, o que é comportamento esperado.
- **Lint/testes automatizados** — o projeto não inclui linter nem framework de testes configurado. Validação se limita a verificar que o servidor HTTP responde com status 200 para `index.html`, `css/styles.css` e `js/app.js`.
- **Estrutura** — veja a seção "Estrutura do projeto" no `README.md`.
