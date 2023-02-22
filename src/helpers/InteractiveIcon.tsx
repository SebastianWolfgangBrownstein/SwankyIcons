import React, { ReactElement, MutableRefObject } from 'react'
import './InteractiveIcon.scss';

type InteractiveIconProps = {
    children: ReactElement
    height?: number;
    width?: number;
    interactive?: boolean;
    onClick?: (param?: any) => void;
    hoverRef?: MutableRefObject<HTMLDivElement>;
}

export function InteractiveIcon({
    children,
    height = 30,
    width = 30,
    interactive = false,
    onClick,
    hoverRef
}: InteractiveIconProps): JSX.Element {
    if (children && children.type === 'svg') {
        const { height: childHeight, width: childWidth } = children.props;
        height = childHeight;
        width = childWidth;
    }
    return (
        <>
            {interactive ? (
                <div className='interactive' onClick={onClick} ref={hoverRef} style={{ height: height, width: width }}>
                    {children}
                    {/* <style jsx>{`
                    div {
                        display: inline-block;
                        box-sizing: content-box;
                        justify-content: center;
                    }

                    div svg {
                        vertical-align: text-top;
                    }

                    div:hover {
                        cursor: pointer;
                    }
                `}</style> */}
                </div>
            ) : (
                <>
                    {children}
                </>
            )}
        </>
    )
}
