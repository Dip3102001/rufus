# AI Shopping Assistant Chat App

A modern React chat interface that simulates an AI shopping assistant with product recommendations, image uploads, and interactive messaging.

## Features

- Interactive chat UI with message bubbles
- Image upload for product search
- Product recommendation cards
- Quick reply buttons
- Typing indicators
- Mobile-responsive design

## Tech Stack

- React 18 + Vite
- Tailwind CSS
- Lucide React icons

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:5173` in your browser.

## Project Structure

```
src/
├── components/
│   ├── messages/          # Message components
│   ├── ChatApp.jsx        # Main app
│   ├── ChatInput.jsx      # Input with image upload
│   └── ...
├── data/catalog.js        # Mock product data
└── ...
```

## Customization

**Add products** in `src/data/catalog.js`:
```javascript
{
  id: 6,
  name: "Product Name",
  price: 99.99,
  image: "image-url",
  category: "category",
  rating: 4.5,
  description: "Description"
}
```

**Modify quick replies** in `src/components/QuickReplies.jsx`.

## Development Notes

The `generateBotResponse` function is a placeholder. To add real AI responses:

1. Integrate with AI service (OpenAI, etc.)
2. Process user messages
3. Return appropriate response types

## License

MIT License
