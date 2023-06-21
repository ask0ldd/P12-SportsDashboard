import { useEffect, useState } from "react"

function useBreakpointsTracker(){

    const [dimensions, setDimensions] = useState({ 
        height: window.innerHeight,
        width: window.innerWidth
    })

    useEffect(() => {
        
        function handleResize() {
            setDimensions({
            height: window.innerHeight,
            width: window.innerWidth
            })
        }
    
        window.addEventListener('resize', handleResize)
    
        return function cleanup() {
            window.removeEventListener('resize', handleResize)
        }

    }, [])

    return dimensions

}

export default useBreakpointsTracker