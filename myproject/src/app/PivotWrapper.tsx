'use client'
import * as React from 'react';
import * as FlexMonsterReact from 'react-flexmonster';
import Flexmonster from 'flexmonster';
import "flexmonster/lib/flexmonster.highcharts.js";

// take general Flexmonster parametere and some special _ for Next.js
type PivotProps = Flexmonster.Params & {
    pivotRef?: React.ForwardedRef<FlexMonsterReact.Pivot>;
}

// pivotRef provides a reference to the Flexmonster instance for accessing the Flexmonster API 
const PivotWrapper: React.FC<PivotProps> = ({pivotRef, ...params}) => {
    return (
        <FlexMonsterReact.Pivot
        {...params}
        ref={pivotRef}
        />
    )
}

export default PivotWrapper;