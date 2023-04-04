import React from 'react';
import ReactEcharts from "echarts-for-react";
import { color } from 'echarts';



//Import images





const DoughnutChart = ({  }) => {
   
    var option = {
        
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center',
            textStyle: { //The style of the legend text
                color: '#858d98',
            
            },
        },
        
        series: [{
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            
            color:["#3d405b",
            "#81b29a",
            "#3d5a80",],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center',
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '16',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [{
                value: 1048,
                name: 'Home Loan',
               
            },
            {
                value: 735,
                name: 'Personal Loan'
            },
            {
                value: 580,
                name: 'Car Loan'
            },
            ]
        }],
        textStyle: {
            fontFamily: 'Poppins, sans-serif'
        },
       
    };

    return (
        <React.Fragment>
            <ReactEcharts style={{ height: "350px" }} option={option} />
        </React.Fragment>
    )
}

export {  DoughnutChart}