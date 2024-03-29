import "./styles.scss";

import Image from "next/image";
import Counter from "../Counter/Counter";

const Card = () => {
  const foodList = [
    {
      id: 1,
      price: 12.99,
      title: "X-salada",
      description:
        "Uma harmonia de sabores clássicos, com hambúrguer suculento, alface crocante, tomate fresco e queijo derretido, envolvidos por um pão macio.",
      food_img: "/x-salada-classico.jpg",
    },
    {
      id: 2,
      price: 22.5,
      title: "X-bacon",
      description:
        "Para os amantes de bacon, um hambúrguer perfeitamente grelhado, coberto com fatias crocantes de bacon, queijo, alface e tomate, uma explosão de sabor.",
      food_img: "/x-bacon.png",
    },
    {
      id: 3,
      price: 18.99,
      title: "X-frango",
      description:
        "Delicioso frango grelhado, combinado com queijo derretido, alface fresca e maionese especial, criando um lanche leve e irresistível.",
      food_img: "/x-frango.png",
    },
  ];

  return (
    <ul id="card-list">
      {foodList.map((food) => (
        <li key={food.id} className={`${food.title} card-list-item`}>
          <h3 className="card-list-title">{food.title}</h3>
          <Image
            src={food.food_img}
            alt={food.food_img}
            width={100}
            height={100}
            className="card-list-img"
          />
          <p className="card-list-description">{food.description}</p>
          <Counter amount={0} />
        </li>
      ))}
    </ul>
  );
};

export default Card;
