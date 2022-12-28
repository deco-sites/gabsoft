import Image from "$live/std/ui/components/Image.tsx";
import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

export interface Props {
  titleH1: string;
  titleH2: string;
  textSEO: string;
  backgroundImage: LiveImage;
}



export default function Hero(
  { titleH1, titleH2, textSEO, backgroundImage }: Props,
) {
  return (
    <div class={`flex flex-row justify-center bg-[url('/static/agencia-eplus-n-bg03.jpg')]`}>
      <div class="flex flex-col w-1/2 p-5 pl-20">
        <h1 class="text-[#41bb32]">{titleH1}</h1>
        <h2 class="text-4xl mt-4 mb-4">{titleH2}</h2>
         <p class="text-lg">{textSEO}</p>
      </div>
      <div class="flex flex-row justify-center w-2/3">
        <Image
          class=""
          sizes=""
          src={backgroundImage}
          width={714}
          height={470}
        />
      </div>
    </div>
  )
}
