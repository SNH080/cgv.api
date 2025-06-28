export interface ILayoutMainCont02Props {
  items: { title: string; description: string; index: Number }[];
  selectedIndex: number | null;
  handleItemClick: (index: number) => void;
}
