const pool = require('../utils/pool');

module.exports = class Resource {
  id;
  latitude;
  longitude;
  address;
  title;
  description;
  userId;
  image;
  hours;
  type;
  phone;

  constructor(row) {
    this.id = row.id;
    this.latitude = row.latitude;
    this.longitude = row.longitude;
    this.address = row.address;
    this.title = row.title;
    this.description = row.description;
    this.userId = row.user_id;
    this.image = row.image;
    this.type = row.type;
    this.hours = row.hours;
    this.phone = row.phone;
  }

  static async insert(
    {
      latitude,
      longitude,
      address,
      title,
      description,
      type,
      image,
      hours,
      phone,
    },
    id
  ) {
    const { rows } = await pool.query(
      `
          INSERT INTO
            resources (latitude, longitude, address, title, description, hours, type, user_id, image, phone)
          VALUES
            ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
          RETURNING
            *
          `,
      [
        latitude,
        longitude,
        address,
        title,
        description,
        hours,
        type,
        id,
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
      address,
      title,
      description,
      hours,
      type,
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
        image=$7,
        phone=$8,
        address=$9
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
        image,
        phone,
        address,
        id,
      ]
    );
    return new Resource(rows[0]);
  }

  static async findByType(type) {
    const { rows } = await pool.query(
      `
      SELECT
        *
      FROM
        resources
      WHERE
        type=$1
      `,
      [type]
    );
    return rows.map((row) => new Resource(row));
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
