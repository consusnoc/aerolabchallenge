export default ({children}) => {
    return <div className="ContainerGrid">{children}<style jsx>{`.ContainerGrid {display:grid; grid-template-columns:repeat(auto-fill, minmax(200px, 1fr));grid-gap:30px; margin:2em 3em 4em 3em;`}</style></div>;
} 