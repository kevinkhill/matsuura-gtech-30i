export function createStore() {
  return {
    menuItems: [] as string[],
    setMenuItems(items: string[]) {
      this.menuItems = items;
    },
    addMenuItem(item: string) {
      this.menuItems.push(item);
    },
    activateItem(index: number) {
      if (typeof this.menuItems[index + 1] === "function") {
        const action = this.menuItems[index + 1];

        action();
      }
    }
  };
}

export type StoreType = ReturnType<typeof createStore>;
