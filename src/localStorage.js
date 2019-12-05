export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return {
      prompt: { open: false, idForDeleting: "" },
      tournament: { tournaments: JSON.parse(serializedState), searchItems: [] }
    };
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem("state", serializedState);
};
