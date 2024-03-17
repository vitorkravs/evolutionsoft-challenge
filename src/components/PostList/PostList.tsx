"use client";

import "./styles.scss";
interface IngredienteBase {
  id: number;
  nomesIngrediente: string[];
  receita_id: number;
  created_at: string;
}

interface PostListProps {
  data: [
    {
      id: number;
      receita: string;
      ingredientes: string;
      modo_preparo: string;
      link_imagem: string;
      tipo: string;
      created_at: string;
      IngredientesBase: IngredienteBase[];
    }
  ];
}

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const PostList = ({ data }: PostListProps) => {
  return (
    <div id="post-list">
      <h2 id="title-post-list">Receitas</h2>
      <Swiper navigation={true} modules={[Navigation]} className="my-swiper">
        {data.map((receita) => (
          <SwiperSlide key={receita.id} className="swiper-item">
            <div className="post-list-items-container">
              <h3 className="post-list-title">{receita.receita}</h3>
              <div className="post-content-container">
                <picture>
                  <img
                    src={receita.link_imagem}
                    alt={receita.receita}
                    width={100}
                    height={100}
                    className="post-list-img"
                  />
                </picture>
                <p className="post-list-ingredientes">
                  <span className="title-ingredientes-preparo">
                    Ingredientes
                  </span>{" "}
                  <br />
                  {receita.ingredientes}
                </p>
                <p className="post-list-preparo">
                  <span className="title-ingredientes-preparo">
                    Modo de preparo
                  </span>{" "}
                  <br />
                  {receita.modo_preparo}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PostList;
