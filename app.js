window.onload = function() {
    const canvas = document.querySelector("canvas");
    if (canvas && canvas.getContext) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
            alert("Le navigateur supporte le canvas");
        } else {
            alert("Le navigateur ne supporte pas le canvas");
        }
    }
};
