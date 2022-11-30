const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const Products = require("./db/Products");
const app = express();


app.use(express.json());
app.use(cors());


app.post("/register", async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    resp.send(req.result);
});



app.post("/login", async (req, resp) => {
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            resp.send(user)
        } else {
            resp.send({ result: "no user found" })
        }
    } else { resp.send({ result: "no user found" }) }

});



app.post("/add-product", async (req, resp) => {
    let product = new Products(req.body);
    let result = await product.save();
    resp.send(result);
});

app.get('/products', async (req, resp) => {
    const products = await Products.find();
    if ((await products).length > 0) {
        resp.send(products)
    } else {
        resp.send({ result: "NO Product Found" })
    }
});

app.delete('/product/:id', async (req, resp) => {
    let result = await Products.deleteOne({ _id: req.params.id });
    resp.send(result)

}),

    app.get("/product/:id", async (req, resp) => {
        let result = await Products.findOne({ _id: req.params.id })
        if (result) {
            resp.send(result)
        } else {
            resp.send({ "result": "No Result Found.." })
        }
    })

app.put("/product/:id", async (req, resp) => {
    let result = await Products.updateOne(
        { _id: req.params.id },
        { $set: req.body }
    )
    resp.send(result)
})

app.get("/search/:key", async (req, resp) => {
    let result = await Products.find({
        "$or": [

            { name: { $regex: req.params.key } },
            { company: { $regex: req.params.key } },
            { catogary: { $regex: req.params.key } }

        ]
    });
    resp.send(result)
})

app.listen(5000);

