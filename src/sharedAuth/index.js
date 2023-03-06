const domains = [
  `${process.env.REACT_APP_CUSTOMER}`,
  `${process.env.REACT_APP_PROVIDER}`,
  "http:localhost:3000",
  "http:localhost:3001",
  "http:localhost:3002",
];

window.addEventListener("message", messageHandler, false);

function messageHandler(event) {
  if (!domains.includes(event.origin)) return;

  const { action, key, value } = event.data;

  if (action === "save") {
    localStorage.setItem("key", JSON.stringify(value));
  } else if (action === "get") {
    event.source.postMessage(
      {
        action: "returnData",
        key,
        // JSON.parse(localStorage.getItem(key))
      },
      "*"
    );
  }
}

const data = "HELLO";

const iframe = (iframe = document.getElementById("iframe-id"));
iframe.contentWindow.postMessage({
  action: "save",
  key: "keyForData",
  value: data,
});

// const iframe = iframe = document.getElementById('iframe-id')
// iframe.contentWindow.postMessage({
//   action: 'get',
//   key: 'keyForData'
// })

window.addEventListener("message", messageHandler, false);

// function messageHandler(event) {
//   const { action, key, value } = event.data
//   if (action == 'returnData'){
//     useData(key, value)
//   }
// }
