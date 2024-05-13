import { create } from "zustand";

type TLayoutStore = {
  sidebarOpen: boolean;
  minimizeSidebar: boolean;
};

const layoutStore = create<TLayoutStore>((set) => ({
  sidebarOpen: true,
  minimizeSidebar: false,
}));

export const useLayout = () => {
  const { ...layout } = layoutStore((e) => e);

  const setSidebarOpen = (open: boolean) => {
    layoutStore.setState({ sidebarOpen: open });
  };
  const setMinimizeSidebar = (set: boolean) => {
    layoutStore.setState({ minimizeSidebar: set });
  };
  return { ...layout, setSidebarOpen, setMinimizeSidebar };
};
