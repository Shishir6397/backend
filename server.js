import express from 'express';
const app = express();
// app.get('/',(req,res)=>{
//     res.send('Server is ready');
// });

const port = process.env.PORT || 3000;

app.get('/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            title:'1st joke',
            content:'This is a joke'
        },
        {
            id:2,
            title:'2nd joke',
            content:'This is a joke'
        },
        {
            id:3,
            title:'3rd joke',
            content:'This is another joke'
        },
        {
            id:4,
            title:'4th joke',
            content:'This is a joke'
        },
        {
            id:5,
            title:'5th joke',
            content:'This is another joke'
        }
    ];
    res.send(jokes);

}
);

app.listen(port, ()=>{
    console.log(`Serve at http://localhost:${port}`);
});