import MainNavigation from "../header/MainNavigation";

const Layout=props=>{
    return <>
        <MainNavigation/>
        <main>
            {props.children}
        </main>
    </>
}
export  default  Layout;