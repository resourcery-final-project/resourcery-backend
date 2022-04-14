const pool = require('../utils/pool');

module.exports = class Resource {
  id;
  latitude;
  longitude;
  type;
  description;
  userId;
  image;
  hours;
  category;
  available;

  constructor(row) {
    this.id = row.id;
    this.latitude = row.latitude;
    this.longitude = row.longitude;
    this.type = row.type;
    this.description = row.description;
    this.userId = row.user_id;
    this.image = row.image;
    this.category = row.category;
    this.hours = row.hours;
    this.available = row.available;
  }

  static async insert(
    {
      latitude,
      longitude,
      type,
      description,
      category,
      available,
      image,
      hours,
    },
    id
  ) {
    const { rows } = await pool.query(
      `
          INSERT INTO
            resources (latitude, longitude, type, description, hours, category, user_id, available, image)
          VALUES
            ($1, $2, $3, $4, $5, $6, $7, $8, $9)
          RETURNING
            *
          `,
      [
        latitude,
        longitude,
        type,
        description,
        hours,
        category,
        id,
        available,
        image,
      ]
    );
    return new Resource(rows[0]);
  }

  static async findAll() {
    const { rows } = await pool.query('SELECT * FROM resources');
    return rows.map((row) => new Resource(row));
  }
};
