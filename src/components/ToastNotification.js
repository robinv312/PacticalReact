import React from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
function ToastNotification() {
    const handleClick = () => {
        toast("Basic Notification",{position:toast.POSITION.TOP_CENTER})
    }
    return (
        <div>
            <button  onClick={handleClick}>Modify</button>
        </div>
    )
}

export default ToastNotification
