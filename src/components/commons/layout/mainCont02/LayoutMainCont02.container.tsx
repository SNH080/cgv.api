import { useState } from "react";
import LayoutMainCont02UI from "./LayoutMainCont02.presenter";

export default function LayoutMainCont02(): JSX.Element {
  const LayoutMainCont02 = ({ items }) => {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span>{item.title}</span>
            <span>{item.description}</span>
          </li>
        ))}
      </ul>
    );
  };

  const items = [
    { title: "SUITE CINEMA", description: "#호텔컨셉의 프리미엄관" },
    { title: "CINE & LIVINGROOM", description: " #신개념 소셜 상영관" },
    { title: "4DX", description: "#모션시트 #오감체험" },
    { title: "CINE de CHEF", description: "#쉐프가 있는 영화관" },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <LayoutMainCont02UI
      items={items}
      selectedIndex={selectedIndex}
      handleItemClick={handleItemClick}
    />
  );
}
