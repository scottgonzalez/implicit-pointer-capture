function updateBadge (disabled) {
  chrome.browserAction.setBadgeText({
    text: disabled ? "off" : "on"
  })
  chrome.browserAction.setBadgeBackgroundColor({
    color: disabled ? "#ff0000" : "#00ff00"
  })
}

chrome.storage.local.get('disabled', ({ disabled }) => {
  updateBadge(disabled)

  chrome.browserAction.onClicked.addListener(() => {
    disabled = !disabled
    updateBadge(disabled)
    chrome.storage.local.set({ disabled })
  })
})
