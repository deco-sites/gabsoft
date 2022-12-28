export interface Props {
  products: {
    title: string;
    list: { title: string }[];
  }[];
}

export default function Cards({
  products = [],
}: Props) {
  return (
    <>
      {products.map((product) => {
        <div class="p-8 bg-[#33cc00]">
          <h2 class="text-center text-black">{product.title}</h2>
          <ul class="flex flex-col">
            {product.list.map((item) => {
              <li class="text-black">- {item.title}</li>;
            })}
          </ul>
        </div>;
      })}
    </>
  );
}
