import './Wrapper.css';
const Wrapper=(props)=>{
   
    return <div className="ex" id={props.id}> {props.children}</div>

}
export default Wrapper;