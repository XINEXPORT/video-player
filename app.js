import express from 'express';
import ViteExpress from 'vite-express';
import morgan from 'morgan';

const app = express();
const port = 8000;
ViteExpress.config({ printViteDevServerHost: true });

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

const SAVED_VIDEOS = [
    { artist: 'TX Connect', title: 'Haddonfield, IL Part.2', video: 'https://www.youtube.com/embed/yh0cS9MTebg?si=Vxq9thKagYJ9fIA6' },
    { artist: 'Auxesia', title: 'Killer Alibi', video: 'https://www.youtube.com/embed/5I309D4ELH8?si=fi0825YW7TABiu36' },
    { artist: 'Plastic Sleves', title: 'Voyage Home', video: 'https://www.youtube.com/embed/efxwomeZXmI?si=a5gKbhT9H8oJT9vz' },
    { artist: 'ERP', title: 'Lament SubRosa', video: 'https://www.youtube.com/embed/N0LIHeafkoM?si=auTDh5ou7Dq1TC2C' }
  ];

app.get('/api/music', (req, res) =>{
console.log(SAVED_VIDEOS);
    res.json(SAVED_VIDEOS);
});


ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));

