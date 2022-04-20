const pool = require('../utils/pool');

module.exports = class Resource {
  id;
  latitude;
  longitude;
  title;
  description;
  userId;
  image;
  hours;
  type;
  available;
  phone;

  constructor(row) {
    this.id = row.id;
    this.latitude = row.latitude;
    this.longitude = row.longitude;
    this.title = row.title;
    this.description = row.description;
    this.userId = row.user_id;
    this.image = row.image;
    this.type = row.type;
    this.hours = row.hours;
    this.available = row.available;
    this.phone = row.phone;
  }

  static async insert(
    {
      latitude,
      longitude,
      title,
      description,
      type,
      available,
      image,
      hours,
      phone,
    },
    id
  ) {
    const { rows } = await pool.query(
      `
          INSERT INTO
            resources (latitude, longitude, title, description, hours, type, user_id, available, image, phone)
          VALUES
            ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
          RETURNING
            *
          `,
      [
        latitude,
        longitude,
        title,
        description,
        hours,
        type,
        id,
        available,
        image,
        phone,
      ]
    );
    return new Resource(rows[0]);
  }

  static async findAll() {
    const { rows } = await pool.query('SELECT * FROM resources');
    return rows.map((row) => new Resource(row));
  }

  static async findById(id) {
    const { rows } = await pool.query(
      `
      SELECT
        *
      FROM
        resources
      WHERE
        id=$1
      `,
      [id]
    );
    return new Resource(rows[0]);
  }

  static async deleteById(id) {
    const { rows } = await pool.query(
      `
      DELETE FROM
        resources
      WHERE
        id=$1
      RETURNING
        *
      `,
      [id]
    );
    return new Resource(rows[0]);
  }

  static async updateById(id, attributes) {
    const existingResource = await Resource.findById(id);
    const updatedAttributes = { ...existingResource, ...attributes };
    const {
      latitude,
      longitude,
      title,
      description,
      hours,
      type,
      available,
      image,
      phone,
    } = updatedAttributes;
    const { rows } = await pool.query(
      `
      UPDATE
        resources
      SET
        latitude=$1,
        longitude=$2,
        title=$3,
        description=$4,
        hours=$5,
        type=$6,
        available=$7,
        image=$8,
        phone=$9
      WHERE
        id=$10
      RETURNING
        *
      `,
      [
        latitude,
        longitude,
        title,
        description,
        hours,
        type,
        available,
        image,
        phone,
        id,
      ]
    );
    return new Resource(rows[0]);
  }

  static async findByUserId(id) {
    const { rows } = await pool.query(
      `
      SELECT
        *
      FROM
        resources
      WHERE
        user_id=$1
      `,
      [id]
    );
    if (!rows[0]) return null;
    return rows.map((row) => new Resource(row));
  }
};
