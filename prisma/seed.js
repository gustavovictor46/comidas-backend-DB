import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function main() {
  console.log('🌱 Inserindo novas comidas no banco...')

  await prisma.comidas.deleteMany()
   await prisma.$executeRaw`ALTER TABLE comidas AUTO_INCREMENT = 1`

  await prisma.comidas.createMany({
    data: [
      { nome: 'Pão de Queijo', tipo: 'Brasileira', preco: 5.50, descricao: 'Clássico mineiro, quentinho e crocante por fora.' },
      { nome: 'Acarajé', tipo: 'Baiana', preco: 15.00, descricao: 'Bolinho de feijão-fradinho, frito no azeite de dendê, recheado com vatapá e camarão.' },
      { nome: 'Churrasco Misto', tipo: 'Gaúcha', preco: 55.00, descricao: 'Seleção de cortes de carne no espeto, assados na brasa.' },
      { nome: 'Spaghetti Carbonara', tipo: 'Italiana', preco: 38.00, descricao: 'Massa com ovo, queijo pecorino, pimenta-do-reino e guanciale (ou bacon).' },
      { nome: 'Gnocchi ao Pesto', tipo: 'Italiana', preco: 41.00, descricao: 'Nhoque de batata com molho pesto de manjericão fresco.' },
      { nome: 'Tiramisu', tipo: 'Italiana', preco: 22.00, descricao: 'Sobremesa de camadas de biscoito champanhe, café, queijo mascarpone e cacau.' },
      { nome: 'Sashimi de Salmão', tipo: 'Japonesa', preco: 45.00, descricao: 'Fatias finas de salmão fresco, servidas com shoyu e wasabi.' },
      { nome: 'Guioza', tipo: 'Japonesa', preco: 18.00, descricao: 'Pastéis recheados de carne de porco e legumes, cozidos no vapor e selados na chapa.' },
      { nome: 'Temaki Filadélfia', tipo: 'Japonesa', preco: 27.00, descricao: 'Cone de alga recheado com arroz, salmão, cream cheese e cebolinha.' },
      { nome: 'Chili com Carne', tipo: 'Tex-Mex', preco: 30.00, descricao: 'Ensopado de carne moída, feijão e pimenta, com queijo derretido e sour cream.' },
      { nome: 'Quesadilla de Queijo', tipo: 'Mexicana', preco: 20.00, descricao: 'Tortilla dobrada e grelhada recheada com queijos, servida com pico de gallo.' },
      { nome: 'Costelinha BBQ', tipo: 'Americana', preco: 48.00, descricao: 'Costelas de porco defumadas e regadas com molho barbecue agridoce.' },
      { nome: 'Cheesecake de Frutas Vermelhas', tipo: 'Americana', preco: 25.00, descricao: 'Torta gelada de cream cheese sobre base de biscoito, coberta com calda de frutas.' },
      { nome: 'Fish and Chips', tipo: 'Britânica', preco: 33.00, descricao: 'Filé de peixe empanado frito, servido com batatas fritas e molho tártaro.' },
      { nome: 'Chicken Tikka Masala', tipo: 'Indiana', preco: 43.00, descricao: 'Frango marinado e grelhado, cozido em um cremoso molho de tomate, especiarias e iogurte.' },
      { nome: 'Samosa', tipo: 'Indiana', preco: 12.00, descricao: 'Pastelaria frita ou assada com recheio salgado de batata, cebola e lentilha.' },
      { nome: 'Tom Yum Goong', tipo: 'Tailandesa', preco: 36.00, descricao: 'Sopa picante e azeda com camarões, cogumelos e capim-limão.' },
      { nome: 'Kibbe Cru', tipo: 'Árabe', preco: 29.00, descricao: 'Carne moída crua misturada com trigo, hortelã e temperos finos.' },
      { nome: 'Tabule', tipo: 'Libanesa', preco: 16.00, descricao: 'Salada refrescante de trigo para quibe, tomate, pepino, hortelã e azeite.' },
      { nome: 'Croissant de Chocolate', tipo: 'Francesa', preco: 10.00, descricao: 'Massa folhada amanteigada e crocante, recheada com chocolate derretido.' },
    ],
  })

  console.log('✨ 20 novas comidas inseridas com sucesso!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })