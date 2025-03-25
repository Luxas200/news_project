import './Aside.css'

function Aside(props) {
    return (
        <aside>
            <p className= {props.style}>Advertisment - <a>{props.productShout}</a></p>
        </aside>        
    )    
}
export default Aside