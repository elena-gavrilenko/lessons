import { gql } from "@apollo/client";

export const getCurrencies=()=>gql`
query{
    currencies {
      label,
      symbol
    }
  }
`
export const  getSomeProducts=()=>gql`
query{
    categories{
      name
      products{
        id
        name
        inStock
        prices{
          currency{
            label
          }
          amount
        }
      }
    }
    }
`
export const getSingleProductByID=(id)=>gql`
query{
    product(id:"${id}"){
      name
      description
      brand
    }
  }
`

export const getCategory=()=>gql`
query{
    category{
      name
      products{
        id
        name
        description
      }
    }
  }
`