function List(){
    return(
        <>
            <h1>Szöveg1</h1>
        </>
    )
}

function ListaKomponens({elemek}){
    return(
        <>
            {elemek.map((elem,index) => (
                <>
                    <div key={index}>
                        Név: {elem.name} Elem: {elem.email}
                        <button><Link to={"/listaEgy/" + elem.id} className="btn btn-primary"><i className="bi bi-eye"></i>Kilistázza a kiválasztott cuccot</Link></button>
                        <button><Link to={"/modositas/" + elem.id} className="btn btn-primary"><i className="bi bi-eye"></i>Mit írjak ide ember</Link></button>
                        <button><Link to={"/torles/" + elem.id} className="btn btn-primary"><i className="bi bi-eye"></i>Mit írjak ide ember</Link></button>

                    </div>
                </>
            ))}
        </>
    )
}

export default List;