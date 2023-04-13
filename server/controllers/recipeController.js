//  get page / homepage 

exports.homepage = async(req, res) => {
    res.render('index', {title:"Good Eats-Food Blog"});
}