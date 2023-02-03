var User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.users_list = function(req, res) {

    const getUsers = async () => {
        try{
            const users = await User.find().lean();
            var alert = req.cookies.alert
            res.clearCookie('alert')
                .render('list/users',{user:req.user, usersList: users, alert: alert});
        }catch(error){
            console.log(error);
        }
    }

    getUsers()
};


exports.user_add_get = function(req, res) {
    var alert = req.cookies.alert
    res.clearCookie('alert')
        .render('add_forms/add_user', {user:req.user, alert: alert})
};


exports.user_add_post = function (req, res) {
    var alert = new Object();

    bcrypt.hash(req.body.password, 10, function (err, PasswordHash) {
        if (err) {
            res.json({ error: 'blad funkcji haszujacej' })
        }
        let data = {
            name: req.body.name,
            surname: req.body.surname,
            login: req.body.login,
            password: PasswordHash,
            email: req.body.email,
        };
        addUser(data)
    })

    const addUser = async (userData) => {
        try {
            if (await User.findOne({ login: userData.login })) {
                alert.status = "danger";
                alert.message = "Użytkownik o takim loginie już istnieje";
                res.cookie('alert', alert)
                    .redirect("/users/add")
            } else {
                const user = new User(userData);
                user.save();
                alert.status = "success";
                alert.message = "Zarejestrowano nowego użytkownika";
                res.cookie('alert', alert)
                    .redirect("back")
            }
        } catch (error) {
            console.log(error);
        }
    }
};


exports.user_edit_post = function(req, res) {

    var alert = new Object();

    var id = req.params.id;

    const updateUser = async () => {
        try{
            await User.findByIdAndUpdate(id, req.body)
            alert.status = "success";
            alert.message = "Pomyślnie edytowano użytkownika";
            res.cookie('alert', alert)
                .redirect("/users/list/")
        }catch(error){
            console.log(error)
        }
    }
    updateUser();
}

exports.user_edit_get = function(req, res) {

    var id = req.params.id;
    const getUser = async () => {
        try{
            const user = await User.findOne({_id:id}).lean()
            var alert = req.cookies.alert
            res.clearCookie('alert')
                .render('edit_forms/edit_user', {user:req.user, id:id ,item: user, alert: alert });
        }catch(error){
            console.log(error)
        }
    }
    getUser();
}




exports.user_delete_post = function(req, res) {
    var alert = new Object();
    id = req.body.user_id;

    const deleteUser = async () => {
        try{
            await User.findByIdAndDelete(id);
            alert.status = "success";
            alert.message = "Usunięto użytkownika";
            res.cookie('alert', alert)
                .redirect("/users/list/")
        }catch(error){
            console.log(error);
        }
    }

    deleteUser();
};


exports.user_login_get = function(req, res) {
    var alert = req.cookies.alert
    res.clearCookie('alert')
        .render('login',{alert: alert});
};

exports.user_login_post = function(req, res) {

    var login = req.body.login;
    var password = req.body.password;

    
    const loginUser = async () => {
        var alert = {
            status: "",
            message: ""
        }
        try{
            var user = await User.findOne({login:login});
            if(user){
                bcrypt.compare(password, user.password, function(err,result){
                    if(err){
                        res.json({error: err})
                    }
                    if(result){
                        let token = jwt.sign({ id:user._id, name: user.name, isSuper: user.isSuper}, 'kodSzyfrujacy', { expiresIn: '1h' })

                        alert.status = "success";
                        alert.message = "Witaj, " + user.name;
                        res.cookie('token', token)
                        res.cookie('alert', alert)
                            .redirect('/pictures/list')
                    }
                    else{
                        alert.status = "danger";
                        alert.message = "Nieprawidłowe dane logowania";
                        res.cookie('alert', alert)
                                .redirect("/users/login")
                    }
                })
            }else{
                alert.status = "danger";
                        alert.message = "Nieprawidłowe dane logowania";
                res.cookie('alert', alert)
                        .redirect("/users/login")
            }
        }catch(error){
            console.log(error);
        }
    }

    loginUser();
};

exports.user_logout_get = function(req, res) {

    var alert = new Object();

    const logoutUser = async () => {
        try{
            res.clearCookie('token')
            
            alert.status = "success";
            alert.message = "Wylogowano";
            res.cookie('alert', alert)
                .redirect("/pictures/list")
        }catch(error){
            alert.status = "danger";
            alert.message = "Nastąpił błąd podczas wylogowania";
            res.cookie('alert', alert)
                .redirect("/pictures/list")
            console.log(error);
        }
    }

    logoutUser();
};


exports.user_addsuper_get = function(req, res) {
    var alert = req.cookies.alert
    res.clearCookie('alert')
        .render('add_forms/add_user', {user:req.user, admin: "Administratora", alert: alert});
};

exports.user_addsuper_post = function (req, res) {
    var alert = new Object();

    bcrypt.hash(req.body.password, 10, function (err, PasswordHash) {
        if (err) {
            res.json({ error: 'blad funkcji haszujacej' })
        }
        let data = {
            name: req.body.name,
            surname: req.body.surname,
            login: req.body.login,
            password: PasswordHash,
            email: req.body.email,
            isSuper: true
        };
        addSuperUser(data)
    })


    const addSuperUser = async (userData) => {
        try {
            if (await User.findOne({ login: userData.login })) {
                alert.status = "danger";
                alert.message = "Użytkownik o takim loginie już istnieje";
                res.cookie('alert', alert)
                    .redirect("/users/addsuper")
            } else {
                const user = new User(userData);
                user.save();
                alert.status = "success";
                alert.message = "Dodano nowego admina";
                res.cookie('alert', alert)
                    .redirect("/users/list/")
            }

        } catch (error) {
            console.log(error);
        }
    }



};


console.log("userController READY")