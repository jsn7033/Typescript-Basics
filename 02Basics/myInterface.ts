interface uUser {
    readonly id: number, //read only value
    email: string, 
    userId : number,
    googleId?: string //optional

    startTrial: () => string //1 way of method define

    startPaid(): string //2nd way

    getCoupon(coupon: string) : number
}

interface uUser{
    githubToken: String
}

interface Admin extends uUser{
    role: "admin" | "ta" | "learner"
}

const jsn: uUser = {

    id : 22,
    email: "jsnagi2@gmail.com",
    userId: 234,
    githubToken: "asdjfl231423hjkbk324l23n423kl",
    startTrial() {
        return "trial started"
    },
    startPaid() {
        return "paid started"
    },
    getCoupon(name: "jsn10") {
        return 10
    },

}

jsn.email = "jalkdsjf@gja.com"

jsn.startTrial();