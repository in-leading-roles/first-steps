import React from 'react'
import { Link } from 'react-router-dom'
import { style } from 'typestyle'

const LeftStripIcon = ({ isActieve, Icon, Path }) => {
    const leftStripIcon = style({
        marginBottom: '116.67px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        padding: '0px',
        width: '60px',
        height: '60px',
        left: '0px',
        top: '95px',
    })

    const leftStripIconLine = style({
        marginLeft: '-5px',
        height: '60px',
        border: '4px solid #FFFFFF',
        flex: 'none',
        order: '0',
        flexGrow: '0',
    })

    const leftStripIconFrameActieve = style({
        marginTop: '116.67px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        width: '60px',
        height: '59px',
        background: 'rgba(255, 255, 255, 0.4)',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
        borderRadius: '10px',
        flex: 'none',
        order: '1',
        flexGrow: '0',
        marginLeft: '-8px',
        padding: '4px',
    })

    const leftStripIconFrame = style({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        width: '60px',
        height: '59px',
        flex: 'none',
        order: '1',
        flexGrow: '0',
        marginLeft: '2px',
    })


    return isActieve ?
        (
            <Link className={leftStripIcon} to={Path}>
                <div className={leftStripIconLine}></div>
                <div className={leftStripIconFrameActieve}>
                    {Icon}
                </div>
            </Link>
        ) :
        (
            <Link className={leftStripIcon} to={Path}>
                <div className={leftStripIconFrame}>
                    {Icon}
                </div>
            </Link>
        )
}

export default LeftStripIcon