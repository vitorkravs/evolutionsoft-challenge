"use client";

import { GetServerSideProps } from "next";
import { getServerSideProps } from "next/dist/build/templates/pages";
import Image from "next/image";

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

const PostList = ({ data }: PostListProps) => {
  return (
    <div>
      {data.map((receita) => (
        <div key={receita.id}>
          <h3>{receita.receita}</h3>
          <p>{receita.ingredientes}</p>
          <p>{receita.modo_preparo}</p>
          <picture>
            <img
              src={receita.link_imagem}
              alt={receita.receita}
              width={100}
              height={100}
            />
          </picture>
        </div>
      ))}
    </div>
  );
};

export default PostList;
