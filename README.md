# Profile Card Component

A testable, accessible, and responsive profile card component built with semantic HTML, modern CSS, and vanilla JavaScript.

## Features

- ✅ **Semantic HTML5** - Uses proper tags like `<article>`, `<section>`, `<nav>`, `<figure>`
- ✅ **Full Accessibility** - ARIA labels, keyboard navigation, screen reader support
- ✅ **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- ✅ **Dynamic Time Display** - Shows current epoch time in milliseconds, updates every second
- ✅ **Testable Elements** - All required elements include `data-testid` attributes
- ✅ **Modern CSS** - CSS custom properties, Flexbox, Grid, smooth transitions
- ✅ **Keyboard Navigation** - All interactive elements are focusable and accessible

## Requirements Met

### Required Elements with data-testid attributes:
- `test-profile-card` - Main profile card container
- `test-user-name` - User's name
- `test-user-bio` - User biography
- `test-user-time` - Current time in milliseconds (updates every second)
- `test-user-avatar` - Profile avatar image
- `test-user-social-links` - Container for social media links
- `test-user-social-twitter` - Twitter link
- `test-user-social-github` - GitHub link
- `test-user-social-linkedin` - LinkedIn link
- `test-user-hobbies` - Hobbies list
- `test-user-dislikes` - Dislikes list

## Quick Start

### Option 1: Open Directly
1. Clone or download this repository
2. Open `index.html` in your web browser

### Option 2: Local Server
1. Clone or download this repository
2. Navigate to the project directory
3. Start a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

4. Open `http://localhost:8000` in your browser

## File Structure

```
profile-card/
├── index.html          # Main HTML file with semantic structure
├── styles.css          # Modern CSS with design system
├── script.js           # JavaScript for dynamic functionality
└── README.md           # This file
```

## Testing

### Manual Testing Checklist

#### Basic Functionality:
- [ ] Profile card displays correctly
- [ ] Name appears as "Alex Johnson"
- [ ] Biography text is visible and readable
- [ ] Current time shows in milliseconds and updates every second
- [ ] Avatar image loads with proper alt text
- [ ] Social links are clickable and open in new tabs
- [ ] Hobbies list displays 5 items
- [ ] Dislikes list displays 5 items

#### Accessibility Testing:
- [ ] Navigate with Tab key - all interactive elements are focusable
- [ ] Screen reader reads content properly
- [ ] Alt text is present for avatar image
- [ ] ARIA labels are descriptive
- [ ] Color contrast meets WCAG AA standards
- [ ] Focus indicators are visible

#### Responsive Testing:
- [ ] Mobile (< 768px) - content stacks vertically
- [ ] Tablet (768px - 1023px) - balanced layout
- [ ] Desktop (≥ 1024px) - avatar to left, content to right

#### data-testid Verification:
- [ ] `test-profile-card` exists on main container
- [ ] `test-user-name` exists on name element
- [ ] `test-user-bio` exists on biography paragraph
- [ ] `test-user-time` exists and shows current epoch time
- [ ] `test-user-avatar` exists on avatar image
- [ ] `test-user-social-links` exists on social links container
- [ ] Individual social link testids exist
- [ ] `test-user-hobbies` exists on hobbies list
- [ ] `test-user-dislikes` exists on dislikes list

### Automated Testing

The component is designed to be easily testable with popular testing frameworks:

#### Example with Jest:
```javascript
describe('Profile Card', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('index.html', 'utf8');
    new ProfileCard();
  });

  test('should have profile card container', () => {
    expect(document.querySelector('[data-testid="test-profile-card"]')).toBeTruthy();
  });

  test('should display current time in milliseconds', () => {
    const timeElement = document.querySelector('[data-testid="test-user-time"]');
    const timeValue = parseInt(timeElement.textContent);
    const currentTime = Date.now();
    expect(Math.abs(timeValue - currentTime)).toBeLessThan(1000);
  });

  test('should have all social links', () => {
    expect(document.querySelector('[data-testid="test-user-social-twitter"]')).toBeTruthy();
    expect(document.querySelector('[data-testid="test-user-social-github"]')).toBeTruthy();
    expect(document.querySelector('[data-testid="test-user-social-linkedin"]')).toBeTruthy();
  });
});
```

#### Example with Playwright:
```javascript
test('profile card has all required elements', async ({ page }) => {
  await page.goto('http://localhost:8000');
  
  await expect(page.locator('[data-testid="test-profile-card"]')).toBeVisible();
  await expect(page.locator('[data-testid="test-user-name"]')).toContainText('Alex Johnson');
  await expect(page.locator('[data-testid="test-user-bio"]')).toBeVisible();
  await expect(page.locator('[data-testid="test-user-time"]')).toBeVisible();
  await expect(page.locator('[data-testid="test-user-avatar"]')).toBeVisible();
  await expect(page.locator('[data-testid="test-user-social-links"]')).toBeVisible();
  await expect(page.locator('[data-testid="test-user-hobbies"]')).toBeVisible();
  await expect(page.locator('[data-testid="test-user-dislikes"]')).toBeVisible();
});
```

## Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## Accessibility Features

- **Semantic HTML**: Uses proper HTML5 tags for structure
- **ARIA Labels**: Descriptive labels for screen readers
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Visible focus indicators
- **Color Contrast**: Meets WCAG AA standards
- **Screen Reader Support**: Live regions for dynamic content
- **Reduced Motion**: Respects user's motion preferences

## Design System

The component uses a comprehensive design system with CSS custom properties:

- **Colors**: Consistent color palette with proper contrast
- **Typography**: System font stack with consistent scale
- **Spacing**: Uniform spacing system
- **Border Radius**: Consistent radius values
- **Shadows**: Subtle depth indicators
- **Transitions**: Smooth micro-interactions

## Performance

- **Lightweight**: No external dependencies
- **Optimized Images**: Fallback for broken images
- **Efficient CSS**: Uses modern layout methods
- **Minimal JavaScript**: Vanilla JS with clean architecture
- **Fast Loading**: Optimized for quick initial render

## License

MIT License - feel free to use this component in your projects.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

If you encounter any issues or have questions, please open an issue in the repository.
