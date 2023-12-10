const app = require('./app');
const PORT = 5555;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})