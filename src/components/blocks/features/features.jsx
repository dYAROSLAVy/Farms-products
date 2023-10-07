import React from "react";
import Title from "/src/components/ui/title/title";
import Button from "/src/components/ui/button/button";
import FeatureCard from "/src/components/ui/feature/feature";
import { Features, GridUl } from "./styles";
import { AppRoute } from "/src/const";

function FeaturesList({ features }) {
  return features && features.length ? (
    <Features>
      <Title as="h2">Почему фермерские продукты лучше?</Title>
      <GridUl>
        {features.map((feature) => (
          <li key={feature.id}>
            <FeatureCard {...feature} />
          </li>
        ))}
      </GridUl>
      <Button minWidth={260} link={AppRoute.ORDER}>
        Купить
      </Button>
    </Features>
  ) : null;
}

export default FeaturesList;
