import Aside from "../PageComponents/Aside"

function AsideList() {
    return (
        <aside className="aside">
        <Aside productShout = 'buy Microsoft!' style = 'shoes'/>
        <Aside productShout = 'buy Apple!' style='glasses'/>        
      </aside>       
    )    
}
export default AsideList