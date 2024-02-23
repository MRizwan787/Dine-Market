import React from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/Button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const ProductCard = (props: {
  tittle: string;
  price: number;
  img: StaticImageData;
  category: string;
  id: number;
}) => {
  return (
    <Link href={`/Products/${props.id}`}>
      <div className="mb-8 hover:scale-110 duration-300 cursor-pointer">
        <Image src={props.img} alt="product-1" className="rounded w-80" />
        <h3 className="font-bold text-lg mt-3">{props.tittle}</h3>
        <p className="font-bold text-lg">${props.price}</p>
        <p className="font-bold text-lg">
          Category:
          <span className="text-base font-normal text-black capitalize">
            {props.category}
          </span>
        </p>
        <Link href={"/AddtoCart"}>
        <Button className="bg-black h-12 px-8 mt-4 rounded-lg text-white shadow-lg hover:bg-gray-800 hover:shadow-xl transition-all">
  <ShoppingCart className="h-6 w-6 mr-2" />
  <span className="font-semibold">Add to Cart</span>
</Button>
        </Link>
      </div>
    </Link>
  );
};

export default ProductCard;