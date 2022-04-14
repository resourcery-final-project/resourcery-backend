const pool = require('../utils/pool');

module.exports = class FruitTree {
  id;
  latitude;
  longitude;
  type;
  description;
  permission;
  userId;

  constructor(row) {
    this.id = row.id;
    this.latitude = row.latitude;
    this.longitude = row.longitude;
    this.type = row.type;
    this.description = row.description;
    this.permission = row.permission;
    this.userId = row.user_id;
  }

  static async insert(
    { latitude, longitude, type, description, permission },
    id
  ) {
    const { rows } = await pool.query(
      `
          INSERT INTO
            fruit_trees (latitude, longitude, type, description, permission, user_id)
          VALUES
            ($1, $2, $3, $4, $5, $6)
          RETURNING
            *
          `,
      [latitude, longitude, type, description, permission, id]
    );
    return new FruitTree(rows[0]);
  }
};
