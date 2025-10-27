import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function main() {
  console.log('🌱 Inserindo novas comidas no banco...')

  await prisma.comidas.deleteMany()
   

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
      { nome: 'Feijoada Completa', tipo: 'Brasileira', preco: 45.00, descricao: 'Feijão preto com carnes salgadas, acompanhado de arroz, couve e laranja.' },
      { nome: 'Moqueca de Camarão', tipo: 'Brasileira', preco: 60.00, descricao: 'Ensopado de camarões com azeite de dendê, leite de coco e pimentões.' },
      { nome: 'Cuscuz Marroquino', tipo: 'Marroquina', preco: 35.00, descricao: 'Sêmola de trigo cozida no vapor, servida com legumes e carne ou frango.' },
      { nome: 'Paella Marinera', tipo: 'Espanhola', preco: 70.00, descricao: 'Arroz cozido em açafrão, com frutos do mar variados (camarão, lula, mexilhões).' },
      { nome: 'Tacos Al Pastor', tipo: 'Mexicana', preco: 28.00, descricao: 'Tortillas de milho recheadas com carne de porco marinada, abacaxi e coentro.' },
      { nome: 'Ceviche Clássico', tipo: 'Peruana', preco: 42.00, descricao: 'Peixe branco marinado em limão, cebola roxa, coentro e pimenta, servido com batata-doce.' },
      { nome: 'Pho Bo (Sopa de Carne)', tipo: 'Vietnamita', preco: 32.00, descricao: 'Sopa de macarrão de arroz com fatias finas de carne bovina e caldo aromático.' },
      { nome: 'Pad Thai', tipo: 'Tailandesa', preco: 39.00, descricao: 'Macarrão de arroz frito com camarão, tofu, brotos de feijão, amendoim e molho de tamarindo.' },
      { nome: 'Bolo de Cenoura com Cobertura de Chocolate', tipo: 'Americana', preco: 18.00, descricao: 'Bolo úmido de cenoura com uma densa cobertura de chocolate cremoso.' },
      { nome: 'Hambúrguer Gourmet', tipo: 'Americana', preco: 35.00, descricao: 'Pão brioche, carne Angus, queijo cheddar, bacon, alface e molho da casa.' },
      { nome: 'Lasagna à Bolonhesa', tipo: 'Italiana', preco: 40.00, descricao: 'Camadas de massa, molho bolonhesa, presunto, queijo e molho branco gratinado.' },
      { nome: 'Canelone de Ricota e Espinafre', tipo: 'Italiana', preco: 39.00, descricao: 'Massa enrolada recheada, coberta com molho sugo e queijo parmesão.' },
      { nome: 'Ratatouille', tipo: 'Francesa', preco: 26.00, descricao: 'Ensopado de legumes (berinjela, abobrinha, tomate, pimentão) cozidos lentamente.' },
      { nome: 'Crème brûlée', tipo: 'Francesa', preco: 20.00, descricao: 'Creme de baunilha com crosta de açúcar queimado e crocante.' },
      { nome: 'Kebab de Cordeiro', tipo: 'Turca', preco: 37.00, descricao: 'Carne de cordeiro grelhada no espeto, servida no pão pita com molhos e salada.' },
      { nome: 'Moussaka', tipo: 'Grega', preco: 44.00, descricao: 'Camadas de berinjela, carne moída e molho bechamel, gratinada.' },
      { nome: 'Pizza Margherita', tipo: 'Italiana', preco: 48.00, descricao: 'Clássica pizza napolitana com molho de tomate, mussarela, manjericão e azeite.' },
      { nome: 'Goulash', tipo: 'Húngara', preco: 46.00, descricao: 'Ensopado de carne com páprica e batatas, servido com massa ou pão.' },
      { nome: 'Sopa Ramen Shoyu', tipo: 'Japonesa', preco: 34.00, descricao: 'Macarrão em caldo de shoyu, com fatias de carne de porco, ovo cozido e algas.' },
      { nome: 'Okonomiyaki', tipo: 'Japonesa', preco: 25.00, descricao: 'Panqueca salgada com repolho, frutos do mar ou carne, coberta com molhos e flocos de peixe.' },
      { nome: 'Salada Niçoise', tipo: 'Francesa', preco: 31.00, descricao: 'Salada com atum, ovo cozido, feijão-verde, batata, tomate e azeitonas.' },
      { nome: 'Falafel com Molho Tahine', tipo: 'Árabe', preco: 17.00, descricao: 'Bolinhos fritos de grão-de-bico e temperos, servidos com molho de gergelim.' },
      { nome: 'Peking Duck (Pato à Pequim)', tipo: 'Chinesa', preco: 85.00, descricao: 'Pato assado com pele crocante, servido com panquecas finas, pepino e cebolinha.' },
      { nome: 'Dim Sum (Siu Mai)', tipo: 'Chinesa', preco: 23.00, descricao: 'Pequenos pastéis cozidos no vapor, recheados com carne de porco e camarão.' },
      { nome: 'Cachorro-Quente Clássico', tipo: 'Americana', preco: 15.00, descricao: 'Salsicha no pão com mostarda, ketchup, picles e relish.' },
      { nome: 'Pudim de Leite Condensado', tipo: 'Brasileira', preco: 19.00, descricao: 'Sobremesa cremosa à base de leite condensado, leite e ovos, com calda de caramelo.' },
      { nome: 'Shakshuka', tipo: 'Israelense', preco: 28.00, descricao: 'Ovos pochê cozidos em molho de tomate, pimentões, cebola e especiarias.' },
      { nome: 'Curry Verde Tailandês', tipo: 'Tailandesa', preco: 47.00, descricao: 'Curry aromático e picante feito com leite de coco, pasta de curry verde, legumes e frango.' },
      { nome: 'Enchiladas de Frango', tipo: 'Mexicana', preco: 34.00, descricao: 'Tortillas de milho recheadas com frango, cobertas com molho de pimenta e queijo.' },
      { nome: 'Waffle com Sorvete e Calda', tipo: 'Belga', preco: 21.00, descricao: 'Waffle quente e crocante, coberto com uma bola de sorvete e calda de chocolate.' },
    ],
  })

  console.log('✨ 50 novas comidas inseridas com sucesso!')
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