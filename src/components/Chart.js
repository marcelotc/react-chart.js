import React from 'react';

import { Bar, Line, Pie } from 'react-chartjs-2'

export default function Chart({ legendPosition, data, defaultProps, location }) {

    return (
        <div className="chart">
            <Bar
                data={data}
                options={{
                    title: {
                        display: defaultProps.displayTitle,
                        text: `Largest cities in ${location}`,
                        fontSize: 25
                    },
                    legend: {
                        display: defaultProps.displayTitle,
                        position: legendPosition,
                        labels: {
                            fontColor: 'black'
                        }
                    }
                }}
            />
            <Line
                data={data}
                options={{
                    title: {
                        display: defaultProps.displayTitle,
                        text: `Largest cities in ${location}`,
                        fontSize: 25
                    },
                    legend: {
                        display: defaultProps.displayTitle,
                        position: legendPosition,
                        labels: {
                            fontColor: 'black'
                        }
                    }
                }}
            />
            <Pie
                data={data}
                options={{
                    title: {
                        display: defaultProps.displayTitle,
                        text: `Largest cities in ${location}`,
                        fontSize: 25
                    },
                    legend: {
                        display: defaultProps.displayTitle,
                        position: legendPosition,
                        labels: {
                            fontColor: 'black'
                        }
                    }
                }}
            />
        </div>
    );
}
