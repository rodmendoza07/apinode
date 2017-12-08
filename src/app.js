const express = require('express');
const app = express();

/** settings */
app.set('port', process.env.PORT || 3000);

/** middlewares */
const morgan = require('morgan');
const bodyParser = require('body-parser');

/** ver peticiones en modo desarrollo con morgan */
app.use(morgan('dev'));
/** para ver peticiones en formato json */
app.use(bodyParser.json());

/** rutas
 * Las rutas se traen del archivo userRoutes
 */

require('./routes/userRoutes')(app);


/** servidor en escucha de los puertos */
app.listen(app.get('port'), () => {
    console.log('server on port 3000');
});