const formDOM = document.querySelector('.form-section');
const threadSectionDOM = document.querySelector('.thread-section');
const inputTextDOM = document.getElementById("inputTitle");
const inputContentDOM = document.getElementById("inputContent");
let inputText = '';
let inputContentText = '';

async function getAllThreads () {
  try {
    let allThreads = await axios.get('/api/v1/threads/');
    let {data} = allThreads;
    allThreads = data.map((thread) => {
      const {title, content} = thread;
      return `
        <div class="single-thread">
          <h3>[${title}]</h3>
          <div class="content-card">
            <p>${content}</p>
          </div>
        </div>
      `;
    }).join('');
    threadSectionDOM.innerHTML = allThreads;
  } catch (err) {
    console.error(err);
  }
}

getAllThreads();

inputTextDOM.addEventListener('change', (e) => {
  inputText = e.target.value;
});

inputContentDOM.addEventListener('change', (e) => {
  inputContentText = e.target.value;
});

formDOM.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (inputText && inputContentText) {
    try {
      await axios.post('/api/v1/threads/', {
        title: inputText,
        content: inputContentText
      });
      getAllThreads();
    } catch (err) {
      console.error(err);
    }
  }
})