import {Component} from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

export class Graph extends Component {
    constructor(props) {
        super(props);
        let len = this.props.data.length;
        this.data = [];
        this.data.length = len;
        for(let i = 0; i <len; i++){
            this.data[i] = {
                x: i,
                y: this.props.data[i],
            }
        }
    }
    render(){
        return(
            <ResponsiveContainer height={300} width={600}>
                <LineChart height={300} data={this.data}>
                    <CartesianGrid stroke={"3 3"}></CartesianGrid>
                    <XAxis dataKey={"x"}></XAxis>
                    <YAxis></YAxis>
                    <Line dataKey={"y"}></Line>
                </LineChart>
            </ResponsiveContainer>
        );
    }

}