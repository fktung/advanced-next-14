import { create } from "zustand";

type TLayoutStore = {
  sidebarOpen: boolean;
};

const layoutStore = create<TLayoutStore>((set) => ({
  sidebarOpen: true,
}));

export const useLayout = () => {
  const { ...layout } = layoutStore((e) => e);

  const setSidebarOpen = (open: boolean) => {
    layoutStore.setState({ sidebarOpen: open });
  };
  return { ...layout, setSidebarOpen };
};
