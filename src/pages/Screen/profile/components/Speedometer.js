import React from "react";
import ReactSpeedometer from "react-d3-speedometer";

const styles = {
    dial: {
        display: "inline-block",
        width: `300px`,
        height: `auto`,
        color: "#000",
        padding: "2px"
    }
};

const Speedometer = ({ value }) => {
    return (
        <div style={styles.dial}>

            <ReactSpeedometer
                maxValue={100}
                minValue={1}
                height={190}
                width={290}
                value={value}
                needleTransition="easeQuadIn"
                needleTransitionDuration={1000}
                needleColor="black"
                startColor="green"
                segments={10}
                endColor="red"
            />
        </div>
    );
};

export default Speedometer;