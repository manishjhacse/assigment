# Mini eCommerce Frontend Project

This project is a frontend implementation of a mini eCommerce website built with **React**, **Vite**, and **Tailwind CSS**, consuming the [DummyJSON API](https://dummyjson.com).  
It demonstrates a modern SPA (Single Page Application) with product listings, search, category filtering, wishlist, shopping cart, checkout, and caching for performance.  

---

##  Features

###  Core Features
- **Product Listings (/):**  
  - Responsive product grid (image, title, price)  
  - Search products by title (with **debounced search**)  
  - Filter by category  
  - Loading skeletons + error handling  

- **Product Details (/product/:id):**  
  - Full product information (image, description, price, rating)  
  - “Add to Cart” with quantity selector  

- **Shopping Cart (/cart):**  
  - Cart items with thumbnail, title, unit price, quantity selector (1–10), subtotal  
  - Update quantity or remove items  
  - Grand total + “Proceed to Checkout”  

- **Wishlist (/wishlist):**  
  - Save favorite products for later  
  - Easily add/remove items from wishlist  
  - Persist wishlist using **localStorage**  

- **Checkout (/checkout):**  
  - Order summary (items + total)  
  - Checkout form with validation (name, email, address)  
  - Place order → clears cart and shows confirmation  

---

### Extra Enhancements
- **Debounced Search:** prevents unnecessary API calls while typing  
- **Caching (Memory + LocalStorage):** product lists and details are cached to avoid redundant fetches  
- **Wishlist Persistence:** wishlist items remain saved across sessions  
- **Skeleton Loaders:** smooth UX while data is loading  
- **Scroll-to-Top button** for better navigation  
- **Responsive Design** for all screen sizes  

---

## 🛠️ Technologies Used
- **React** – Component-based UI  
- **Vite** – Lightning-fast dev/build tool  
- **Tailwind CSS** – Utility-first CSS framework  
- **React Router DOM** – Routing for SPA  
- **Redux Toolkit** – Global state management (cart + wishlist)  
- **DummyJSON API** – Public eCommerce API for products  
- **LocalStorage** – Persistent caching of products, cart, and wishlist data  

---


---


---

##  Setup Instructions
Follow these steps to run the project locally:

```bash
git clone https://github.com/manishjhacse/assigment.git
cd assigment

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open in browser
http://localhost:5173

# 5. Build for production (optional)
npm run build

# 6. Preview production build (optional)
npm run preview


