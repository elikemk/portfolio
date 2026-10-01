"use client"
import *  as React from "react";
import { useRef } from 'react';
import type {Pivot} from "react-flexmonster";
import dynamic from "next/dynamic";
// import * as Highcharts from 'highcharts';
// import HighchartsReact from "highcharts-react-official";
import Flexmonster from "flexmonster";

// load the wrapper
const PivotWrap = dynamic(() => import('@/app/PivotWrapper'), {
    ssr: false, // what does this mean
    loading: () => <h1>Loading Flexmonster... </h1>
});

const ForwardedRefPivot = React.forwardRef<Pivot, Flexmonster.Params>((props, ref?: React.ForwardedRef<Pivot>) => 
    <PivotWrap {...props} pivotRef={ref} />
)

ForwardedRefPivot.displayName = 'ForwardRefPivot'

// route name
// this file links analytical dashboad to pages tsx
// look at this file if you want to find how to link a wrapper to UI
// flexmonster support dynamic loading, only?


//define a function to render our dashboard & work pasts
// its important to learn next.js ref object because this help access events
// using ref object get event for the pivot table
// then we create a function to run the pivot data and return and print function called layot 


export default function WithHightchart() {
    const pivotRef = useRef<Pivot>(null);


    const reportComplete = () => {
        pivotRef.current!.flexmonster.off("reportComplete", reportComplete);
        createChart();
    }

    const createChart = () => {
        // render charts later
    }

    React.useEffect(() => {    
        if (pivotRef.current) {
            // what does current mean?
            const pivot = pivotRef.current.flexmonster;
    
            // Trigger the chart update when data changes
            pivot.on('dataChanged', createChart);
            pivot.on('filterclose', createChart);
    
            return () =>{
                pivot.off('dataChanged', createChart);
                pivot.off('filterclose', createChart);
            }
    
        } 
    }, [pivotRef]);

    return (
        <div className = "App">
            <div id= "pivot-container" className="">
                <ForwardedRefPivot
                    ref={pivotRef}
                    toolbar={true}
                    beforetoolbarcreated={toolbar => {
                        toolbar.showShareReportTab = true;
                    }}
                    shareReportConnection={{
                        url: "https://olap.flexmonster.com:9500"
                    }}
                    width={"100%"}
                    height={600}
                    report={{
                        dataSource:{
                            type: "csv",
                            // connects to our dataset
                            filename: "https://query.data.world/s/vvjzn4x5anbdunavdn6lpu6tp2sq3m?dws=00000"
                        }
                    }}
                    reportcomplete={reportComplete}
                    // your license key
                    licenseKey="XXXX-XXXX-XXXX-XXXX-XXXX"
            />
           </div> 
        </div>
    )
}  







