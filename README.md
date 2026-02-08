# Wedding Invitation Website

A simple, elegant digital wedding invitation with RSVP functionality.

## 🌟 Features

- Beautiful single-page invitation design
- Mobile-first responsive layout
- Custom background image support
- RSVP form with Yes/No + guest count
- Data stored in Google Sheets
- Spam protection (honeypot field)
- Duplicate submission prevention

## 📁 Project Structure

```
wedding-website/
├── index.html          # Main invitation page
├── css/
│   └── styles.css      # All styles
├── js/
│   └── app.js          # Form handling logic
├── images/
│   └── hero.jpg        # Your background image
├── google-apps-script.js  # Script for Google Sheets
└── README.md
```

## 🚀 Quick Start

### 1. Customize Content

Edit `index.html` to update:
- Couple names (line ~35-38)
- Wedding date and time (line ~42-43)
- Location (line ~49)
- RSVP deadline (line ~57)
- Contact email in footer (line ~122)

### 2. Add Your Background Image

1. Add your wedding photo to the `images/` folder
2. Name it `hero.jpg` (or update the CSS)
3. Recommended: Optimize image to < 500KB for fast loading

To change the image path, edit `css/styles.css` line ~68:
```css
background-image: url('../images/hero.jpg');
```

### 3. Set Up Google Sheets Backend

#### Step 1: Open Your Google Sheet

Go to your Google Sheet: https://docs.google.com/spreadsheets/

#### Step 2: Create the Header Row

Add these headers in Row 1:
| A | B | C | D | E |
|---|---|---|---|---|
| Timestamp | Name | RSVP | Guest Count | Raw Data |

#### Step 3: Open Script Editor

1. In Google Sheets, go to **Extensions → Apps Script**
2. Delete any existing code
3. Copy the entire contents of `google-apps-script.js` and paste it
4. Save the script (Ctrl/Cmd + S)

#### Step 4: Deploy as Web App

1. Click **Deploy → New deployment**
2. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
3. Set configuration:
   - **Description**: Wedding RSVP
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click **Deploy**
5. Authorize the script when prompted (click through the "unsafe" warning)
6. **Copy the Web App URL** - you'll need this!

#### Step 5: Add URL to JavaScript

Open `js/app.js` and replace line ~14:
```javascript
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
```

With your actual URL:
```javascript
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
```

### 4. Test Locally

Open the project in VS Code and use Live Server, or run:
```bash
python -m http.server 8000
```
Then open http://localhost:8000

### 5. Deploy to GitHub Pages

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial wedding invitation"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/wedding-website.git

# Push to GitHub
git push -u origin main
```

Then on GitHub:
1. Go to repository **Settings → Pages**
2. Source: Deploy from branch
3. Branch: `main`, folder: `/ (root)`
4. Click **Save**
5. Your site will be live at: `https://YOUR_USERNAME.github.io/wedding-website/`

## 🎨 Customization

### Colors

Edit CSS variables in `css/styles.css` (lines 6-15):

```css
:root {
    --color-primary: #2c3e50;      /* Dark blue-gray (headings) */
    --color-secondary: #8b7355;    /* Warm brown (accents) */
    --color-accent: #d4af37;       /* Gold (highlights) */
    /* ... */
}
```

### Fonts

The site uses Google Fonts:
- **Cormorant Garamond** - Elegant serif for headings
- **Montserrat** - Clean sans-serif for body

To change fonts, update the Google Fonts link in `index.html` and the font variables in `styles.css`.

### Language

The site is in German. To change to English, update the text in:
- `index.html` - All visible text
- `js/app.js` - Error messages and thank you messages (lines 120-130, 172-185)

## 📱 Browser Support

- Chrome, Firefox, Safari, Edge (latest versions)
- iOS Safari, Android Chrome
- Graceful degradation for older browsers

## 🔒 Privacy Notes

- RSVP data is stored only in your Google Sheet
- No third-party tracking
- No cookies (only localStorage to prevent duplicate submissions)

## 📝 License

Free to use for personal wedding invitations.

---

Made with ♥ for your special day!
