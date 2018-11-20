var friendsList = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsList)
    })
    app.post("/api/friends", function (req, res) {
        console.log
        var differenceArray = []
        var totals = []
        var counter = 0
        runLoops()
        function runLoops() {
            console.log("It Works!")
            if (counter < friendsList.length) {
                differenceArray = []
                var sum = 0
                for (let i = 0; i < req.body.scores.length; i++) {
                    var score1 = parseInt(req.body.scores[i])
                    var score2 = parseInt(friendsList[counter].scores[i])
                    var difference = Math.abs(score1 - score2)

                    differenceArray.push(difference)
                    
                }
                for (let i = 0; i < differenceArray.length; i++) {
                    sum += differenceArray[i]

                }
                totals.push(sum)
                counter++
                runLoops()

            } else {
                console.log(totals)
                var m = Math.min(...totals)
                var match = totals.indexOf(m)
                friendsList.push(req.body)
                res.send(friendsList[match])
            }
        }






        



    })
}