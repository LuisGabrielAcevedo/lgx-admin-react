import React from 'react'
import { Route, Switch } from 'react-router-dom'
import usersRoutes from './users.routes'

const Users = () => {
    return (
        <React.Fragment>
            <Switch>
                {
                usersRoutes.map((route, i) => (
                    <Route key={i} {...route}/>
                ))
                }
            </Switch>
        </React.Fragment>
    )
}

export default Users
