interface Props {
    title: string;
    productsList: {title: string}[];
}

export default function Card({title, productsList = []}: Props){
    return(
        <div class="p-8  bg-[#33cc00]">
            <h2 class="text-center text-black">{title}</h2>
            <ul class="flex flex-col">
                {productsList.map( product => {
                    <li class="text-black">- {product.title}</li>
                })}
            </ul>
        </div>
    )
}