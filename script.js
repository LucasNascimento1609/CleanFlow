const database = [
    {
        email: 'admin@fatec.br',
        senha: 'admin@123'
    }
];

function createDatabase() {
    localStorage.setItem('database', JSON.stringify(database));
};

function getDatabase() {
    const database = localStorage.getItem('database');
    const result = JSON.parse(database);
    return result;
};

function addUser(newUser) {
    const database = getDatabase();
    database.push(newUser);
    localStorage.setItem('database', JSON.stringify(database));
};

function findUser() {
    const email = document.getElementById('exampleInputEmail1').value;
    const db = getDatabase();
    const userFound = db.find((user => user.email === email));
    return userFound;
}

function loginUser() {
    const userFound = findUser();
    const senha = document.getElementById('exampleInputSenha').value;
    if (userFound) {
        if (userFound.senha !== senha) {
            alert('Senha incorreta!');
        } else {
            alert('Usuário logado com sucesso!');
        };
    } else {
        alert('Usuário inexistente!');
    };
};

function registerUser() {
    const userFound = findUser();
    if (userFound) return alert('Usuário já registrado!');
    
    const email = document.getElementById('exampleInputEmail1').value;
    const senha = document.getElementById('exampleInputSenha').value;
    const newUser = {
        email,
        senha,
    };

    addUser(newUser);
    alert('Novo usuário registrado!')
};

createDatabase();

const inputEmail = document.getElementById('exampleInputEmail1');
const inputSenha = document.getElementById('exampleInputSenha');
inputSenha.addEventListener('keydown', ({ key }) => {
    if (key === 'Enter') {
        loginUser();
    };
});
inputEmail.addEventListener('keydown', ({ key }) => {
    if (key === 'Enter') {
        loginUser();
    };
});