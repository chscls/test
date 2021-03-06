import '../public/index.html';
import './index.css';
import dva from 'dva';

// 1. Initialize
const app = dva();





// 2. Plugins
//app.use({});

// 3. Model
//app.model(require('./models/example'));
app.model(require("./models/common"));
app.model(require("./models/LoginUser"));
app.model(require("./models/11"));
app.model(require("./models/Poster"));
app.model(require("./models/RandOrg"));
app.model(require("./models/CatalogGroup"));
app.model(require("./models/Live"));
app.model(require("./models/manage/WmcPosterSpace"));
app.model(require("./models/manage/WmcPoster"));
app.model(require("./models/manage/WmcSite"));
app.model(require("./models/manage/WmcApp"));
app.model(require("./models/manage/WmcCatalogGroup"));
app.model(require("./models/manage/WmcCourse"));
app.model(require("./models/manage/WmcCatalog"));
app.model(require("./models/manage/WmcTopic"));
app.model(require("./models/manage/WmcOrder"));
app.model(require("./models/manage/WmcLive"));
app.model(require("./models/manage/WmcLiveAnnounce"));
app.model(require("./models/manage/WmcOrg"));
app.model(require("./models/manage/WmcUser"));
// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
