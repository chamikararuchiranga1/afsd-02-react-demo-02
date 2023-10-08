import Login from '../../component/login/Login.jsx';

export default function Dashboard () {
    return (
        <div>
            {/*/!*<h2>Chamikara Ruchiranga</h2>*!/*/}
            {/*<div style={{display: "flex", justifyContent: "space-between", width: 600}}>*/}
            {/*    <Link to={'/home'}>Home</Link>*/}
            {/*    <Link to={'/dashboard'}>Dashboard</Link>*/}
            {/*    <Link to={'/item'}>Item</Link>*/}
            {/*</div>*/}
            {/*<div style={{display: "flex", justifyContent: "space-between", width: 600, marginTop: 20}}>*/}
            {/*    <button onClick={()=> {navigate('/home')}}>Home</button>*/}
            {/*    <button onClick={()=> {navigate('/dashboard')}}>Dashboard</button>*/}
            {/*    <button onClick={()=> {navigate('/item')}}>Item</button>*/}
            {/*</div>*/}
            {/*<Routes>*/}
            {/*    <Route path={"*"} element={<Navigate to={'/item'}/>} />*/}
            {/*    <Route path={"/home"} element={<Home/>} />*/}
            {/*    <Route path={"/dashboard"} element={<Dashboard/>} />*/}
            {/*    <Route path={"/item"} element={<Item/>} />*/}
            {/*</Routes>*/}

            {/*/!*<Home/>*!/*/}
            {/*/!*<Dashboard/>*!/*/}
            {/*/!*<Item/>*!/*/}

            <Login/>

        </div>
    )
}
