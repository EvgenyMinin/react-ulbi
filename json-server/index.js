const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const middlewares = jsonServer.defaults({ noCors: false });

server.use(middlewares);

const posts = JSON.parse(fs.readFileSync(path.join(__dirname, 'posts.json'), 'utf-8'));
const articles = JSON.parse(fs.readFileSync(path.join(__dirname, 'articles.json'), 'utf-8'));
const users = JSON.parse(fs.readFileSync(path.join(__dirname, 'users.json'), 'utf-8'));
const comments = JSON.parse(fs.readFileSync(path.join(__dirname, 'comments.json'), 'utf-8'));
const profile = JSON.parse(fs.readFileSync(path.join(__dirname, 'profile.json'), 'utf-8'));

const db = {
  posts: posts.posts,
  articles: articles.articles,
  users: users.users,
  comments: comments.comments,
  profile: profile.profile,
};

const router = jsonServer.router(db);

server.use(jsonServer.bodyParser);

server.use(async (req, res, next) => {
  await new Promise(res => {
    setTimeout(res, 800);
  });

  next();
});

router.render = ({ method }, res) => {
  res.jsonp(res.locals.data);

  const writeData = (filePath, data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  };

  if (method === 'POST' || method === 'PUT' || method === 'PATCH' || method === 'DELETE') {
    writeData(path.join(__dirname, 'posts.json'), {
      posts: router.db.get('posts').value(),
    });

    writeData(path.join(__dirname, 'comments.json'), {
      comments: router.db.get('comments').value(),
    });

    writeData(path.join(__dirname, 'profile.json'), {
      profile: router.db.get('profile').value(),
    });

    writeData(path.join(__dirname, 'users.json'), {
      users: router.db.get('users').value(),
    });

    writeData(path.join(__dirname, 'articles.json'), {
      articles: router.db.get('articles').value(),
    });
  }
};

server.post('/login', ({ body }, res) => {
  const { username, password } = body;

  const userFromBd = db.users.find(
    user => user.username === username && user.password === password
  );

  if (userFromBd) {
    return res.json(userFromBd);
  }

  return res.status(403).json({ message: 'AUTH ERROR' });
});

server.get('/profile', (_, res) => {
  if (db.profile) {
    return res.json(db.profile);
  }

  return res.status(403).json({ message: 'AUTH ERROR' });
});

server.get('/articles/:id', ({ params: { id: articleId } }, res) => {
  const response = db.articles.find(({ id }) => id === articleId);

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
