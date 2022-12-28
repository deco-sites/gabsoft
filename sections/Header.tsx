export interface Props {
  logo: string;
  menu: { text: string; link?: string }[];
  button: { text: string; link?: string };
}

export default function Header({ logo, menu = [], button }: Props) {
  return (
    <header class="flex flex-row justify-between text-center items-center pr-5 pl-5 pt-6 pb-6 shadow-lg">
      <figure class="w-1/5">
        <img src={logo} />
      </figure>

      <nav class="bg-[#f5f5f5] rounded-lg w-3/4 flex items-center p-2 pr-5 pl-16">
        <ul class="flex flex-row justify-between items-center w-2/3">
          {menu.map((menu) => {
            return (
              <>
                <li>
                  <a href={menu.link}>{menu.text}</a>
                </li>
              </>
            );
          })}
        </ul>
        {button?.text && (
          <a class="w-1/3 text-center text-[#4db848] text-base text-underline font-bold" href={button.link && button.link}>
            {button.text}
          </a>
        )}
      </nav>
    </header>
  );
}
