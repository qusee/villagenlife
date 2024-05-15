import React from 'react';

interface MountainIconProps extends React.SVGProps<SVGSVGElement> { }

function MountainIcon(props: MountainIconProps) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M100.159 220.091L186.523 464.977H189.932L276.295 220.091H313.227L206.409 511H170.045L63.2273 220.091H100.159Z" />
            <path d="M521.909 220.091V511H487.818L329.295 282.591H326.455V511H291.227V220.091H325.318L484.409 449.068H487.25V220.091H521.909Z" />
            <path d="M489.227 511V220.091H524.455V479.75H659.682V511H489.227Z" />
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    );
}