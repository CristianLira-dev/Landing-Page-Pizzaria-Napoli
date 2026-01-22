import PizzaPeperoni from "../images/pizza-peperoni.png";
import Frango from "../images/frango.png";
import Marguerita from "../images/pizza.png"

const Pizzas = [
  {
    id: 1,
    title: "Pepperoni Suprema",
    fullDescription:
      "Experiência italiana autêntica. Base de massa de fermentação natural, coberta com molho de tomate San Marzano, mix de muçarela e provolone, finalizada com orégano fresco e azeite de oliva extra virgem.",
    price: "R$ 55,90",
    img: PizzaPeperoni,
    alt: "Pizza de Pepperoni Suprema",
  },
  {
    id: 2,
    title: "Marguerita",
    fullDescription:
      "A rainha das pizzas em sua forma mais pura. Massa leve de longa fermentação coberta com molho de tomate pelati italiano, generosa camada de muçarela de búfala, rodelas de tomate fresco e folhas de manjericão aromático. Finalizada com um fio de azeite extra virgem.",
    price: "R$ 59,99",
    img: "",
    alt: "",
  },
  {
    id: 3,
    title: "Frango com Cebola Roxa",
    fullDescription:
      "Sabor leve e sofisticado. Coberta com molho de tomate San Marzano e muçarela, combinada com suculentas fatias de frango grelhado e o toque adocicado de anéis de cebola roxa. Finalizada com ervas frescas e azeite de oliva extra virgem.",
    price: "R$ 49,90",
    img: Frango,
    alt: "Pizza de Frango com Cebola Roxa",
  },
];

export default Pizzas;