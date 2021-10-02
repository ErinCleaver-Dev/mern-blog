module.exports  = {
    signup : (req, res) => {
        const {name, email, password} = req.body;
        console.log(req)
        res.json ({
            user: {name, email, password},
        })

    }
}