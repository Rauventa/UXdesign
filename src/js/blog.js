if (screen.width >= 768) {
    $(".blog_txt").text(function(i, text) {
        if (text.length >= 800) {
            text = text.substring(0, 800);
            var lastIndex = text.lastIndexOf(" ");   
            text = text.substring(0, lastIndex) + '...'; 
        }
        $(this).text(text);
    });
} else if (screen.width < 769 && screen.width > 400) {
    $(".blog_txt").text(function(i, text) {
        if (text.length >= 450) {
            text = text.substring(0, 450);
            var lastIndex = text.lastIndexOf(" ");   
            text = text.substring(0, lastIndex) + '...'; 
        }
        $(this).text(text);
    });
} else {
    $(".blog_txt").text(function(i, text) {
        if (text.length >= 150) {
            text = text.substring(0, 150);
            var lastIndex = text.lastIndexOf(" ");   
            text = text.substring(0, lastIndex) + '...'; 
        }
        $(this).text(text);
    });
}
