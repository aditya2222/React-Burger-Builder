import React from 'react'
import Aux from '../../hoc/aux1'

const layout = (props) => {
    return(
    <Aux>
        <div>Toolbar, Sidedrawer, BackDrop</div>
        <main>
            {props.children}
        </main>
    </Aux>
    )
}

export default layout