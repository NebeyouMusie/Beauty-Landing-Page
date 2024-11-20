interface ProductCardProps {
  image: string;
  name: string;
  price: string;
}

const ProductCard = ({ image, name, price }: ProductCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg animate-fade-in transition-all-smooth hover:shadow-lg">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-4 bg-white transition-all-smooth">
        <h3 className="text-lg font-medium text-primary transition-all-smooth">{name}</h3>
        <p className="text-secondary font-semibold mt-1 transition-all-smooth">{price}</p>
        <button className="mt-2 w-full py-2 bg-primary text-white hover:bg-secondary transition-all-smooth rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;