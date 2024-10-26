import { ColorRing } from "react-loader-spinner";

export default function Loading({height, width}) {
    
    return (
        <ColorRing
        visible={true}
        height={height}
        width={width}
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['hsl(10, 97%, 50%)', 'hsl(10, 97%, 50%)', 'hsl(10, 97%, 50%)', 'hsl(10, 97%, 50%)', 'hsl(10, 97%, 50%)', 'hsl(10, 97%, 50%)']}
    />
    )
}