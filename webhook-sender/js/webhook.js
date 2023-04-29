document.getElementById("send_button").addEventListener("click", (ev) => {
    const message = document.getElementById("message_box_child").value;
    const username = document.getElementById("username_box_child").value;
    const tts = document.getElementById("tts_child").value == "true" ? true : false;
    const url = document.getElementById("url_box_child").value;
    const avatarUrl = document.getElementById("avatar_url_box_child").value;
    const threadName = document.getElementById("thread_name_box_child").value;
    const shouldDelete = document.getElementById("delete_option_child").value == "true" ? true : false;

    fetch(url, {
        method: shouldDelete ? "DELETE" : "POST",
        headers: {
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
        },
        body: JSON.stringify({
            "content": message,
            "tts": tts,
            "username": username,
            "avatar_url": avatarUrl,
            "thread_name": threadName,
            "embeds": null,
            "attachments": []
        }).replace("\"username\":\"\",", "")
    });
});