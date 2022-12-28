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
    <div class='w-[90%] m-auto flex flex-row mt-[-100px] pb-[200px]'>
        {products.map((product) => {
            return (
          <div class="p-8 bg-[#52bf4d] w-1/3 flex flex-col justify-start items-start mr-[5px] min-h-[252px]">
            <h2 class="text-center text-black text-xl text-uppercase font-bold mb-[16px]">{product.title}</h2>
            <ul class="flex flex-col">
              {product.list.map((item) => {
                return <li class="text-black text-capitalize text-sm mt-0.5 mb-0.5">- {item.title}</li>
              })}
            </ul>
          </div>
            )
        })}
    </div>
  );
}
