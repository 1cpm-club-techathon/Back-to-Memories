import Button from "./elements/Button";
import { AddProduct } from "./AddProduct";

const ProductDetailCard = ({ product, onAddProduct }) => {
    const addProduct = () => {
        onAddProduct(product)
    }

    return (
        <div className="p-4 m-4 rounded-lg bg-pink-500">
            <div className="flex flex-col items-center justify-between">
                <h2 className="text-2xl text-white font-bold ">{product.name}</h2>
                <p className="text-l text-black-500">
                    {product.desciption}
                </p>
                <div className="flex items-center justify-between">
                    <div className="text-l font-bold text-purple-950">{product.location}</div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="text-l font-semibold text-white">{product.date}</div>
                </div>
            </div>
            <div className="w-full flex items-center justify-center">
                <img src={product.imageUrl} className="w-40 h-40 rounded-xl object-cover" alt={product.name} />
            </div>
            <div className="w-full flex items-center justify-center h-15 mt-2">
                <Button onClick={addProduct}>Add to fav</Button>
            </div>
        </div>
    )
}

export default ProductDetailCard;