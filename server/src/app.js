import express from 'express';
const app =express();
app.use(express.json());
app.get('/api/health', (req,res) => {
    res.json({status: 'ok'});  
});
app.use((req, res) => {
    res.status(404).json({error : 'Route is not found , please recheck!'});
});
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({eroor: 'Something wen wrong, try again, if it persists contact support'});
});
export default app;
