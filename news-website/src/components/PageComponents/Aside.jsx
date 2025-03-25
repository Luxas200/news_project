import './Aside.css'

function Aside(props) {
    return (
        <aside>
            <p className= {props.style}>Advertisment - <a src='#'>{props.productShout} <img className= {props.style} src={props.productImgUrl} alt={props.productShout}/></a></p>            
        </aside>        
    )    
}
export default Aside