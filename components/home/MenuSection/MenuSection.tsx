import ProductCard from "./ProductCard";
import ProductCarousel from "./ProductCarousel";

// Placeholder - sẽ được cập nhật với dữ liệu thực tế
const menuItems = [
  { title: "Smoothies Whey", description: "Protein-packed smoothies", price: "89,000đ" },
  { title: "Smoothies Healthy", description: "Healthy and nutritious", price: "79,000đ" },
  { title: "Smoothies Bowl", description: "Delicious bowl options", price: "99,000đ" },
  { title: "Detox", description: "Cleansing drinks", price: "69,000đ" },
  { title: "Nước ép", description: "Fresh juices", price: "59,000đ" },
  { title: "Bites", description: "Healthy snacks", price: "49,000đ" },
];

export default function MenuSection() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Our Menu
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover our delicious range of healthy options
            </p>
          </div>
          
          <ProductCarousel>
            {menuItems.map((item, index) => (
              <ProductCard
                key={index}
                title={item.title}
                description={item.description}
                price={item.price}
                className="min-w-[280px]"
              />
            ))}
          </ProductCarousel>
        </div>
      </div>
    </section>
  );
}
