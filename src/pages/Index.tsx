import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from "@/components/Categories";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

// Import images
import heroShoe from "@/assets/hero-shoe.png";
import product1 from "@/assets/product-1.png";
import product2 from "@/assets/product-2.png";
import product3 from "@/assets/product-3.png";
import product4 from "@/assets/product-4.png";
import categoryMen from "@/assets/category-men.jpg";
import categoryWomen from "@/assets/category-women.jpg";
import categoryNew from "@/assets/category-new.jpg";

const products = [
  {
    id: 1,
    name: "CloudRunner Elite",
    category: "Running",
    price: 189,
    image: product1,
    isNew: true,
  },
  {
    id: 2,
    name: "StreetForce Pro",
    category: "Basketball",
    price: 159,
    originalPrice: 199,
    image: product2,
    isSale: true,
  },
  {
    id: 3,
    name: "AeroFlex Women's",
    category: "Running",
    price: 149,
    image: product3,
    isNew: true,
  },
  {
    id: 4,
    name: "TrailBlazer X",
    category: "Trail",
    price: 219,
    image: product4,
  },
];

const categories = [
  {
    name: "Men's Collection",
    image: categoryMen,
    count: 124,
  },
  {
    name: "Women's Collection",
    image: categoryWomen,
    count: 98,
  },
  {
    name: "New Arrivals",
    image: categoryNew,
    count: 32,
  },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero heroImage={heroShoe} />
      <FeaturedProducts products={products} />
      <Categories categories={categories} />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Index;
