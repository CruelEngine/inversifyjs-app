import { Container } from 'inversify';
import { interfaces, InversifyExpressServer, TYPE } from 'inversify-express-utils';
import { urlencoded, json } from 'body-parser';

const container = new Container();
let server = new InversifyExpressServer(container);
server.setConfig((app) => {
    // add body parser
    app.use(urlencoded({
        extended: true
    }));
    app.use(json());
});

let app = server.build();
app.listen(3000)
