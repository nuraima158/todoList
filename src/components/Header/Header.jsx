import './Header.css'


const Header=(props)=>{
 
     // это React.Fragment <>
    return <header>Todos ({props.completed}/ {props.length})</header>
}

export default Header