export const PropsComponent=(props)=>{
    console.log(props)
    return (
        
        <div>
            <h2>Component works</h2>
            <div>Информация из пропсов: <span>{props.title}</span><br/>
            Информация из пропс children:  <span>{props.children}</span>
            </div>
            <button onClick={()=>props.setValue(!props.value)}>Click</button>
        </div>
        )
}
   
