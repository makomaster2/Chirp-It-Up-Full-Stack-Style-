import { Query } from './index';

const all = () => Query('SELECT * FROM chirps');

const one = id => Query('SELECT * FROM chirps WHERE chirps.id = ?', [id]);

const insert = (userid, content, location) =>
	Query('INSERT INTO chirps (userid, content, location) VALUES (?, ?, ?)', [
		userid,
		content,
		location,
	]);

const destroy = id => Query('DELETE FROM chirps WHERE id=?', [id]);

const edit = (id, content) => Query('UPDATE chirps SET content = ? WHERE chirps.id = ?', [content, id]);

export default {
	all,
	one,
	insert,
	destroy,
	edit,
};
