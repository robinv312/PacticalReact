import React, { useState } from 'react'
import Modal from 'react-modal'
function Modal1() {
    const [data, setData] = useState(false)

    return (
        <div>
            <button onClick={() => setData(true)}>Modal open</button>
            <Modal isOpen={data}>
                <h2>Modal open</h2>
                <p>Modal body</p>
                <div>
                    <button onClick={() => setData(false)}>Modal close</button>
                </div>
            </Modal>


        </div>
    )
}

export default Modal1

