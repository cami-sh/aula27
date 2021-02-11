import { Route , Switch } from 'react-router-dom'
import Home from './pages/Home'
import Produto from './pages/Produto'

function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/produto/:id' exact component={Produto} />
        </Switch>
    )
}

export default Routes