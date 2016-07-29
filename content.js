function handler (event) {
  if (event.target instanceof Element) {
    event.target.setPointerCapture(event.pointerId)
  }
}

function toggleCapture ({ disabled }) {
  if (disabled) {
    window.removeEventListener('pointerdown', handler, true)
  } else {
    window.addEventListener('pointerdown', handler, true)
  }
}

// Determine if the extension is disabled on load
chrome.storage.local.get('disabled', toggleCapture)

// Process changes to the disabled state
chrome.runtime.onMessage.addListener(toggleCapture)
