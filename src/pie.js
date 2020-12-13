import React, { Component } from 'react';
import { ResponsivePie } from '@nivo/pie'

class Pie extends Component {

    state = {
        data: [
            {
                "id": "rust",
                "label": "rust",
                "value": 335,
                "color": "hsl(38, 70%, 50%)"
            },
            {
                "id": "erlang",
                "label": "erlang",
                "value": 21,
                "color": "hsl(76, 70%, 50%)"
            },
            {
                "id": "python",
                "label": "python",
                "value": 464,
                "color": "hsl(1, 70%, 50%)"
            },
            {
                "id": "php",
                "label": "php",
                "value": 542,
                "color": "hsl(293, 70%, 50%)"
            },
            {
                "id": "stylus",
                "label": "stylus",
                "value": 64,
                "color": "hsl(111, 70%, 50%)"
            }
        ],
    }

    render() {
        const { data} = this.state
        return (
            <div className="container" style={{height:500}}>
                <ResponsivePie
                    data={data}
                    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                    innerRadius={0.45}
                    padAngle={1}
                    cornerRadius={4}
                    colors={{ scheme: 'category10' }}
                    borderWidth={1}
                    borderColor={{ from: 'color', modifiers: [ [ 'darker', '1.2' ] ] }}
                    radialLabelsTextColor={{ from: 'color', modifiers: [] }}
                    radialLabelsLinkOffset={4}
                    radialLabelsLinkDiagonalLength={19}
                    radialLabelsLinkHorizontalLength={20}
                    radialLabelsLinkColor="black"
                    sliceLabelsSkipAngle={10}
                    sliceLabelsTextColor={{ theme: 'background' }}
                    legends={[]}
                />
            </div>
        );
    }
}

export default Pie;
