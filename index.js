const url = "https://jsonplaceholder.typicode.com/users";
async function result(){
    const response = await fetch(url); //response data
    const data = await response.json(); // get data
    const table = document.querySelector("table"); // const table
    await data.forEach(element => {
        if(element.id <= 5){   // lop oject
        const {id,name,email,phone,website} = element; // make De-structuring 
        table.innerHTML += `
        <table>
            <tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${email}</td>
                <td>${phone}</td>
                <td>${website}</td>
            </tr>
        </table>
        `;
    }
    });
}
result();