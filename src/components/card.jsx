function Card(props) {
    return(
        <section className="card-section">
            <div className="card">
                <h3>{props.title}</h3>
                <p>{props.content}</p>
            </div>
        </section>
    )
}

export default Card;