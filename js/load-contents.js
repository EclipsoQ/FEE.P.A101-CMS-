$(document).ready(function () {
    var dummyContents = [
            { 
                title: "Lorem ipsum dolor sit amet", 
                brief: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                content: "",
                createdDate: "2024/10/11 20:42:18"
            },
            {
                title: "At vero eos et accusamus et iusto",
                brief: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo",
                content: "",
                createdDate: "2024/12/02 09:27:56"
            },
            {
                title: "Sed ut perspiciatis unde omnis",
                brief: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
                content: "",
                createdDate: "2024/10/23 22:42:54"
            }
        ];
        Cookies.set('contents', JSON.stringify(dummyContents), { expires: 7 });

    let contents = JSON.parse(Cookies.get('contents'));
    let i = 1;
    contents.forEach(content => {
        let row = $('<tr></tr>');
        let titleData = $('<td></td>').text(content.title);
        let briefData = $('<td></td>').text(content.brief);
        let dateData = $('<td></td>').text(content.createdDate);
        row.append($('<td></td>').text(i));
        row.append(titleData);
        row.append(briefData);
        row.append(dateData);
        $("#contentTable").append(row);
        i++;
    });
});