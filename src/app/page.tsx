import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductItemType } from "@/ui/types";

const products: ProductItemType[] = [
	{
		id: "1",
		name: "Koszulka",
		category: "T-shirt",
		price: 2938,
		coverImage: {
			src: "/Koszulka.png",
			alt: "Koszulka",
		},
	},
	{
		id: "2",
		name: "Bluza",
		category: "Hoodie",
		price: 4999,
		coverImage: {
			src: "/Bluza.png",
			alt: "Bluza",
		},
	},
	{
		id: "3",
		name: "Spodnie",
		category: "Pants",
		price: 5912,
		coverImage: {
			src: "/Spodnie.png",
			alt: "Spodnie",
		},
	},
	{
		id: "4",
		name: "Czapka",
		category: "Cap",
		price: 7999,
		coverImage: {
			src: "/Czapka.jpeg",
			alt: "Czapka",
		},
	},
	{
		id: "5",
		name: "Kubek",
		category: "Accessories",
		price: 1599,
		coverImage: {
			src: "/Kubek.png",
			alt: "Kubek",
		},
	},
];

export default function Home() {
	return <ProductList products={products} />;
}
