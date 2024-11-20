interface ProductCardProps {
  image: string;
  name: string;
  price: string;
}

const ProductCard = ({ image, name, price }: ProductCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg animate-fade-in">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-lg font-medium text-primary">{name}</h3>
        <p className="text-secondary font-semibold mt-1">{price}</p>
        <button className="mt-2 w-full py-2 bg-primary text-white hover:bg-secondary transition-colors rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;