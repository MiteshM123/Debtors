addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    let url = "https://script.google.com/macros/s/AKfycbx2MkJZgM3EOBnHSDQmJyHIszpM-zcBM4qPpnhxFaJ6kVN60BhDsJeO35mr7U0S4ZGc/exec";

    let response = await fetch(url, { 
        headers: { "Origin": "*" } 
    });

    return new Response(response.body, {
        headers: {
            "Content-Type": "text/html",
            "Access-Control-Allow-Origin": "*"
        }
    });
}
