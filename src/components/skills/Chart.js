import { useRef, useEffect } from "react";

import './Chart.scss'


const Chart = ({width, skill}) => {
    const dataWidthRef = useRef()

    useEffect(()=>{
       console.log(dataWidthRef.current.dataset.width);
    },[])


    return(
        <div className='chart'>
          <span>{skill}</span>
          <footer>
            <div data-width={width} ref={dataWidthRef} id={skill} className={`chart-width-${width}` }>
            </div>
          </footer>
        </div>
    )
}

export default Chart