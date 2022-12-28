export interface Props { links: {phone: string; link: string}[] }

export default function Topbar({ links }: Props) {
    return (
        <nav class="flex flex-row align-middle justify-end">
            <ul class="flex flex-row justify-center">
                {links.map(link => {
                    <li class="mr-4">
                        <a class="text-black text-xs" href={link.link}>{link.phone}</a>
                    </li>
                })}
            </ul>
        </nav>
    )
};