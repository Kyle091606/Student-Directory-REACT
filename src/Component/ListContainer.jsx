const ListContainer = ({data}) =>{
    return(
        <>
            <section id="ListContainer">
                {data.map((student) =>(
                    <article key={student.id} className="list-item">
                        <h1>{student.name}</h1>
                        <p>{student.program}</p>
                        <button>Delete</button>
                    </article>

                ))}

            </section>
        </>
    )
}
export default ListContainer;