// pages/api/send-to-n8n.ts
export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const response = await fetch('https://faelsouz0211.app.n8n.cloud/webhook/leads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(req.body),
            });

            const data = await response.json();
            res.status(200).json(data);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao enviar dados ao n8n' });
        }
    } else {
        res.status(405).json({ error: 'Método não permitido' });
    }
}
