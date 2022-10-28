//input
let start = [
	{
		id: 1,
		status: 'complete',
		name: 'The Lord of the Rings'
	},
	{
		id: 2,
		status: 'in-progress',
		name: 'Lord of the Flies'
	},
	{
		id: 3,
		status: 'not-started',
		name: 'Dune'
	},
	{
		id: 4,
		status: 'not-started',
		name: 'American Gods'
	},
	{
		id: 5,
		status: 'complete',
		name: 'Ender\'s Game'
	},
	{
		id: 6,
		status: 'in-progress',
		name: 'Brave New World'
	},
	{
		id: 7,
		status: 'complete',
		name: '1984'
	},
]

let final = start.reduce((acc, obj) => {
	switch (obj.status) {
		case 'complete':
			acc[0].books = [...acc[0].books, { id: obj.id, name: obj.name }];
			return acc;
			break;
		case 'in-progress':
			acc[1].books = [...acc[1].books, { id: obj.id, name: obj.name }];
			return acc;
			break;
		case 'not-started':
			acc[2].books = [...acc[2].books, { id: obj.id, name: obj.name }];
			return acc;
			break;
	}
}, [{ status: 'complete', books: [] }, { status: 'in-progress', books: [] }, { status: 'not-started', books: [] }]);

final.map(obj => obj.books.sort((bk1, bk2) => bk1.name.toString().toLowerCase() < bk2.name.toString().toLowerCase() ? -1 : 1));

console.log(final[0].books)

//output
let end = [
	{
		status: 'complete',
		books: [
			{ id: 7, name: '1984' },
			{ id: 5, name: 'Ender\'s Game' },
			{ id: 1, name: 'The Lord of the Rings' }
		]
	}
]