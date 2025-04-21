const con = require('../../config/dbconfig')
const { table } = require('./heroDao')

const powerDao = {
    table: 'power',

    findHeroByPower: (res, table, power)=> {
        con.execute(
                `SELECT h.hero_id, h.hero.name, h.first_name,
                h..last_name, h.alias, f.franchise, s.species, 
                h.place_of_origin, h.first_app, h.alignment, h.img_url
                FROM hero h
                JOIN franchise f USING (franchise_id)
                JOIN species s USING (species_id)
                JOIN hero_to_power hp ON h.hero_id = hp.hero_id
                JOIN power p ON hp.power_id = p.power_od
                WHERE p.power = '${power}' 
                ORDER BY h.hero_id;` ,
                    (error, rows)=> {
                        if(!error) {
                            res.json(rows)
                        } else {
                            console.groupCollapsed('DAD ERROR: ${table}', error)
                        }    
                }
    
    
            )
    
    }

}

module.exports = powerDao