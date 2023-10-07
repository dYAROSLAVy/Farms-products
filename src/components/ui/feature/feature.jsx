import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import { Feature, Image, Owner, Header } from "./styles";
import { P } from "/src/components/styled";

function FeatureCard({ title, owner, isNegative, image, about }) {
  return (
    <Feature isNegative={isNegative}>
      <Header>
        <Image src={image} width={56} height={56} alt={title} />
        <div>
          <Owner isNegative={isNegative}>{owner}</Owner>
          <Title size={TitleSize.EXTRA_SMALL} as="h3">
            {title}
          </Title>
        </div>
      </Header>
      <P
        className="feature__text"
        dangerouslySetInnerHTML={{ __html: about }}
      />
    </Feature>
  );
}

export default FeatureCard;
