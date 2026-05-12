async function getAllBook() {
  try {
    const get_data = await fetch("http://localhost:3000/perpustakaan/book/all");
    const result = await get_data.json();
    if (!result.ok) {
      return result;
    }
    return result;
  } catch (err) {
    return err;
  }
}

$(document).ready(async function() {
  const response = await getAllBook();
  if (response.data.length === 0) {
    $("#table-body").append(`
      <tr><td colspan='5'>${response.message}<td></tr>
    `);
  } else {
    for (let i = 0; i < response.data.length; i++) {
      $("#table-body").append(`
        <tr>
          <td>${i + 1}.</td>
          <td>${response.data[i].judul}</td>
          <td>${response.data[i].penulis}</td>
          <td>${response.data[i].status}</td>
          <td></td>
        </tr>
      `);
    }
  }
});
