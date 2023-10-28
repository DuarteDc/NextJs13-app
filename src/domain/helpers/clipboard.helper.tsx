import { successAlert } from "@/infraestructure/alerts/alerts";

export const shareProduct = () => {
    if ( navigator.share && navigator.canShare()) {
        return navigator.share({
            title: 'Compartir producto',
            text: 'Product name',
            url: document.location + ''
        })
    }
    navigator?.clipboard?.writeText(document.location + '');
    successAlert('Producto copiado en el porta papeles')
}
