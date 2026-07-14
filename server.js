import "dotenv/config";
import dbConnection from "./src/config/dbConnect.js";
import app from "./src/app.js";

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