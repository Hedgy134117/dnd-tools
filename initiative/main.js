var id = 0;

document.getElementById('sort').addEventListener('click', function() {
    var rows = document.getElementsByTagName('tr');
    rows = Array.from(rows);
    rows.shift();
    var playerInits = document.getElementsByClassName('init');
    var playerNames = document.getElementsByClassName('name');
    var players = [ ];
    for (var i = 0; i < playerNames.length; i++) {
        var name = playerNames[i].value;
        var init = Number(playerInits[i].value);
        var id = rows[i].id;
        var object = {};
        object['name'] = name;
        object['init'] = init;
        object['id'] = id
        players.push(object);
    }

    players.sort(function(a, b) {
        return a.init - b.init;
    });
    console.log(players);

    Array.from(document.getElementsByClassName('row')).forEach(element => {
        element.remove();
    });

    for (var i = 0; i < players.length; i++) {
        var initInput = document.createElement('input');
        initInput.value = players[i]['init'];
        initInput.className = 'init';
        initInput.type = 'number';
        var init = document.createElement('td');
        init.appendChild(initInput);
    
        var nameInput = document.createElement('input');
        nameInput.className = 'name';
        nameInput.value = players[i]['name'];
        var name = document.createElement('td');
        name.appendChild(nameInput);
    
        var row = document.createElement('tr');
        row.id = players[i]['id'];
        row.className = 'row';
        row.appendChild(init);
        row.appendChild(name);

        document.getElementById('table').getElementsByTagName('tbody')[0].appendChild(row);
    }
});

document.getElementById('add').addEventListener('click', function() {
    var initInput = document.createElement('input');
    initInput.value = '0';
    initInput.className = 'init';
    initInput.type = 'number';
    var init = document.createElement('td');
    init.appendChild(initInput);

    var nameInput = document.createElement('input');
    nameInput.className = 'name';
    var name = document.createElement('td');
    name.appendChild(nameInput);

    var row = document.createElement('tr');
    id++;
    row.id = id;
    row.className = 'row';
    row.appendChild(init);
    row.appendChild(name);

    document.getElementById('table').getElementsByTagName('tbody')[0].appendChild(row);
});