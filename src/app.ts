import * as express from 'express';
import router from './routes';
import { AppDataSource } from './data-source';
const cors = require('cors');
import * as dotenv from 'dotenv';

dotenv.config();


AppDataSource.initialize()
  .then(async () => {
    console.log('Data source has been initialized!');
  })
  .catch((error) => console.log(error));


const app = express();
app.use(express.json());
app.use(cors());
router(app);

app.listen(80, () => 'App listening port 80!');

export default app;
