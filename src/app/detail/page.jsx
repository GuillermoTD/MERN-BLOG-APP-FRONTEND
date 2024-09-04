import React from "react";
import testImage from "/public/testImage.jpg";
import Image from "next/image";

const ArticleDetail = () => {
  return (
    <div
      className="w-full ] h-ful mt-[2rem] flex flex-col justify-center items-center 
                    overflow-x-hidden border-[10px]"
    >
      {/* Imagen principal */}
      <Image className="object-cover w-[60%] h-[60%]" src={testImage} />
      {/* Cuerpo del blog */}
      <h1 className="text-[2.4rem] mb-[3rem] mt-[4rem] px-[20%]">
        The Two Critical Stages of Aging You Need to Master
      </h1>

      <div>
        <p className="px-[20%] text-justify leading-loose ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem ipsum laborum quaerat non obcaecati eum quo sed omnis
          delectus, sint totam accusamus veniam aperiam consectetur deleniti
          distinctio, quos dolor sapiente! Officiis maiores ea nesciunt velit
          voluptatem perferendis eos iure tempora id facere ab cumque, neque sit
          maxime odit qui! Sed voluptatem nemo exercitationem aliquam expedita
          similique eius reiciendis molestias adipisci. Veritatis non modi
          perspiciatis architecto praesentium doloribus. Molestiae alias debitis
          maiores provident unde quisquam repellat, voluptates eligendi quae
        </p>
      </div>
    </div>
  );
};

export default ArticleDetail;
