import React,{forwardRef} from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

const ColoredTooltip = ()=>{
    return <span style={{color:'yellow'}}>Colored Component</span>
}

const CustomChild=forwardRef((props,ref)=>{
    return (
        <div ref={ref}>
            <div>First line</div>
            <div>Second line</div>
        </div>
    )
}
)
function Tooltip() {
    return (
        <div>
            <div style={{ paddingBottom: '20px' }}>
                <Tippy  delay={1000} arrow={false}  placement='right' content='Basic Tool tip'>
                    <button>Hover</button>
                </Tippy>

            </div>

            <div style={{ paddingBottom: '20px' }}>
                <Tippy content={<ColoredTooltip/>}>
                    <button>Hover</button>
                </Tippy>

            </div>

            <div style={{ paddingBottom: '20px' }}>
                <Tippy content={<ColoredTooltip/>}>
                    <button>Hover</button>
                </Tippy>

            </div>

            
            <div style={{ paddingBottom: '20px' }}>
                <Tippy content={<span style={{ color: 'orange' }}>Colored</span>}>
                   <CustomChild/>
                </Tippy>

            </div>

        </div>
    )
}

export default Tooltip
