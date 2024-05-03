import './tech.css'

export default function Tech(props) {
  const img = props.img
  const title = props.title

  return (
    <>
      <div className='tech-card'>
        <img src={img} alt='Technology logo' />
        <h5 className='title is-5'>{title}</h5>
      </div>
    </>
  )
}