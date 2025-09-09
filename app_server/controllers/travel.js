/* GET travel view */
const travel = (req, res) => {
    res.render('trave', { title: 'Travlr Getaways' });
};

module.exports = {
    travel
};