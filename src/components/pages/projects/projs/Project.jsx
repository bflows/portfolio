import './projs.css'

export default function Project(props) {
  const img = props.img
  const name = props.name
  const desc = props.desc
  const date = props.date
  const datetime = props.datetime

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img
            src={img}
            alt="Project image"
          />
        </figure>
      </div>
      <div className="card-content">
        <p className="title is-4">{name}</p>
        <div className="content">
          <p>{desc}</p>
          {/* <a>@bulmaio</a>
          <a href="#">#css</a>
          <a href="#">#responsive</a> */}
          <time dateTime={datetime}>{date}</time>
        </div>
      </div>
    </div>
  )
}