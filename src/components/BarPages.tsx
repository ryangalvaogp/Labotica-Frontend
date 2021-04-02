import Link from 'next/link'
import { useContext } from 'react'
import { BarpagesProps } from '../config/Types/TypesPageCurrent';
import { PageCurrentContext } from '../contexts/pageCurrentContext'


function toClassComponent(
    pag: BarpagesProps['name'], 
    CurrentPage: string) {
        
    //This function will check if the current page is the same as the component
    //returning TRUE as a result it enters the CASE switch to
    //assign the 'Active' class to the current page.
    //As a result, the index of the current page will be highlighted.

    if (pag === 'projetosDetails' && CurrentPage !== pag) {
        return `nav-link projetosDetails`;
    };
    if (CurrentPage === pag) {
        switch (pag) {
            case 'home':
                return ` nav-link active `;

            case 'contato':
                return ` nav-link active `;

            case 'download':
                return ` nav-link active `;

            case 'feed':
                return ` nav-link active `;

            case 'projetosDetails':
                return ` nav-link projetosDetails active`;

            default:
                return `nav-link `;
        };
    } else {
        return `nav-link`
    };
};

export default function BarPages(
    {
        children, 
        to, 
        name, 
        onClick
    }: BarpagesProps) {
    const { currentPage } = useContext(PageCurrentContext);

    return (

        <li onClick={onClick} className="nav-item mx-2">
            <Link href={to}>
                <a className={toClassComponent(name, currentPage)}>
                    {children}
                </a>
            </Link>
        </li>
    );
};