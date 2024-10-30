export default function Perfil({name,src, alt, width, height,profesion, premios,desc, descubrimiento} ){
    return(<>
        <section className="profile">
            <h2>{name}</h2>
            <img
                className="avatar"
                src={src}
                alt={alt}
                width={width}
                height={height}
            />
            <ul>
            <li>
                <b>Profesión: </b> 
                {profesion}
            </li>
            <li>
                <b>Premios: {premios} </b> 
                {desc}
            </li>
            <li>
                <b>Descubrió: </b>
                {descubrimiento}
            </li>
            </ul>
        </section>
        </>
    );
}