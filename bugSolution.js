```javascript
// Correctly configured tailwind.config.js file
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

// Example component with Tailwind CSS classes
function MyComponent() {
  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-3xl font-bold">Hello, world!</h1>
    </div>
  );
}
```