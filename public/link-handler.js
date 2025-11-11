// Link parameter handler for affiliate tracking
;(() => {
  // Function to update link parameters
  window.updateLinkParams = () => {
    console.log("Updating link parameters...")

    // Get all links that should be updated
    const links = document.querySelectorAll(
      'a[href*="qualityboost.top"], a[href*="boomerang-bet.com"], a[href*="richroyal"], a[href*="mrpacho"]',
    )

    links.forEach((link) => {
      const href = link.getAttribute("href")
      if (href && !href.includes("updated=true")) {
        // Add tracking parameter
        const separator = href.includes("?") ? "&" : "?"
        link.setAttribute("href", href + separator + "updated=true&source=modal")
      }
    })

    console.log("Updated", links.length, "links")
  }

  // Auto-update links when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", window.updateLinkParams)
  } else {
    window.updateLinkParams()
  }
})()
