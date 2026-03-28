O PLAYER SÓ FUNCIONA SE O FICHEIRO ESTIVER AQUI (não basta estar noutra pasta do PC).

1. Copie para ESTA pasta (nova-lp/public/media/):

   IMG_1852.mp4     ← preferencial (H.264, funciona em quase todos os browsers)
   IMG_1852.MOV     ← opcional como segundo formato

2. Nomes EXATOS (maiúsculas como acima).

   ATENÇÃO Windows (extensões duplicadas):
   - Explorador → Ver → Mostrar → Extensões de nome de ficheiro (ativar).
   - O ficheiro pode estar guardado como IMG_1852.mp4.mp4 ou IMG_1852.MOV.MOV
     sem te dares conta. Renomeia para UM só: IMG_1852.mp4
   A página também tenta estes nomes, mas o ideal é um ficheiro limpo.

   Preferir sempre IMG_1852.mp4 com codec H.264 (não HEVC) para Chrome/Edge.

3. Reinicie o servidor: na pasta nova-lp → npm run dev

4. Teste no browser abrindo diretamente:
   http://localhost:8080/nova/media/IMG_1852.mp4
   Se pedir download ou mostrar o vídeo, o caminho está certo.

5. Para verificar no terminal: npm run check-media
