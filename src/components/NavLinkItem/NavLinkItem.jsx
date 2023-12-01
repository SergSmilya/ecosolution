export default function NavLinkItem({ arrLinks }) {

    return ({
        arrLinks.forEach((el, index) => {
            return (<li key={index}>{el}</li>)
    })})
}
