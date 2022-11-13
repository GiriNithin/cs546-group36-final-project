const usersRoutes = require('./users');
const authRoutes = require('./auth');
const { authenticateToken } = require('../middleware/auth');

const constructorMethod = (app) => {
	// will remove later
	app.get('/', async (req, res) => {
		res.json({ msg: 'hello world' });
	});

	// will remove later, just for middleware usage example
	app.get('/middleware', authenticateToken, async (req, res) => {
		const { user } = req;
		res.json({ user });
	});

	app.use('/users', usersRoutes);

	app.use('/auth', authRoutes);

	app.use('*', (req, res) => {
		res.status(404).json({ error: 'Not found' });
	});
};

module.exports = constructorMethod;
