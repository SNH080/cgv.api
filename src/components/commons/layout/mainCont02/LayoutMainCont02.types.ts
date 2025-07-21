// 각 아이템의 타입 정의 (특별관 목록 항목)
export interface IMainContItem {
  title: string;
  description: string;
}

// container → presenter에 넘기는 props 전체 타입
export interface ILayoutMainCont02Props {
  items: IMainContItem[];
  selectedIndex: number | null;
  handleItemClick: (index: number) => void;
}

// presenter에서 직접 사용하는 props 타입
export interface ILayoutMainCont02UIProps {
  items: IMainContItem[];
  selectedIndex: number;
  handleItemClick: (index: number) => void;
}
