module.exports = async function (context, req) {
    context.res = {
        status: 200,
        body: ["Iron Man", "Thor", "Elektra", "Ant-Man", "Spider-Man"]
    }
}