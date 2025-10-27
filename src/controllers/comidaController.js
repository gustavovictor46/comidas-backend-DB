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

export const criar = async (req, res) => {
  try {
    const { nome, tipo, preco, descricao } = req.body;
    const dado = req.body;


    const camposObrigatorios = ["nome", "tipo", "preco", "descricao"];
    const faltando = camposObrigatorios.filter((campo) => !dado[campo]);

    if (faltando.length > 0) {
      return res.status(400).json({
        erro: `Os seguintes campos são obrigatórios: ${faltando.join(", ")}.`,
      });
    }

    const novaComida = await comidaModel.criar(req.body);

    res.status(201).json({
      mensagem: "Comida criada com sucesso!",
      comida: novaComida,
    });
  } catch (error) {
    res.status(500).json({
      erro: "Erro ao criar comida",
      detalhes: error.message,
    });
  }
};

export const deletar = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const comidaExiste = await comidaModel.encontreUma(id);

    if (!comidaExiste) {
      return res.status(404).json({
        erro: "Comida não encontrado com esse id",
        id: id,
      });
    }

    await comidaModel.deletar(id);

    res.status(200).json({
      mensagem: "Comida apagada com sucesso!",
      comidaRemovido: comidaExiste
    });
  } catch (error) {
    res.status(500).json({
      erro: "Erro ao apagar comida!",
      detalhes: error.message
    });
  }
};

export const atualizar = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const dados = req.body;

    
    const comidaExiste = await comidaModel.encontreUma(id);

    if (!comidaExiste) {
      return res.status(404).json({
        erro: "Comida não existe!",
        id: id,
      });
    }


    const comidaAtualizada = await comidaModel.atualizar(id, dados);

    res.status(200).json({
      messagem: "Comida atualizado com sucesso",
      comida: comidaAtualizada,
    });
  } catch (error) {
    res.status(500).json({
      erro: "Erro ao atualizar comida",
      detalhes: error.message,
    });
  }
};
