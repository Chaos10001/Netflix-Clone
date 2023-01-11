import { ArrowLeft } from 'react-bootstrap-icons'
import './watch.scss'
import video from '../../Video/2347052375647_status_2fd6aa15db9041728b883d52dcef4144.mp4'

const Watch = () => {
  return (
    <div className='watch'>
        <div className='back'>
            <ArrowLeft/>
            Home
        </div>
        <video className='video' loop autoPlay progress controls src={video}/>
    </div>
  )
}

export default Watch