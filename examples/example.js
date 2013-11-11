$(function () {

	var data = {
		columns: ['type', 'color', 'weight', 'price'],
		rows: [
			['apple', 'red', 0.25, 1.5],
			['pear', 'green', 0.4, 2],
			['pear', 'red', 0.3, 1.8],
			['apple', 'yellow', 0.26, 1.2],
			['pineapple', 'yellow', 1, 4],
			['banana', 'yellow', 0.3, 1.5],
			['melon', 'yellow', 3, 3],
			['watermelon', 'green', 10, 5],
			['apple', 'green', 0.24, 1],
			['strawberries', 'red', 0.1, 0.2]
		]
	}

	window.messages = new Qstore ({
		columns: ['text', 'subject', 'user'],
		rows: [
			['Hello world!', 'programming', {id: 1, name: 'Bob'}],
			['Happy new year!', 'new year', {id: 2, name: 'Kate'}],
			['How to learn javascript?', 'programming', {id: 2, name: 'Stan'}],
			['Anyone want to dance?', 'new year', {id: 2, name: 'James'}]
		]
	});

	window.diet = new Qstore ({
		columns: ['month', 'breakfast', 'dinner'],
		rows: [
			['april', {calories: 400, food: 'egg'}, {calories: 300, food: 'soup'}],
			['may', {calories: 300, food: 'bacon'}, {calories: 500, food: 'soup'}],
			['june', {calories: 350, food: 'porridge'}, {calories: 300, food: 'chicken'}]
		]
	});

	window.users = new Qstore ([
		{id: 1, name: 'Bob', friends: ['Mike', 'Sam']},
		{id: 2, name: 'Martin', friends: ['Bob']},
		{id: 3, name: 'Mike', friends: ['Bob', 'Martin', 'Sam']},
		{id: 4, name: 'Sam', friends: []}
	]);

	var selectors = {
		all: true,
		apples: {type: 'apple'},
		greenApples: {type: 'apple', color: 'green'},
		applesAndPears: {type: ['apple', 'pear']},
		redImages: [{color: 'red'}, ['image']],
		heavyFruits: [{weight: {$gte: 1}}, ['image', 'weight', 'type']],
		cheapOrYellow: [[{price: {$lt: 1}}, {color: 'yellow'}]],
		expensiveIntfruits: {price: {$and: [{$gte: 1}, function (value) {return value % 1 == 0}]}},
		regExp: {type: /apple/}
	}

	var render = function (rows) {
		$('.table-place').html(tableTemplate(rows));
	}

	var switchExaple = function (exampleName) {
		var selector = selectors[exampleName];
		var fields = null;
		if ($.isArray(selector)) {
			fields = selector[1];
			selector = selector[0];
		}
		$('.code').hide();
		$('#' + exampleName).show();
		render(fruits.find(selector, fields));
	}

	$('[name="queries"]').change(function () {
		switchExaple($(this).val());
	});


	var fruits = window.fruits = new Qstore(data);
	fruits.addFields([{name: 'image', compute: function (row) { return '<img src="images/' + row.type + '-' + row.color + '.jpeg">'}}])
	render(fruits.rows);

//	var groups = fruits.groupBy('color')
//	groups.find({'_g': {$has: {type: 'apple'}}})

	//fruits.groupBy('color').find({color: 'red'}, {'_g.$find.$first:redApple': {type: 'apple'}})
	var DEBUG_DATA = [{"state":"MONITOR,WORK,SLEEP,READY","created":"2011-12-17","budget":155.0031,"updated":"2013-10-21","effector_id":105635,"day_cost":4.957242,"id":"E105635","region":"Москва","comment":"","top":["yandex_ru","google_by","google_ru","google_com","google_ua"],"pos":["yandex_ru","google_by","google_ru","google_com","google_ua"],"url":"http://www.webeffector.ru/","name":"www.webeffector.ru"},{"state":"READY,MONITOR,SLEEP","created":"2011-10-21","budget":0.0,"updated":"2013-04-18","effector_id":139367,"day_cost":0.0,"id":"E139367","region":"Москва","comment":"","top":["yandex_ru","google_by"],"pos":["yandex_ru","google_by","google_ru"],"url":"http://www.majevent.com","name":"majevent.com"},{"state":"READY","created":"2011-10-21","budget":0.0,"updated":"2012-12-03","effector_id":139376,"day_cost":0.0,"id":"E139376","region":"Москва","comment":"","top":["yandex_ru"],"pos":["yandex_ru","google_ru"],"url":"http://localhost/","name":"localhost"},{"state":"READY","created":"2011-10-21","budget":0.0,"updated":"2012-03-13","effector_id":139427,"day_cost":0.0,"id":"E139427","region":"Москва","comment":"","top":["yandex_ru"],"pos":["yandex_ru","google_ru"],"url":"http:/","name":""},{"state":"READY","created":"2011-10-21","budget":0.0,"updated":"2012-03-13","effector_id":139432,"day_cost":0.0,"id":"E139432","region":"Москва","comment":"","top":["yandex_ru"],"pos":["yandex_ru","google_ru"],"url":"http:/","name":""},{"state":"READY","created":"2011-10-24","budget":0.0,"updated":"2012-03-13","effector_id":140133,"day_cost":0.0,"id":"E140133","region":"Москва","comment":"","top":["yandex_ru"],"pos":["yandex_ru","google_ru"],"url":"http:/","name":""},{"state":"READY","created":"2011-10-24","budget":0.0,"updated":"2012-05-03","effector_id":140308,"day_cost":0.0,"id":"E140308","region":"Москва","comment":"","top":["yandex_ru"],"pos":["yandex_ru","google_ru"],"url":"http://test.ru/","name":"test.ru"},{"state":"READY","created":"2011-10-24","budget":0.0,"updated":"2013-04-18","effector_id":140309,"day_cost":0.0,"id":"E140309","region":"Москва","comment":"","top":["yandex_ru"],"pos":["yandex_ru","google_ru"],"url":"http://lenta.ru/","name":"lenta.ru"},{"state":"READY","created":"2011-10-25","budget":0.0,"updated":"2012-04-20","effector_id":140505,"day_cost":0.0,"id":"E140505","region":"Москва","comment":"","top":["yandex_ru"],"pos":["yandex_ru","google_ru"],"url":"http://test.ru/","name":"test.ru"},{"state":"READY","created":"2011-10-25","budget":0.0,"updated":"2013-04-18","effector_id":140508,"day_cost":0.0,"id":"E140508","region":"Москва","comment":"","top":["yandex_ru"],"pos":["yandex_ru","google_ru"],"url":"http://lenta.ru/","name":"lenta.ru"},{"state":"READY","created":"2011-10-26","budget":0.0,"updated":"2013-04-18","effector_id":140942,"day_cost":0.0,"id":"E140942","region":"Москва","comment":"","top":["yandex_ru"],"pos":["yandex_ru","google_ru"],"url":"http://lenta.ru/","name":"lenta.ru"},{"state":"SLEEP","created":"2012-01-31","budget":0.0,"updated":"2013-02-28","effector_id":168160,"day_cost":0.0,"id":"E168160","region":"Москва","comment":"","top":["yandex_ru","google_by","google_ru","google_com","google_ua"],"pos":["yandex_ru","google_by","google_ru","google_com","google_ua"],"url":"http://tests.pp.ru","name":"http://tests.pp.ru"},{"state":"SLEEP,READY","created":"2012-02-01","budget":0.0,"updated":"2012-12-05","effector_id":168732,"day_cost":0.0,"id":"E168732","region":"Москва","comment":"","top":["yandex_ru","google_by","google_ru","google_com","google_ua"],"pos":["yandex_ru","google_by","google_ru","google_com","google_ua"],"url":"http://aeterna.qip.ru","name":"http://aeterna.qip.ru"},{"state":"SLEEP","created":"2012-02-02","budget":0.0,"updated":"2013-02-28","effector_id":168980,"day_cost":0.0,"id":"E168980","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://mytest.org.ru","name":"http://mytest.org.ru"},{"state":"READY","created":"2012-02-02","budget":0.0,"updated":"2012-12-20","effector_id":169015,"day_cost":0.0,"id":"E169015","region":"Европа","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru"],"url":"http://tests.holm.ru","name":"http://tests.holm.ru"},{"state":"SLEEP","created":"2012-02-02","budget":0.0,"updated":"2013-02-28","effector_id":169018,"day_cost":0.0,"id":"E169018","region":"Нижний Новгород","comment":"","top":["yandex_ru","google_by","google_ru","google_com","google_ua"],"pos":["yandex_ru","google_by","google_ru","google_com","google_ua"],"url":"http://tests.kulichki.com","name":"http://tests.kulichki.com"},{"state":"SLEEP","created":"2012-02-03","budget":0.0,"updated":"2013-02-28","effector_id":169304,"day_cost":0.0,"id":"E169304","region":"Москва","comment":"","top":["yandex_ru","google_ru","google_com"],"pos":["yandex_ru","google_ru","google_com"],"url":"http://mytests.ru","name":"http://mytests.ru"},{"state":"SLEEP","created":"2012-02-03","budget":0.0,"updated":"2013-02-28","effector_id":169396,"day_cost":0.0,"id":"E169396","region":"Санкт-Петербург","comment":"","top":["yandex_ru","google_by","google_ru","google_com","google_ua"],"pos":["yandex_ru","google_by","google_ru","google_com","google_ua"],"url":"http://banktestov.ru","name":"http://banktestov.ru"},{"state":"SLEEP,READY","created":"2012-02-08","budget":0.0,"updated":"2012-11-16","effector_id":170681,"day_cost":0.0,"id":"E170681","region":"Москва и область","comment":"","top":["google_ru"],"pos":[],"url":"http://testauto.ru","name":"http://testauto.ru"},{"state":"SLEEP,READY","created":"2012-02-08","budget":0.0,"updated":"2013-04-18","effector_id":170698,"day_cost":0.0,"id":"E170698","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://agava.ru","name":"http://agava.ru"},{"state":"SLEEP,READY","created":"2012-02-10","budget":0.0,"updated":"2013-04-19","effector_id":171384,"day_cost":0.0,"id":"E171384","region":"Новосибирск","comment":"","top":["yandex_ru","google_by","google_ru","google_com","google_ua"],"pos":["yandex_ru","google_by","google_ru","google_com","google_ua"],"url":"http://gai.ru","name":"http://gai.ru"},{"state":"SLEEP,READY","created":"2012-02-20","budget":0.0,"updated":"2013-02-19","effector_id":174424,"day_cost":0.0,"id":"E174424","region":"Москва","comment":"","top":["google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://be2.ru","name":"http://be2.ru"},{"state":"SLEEP,READY","created":"2012-02-21","budget":0.0,"updated":"2012-12-05","effector_id":174704,"day_cost":0.0,"id":"E174704","region":"Нижний Тагил","comment":"","top":["yandex_ru"],"pos":["yandex_ru"],"url":"http://domino.ru","name":"http://domino.ru"},{"state":"SLEEP,READY","created":"2012-02-22","budget":0.0,"updated":"2012-11-30","effector_id":175024,"day_cost":0.0,"id":"E175024","region":"Астрахань","comment":"","top":["yandex_ru"],"pos":["yandex_ru"],"url":"http://4udotest.msk.ru","name":"http://4udotest.msk.ru"},{"state":"READY","created":"2012-02-22","budget":0.0,"updated":"2013-06-10","effector_id":175090,"day_cost":0.0,"id":"E175090","region":"Москва","comment":"","top":[],"pos":[],"url":"http://do-16.ru","name":"http://do-16.ru"},{"state":"READY","created":"2012-02-24","budget":0.0,"updated":"2012-12-17","effector_id":179341,"day_cost":0.0,"id":"E179341","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://ixbt.com","name":"http://ixbt.com"},{"state":"SLEEP,READY","created":"2012-02-27","budget":0.0,"updated":"2013-04-18","effector_id":180077,"day_cost":0.0,"id":"E180077","region":"Нижний Новгород","comment":"","top":["yandex_ru","google_by","google_ru","google_com","google_ua"],"pos":["yandex_ru","google_by","google_ru","google_com","google_ua"],"url":"http://3dnews.ru","name":"http://3dnews.ru"},{"state":"SLEEP,READY","created":"2012-02-28","budget":0.0,"updated":"2013-02-28","effector_id":180403,"day_cost":0.0,"id":"E180403","region":"Москва","comment":"","top":["yandex_ru","google_by","google_ru","google_com","google_ua"],"pos":["yandex_ru","google_by","google_ru","google_com","google_ua"],"url":"http://2ip.ru","name":"http://2ip.ru"},{"state":"SLEEP,READY,MONITOR","created":"2012-03-05","budget":0.0,"updated":"2013-04-18","effector_id":182321,"day_cost":0.0,"id":"E182321","region":"Москва","comment":"","top":["yandex_ru","google_ru","google_com","google_ua"],"pos":["yandex_ru","google_ru","google_com","google_ua"],"url":"http://3dnews.ru","name":"http://3dnews.ru"},{"state":"READY,SLEEP","created":"2012-03-05","budget":0.0,"updated":"2013-10-21","effector_id":182429,"day_cost":0.0,"id":"E182429","region":"Москва","comment":"","top":["google_ru","google_com"],"pos":["yandex_ru","google_by","google_ru","google_com","google_ua"],"url":"http://girls-site.ru","name":"http://girls-site.ru"},{"state":"READY","created":"2012-03-12","budget":0.0,"updated":"2012-12-07","effector_id":184232,"day_cost":0.0,"id":"E184232","region":"Москва и область","comment":"","top":["google_ru","google_com","google_ua"],"pos":[],"url":"http://goodtests.ru","name":"http://goodtests.ru"},{"state":"SLEEP,READY","created":"2012-03-15","budget":0.0,"updated":"2012-12-07","effector_id":185389,"day_cost":0.0,"id":"E185389","region":"Москва","comment":"","top":["yandex_ru","google_by","google_ru","google_com","google_ua"],"pos":["yandex_ru","google_by","google_ru","google_com","google_ua"],"url":"http://addons.mozilla.org","name":"http://addons.mozilla.org"},{"state":"READY","created":"2012-03-30","budget":0.0,"updated":"2012-11-03","effector_id":189652,"day_cost":0.0,"id":"E189652","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru"],"url":"http://blah.ru","name":"http://blah.ru"},{"state":"READY","created":"2012-04-04","budget":0.0,"updated":"2012-06-26","effector_id":191268,"day_cost":0.0,"id":"E191268","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru"],"url":"http://tests.ru","name":"http://tests.ru"},{"state":"MONITOR,READY","created":"2012-04-05","budget":0.0,"updated":"2012-11-18","effector_id":191632,"day_cost":0.0,"id":"E191632","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru"],"url":"http://2ip.ru","name":"http://2ip.ru"},{"state":"READY","created":"2012-04-06","budget":0.0,"updated":"2012-12-06","effector_id":191933,"day_cost":0.0,"id":"E191933","region":"Москва и область","comment":"","top":["yandex_ru"],"pos":["yandex_ru","google_ru"],"url":"http://narod.ru/","name":"narod.ru"},{"state":"READY","created":"2012-04-09","budget":0.0,"updated":"2013-04-18","effector_id":192517,"day_cost":0.0,"id":"E192517","region":"Москва","comment":"","top":["google_by","google_ru","google_ua"],"pos":[],"url":"http://krasn.testsbox.ru","name":"http://krasn.testsbox.ru"},{"state":"READY,SLEEP","created":"2012-04-16","budget":0.0,"updated":"2013-02-28","effector_id":194507,"day_cost":0.0,"id":"E194507","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru"],"url":"http://addons.mozilla.org","name":"http://addons.mozilla.org"},{"state":"SLEEP","created":"2012-04-16","budget":0.0,"updated":"2012-11-21","effector_id":194509,"day_cost":0.0,"id":"E194509","region":"Екатеринбург","comment":"","top":["yandex_ru","google_by","google_ru","google_com","google_ua"],"pos":["yandex_ru","google_by","google_ru","google_com","google_ua"],"url":"http://aeterna.qip.ru","name":"http://aeterna.qip.ru"},{"state":"READY","created":"2012-04-17","budget":0.0,"updated":"2013-04-18","effector_id":194862,"day_cost":0.0,"id":"E194862","region":"Нижний Новгород","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru"],"url":"http://3dnews.ru","name":"http://3dnews.ru"},{"state":"SLEEP","created":"2012-04-18","budget":0.0,"updated":"2012-12-03","effector_id":195151,"day_cost":0.0,"id":"E195151","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru"],"url":"http://google.ru","name":"http://google.ru"},{"state":"SLEEP,READY","created":"2012-04-18","budget":0.0,"updated":"2013-01-10","effector_id":195161,"day_cost":0.0,"id":"E195161","region":"Великие Луки","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru"],"url":"http://beeline.ru","name":"http://beeline.ru"},{"state":"WORK,SLEEP","created":"2012-04-18","budget":10.0002,"updated":"2013-10-21","effector_id":195265,"day_cost":0.742872,"id":"E195265","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://4udotest.msk.ru","name":"http://4udotest.msk.ru"},{"state":"SLEEP","created":"2012-04-24","budget":0.0,"updated":"2013-02-28","effector_id":196790,"day_cost":0.0,"id":"E196790","region":"Москва","comment":"","top":["yandex_ru","google_ru","google_com"],"pos":["yandex_ru","google_ru","google_com"],"url":"http://software-testing.ru","name":"http://software-testing.ru"},{"state":"SLEEP,READY","created":"2012-04-25","budget":0.0,"updated":"2013-02-28","effector_id":197088,"day_cost":0.0,"id":"E197088","region":"Новомосковск","comment":"","top":["yandex_ru","google_by","google_ru","google_com","google_ua"],"pos":["yandex_ru","google_by","google_ru","google_com","google_ua"],"url":"http://frautest.ru","name":"http://frautest.ru"},{"state":"SLEEP","created":"2012-05-12","budget":0.0,"updated":"2012-10-30","effector_id":200891,"day_cost":0.0,"id":"X8","region":"Москва","comment":"","top":["yandex_ru"],"pos":["yandex_ru"],"url":"http://linux.org.ru","name":"LOR"},{"state":"SLEEP","created":"2012-05-18","budget":0.0,"updated":"2013-04-18","effector_id":202606,"day_cost":0.0,"id":"E202606","region":"Санкт-Петербург","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru"],"url":"http://webeffector.ru","name":"http://webeffector.ru"},{"state":"READY","created":"2012-05-25","budget":0.0,"updated":"2012-09-07","effector_id":205997,"day_cost":0.0,"id":"E205997","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://www.uterem.ru","name":"http://www.uterem.ru"},{"state":"SLEEP","created":"2012-05-25","budget":0.0,"updated":"2012-11-09","effector_id":206135,"day_cost":0.0,"id":"E206135","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://варпр666.рф","name":"http://варпр666.рф"},{"state":"SLEEP","created":"2012-07-19","budget":0.0,"updated":"2013-04-18","effector_id":236613,"day_cost":0.0,"id":"E236613","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://esteworld.ru/","name":"http://esteworld.ru/"},{"state":"SLEEP","created":"2012-08-03","budget":0.0,"updated":"2013-08-20","effector_id":245069,"day_cost":0.0,"id":"E245069","region":"Иерусалим","comment":"","top":["yandex_ru","google_by","google_ru","google_com","google_ua"],"pos":["yandex_ru","google_by","google_ru","google_com","google_ua"],"url":"http://webeffector.ru","name":"http://webeffector.ru"},{"state":"READY","created":"2012-08-22","budget":0.0,"updated":"2013-04-18","effector_id":252962,"day_cost":0.0,"id":"E252962","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://webeffector.ru","name":"http://webeffector.ru"},{"state":"READY","created":"2012-09-19","budget":0.0,"updated":"2013-04-18","effector_id":265711,"day_cost":0.0,"id":"E265711","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://amik.ru","name":"http://amik.ru"},{"state":"SLEEP","created":"2012-10-03","budget":0.0,"updated":"2013-04-18","effector_id":272312,"day_cost":0.0,"id":"E272312","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://majevent.com","name":"http://majevent.com"},{"state":"SLEEP","created":"2012-10-03","budget":0.0,"updated":"2013-04-18","effector_id":272322,"day_cost":0.0,"id":"E272322","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://webeffector.ru","name":"http://webeffector.ru"},{"state":"READY,SLEEP","created":"2012-11-29","budget":0.0,"updated":"2013-02-28","effector_id":334941,"day_cost":0.0,"id":"E334941","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://vladivostok.прямыевакансии.рф","name":"http://vladivostok.прямыевакансии.рф"},{"state":"READY","created":"2012-12-04","budget":0.0,"updated":"2013-04-18","effector_id":343053,"day_cost":0.0,"id":"E343053","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://bdbd.ru","name":"http://bdbd.ru"},{"state":"READY","created":"2012-12-05","budget":0.0,"updated":"2013-04-18","effector_id":344624,"day_cost":0.0,"id":"E344624","region":"Европа","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://bdbd.ru","name":"http://bdbd.ru"},{"state":"SLEEP,READY","created":"2012-12-11","budget":0.0,"updated":"2013-02-28","effector_id":355210,"day_cost":0.0,"id":"E355210","region":"Самара","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://pressfoto.ru","name":"http://pressfoto.ru"},{"state":"READY","created":"2012-12-11","budget":0.0,"updated":"2012-12-12","effector_id":355654,"day_cost":0.0,"id":"E355654","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://pressfoto.ru","name":"http://pressfoto.ru"},{"state":"READY","created":"2012-12-13","budget":0.0,"updated":"2012-12-14","effector_id":359033,"day_cost":0.0,"id":"E359033","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://seop.ru","name":"http://seop.ru"},{"state":"READY","created":"2012-12-17","budget":0.0,"updated":"2012-12-18","effector_id":366397,"day_cost":0.0,"id":"E366397","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://vzlom-online.ru","name":"http://vzlom-online.ru"},{"state":"READY","created":"2012-12-19","budget":0.0,"updated":"2013-04-18","effector_id":369363,"day_cost":0.0,"id":"E369363","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://www.webeffector.ru","name":"http://www.webeffector.ru"},{"state":"READY","created":"2013-01-10","budget":0.0,"updated":"2013-01-11","effector_id":404691,"day_cost":0.0,"id":"E404691","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://udaff.com","name":"http://udaff.com"},{"state":"READY","created":"2013-01-14","budget":0.0,"updated":"2013-01-15","effector_id":410634,"day_cost":0.0,"id":"E410634","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://www.oknacm2.ru","name":"http://www.oknacm2.ru"},{"state":"READY","created":"2013-01-14","budget":0.0,"updated":"2013-01-15","effector_id":410636,"day_cost":0.0,"id":"E410636","region":"Санкт-Петербург","comment":"","top":["google_by","google_ru","google_com","google_ua"],"pos":["yandex_ru","google_by","google_ru","google_com","google_ua"],"url":"http://www.oknacm2.ru","name":"http://www.oknacm2.ru"},{"state":"READY","created":"2013-02-28","budget":0.0,"updated":"2013-03-08","effector_id":468769,"day_cost":0.0,"id":"E468769","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://1000z.ru","name":"http://1000z.ru"},{"state":"READY,WORK,SLEEP","created":"2013-03-01","budget":25.0005,"updated":"2013-10-21","effector_id":471006,"day_cost":0.757158,"id":"E471006","region":"Москва","comment":"","top":["yandex_ru","google_ru","google_com"],"pos":["yandex_ru","google_ru","google_com"],"url":"http://1000qz.ru","name":"http://1000qz.ru"},{"state":"READY","created":"2013-04-18","budget":0.0,"updated":"2013-04-18","effector_id":510959,"day_cost":0.0,"id":"E510959","region":"Санкт-Петербург","comment":"","top":["yandex_ru","google_by","google_ru","google_com","google_ua"],"pos":["yandex_ru","google_by","google_ru","google_com","google_ua"],"url":"http://3dnews.ru","name":"http://3dnews.ru"},{"state":"READY","created":"2013-05-11","budget":0.0,"updated":"2013-05-12","effector_id":524614,"day_cost":0.0,"id":"E524614","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://fansushi.com.ua","name":"http://fansushi.com.ua"},{"state":"WORK","created":"2013-05-22","budget":125.00249999999998,"updated":"2013-10-21","effector_id":531704,"day_cost":4.142939999999999,"id":"E531704","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://webeffector.ru","name":"http://webeffector.ru"},{"state":"WORK,READY","created":"2013-06-11","budget":25.0005,"updated":"2013-10-21","effector_id":544228,"day_cost":0.78573,"id":"E544228","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://icult.ru","name":"http://icult.ru"},{"state":"SLEEP","created":"2013-06-11","budget":0.0,"updated":"2013-06-12","effector_id":544285,"day_cost":0.0,"id":"E544285","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://icult.ru","name":"http://icult.ru"},{"state":"SLEEP","created":"2013-06-12","budget":0.0,"updated":"2013-06-13","effector_id":544921,"day_cost":0.0,"id":"E544921","region":"Волгоград","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://www.humor.ru","name":"http://www.humor.ru"},{"state":"SLEEP","created":"2013-06-12","budget":0.0,"updated":"2013-06-13","effector_id":544986,"day_cost":0.0,"id":"E544986","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://moskva.ru","name":"http://moskva.ru"},{"state":"SLEEP","created":"2013-06-13","budget":0.0,"updated":"2013-06-14","effector_id":545580,"day_cost":0.0,"id":"E545580","region":"Самара","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://root.ru","name":"http://root.ru"},{"state":"SLEEP","created":"2013-06-13","budget":0.0,"updated":"2013-06-14","effector_id":545715,"day_cost":0.0,"id":"E545715","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://seopult.ru","name":"http://seopult.ru"},{"state":"SLEEP","created":"2013-06-21","budget":0.0,"updated":"2013-06-22","effector_id":550430,"day_cost":0.0,"id":"E550430","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://www.youhtc.ru","name":"http://www.youhtc.ru"},{"state":"SLEEP","created":"2013-06-27","budget":0.0,"updated":"2013-06-28","effector_id":554541,"day_cost":0.0,"id":"E554541","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://ecco-shoes.ru","name":"http://ecco-shoes.ru"},{"state":"SLEEP,READY","created":"2013-06-27","budget":0.0,"updated":"2013-06-28","effector_id":554826,"day_cost":0.0,"id":"E554826","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://ag.ru","name":"http://ag.ru"},{"state":"SLEEP","created":"2013-07-02","budget":0.0,"updated":"2013-07-03","effector_id":557933,"day_cost":0.0,"id":"E557933","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://sound-service.ru","name":"http://sound-service.ru"},{"state":"SLEEP","created":"2013-07-03","budget":0.0,"updated":"2013-07-04","effector_id":558545,"day_cost":0.0,"id":"E558545","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://webeffector.ru","name":"http://webeffector.ru"},{"state":"SLEEP","created":"2013-07-05","budget":0.0,"updated":"2013-07-06","effector_id":559925,"day_cost":0.0,"id":"E559925","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://kinozal.tv","name":"http://kinozal.tv"},{"state":"SLEEP","created":"2013-07-05","budget":0.0,"updated":"2013-07-06","effector_id":559987,"day_cost":0.0,"id":"E559987","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://torents.ru","name":"http://torents.ru"},{"state":"SLEEP","created":"2013-07-05","budget":0.0,"updated":"2013-07-06","effector_id":560013,"day_cost":0.0,"id":"E560013","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://mail.ru","name":"http://mail.ru"},{"state":"SLEEP","created":"2013-07-05","budget":0.0,"updated":"2013-07-06","effector_id":560081,"day_cost":0.0,"id":"E560081","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://www.azx.ru","name":"http://www.azx.ru"},{"state":"SLEEP","created":"2013-07-08","budget":0.0,"updated":"2013-07-09","effector_id":561524,"day_cost":0.0,"id":"E561524","region":"Самара","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://116км.рф","name":"http://116км.рф"},{"state":"SLEEP","created":"2013-07-08","budget":0.0,"updated":"2013-07-09","effector_id":561553,"day_cost":0.0,"id":"E561553","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://www.seohammer.ru","name":"http://www.seohammer.ru"},{"state":"READY","created":"2013-07-09","budget":0.0,"updated":"2013-07-10","effector_id":562375,"day_cost":0.0,"id":"E562375","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://2ip.ru","name":"http://2ip.ru"},{"state":"READY","created":"2013-07-10","budget":0.0,"updated":"2013-07-11","effector_id":563110,"day_cost":0.0,"id":"E563110","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://kastrylki.ru","name":"http://kastrylki.ru"},{"state":"SLEEP","created":"2013-07-11","budget":0.0,"updated":"2013-08-14","effector_id":563610,"day_cost":0.0,"id":"E563610","region":"Нижний Новгород","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://kastrylki.ru","name":"http://kastrylki.ru"},{"state":"WORK","created":"2013-07-19","budget":5.0001,"updated":"2013-10-21","effector_id":568857,"day_cost":0.14286,"id":"E568857","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://www.chivo.ru","name":"http://www.chivo.ru"},{"state":"WORK,READY","created":"2013-07-24","budget":15.0003,"updated":"2013-10-17","effector_id":571439,"day_cost":0.0,"id":"E571439","region":"Санкт-Петербург","comment":"","top":["yandex_ru"],"pos":["yandex_ru"],"url":"http://www.ya.ru","name":"http://www.ya.ru"},{"state":"SLEEP","created":"2013-08-01","budget":0.0,"updated":"2013-08-02","effector_id":574016,"day_cost":0.0,"id":"E574016","region":"Челябинск","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://www.ya.ru","name":"http://www.ya.ru"},{"state":"READY","created":"2013-08-01","budget":0.0,"updated":"2013-08-02","effector_id":574082,"day_cost":0.0,"id":"E574082","region":"Коломна","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://www.lumiro.net","name":"http://www.lumiro.net"},{"state":"READY","created":"2013-08-01","budget":0.0,"updated":"2013-08-02","effector_id":574084,"day_cost":0.0,"id":"E574084","region":"Ровно","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://lumiro.net","name":"http://lumiro.net"},{"state":"SLEEP","created":"2013-08-01","budget":0.0,"updated":"2013-08-02","effector_id":574088,"day_cost":0.0,"id":"E574088","region":"Киев","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://www.lumiro.net","name":"http://www.lumiro.net"},{"state":"SLEEP","created":"2013-08-07","budget":0.0,"updated":"2013-08-25","effector_id":575936,"day_cost":0.0,"id":"E575936","region":"Мурманск","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://www.mazda-murmansk.ru","name":"http://www.mazda-murmansk.ru"},{"state":"SLEEP,WORK,READY","created":"2013-08-27","budget":10.0002,"updated":"2013-10-21","effector_id":583312,"day_cost":0.31429199999999996,"id":"E583312","region":"Оренбург","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://www.webeffector.ru","name":"http://www.webeffector.ru"},{"state":"SLEEP","created":"2013-08-28","budget":0.0,"updated":"2013-08-29","effector_id":583722,"day_cost":0.0,"id":"E583722","region":"Санкт-Петербург","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://www.seop.ru","name":"http://www.seop.ru"},{"state":"SLEEP","created":"2013-08-28","budget":0.0,"updated":"2013-09-06","effector_id":583870,"day_cost":0.0,"id":"E583870","region":"Санкт-Петербург","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://stroysnabgroup.ru","name":"http://stroysnabgroup.ru"},{"state":"SLEEP,READY,WORK","created":"2013-09-09","budget":150.003,"updated":"2013-10-21","effector_id":589725,"day_cost":4.842954,"id":"E589725","region":"Владимир","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://www.webeffector.ru","name":"http://www.webeffector.ru"},{"state":"READY","created":"2013-09-16","budget":0.0,"updated":"2012-12-03","effector_id":593384,"day_cost":0.0,"id":"E593384","region":"Нижнекамск","comment":"","top":["yandex_ru"],"pos":["yandex_ru","google_ru"],"url":"http://localhost/","name":"http://localhost"},{"state":"READY","created":"2013-09-16","budget":0.0,"updated":"2012-12-03","effector_id":593456,"day_cost":0.0,"id":"E593456","region":"Нижний Тагил","comment":"","top":["yandex_ru"],"pos":["yandex_ru","google_ru"],"url":"http://localhost/","name":"http://localhost"},{"state":"WORK","created":"2013-09-16","budget":20.0004,"updated":"2013-10-21","effector_id":593489,"day_cost":0.6428699999999999,"id":"E593489","region":"Саратов","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://hvalyn.ru","name":"http://hvalyn.ru"},{"state":"READY","created":"2013-09-18","budget":0.0,"updated":"2013-04-18","effector_id":594742,"day_cost":0.0,"id":"E594742","region":"Самара","comment":"","top":["yandex_ru","google_by"],"pos":["yandex_ru","google_by","google_ru"],"url":"http://www.majevent.com","name":"http://majevent.com"},{"state":"SLEEP","created":"2013-09-19","budget":0.0,"updated":"2013-09-19","effector_id":595428,"day_cost":0.0,"id":"E595428","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://magic-stone.net","name":"http://magic-stone.net"},{"state":"READY","created":"2013-09-19","budget":0.0,"updated":"2013-02-28","effector_id":595707,"day_cost":0.0,"id":"E595707","region":"Москва","comment":"","top":["yandex_ru","google_by","google_ru","google_com","google_ua"],"pos":["yandex_ru","google_by","google_ru","google_com","google_ua"],"url":"http://tests.kulichki.com","name":"http://tests.kulichki.com"},{"state":"READY","created":"2013-09-20","budget":0.0,"updated":"2013-02-28","effector_id":596018,"day_cost":0.0,"id":"E596018","region":"Нижний Тагил","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://mytest.org.ru","name":"http://mytest.org.ru"},{"state":"READY","created":"2013-09-23","budget":0.0,"updated":"2013-09-23","effector_id":597732,"day_cost":0.0,"id":"E597732","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://www.exler.ru","name":"http://www.exler.ru"},{"state":"SLEEP","created":"2013-09-30","budget":0.0,"updated":"2013-10-04","effector_id":602165,"day_cost":0.0,"id":"E602165","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://www.slf4j.org","name":"http://www.slf4j.org"},{"state":"READY","created":"2013-10-03","budget":0.0,"updated":"2013-10-03","effector_id":604046,"day_cost":0.0,"id":"E604046","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://lumiro.net","name":"http://lumiro.net"},{"state":"READY","created":"2013-10-04","budget":0.0,"updated":"2013-10-03","effector_id":604718,"day_cost":0.0,"id":"E604718","region":"Ухта","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://lumiro.net","name":"http://lumiro.net"},{"state":"READY","created":"2013-10-16","budget":0.0,"updated":"2013-04-18","effector_id":611665,"day_cost":0.0,"id":"E611665","region":"Ухта","comment":"","top":["yandex_ru","google_by"],"pos":["yandex_ru","google_by","google_ru"],"url":"http://www.majevent.com","name":"http://majevent.com"},{"state":"READY","created":"2013-10-21","budget":0.0,"updated":"2013-10-21","effector_id":614281,"day_cost":0.0,"id":"E614281","region":"Москва","comment":"","top":["yandex_ru","google_ru"],"pos":["yandex_ru","google_ru"],"url":"http://e5.ru","name":"http://e5.ru"}];
	window.projects = new Qstore(DEBUG_DATA);
})