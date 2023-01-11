import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

function Graph(props) {
    let data = [];
    data.length = props.data? props.data.length : 0;
    for(let i = 0; i <data.length; i++){
        data[i] = {
            x: i,
            y: props.data[i]
        };
    }
    return (
        <ResponsiveContainer height={300} width={600}>
            <LineChart height={300} data={data}>
                <CartesianGrid stroke={"3 3"}></CartesianGrid>
                <XAxis dataKey={"x"}></XAxis>
                <YAxis></YAxis>
                <Line dataKey={"y"}></Line>
            </LineChart>
        </ResponsiveContainer>
    );
}
export default Graph;