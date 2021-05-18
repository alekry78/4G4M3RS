import gql from "graphql-tag";
import {useQuery} from "@apollo/client";
import {ProductsList} from "./Products.styles";
import Product from "../Product/Product";

const ALL_PRODUCTS_QUERY = gql`
query ALL_PRODUCTS_QUERY{
  allProducts{
    id
    name
    price
    description
    photo{
      id
      image{
        publicUrlTransformed
      }
    }
  }
}
`
const Products = () => {
    const {data,error,loading} = useQuery(ALL_PRODUCTS_QUERY);
    if(loading){
        return <p>Loading...</p>;
    }
    if(error){
        return <p>Error: {error.message}</p>;
    }
    return (
      <div>
          <ProductsList>
              {data.allProducts.map(el=>{
                  return(
                      <Product key={el.id} product={el} />
                  )
              })}
          </ProductsList>
      </div>
    )
}

export default Products