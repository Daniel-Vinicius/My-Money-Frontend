import React from "react";
import MenuItem from "./menuItem"
import MenuTree from "./menuTree"

export default props => (
<ul className='sidebar-menu'>
    {/* <MenuItem path='#' label='Dashboard' icon='home'/> com href */}
    <MenuItem path='/' label='Dashboard' icon='home'/>
    <MenuTree label='Cadastro' icon='edit'>
    {/* <MenuItem path='#billingCycles' label='Ciclos de Pagamentos' icon='usd'/> com href */}
    <MenuItem path='billingCycles' label='Ciclos de Pagamentos' icon='usd'/>
    </MenuTree>
</ul>
);
