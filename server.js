import "dotenv/config";
import dbConnection from "./src/config/dbConnect.js";
import app from "./src/app.js";
import dns from 'node:dns/promises';

// Resolve o problema de compatibilidade entre o nodejs:24 e a resolução do DNS SRV    
dns.setServers([
  '1.1.1.1',
  '8.8.8.8'
]);

const PORT = 8000;

async function startServer() {
    try {
        const connection = await dbConnection();
        connection.once("open", () => {
            console.log("Conexão com o BD feita com sucesso");
            app.listen(PORT, () => {
                console.log(`Servidor escutando na porta ${PORT}`);
            })
        })
    } catch (error) {
        console.error("Erro ao conectar com o BD", error)
    }
}

startServer();