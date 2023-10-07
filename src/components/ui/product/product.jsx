import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import { ProductWrapper, Price, ProductImg, ProductInner } from "./styles";
import OptionsList from "/src/components/ui/option-list/option-list";
import Tabs from "/src/components/ui/tabs/tabs";

function Product({ product }) {
  const tabsArr = [
    {
      title: "Oписание",
      content: product.description
    },
    {
      title: "Характеристики",
      content: <OptionsList list={product.specifications} />
    },
    {
      title: "Свойства",
      content: <OptionsList list={product.structure} />
    }
  ];
  return (
    <ProductWrapper>
      <ProductImg src={product.image} />
      <ProductInner>
        <Title as="h3" size={TitleSize.SMALL}>
          {product.name}
        </Title>
        <Tabs maxContentHeight="105px" tabsArr={tabsArr} />
        <Price>
          {product.price} руб. / {product.weight} гр.
        </Price>
      </ProductInner>
    </ProductWrapper>
  );
}

export default Product;
