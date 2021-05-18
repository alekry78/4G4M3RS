import Item from "./Product.styles";
import {Title} from "../styles/Title";
import Link from 'next/Link';
import PriceTag from "../styles/PriceTag";
import formatMoney from "../../lib/formatMoney";
export default function Product({product}){
    return (
        <Item>
            <img src={product?.photo?.image?.publicUrlTransformed} alt ="" />
            <Title>
                <Link href={`/product/${product.id}`}>
                    {product.name}
                </Link>
            </Title>
            <PriceTag>{formatMoney(product.price)}</PriceTag>
        </Item>
    )
}