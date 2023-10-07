import React, { useState } from "react";
import { TabsList, TabButton, Content, TabsGrid } from "./styles";

function Tabs({ tabsArr = [], maxContentHeight }) {
  const [selectIndex, setSelectIndex] = useState(0);
  return (
    <TabsGrid>
      <TabsList>
        {tabsArr.map((tab, index) => (
          <li key={`tab${index * 10}`}>
            <TabButton
              $isSelect={selectIndex === index}
              {...(selectIndex === index
                ? { as: "span" }
                : {
                    onClick: () => {
                      setSelectIndex(index);
                    }
                  })}
            >
              {tab.title}
            </TabButton>
          </li>
        ))}
      </TabsList>
      <Content $maxContentHeight={maxContentHeight}>
        {tabsArr[selectIndex].content}
      </Content>
    </TabsGrid>
  );
}

export default Tabs;
