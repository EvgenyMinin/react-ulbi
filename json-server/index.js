const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({ noCors: false });

server.use(middlewares);

server.use(jsonServer.bodyParser);

server.use(async (req, res, next) => {
  await new Promise(res => {
    setTimeout(res, 800);
  });

  next();
});

server.post('/login', (req, res) => {
  const { username, password } = req.body;
  const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json')));
  const { users } = db;

  const userFromBd = users.find(user => user.username === username && user.password === password);

  if (userFromBd) {
    return res.json(userFromBd);
  }

  return res.status(403).json({ message: 'AUTH ERROR' });
});

server.get('/profile', (_, res) => {
  const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json')));
  const { profile } = db;

  if (profile) {
    return res.json(profile);
  }

  return res.status(403).json({ message: 'AUTH ERROR' });
});

server.post('/profile', (req, res) => {
  const { body } = req;

  if (body) {
    return res.json(body);
  }

  return res.status(403).json({ message: 'AUTH ERROR' });
});

server.get('/articles/:id', (req, res) => {
  const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json')));
  const { articles } = db;

  const articleId = req.params.id;

  const response = articles.find(({ id }) => id === articleId);

  if (response) {
    return res.json(response);
  }

  return res.status(404).json({ message: 'Article not found' });
});

server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'AUTH ERROR' });
  }

  next();
});

server.use(router);
server.listen(8000, () => {
  console.log('server is running on port 8000');
});
