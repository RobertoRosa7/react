export const selectTab = (tabId) => ({
  type: "[TAB_SELECTED]",
  payload: tabId,
});

export const showTab = (...tabIds) => {
  const showToTab = {};
  tabIds.forEach((e) => (showToTab[e] = true));
  return {
    type: "[TAB_SHOWED]",
    payload: showToTab,
  };
};
