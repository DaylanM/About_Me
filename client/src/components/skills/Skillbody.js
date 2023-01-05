import React, { Component } from 'react';
import CanvasJSReact from '../../canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class ColumnChart extends Component {
		render() {
		const options = {
			title: {
				text: "My coding Expierience"
			},
			animationEnabled: true,
			data: [
			{
				type: "column",
				dataPoints: [
					{ label: "Python",  y: 15  },
					{ label: "Ruby", y: 15  },
					{ label: "Ruby on Rails", y: 10  },
					{ label: "React on Rails",  y: 10  },
					{ label: "JavaScript",  y: 10  },
          { label: "Possible/Out of:", y: 50 }
				]
			}
			]
		}

        return (
        <div>
          <CanvasJSChart options = {options} 
            /* onRef={ref => this.chart = ref} */
            containerProps={{ width: '50%', height: '500px'}}
          />
          {}
        </div>
        );
	}
}

export default ColumnChart;