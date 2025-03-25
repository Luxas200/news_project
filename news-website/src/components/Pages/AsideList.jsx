import Aside from "../PageComponents/Aside"

function AsideList() {
    return (
        <aside className="aside">
        <Aside 
          productShout = 'buy Microsoft!' 
          style = 'advertisment-1' 
          productImgUrl = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/124260a4-c04b-443b-9198-1310748593cb/d6xgv7g-be54fc31-ca54-420c-8ee1-920798efa1a6.png/v1/fill/w_1024,h_962/microsoft__old_meets_new_by_dizzydj7_d6xgv7g-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTYyIiwicGF0aCI6IlwvZlwvMTI0MjYwYTQtYzA0Yi00NDNiLTkxOTgtMTMxMDc0ODU5M2NiXC9kNnhndjdnLWJlNTRmYzMxLWNhNTQtNDIwYy04ZWUxLTkyMDc5OGVmYTFhNi5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.76HH_psA03C7Cq0N0JIXjGLhDK6jPzGeM-mkX4VJNmY'/>
        <Aside 
          productShout = 'buy Apple!' 
          style='advertisment-2' 
          productImgUrl = 'https://images.icon-icons.com/2170/PNG/512/apple_ios_brand_logo_icon_133257.png'/>        
      </aside>       
    )    
}
export default AsideList