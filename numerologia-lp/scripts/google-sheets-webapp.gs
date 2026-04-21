/**
 * Google Apps Script — cola isto num projeto ligado à tua planilha:
 * Planilha → Extensões → Apps Script → apaga o conteúdo e cola este ficheiro.
 *
 * 1) Primeira linha da aba (cabeçalhos), na A1: Data/hora | Nome completo | Data nascimento | WhatsApp | Capturado em (ISO)
 * 2) Executa uma vez "doPost" ou grava o projeto — autoriza o acesso à planilha.
 * 3) Implementar → Nova implementação → Tipo: App da Web
 *    - Executar como: Eu
 *    - Quem tem acesso: Qualquer pessoa
 * 4) Copia o URL da Web App (termina em /exec) e define no .env:
 *    VITE_GOOGLE_SHEETS_WEB_APP_URL="https://script.google.com/macros/s/XXXX/exec"
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
  } catch (err) {
    return jsonOut({ ok: false, error: "lock" });
  }

  try {
    var raw = e.parameter && e.parameter.data;
    if (!raw) {
      return jsonOut({ ok: false, error: "missing data" });
    }
    var data = JSON.parse(raw);
    var name = String(data.fullName || "").trim();
    var birth = String(data.birthDate || "").trim();
    var wa = String(data.whatsapp || "").trim();
    var cap = String(data.capturedAt || "").trim();
    if (!name || !birth || !wa) {
      return jsonOut({ ok: false, error: "invalid" });
    }

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    var brNow = Utilities.formatDate(new Date(), "America/Sao_Paulo", "dd/MM/yyyy HH:mm:ss");
    sheet.appendRow([brNow, name, birth, wa, cap || new Date().toISOString()]);

    return jsonOut({ ok: true });
  } catch (err) {
    return jsonOut({ ok: false, error: String(err) });
  } finally {
    try {
      lock.releaseLock();
    } catch (ex) {
      // ignore
    }
  }
}

function jsonOut(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
