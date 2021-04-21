const {db,Center,Course,Season,Teacher,Batch} = require('./model')

const seed = async function () {
    try {
        db.sync({alter : true})
        await Center.bulkCreate([
            {id : 'WA' , name : 'wasseypur' ,city : 'Dhanbad'},
            {id : 'NB' , name : 'Naya bazar' ,city : 'Dhanbad'},
            {id : 'PB' , name : 'Purana Bazar' ,city : 'Dhanbad'},
            {id : 'BM' , name : 'Bank more' ,city : 'Dhanbad'},
            {id : 'SD' , name : 'Saraidhela' ,city : 'Dhanbad'}
        ], {
            ignoreDuplicates : true
        })
        await Season.bulkCreate([
            {id : 'S', name : 'summer'},
            {id : 'W', name : 'winter'},
            {id : 'F', name : 'fall'},
            {id : 'P', name : 'spring'}
        ], {
            ignoreDuplicates : true
        })

        await Course.bulkCreate([
            {id: 'LX', name : 'Launchpad'},
            {id: 'CX', name : 'CRUX'},
            {id: 'AD', name : 'Android Development'},
            {id: 'WD', name : 'Web development'},
            {id: 'IP', name : 'Interview Preparation'},
        ], {
            ignoreDuplicates : true
        })

        

    }catch(e) {
        console.log(e);
    }
}

seed();