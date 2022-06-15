function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById('name').value;

  if (Client.checkInput(formText) === 0) {
    console.log('::: Form Submitted :::');

    document.getElementById('results').innerHTML = 'Loading...';

    fetch('http://localhost:8080/search')
      .then((res) => res.json())
      .then(function (res) {
        const formdata = new FormData();
        formdata.append('key', res.key);
        formdata.append('url', formText);
        formdata.append('lang', 'auto');

        const requestOptions = {
          method: 'POST',
          body: formdata,
          redirect: 'follow'
        };

        const response = fetch('https://api.meaningcloud.com/sentiment-2.1', requestOptions)
          .then((response) => ({
            status: response.status,
            body: response.json()
          }))
          .then(({status, body}) =>
            body.then((data) => {
              console.log('::: Result Received :::');
              Client.updateDOM({
                'Score Tag': data.score_tag,
                Agreement: data.agreement,
                Subjectivity: data.subjectivity,
                Confidence: data.confidence,
                Irony: data.irony
              });
            })
          )
          .catch((error) => console.log('error', error));
      });
  }
}

module.exports = {
  handleSubmit
};
