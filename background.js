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
    // Store the disabled setting
    disabled = !disabled
    chrome.storage.local.set({ disabled })

    // Update the badge to show the new status
    updateBadge(disabled)

    // Update the existing pages to reflect the new status
    chrome.tabs.query({}, (tabs) => {
      tabs.forEach((tab) => {
        chrome.tabs.sendMessage(tab.id, { disabled })
      })
    })
  })
})
