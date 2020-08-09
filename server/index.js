import express from 'express';

// we'll talk about this in a minute:
import serverRenderer from './middleware/renderer';
import getOrigamis from './middleware/origamis';
import auth from './middleware/auth';
import path from 'path';
import cookieParser from 'cookie-parser'

const PORT = 3000;

// initialize the application and create the routes
const app = express();
const router = express.Router();

app.use(cookieParser('secret'))

router.use('^/$', auth, getOrigamis, serverRenderer);

// other static resources should just be served as they are
router.use(express.static(
    path.resolve(__dirname, '..', 'build'),
    { maxAge: '30d' },
));

// tell the app to use the above rules
router.use('*', serverRenderer);
app.use(router);

// start the app
app.listen(PORT, (error) => {
    if (error) {
        return console.log('something bad happened', error);
    }

    console.log("listening on " + PORT + "...");
});