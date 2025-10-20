import * as comidaModel from './../models/comidaModel.js'

export const listarTodos = async (req, res) => {
    try {
        const comidas = await comidaModel.encontreTodas();

        if(!comidas || comidas.length === 0){
            res.status(404).json({
                total: 0,
                mensagem: 'Não há comidas na lista',
                comidas
            })
        }

        res.status(200).json({
            total: comidas.length,
            mensagem: 'Lista de comidas',
            comidas
        })
    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno de servidor',
            detalhes: error.message,
            status: 500
        })
    }
}

export const listarUm = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const comida = await comidaModel.encontreUma(id);

        if(!comida){
            return res.status(404).json({
                erro: "comida não encontrado",
                mensagem: 'Verifique o id do comida',
                id: id
            })
        }

        res.status(200)({
            message: 'comida encontrado',
            comida
        })
        
    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno de servidor',
            detalhes: error.message,
            status: 500
        })
    }
}