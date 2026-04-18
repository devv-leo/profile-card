// Profile Card JavaScript
class ProfileCard {
  constructor() {
    this.timeElement = null;
    this.timeUpdateInterval = null;
    this.init();
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
  }

  setup() {
    // Find the time element
    this.timeElement = document.querySelector('[data-testid="test-user-time"]');
    
    if (!this.timeElement) {
      console.error('Time element not found');
      return;
    }

    // Initialize time display
    this.updateTime();
    
    // Set up automatic time updates every second
    this.startTimeUpdates();
    
    // Set up accessibility announcements for time updates
    this.setupAccessibility();
    
    // Set up any other interactive features
    this.setupInteractions();
  }

  updateTime() {
    const currentTime = Date.now();
    this.timeElement.textContent = currentTime;
    
    // Update datetime attribute for better semantics
    const isoString = new Date(currentTime).toISOString();
    this.timeElement.setAttribute('datetime', isoString);
  }

  startTimeUpdates() {
    // Update time every second (1000ms)
    this.timeUpdateInterval = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  setupAccessibility() {
    // Create a live region for screen readers to announce time updates
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.style.cssText = `
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    `;
    
    // Insert after the time element
    this.timeElement.parentNode.insertBefore(liveRegion, this.timeElement.nextSibling);
    
    // Update live region every 10 seconds to avoid spamming screen readers
    setInterval(() => {
      const currentTime = Date.now();
      const formattedTime = new Date(currentTime).toLocaleString();
      liveRegion.textContent = `Current time updated: ${formattedTime}`;
    }, 10000);
  }

  setupInteractions() {
    // Add keyboard navigation enhancements
    const socialLinks = document.querySelectorAll('[data-testid="test-user-social-links"] a');
    
    socialLinks.forEach(link => {
      // Add focus indicators
      link.addEventListener('focus', () => {
        link.setAttribute('aria-expanded', 'false');
      });
      
      // Add click tracking for analytics (if needed)
      link.addEventListener('click', (e) => {
        const platform = link.getAttribute('data-testid').replace('test-user-social-', '');
        console.log(`Social link clicked: ${platform}`);
      });
    });

    // Add hover effects for list items
    const listItems = document.querySelectorAll('[data-testid="test-user-hobbies"] li, [data-testid="test-user-dislikes"] li');
    
    listItems.forEach(item => {
      item.setAttribute('tabindex', '0');
      item.setAttribute('role', 'listitem');
      
      // Add keyboard interaction
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          // Toggle a selected state or perform an action
          item.classList.toggle('selected');
        }
      });
    });

    // Add image error handling
    const avatar = document.querySelector('[data-testid="test-user-avatar"]');
    if (avatar) {
      avatar.addEventListener('error', () => {
        // Fallback to a placeholder image
        avatar.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iI0M0QzVDQyIvPgo8cGF0aCBkPSJNNDAgMTYwQzQwIDE0MCA2MCA5MCAxMDAgOTBDMTQwIDkwIDE2MCAxNDAgMTYwIDE2MEg0MFoiIGZpbGw9IiNDNEM1QzMiLz4KPHN2Zz4K';
        avatar.alt = 'Default profile avatar';
      });
    }
  }

  // Cleanup method for when the component is destroyed
  destroy() {
    if (this.timeUpdateInterval) {
      clearInterval(this.timeUpdateInterval);
      this.timeUpdateInterval = null;
    }
  }
}

// Initialize the profile card when the script loads
const profileCard = new ProfileCard();

// Make it available globally for testing
window.ProfileCard = ProfileCard;
window.profileCard = profileCard;

// Export for module systems (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ProfileCard;
}
