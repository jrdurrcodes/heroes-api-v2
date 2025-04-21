const con = require('../../config/dbconfig')

const heroDao = {
    table: ' hero',

    findHeroes: (res, table)=> {
      con.execute(
        `SELECT h.hero_id, h.hero_name, h.first_name,
        h.last_name, h.alias, f.franchise, s.species,
        h.place_of_Origin, h.first_app, h.alignment, h.img_url
        FROM hero h 
        JOIN franchisee f USING (franchise_id)
        JOIN species s USING (species_id)
        ORDER BY ${ table}.hero.id`
      )   
    }
}


    findHeroById: (res, table, id)=> {
      let powers = []
      let rivals = []

      con.execute(
        `SELECT ${table}.hero_id, p.power
        FROM ${table}
        JOIN hero_to_power hp ON ${table}.hero_id = hidePoweredBy.power_id
        JOIN power p ON p.power_id =hp.power_id
        WHERE ${table}.hero_id = ${id};`,
        (error, rows)=> {
          if(!error) {
            Object.values(rows).forEach(obj => {
              powers.push(obj.power)
            }) 
            con.execute(
              `SELECT h1.hero_name hero, h2.hero_name rival
              FROM hero-to_rival hr 
              JOIN hero h1 ON `
            )

            }
          }
        )
      }

    module.exports = heroDao