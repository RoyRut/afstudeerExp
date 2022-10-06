const sql = require("mssql");

console.log(sql);

async () => {
  try {
    // make sure that any items are correctly URL encoded in the connection string
    await sql.connect(
      "Server=localhost,3000;Database=DummyData;User Id=sa;Password=P@55w0rd;Encrypt=true"
    );
    const result = await sql.query`select * from mytable where id = ${value}`;
    console.dir(result);
  } catch (err) {
    // ... error checks
  }
};
