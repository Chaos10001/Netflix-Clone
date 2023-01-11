import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'
import ListItem from '../listItem/ListItem'
import './list.scss'

const List = () => {
  const listRef= useRef()
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);


  const handleClick=(direction)=>{
    setIsMoved(true)

    let distance= listRef.current.getBoundingClientRect().x - 50
    if (direction === 'left' && slideNumber > 0) {
      listRef.current.style.transform=`translateX(${230 + distance}px)`
      setSlideNumber(slideNumber - 1)
    }
    if (direction === 'right' && slideNumber < 5) {
      listRef.current.style.transform=`translateX(${-230 + distance}px)`
      setSlideNumber(slideNumber + 1)
    }
  }
  return (
    <div className='list'>
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">
            <ChevronLeft 
            onClick={()=>handleClick('left')} 
            className='sliderArrow left'
            style={{display: !isMoved && 'none'}}/>
            <div className="container" ref={listRef}>
                <ListItem index={0}/>
                <ListItem index={1}/>
                <ListItem index={2}/>
                <ListItem index={3}/>
                <ListItem index={4}/>
                <ListItem index={5}/>
                <ListItem index={6}/>
                <ListItem index={7}/>
                <ListItem index={8}/>
                <ListItem index={9}/>             
            </div>
            <ChevronRight onClick={()=>handleClick('right')} className='sliderArrow right'/>
        </div>
    </div>
  )
}

export default List