$(document).ready(function () {
    $("#contentForm").submit(function (e) { 
        e.preventDefault();
        
        const title = $.trim($("#title").val());        
        const brief = $.trim($("#brief").val());
        const content = $.trim($("#content").val());

        $("#titleVal").text("");
        $("#briefVal").text("");
        $("#contentVal").text("");
        let isValidData = true;

        if (title.length > 200) {
            $("#titleVal").text("Title must not exceed 200 chars"); 
            $("#title").focus();
            isValidData = false;
        }
        if (title.length < 10) {
            $("#titleVal").text("Title must be at least 10 chars");
            $("#title").focus();
            isValidData = false;
        } 
        
        if (brief.length > 250) {
            $("#briefVal").text("Brief must not exceed 150 chars"); 
            $("#brief").focus();
            isValidData = false;
        }
        if (brief.length < 30) {
            $("#briefVal").text("Brief must be at least 30 chars");
            $("#brief").focus();
            isValidData = false;
        } 

        if (content.length > 1000) {
            $("#contentVal").text("Content must not exceed 200 chars"); 
            $("#content").focus();
            isValidData = false;
        }
        if (content.length < 50) {
            $("#contentVal").text("Content must be at least 10 chars");
            $("#content").focus();
            isValidData = false;
        } 

        if (isValidData) {
            // Get the current content list        
            var contents = Cookies.get('contents');
            if (contents) {
                contents = JSON.parse(contents);            
            }
            else {
                // Create a content list if not existed
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
            }

            // Save new content
            let newContent = {
                title: title,
                brief: brief,
                content: content,
                createdDate: new Date().toLocaleString('en-GB') 
            };

            contents.push(newContent);
            Cookies.set('contents', JSON.stringify(contents), { expires: 7 });
            console.log(newContent);
            console.log(contents);
            alert("Content added");
            window.location.href = "ViewContent.html";
        }
    });    
});