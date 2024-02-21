const CircleIndicator = ({colors}) => {
    console.table(`Color recibido: ${colors}`);
    return(
        <>
            <div className= {`${colors}  rounded-full border-gray-indicator`} style={{width:'17px', height: '17px'}}></div>
        </>
    )
}

export default CircleIndicator;